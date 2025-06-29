import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "New Roof Installation",
      description: "Complete roof installations using high-quality materials with full warranty coverage.",
      image: "/uploads/06a1a1ce-7b65-443a-a33b-e03a7cca5c95.png",
      features: [
        "High-quality materials from trusted suppliers",
        "Skilled craftmanship with attention to detail",
        "Efficient and professional installation",
        "Full warranty coverage"
      ]
    },
    {
      title: "Roof Repairs",
      description: "Expert roof repairs to fix leaks, damaged tiles, and structural issues quickly and effectively.",
      image: "/uploads/2bd6a32f-04a3-4926-842e-a3ca35d6e000.png",
      features: [
        "Emergency leak repairs",
        "Tile and slate replacement", 
        "Structural damage assessment",
        "Preventive maintenance"
      ]
    },
    {
      title: "Flat Roofing",
      description: "Specialized flat roofing solutions for commercial and residential properties.",
      image: "/uploads/7495bb1b-aae3-4524-9a82-bf820f3c3eef.png",
      features: [
        "EPDM rubber roofing",
        "Built-up felt systems",
        "Single ply membranes",
        "Roof drainage solutions"
      ]
    },
    {
      title: "Guttering & Fascias",
      description: "Complete guttering systems installation and maintenance to protect your property.",
      image: "/uploads/daadab30-29ac-49db-b071-4085d12b7374.png",
      features: [
        "PVC and aluminum guttering",
        "Fascia board replacement",
        "Soffit installation",
        "Downpipe repairs"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional roofing solutions tailored to your needs with quality materials and expert craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-secondary group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
