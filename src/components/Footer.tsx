
import React from 'react';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Advice Roofing</h3>
                <p className="text-sm text-gray-300">& Building Ltd</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professional roofing services across Derby and surrounding areas. 
              Quality craftsmanship with full insurance and guarantees.
            </p>
            <div className="flex items-center space-x-2 text-primary">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">01332 358958</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-primary transition-colors">New Roof Installation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Roof Repairs</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Flat Roofing</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Guttering & Fascias</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Emergency Repairs</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="text-gray-300 space-y-2">
              <p><strong>Phone:</strong> 01332 358958</p>
              <p><strong>Email:</strong> info@adviceroofingandbuildingltd.com</p>
              <p><strong>Coverage Area:</strong> Derby & Surrounding Areas</p>
              <p><strong>Hours:</strong> Monday - Saturday, 8am - 6pm</p>
              <p className="text-primary font-semibold">24/7 Emergency Service Available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Advice Roofing & Building Ltd. All rights reserved. | Fully Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
