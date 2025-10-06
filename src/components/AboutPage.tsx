'use client';

import { motion } from 'motion/react';
import { Target, Eye, Heart, Users, Truck, Recycle, Shield, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import workersImg from './assets/pb_workers.png';
import cleanupImg from './assets/pb_cleanup.png';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateToSchedulePickup: () => void;
}

export function AboutPage({ onNavigateHome, onNavigateToSchedulePickup }: AboutPageProps) {
  const values = [
    {
      icon: Users,
      title: 'Convenience',
      description: 'Waste pickup at your schedule, on your terms.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Recycle,
      title: 'Sustainability',
      description: 'A commitment to recycling and green practices.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Clear pricing, real-time tracking, and open communication.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Partnering with local recyclers and creating job opportunities.',
      color: 'bg-red-100 text-red-600'
    }
  ];

  const whyChooseUs = [
    'Easy scheduling via web',
    'Affordable payment options',
    'Verified, trained waste collection partners',
    'Commitment to eco-friendly disposal methods'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
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

      {/* Hero Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold font-arbutus text-gray-900 mb-6">
                About Us
              </h1>
              <p className="text-xl text-gray-600 font-montserrat leading-relaxed mb-8">
                Pick&Bin is a tech-driven waste management and recycling platform making disposal simple, reliable, and eco-friendly. 
                We connect households and businesses with smart pickup services that ensure waste is collected, sorted, and recycled responsibly. 
              </p>
              <Button 
                size="lg"
                onClick={onNavigateToSchedulePickup}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl px-8 py-4 shadow-lg hover:shadow-xl transition-all font-montserrat font-semibold"
              >
                Schedule Pickup
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={workersImg}
                  alt="Team collaboration"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold font-arbutus text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 font-montserrat leading-relaxed">
                To create cleaner communities by simplifying waste disposal, encouraging 
                recycling, and reducing environmental impact through technology and innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold font-arbutus text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 font-montserrat leading-relaxed">
                To become the leading eco-friendly waste management solution in United Kingdom, 
                where waste is no longer a burden but a resource for sustainability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-arbutus text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 font-montserrat max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment 
              to sustainable waste management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${value.color} rounded-full mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 font-montserrat mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-montserrat leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold font-arbutus text-gray-900 mb-6">
                Why Choose Pick&Bin?
              </h2>
              <p className="text-lg text-gray-600 font-montserrat mb-8 leading-relaxed">
                We combine cutting-edge technology with environmental responsibility 
                to deliver the most reliable waste management service in United Kingdom.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-montserrat">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={cleanupImg}
                  alt="Sustainability and recycling"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-arbutus text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 font-montserrat max-w-2xl mx-auto">
              Ready to make a difference? Get in touch with our team and join the movement 
              towards sustainable waste management.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 font-montserrat mb-2">Email</h3>
              <p className="text-gray-600 font-montserrat">emmanueljejeniwa1@gmail.com</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 font-montserrat mb-2">Phone</h3>
              <p className="text-gray-600 font-montserrat">0203 488 3249</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 font-montserrat mb-2">Website</h3>
              <p className="text-gray-600 font-montserrat">www.pickandbin.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-arbutus text-white mb-6">
              Join the Movement
            </h2>
            <p className="text-xl text-green-100 font-montserrat leading-relaxed mb-8">
              Ready to make waste disposal effortless and eco-friendly? 
              Schedule your first pickup today and experience the Pick&Bin difference.
            </p>
            <Button 
              size="lg"
              onClick={onNavigateToSchedulePickup}
              className="bg-white text-green-600 hover:bg-gray-100 rounded-xl px-8 py-4 shadow-lg hover:shadow-xl transition-all font-montserrat font-semibold"
            >
              Schedule Pickup
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}