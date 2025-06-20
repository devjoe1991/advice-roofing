import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WorkGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'new-roof', label: 'New Roofs' },
    { id: 'repair', label: 'Repairs' },
    { id: 'flat-roof', label: 'Flat Roofing' },
    { id: 'guttering', label: 'Guttering' }
  ];

  const projects = [
    {
      id: 1,
      title: "Complete Roof Replacement",
      category: "new-roof",
      image: "/uploads/3c43f401-906e-4990-8b27-81b33757dc83.png",
      description: "Full tile replacement with quality materials and professional installation"
    },
    {
      id: 2,
      title: "Slate Roof Installation", 
      category: "new-roof",
      image: "/uploads/7495bb1b-aae3-4524-9a82-bf820f3c3eef.png",
      description: "Professional slate roofing with precise craftsmanship"
    },
    {
      id: 3,
      title: "Flat Roof Construction",
      category: "flat-roof",
      image: "/uploads/0a13b8d0-dbb9-4acd-81be-7b233428163e.png",
      description: "Modern flat roofing solution with superior waterproofing"
    },
    {
      id: 4,
      title: "Roof Repair & Maintenance",
      category: "repair",
      image: "/uploads/5a5ca086-fef5-4966-86bb-563da8c21f43.png",
      description: "Expert roof repairs and maintenance services"
    },
    {
      id: 5,
      title: "Insulation Installation",
      category: "repair",
      image: "/uploads/06a1a1ce-7b65-443a-a33b-e03a7cca5c95.png",
      description: "Professional roof insulation for energy efficiency"
    },
    {
      id: 6,
      title: "Pitched Roof Restoration",
      category: "new-roof",
      image: "/uploads/2bd6a32f-04a3-4926-842e-a3ca35d6e000.png",
      description: "Complete pitched roof restoration with modern materials"
    },
    {
      id: 7,
      title: "Roof Maintenance Project",
      category: "repair",
      image: "/uploads/ecc3c2b0-d7f9-4ae5-916b-b003ba711a3a.png",
      description: "Regular maintenance and inspection services"
    },
    {
      id: 8,
      title: "Tile Roofing Installation",
      category: "new-roof",
      image: "/uploads/daadab30-29ac-49db-b071-4085d12b7374.png",
      description: "High-quality tile roofing with excellent durability"
    },
    {
      id: 9,
      title: "Commercial Roofing Project",
      category: "new-roof",
      image: "/uploads/5e2864cd-ef76-45f7-b8ac-f52181c2393f.png",
      description: "Professional commercial roofing with specialized equipment"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-6 tracking-tight">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            See examples of our quality roofing work across residential and commercial projects. 
            Every project showcases our commitment to excellence and attention to detail.
          </p>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-primary hover:bg-orange-600 text-white shadow-lg transform hover:scale-105' 
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-md hover:transform hover:scale-105'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Enhanced Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-md">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Enhanced overlay content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                    <p className="text-sm text-gray-200 leading-relaxed opacity-90">{project.description}</p>
                  </div>
                  
                  {/* Service category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {filters.find(f => f.id === project.category)?.label}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">Ready to start your roofing project?</p>
          <Button className="bg-primary hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get Your Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
