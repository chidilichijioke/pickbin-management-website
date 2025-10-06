'use client';

import * as React from 'react';
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'react-hot-toast';

type PickupFormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pickupDate: string;
  wasteType: string;
  additionalNotes?: string;
  paymentMethod: 'Cash' | 'Bank Transfer' | 'Bitcoin';
  wastePhoto?: File | null;
};

type SchedulePickupProps = {
  onNavigateHome: () => void;
};

export function SchedulePickup({ onNavigateHome }: SchedulePickupProps) {
  const [form, setForm] = useState<PickupFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pickupDate: '',
    wasteType: '',
    additionalNotes: '',
    paymentMethod: 'Cash',
    wastePhoto: null,
  });

  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState<string | null>(null);

  // handle normal inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // handle file separately
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm({ ...form, wastePhoto: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setConfirmation(null);

    try {

      // Prepare payload — only include the fields required by the email function
      const payload = {
        name: form.name,
        email: form.email,
        address: `${form.address}, ${form.city}, ${form.state}`,
        message: `Preferred pickup date: ${form.pickupDate}\nWaste type: ${form.wasteType}\nPayment: ${form.paymentMethod}\nNotes: ${form.additionalNotes || ''}`
      };

  const base = typeof import.meta !== 'undefined' ? (import.meta.env?.VITE_FUNCTIONS_BASE || '') : '';
  const endpoint = (base || '') + '/.netlify/functions/send-pickup';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Pickup request sent! We will contact you shortly.');
        setConfirmation('Pickup scheduled successfully!');
        setForm({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          pickupDate: '',
          wasteType: '',
          additionalNotes: '',
          paymentMethod: 'Cash',
          wastePhoto: null,
        });
      } else {
        toast.error(data?.error || 'Something went wrong!');
      }
    } catch (error) {
      toast.error('Network error!');
    } finally {
      setLoading(false);
    }
  };

  if (confirmation) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <div className="bg-green-50 border border-green-200 rounded-2xl shadow-lg p-6 max-w-md text-center">
          <h2 className="text-xl font-bold text-green-700 mb-2">Success</h2>
          <p className="text-green-600 font-medium">{confirmation}</p>
        </div>
        <Button
          onClick={onNavigateHome}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold"
        >
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1
        className="text-3xl font-bold mb-8 text-center"
        style={{ fontFamily: 'Arbutus Slab, serif' }}
      >
        Schedule Pickup
      </h1>

      <form
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl space-y-6"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required />
          <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
          <Input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required />
          <Input name="address" value={form.address} onChange={handleChange} placeholder="Address" required />
          <Input name="city" value={form.city} onChange={handleChange} placeholder="City" required />
          <Input name="state" value={form.state} onChange={handleChange} placeholder="State" required />
          <Input type="date" name="pickupDate" value={form.pickupDate} onChange={handleChange} required />

          <select
            name="wasteType"
            value={form.wasteType}
            onChange={handleChange}
            required
            className="w-full border-gray-200 rounded-xl p-3"
          >
            <option value="">Select Waste Type</option>
            <option value="Residential Pickup">Residential Pickup</option>
            <option value="Commercial Waste">Commercial Waste</option>
            <option value="Recycling Services">Recycling Services</option>
            <option value="Bulk Removal">Bulk Removal</option>
          </select>
        </div>

        {/* File Upload */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Upload Waste Photo (Optional)</label>
          <input
            type="file"
            name="wastePhoto"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border-gray-200 rounded-xl p-3"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Additional Notes (Optional)</label>
          <textarea
            name="additionalNotes"
            value={form.additionalNotes}
            onChange={handleChange}
            placeholder="Any extra information..."
            className="w-full border-gray-200 rounded-xl p-3"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Payment Method (Pay on Pickup)</label>
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            className="w-full border-gray-200 rounded-xl p-3"
          >
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Bitcoin">Bitcoin</option>
          </select>
        </div>

        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold" disabled={loading}>
          {loading ? 'Scheduling...' : 'Schedule Pickup'}
        </Button>
      </form>

      <Button
        onClick={onNavigateHome}
        variant="ghost"
        className="mt-10 text-green-600 underline"
      >
        Back to Home
      </Button>
    </div>
  );
}
