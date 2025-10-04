'use client';

import { motion } from 'motion/react';
import { Recycle, Building, Home, Clock, Truck } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: 'Residential Pickup',
      description: 'Regular curbside collection for homes and apartments. Flexible scheduling with weekly, bi-weekly, or monthly options.',
    },
    {
      icon: Building,
      title: 'Commercial Waste',
      description: 'Comprehensive waste management solutions for businesses, offices, and retail establishments.',
    },
    {
      icon: Recycle,
      title: 'Recycling Services',
      description: 'Eco-friendly recycling programs for paper, plastic, glass, and electronics. Help reduce your carbon footprint.',
    },
    {
      icon: Truck,
      title: 'Bulk Item Removal',
      description: 'Safe removal of large items like furniture, appliances, and construction debris. Same-day service available.',
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-arbutus text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 font-montserrat max-w-3xl mx-auto">
            From residential pickup to commercial waste management, we provide comprehensive 
            solutions tailored to your specific needs. Clean, reliable, and sustainable.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 group-hover:bg-green-200 transition-colors">
                <service.icon className="w-8 h-8 text-green-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 font-montserrat mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 font-montserrat leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-4">
              <Clock className="w-8 h-8 text-green-600" />
              <div>
                <div className="font-semibold text-gray-900 font-montserrat">Same-Day Service</div>
                <div className="text-sm text-gray-600 font-montserrat">Emergency pickups available</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <Recycle className="w-8 h-8 text-green-600" />
              <div>
                <div className="font-semibold text-gray-900 font-montserrat">Eco-Friendly</div>
                <div className="text-sm text-gray-600 font-montserrat">95% recycling rate</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <Truck className="w-8 h-8 text-green-600" />
              <div>
                <div className="font-semibold text-gray-900 font-montserrat">Modern Fleet</div>
                <div className="text-sm text-gray-600 font-montserrat">Clean, efficient vehicles</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}