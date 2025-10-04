'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'SJ',
      content: 'Pick&Bin has been absolutely fantastic! Their drivers are always punctual and professional. I love that they prioritize recycling - it makes me feel good about our environmental impact.',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Restaurant Owner',
      image: 'MC',
      content: 'As a restaurant owner, reliable waste pickup is crucial. Pick&Bin never misses a pickup and their customer service is top-notch. Highly recommend for any business.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      image: 'ER',
      content: 'Managing waste for a 200-unit complex is no small task. Pick&Bin handles everything seamlessly. Their bulk removal service has saved us countless headaches.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Small Business Owner',
      image: 'DT',
      content: 'Switched to Pick&Bin last year and couldn\'t be happier. Excellent service, reliable scheduling, and they actually care about sustainability. What more could you ask for?',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white">
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
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 font-montserrat max-w-3xl mx-auto">
            Don't just take our word for it. See why thousands of customers 
            trust Pick&Bin for their waste management needs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-green-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 font-montserrat mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 font-montserrat">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 font-montserrat">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center bg-green-50 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
            <span className="text-gray-700 font-montserrat font-medium">
              4.9/5 average rating from 2,000+ reviews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}