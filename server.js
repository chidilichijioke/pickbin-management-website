// server.js
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
import multer from "multer";
import path from "path";
import fs from "fs";

dotenv.config({ path: ".env.local" });

const app = express();
const port = 5000;
const uri = process.env.MONGODB_URI;

if (!uri) throw new Error("❌ Missing MONGODB_URI in .env.local");

let db;

// ===== MongoDB Connection =====
async function connectDB() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db("pickbin");
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
  }
}

app.use(cors());
app.use(express.json());

// ===== File Upload Setup (multer) =====
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// ===== Nodemailer Setup =====
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ===== API Route =====
app.post("/api/pickup", upload.single("wastePhoto"), async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      city,
      state,
      pickupDate,
      wasteType,
      additionalNotes,
      paymentMethod,
    } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !pickupDate ||
      !wasteType ||
      !paymentMethod
    ) {
      return res
        .status(400)
        .json({ success: false, error: "Missing required fields" });
    }

    // Save photo path if uploaded
    let wastePhotoUrl = null;
    if (req.file) {
      wastePhotoUrl = `/uploads/${req.file.filename}`;
    }

    // Save to MongoDB
    const result = await db.collection("pickups").insertOne({
      name,
      email,
      phone,
      address,
      city,
      state,
      pickupDate,
      wasteType,
      additionalNotes: additionalNotes || null,
      paymentMethod,
      wastePhotoUrl,
      createdAt: new Date(),
    });

// Send email notification
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_TO,
  subject: `📦 New Pickup Scheduled by ${name}`,
  html: `
    <h2>New Pickup Scheduled</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}, ${city}, ${state}</p>
    <p><strong>Pickup Date:</strong> ${pickupDate}</p>
    <p><strong>Waste Type:</strong> ${wasteType}</p>
    <p><strong>Notes:</strong> ${additionalNotes || "None"}</p>
    <p><strong>Payment Method:</strong> ${paymentMethod}</p>
    <p><strong>Reference ID:</strong> ${result.insertedId}</p>
    ${
      wastePhotoUrl
        ? `<p><strong>Waste Photo:</strong></p><img src="cid:wastephoto" style="max-width:400px; border-radius:8px;" />`
        : "<p><strong>Waste Photo:</strong> None</p>"
    }
  `,
  attachments: wastePhotoUrl
    ? [
        {
          filename: req.file.filename,
          path: req.file.path,
          cid: "wastephoto", // same as used in <img src="cid:...">
        },
      ]
    : [],
};


    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, id: result.insertedId });
  } catch (err) {
    console.error("❌ Error in /api/pickup:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ===== Static Files (to serve uploaded images) =====
app.use("/uploads", express.static(uploadDir));

// ===== Start Server =====
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
  connectDB();
});
