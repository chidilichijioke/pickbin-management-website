'use client';

import { motion } from 'motion/react';
import { Shield, ArrowLeft, Mail, Calendar } from 'lucide-react';
import { Button } from './ui/button';

interface PrivacyPolicyPageProps {
  onNavigateHome: () => void;
}

export function PrivacyPolicyPage({ onNavigateHome }: PrivacyPolicyPageProps) {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "We may collect the following categories of data:",
        "• Personal Information: Name, phone number, email, address, payment details.",
        "• Usage Data: App activity, pickup history, preferences.",
        "• Device & Technical Data: IP address, device type, location data (if enabled)."
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "We use your data to:",
        "• Provide and manage waste pickup services.",
        "• Process payments and send receipts.",
        "• Improve service quality and user experience.",
        "• Communicate updates, offers, or promotions (optional, with consent).",
        "• Comply with legal and regulatory requirements."
      ]
    },
    {
      title: "3. Sharing of Data",
      content: [
        "We do not sell your data. We may share information with:",
        "• Service Providers: Delivery partners, payment processors.",
        "• Legal Authorities: When required by law or to enforce our terms.",
        "• Business Transfers: In case of mergers, acquisitions, or restructuring."
      ]
    },
    {
      title: "4. Data Security",
      content: [
        "We implement strict security measures, including encryption and access controls, to protect your data."
      ]
    },
    {
      title: "5. Data Retention",
      content: [
        "We keep your data only as long as necessary to provide services and comply with legal obligations."
      ]
    },
    {
      title: "6. Your Rights",
      content: [
        "Depending on your jurisdiction, you may have the right to:",
        "• Access, correct, or delete your personal data.",
        "• Opt out of marketing communications.",
        "• Request data portability.",
        "",
        "Requests can be sent to privacy@pickandbin.com."
      ]
    },
    {
      title: "7. Cookies & Tracking",
      content: [
        "Our website and app may use cookies to improve functionality and personalize content. You can manage cookies in your browser settings."
      ]
    },
    {
      title: "8. Updates to Policy",
      content: [
        "We may update this Privacy Policy from time to time. Updates will be posted on our website/app, and continued use of our services constitutes acceptance."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={onNavigateHome}
            className="font-montserrat hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold font-arbutus text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-600 font-montserrat">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Effective Date: January 15, 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <p className="text-gray-700 font-montserrat leading-relaxed mb-0">
                At Pick&Bin, we respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.
              </p>
            </div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  className="bg-white"
                >
                  <h2 className="text-2xl font-semibold text-gray-900 font-montserrat mb-6">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p 
                        key={pIndex} 
                        className="text-gray-700 font-montserrat leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-green-50 border border-green-200 rounded-xl p-8 mt-16"
            >
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 font-montserrat">
                  Questions About This Policy?
                </h3>
              </div>
              <p className="text-gray-700 font-montserrat leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or how we handle your personal information, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-montserrat">
                  Contact Privacy Team
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 font-montserrat">
                  privacy@pickandbin.com
                </Button>
              </div>
            </motion.div>

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="border-t border-gray-200 pt-8 mt-16 text-center"
            >
              <p className="text-gray-500 font-montserrat text-sm">
                This Privacy Policy was last updated on January 15, 2025. 
                We may update this policy from time to time to reflect changes in our practices or applicable laws.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}