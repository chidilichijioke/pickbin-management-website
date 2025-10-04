'use client';

import { motion } from 'motion/react';
import { Award, Users, Truck, Leaf, Clock, Shield } from 'lucide-react';

export function TrustIndicators() {
  const partners = [
    { icon: Users, name: '5,000+', description: 'Happy Customers' },
    { icon: Truck, name: '10+', description: 'Trucks in Fleet' },
    { icon: Award, name: '4+', description: 'Years Experience' },
    { icon: Leaf, name: '95%', description: 'Recycling Rate' },
    { icon: Clock, name: '24/7', description: 'Emergency Service' },
    { icon: Shield, name: '100%', description: 'Insured Service' },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold font-arbutus text-gray-900">
              Trusted by Communities & Businesses
            </h2>
            <p className="text-lg text-gray-600 font-montserrat leading-relaxed">
              From residential neighborhoods to commercial complexes, Pick&Bin has been 
              the trusted choice for reliable, eco-friendly waste management services. 
              Our commitment to excellence and sustainability has earned us the loyalty 
              of thousands of customers across the region.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full border-2 border-white ${
                      i === 1 ? 'bg-green-500' :
                      i === 2 ? 'bg-blue-500' :
                      i === 3 ? 'bg-purple-500' : 'bg-orange-500'
                    }`}
                  ></div>
                ))}
              </div>
              <span className="text-gray-600 font-montserrat">
                Join thousands of satisfied customers
              </span>
            </div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-8"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors">
                  <partner.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 font-montserrat mb-1">
                  {partner.name}
                </div>
                <div className="text-sm text-gray-600 font-montserrat">
                  {partner.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}