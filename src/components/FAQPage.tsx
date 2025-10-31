'use client';

import { motion } from 'motion/react';
import { Search, HelpCircle, ArrowLeft, Mail } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';

interface FAQPageProps {
  onNavigateHome: () => void;
}

export function FAQSection({ onNavigateHome }: FAQPageProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      id: 'what-is-pickbin',
      question: 'What is Pick&Bin?',
      answer: 'Pick&Bin is an on-demand waste management and recycling service that allows individuals, households, and businesses to schedule pickups for their waste, recyclables, or bulk items in a safe, convenient, and eco-friendly way.',
      featured: true
    },
    {
      id: 'how-it-works',
      question: 'How does the service work?',
      answer: 'It\'s simple: 1) Schedule a pickup via our website, 2) Our verified waste management partners arrive at your location at the scheduled time, 3) Waste is collected, sorted, and disposed of responsibly or sent to recycling facilities.',
      featured: true
    },
    {
      id: 'pricing',
      question: 'How much does it cost?',
      answer: 'Pricing depends on the type, quantity, and frequency of waste pickup. Kindly give us a call.',
      featured: true
    },
    {
      id: 'waste-types',
      question: 'What types of waste can I dispose of?',
      answer: 'We accept: Household waste, Recyclables (plastic, glass, paper, cans), Bulk items (furniture, appliances), and Commercial/office waste. Hazardous waste (e.g., chemicals, batteries, medical sharps) requires special handling and may not be accepted.',
      featured: true
    },
    {
      id: 'be-home',
      question: 'Do I need to be home during pickup?',
      answer: 'No. You can leave your waste in a secure, accessible spot and notify our team.',
      featured: false
    },
    {
      id: 'tracking',
      question: 'How do I update my pickup?',
      answer: 'Once a pickup is scheduled, you can update by notifying our team ahead of time via phone or email.',
      featured: false
    },
    {
      id: 'payment',
      question: 'How do I pay?',
      answer: 'We accept cash payments, bitcoin and bank transfers. Payments are processed securely before or after service completion, depending on your chosen plan.',
      featured: false
    },
    {
      id: 'sustainability',
      question: 'What happens to my waste?',
      answer: 'Pick&Bin is committed to sustainability. We sort and divert recyclables from landfills wherever possible, supporting a cleaner environment.',
      featured: false
    },
    {
      id: 'data-security',
      question: 'Is my data secure?',
      answer: 'Yes. We use industry-standard encryption and comply with applicable data protection laws to keep your personal and payment information safe.',
      featured: false
    },
    {
      id: 'support',
      question: 'How do I contact support?',
      answer: 'You can reach us via in-app chat, email at emmanueljejeniwa1@gmail.com, or phone at +44-7477-860379.',
      featured: false
    }
  ];
  
  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <HelpCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold font-arbutus text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 font-montserrat max-w-2xl mx-auto">
              Find answers to common questions about our waste management services. 
              Can't find what you're looking for? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-12"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-4 text-lg bg-white border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0"
            />
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 font-montserrat hover:no-underline hover:bg-gray-50">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-700 font-montserrat leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-500 font-montserrat mb-4">
                  No questions found matching "{searchTerm}"
                </div>
                <Button
                  onClick={() => setSearchTerm('')}
                  variant="outline"
                  className="font-montserrat"
                >
                  Clear Search
                </Button>
              </div>
            )}
          </motion.div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-green-50 rounded-2xl p-8 text-center mt-16"
          >
            <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 font-montserrat mb-4">
              Still need help?
            </h3>
            <p className="text-gray-600 font-montserrat mb-6">
              Can't find the answer you're looking for? Our support team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white font-montserrat"
              >
                Contact Support
              </Button>
              <Button 
                variant="outline" 
                className="border-green-600 text-green-600 hover:bg-green-50 font-montserrat"
              >
                Email: hello@pickbin.org
              </Button> 
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}