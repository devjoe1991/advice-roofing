
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "HILDY - HA3",
      location: "Derby",
      text: "Fantastic service from start to finish. The team was professional, punctual, and the quality of work exceeded our expectations. Highly recommended!",
      rating: 5
    },
    {
      name: "PRANVEE - DE5",
      location: "Belper", 
      text: "Very pleased with the roof repair work. Quick response to our emergency and excellent workmanship. Will definitely use again.",
      rating: 5
    },
    {
      name: "ANDREE1979",
      location: "Derby",
      text: "Outstanding quality roofing work on our commercial property. Professional team, competitive pricing, and completed on time.",
      rating: 5
    },
    {
      name: "ANITA - TW7",
      location: "Isleworth",
      text: "Excellent communication throughout the project. The new roof looks fantastic and we've had no issues since completion. Great value for money.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What People Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across Derby and surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-black text-white border-gray-700 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-primary text-lg mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
