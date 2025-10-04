'use client';

import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  onNavigateToAbout?: () => void;
  onNavigateToSchedulePickup?: () => void;
}

export function HeroSection({ onNavigateToAbout, onNavigateToSchedulePickup }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-white pt-20 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-6xl lg:text-8xl font-bold font-arbutus text-gray-900 leading-tight">
              Effortless Pickups,
              <br />
              <span className="text-green-600">Cleaner Living.</span>
            </h1>
            
            <p className="text-lg text-gray-600 font-montserrat max-w-lg leading-relaxed">
              Say goodbye to waste worries. Pick&Bin makes disposal simple with on-demand pickups, 
              reliable service, and eco-friendly solutions that keep your home, business, 
              and community clean.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={onNavigateToSchedulePickup}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all text-lg font-montserrat font-semibold"
              >
                Schedule Pickup
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={onNavigateToAbout}
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-full px-8 py-4 text-lg font-montserrat font-semibold"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="src/components/assets/pick&bin truck.png"
                alt="Eco-friendly waste management truck"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent"></div>
            </div>
            

          </motion.div>
        </div>
      </div>
    </section>
  );
}