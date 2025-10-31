'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-green-600 to-green-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-white font-arbutus mb-6"
          >
            Join the Movement for a
            <span className="block text-green-200">Cleaner Tomorrow</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-green-100 font-montserrat mb-12 max-w-3xl mx-auto"
          >
            Ready to experience the difference? Join thousands of satisfied customers 
            who trust Pick&Bin for reliable, eco-friendly waste management solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <Button 
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 rounded-full px-10 py-4 text-lg font-montserrat font-semibold shadow-xl hover:shadow-2xl transition-all group"
            >
              Schedule Pickup Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center space-x-6">
              <a href="tel:0203 488 3249" className="flex items-center text-green-100 hover:text-white transition-colors font-montserrat">
                <Phone className="w-5 h-5 mr-2" />
                0203 488 3249
              </a>
              <a href="mailto:hello@pickbin.org" className="flex items-center text-green-100 hover:text-white transition-colors font-montserrat">
                <Mail className="w-5 h-5 mr-2" />
                hello@pickbin.org
              </a> 
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '5,000+', label: 'Happy Customers' },
              { number: '500,000+', label: 'Tons Recycled' },
              { number: '99.9%', label: 'On-Time Pickup' },
              { number: '24/7', label: 'Customer Support' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-white">
                <div className="text-3xl font-bold font-montserrat mb-1">
                  {stat.number}
                </div>
                <div className="text-green-200 font-montserrat">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}