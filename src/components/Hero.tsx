
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
              Professional Roofing
              <span className="block text-primary">You Can Trust</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Expert roofing services for residential and commercial properties. 
              Quality craftsmanship with full insurance and guarantees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover-scale"
              >
                Get Free Quote Today
              </Button>
              
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-lg font-semibold">Call: 01332 358958</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300">
              <div className="bg-black text-primary px-4 py-2 rounded font-semibold">
                ✓ Fully Insured
              </div>
              <div className="bg-black text-primary px-4 py-2 rounded font-semibold">
                ✓ 25+ Years Experience
              </div>
              <div className="bg-black text-primary px-4 py-2 rounded font-semibold">
                ✓ 100% Guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default Hero;
