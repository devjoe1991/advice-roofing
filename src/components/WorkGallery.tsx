
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
      image: "/lovable-uploads/3c43f401-906e-4990-8b27-81b33757dc83.png",
      description: "Full tile replacement with quality materials and professional installation"
    },
    {
      id: 2,
      title: "Slate Roof Installation", 
      category: "new-roof",
      image: "/lovable-uploads/7495bb1b-aae3-4524-9a82-bf820f3c3eef.png",
      description: "Professional slate roofing with precise craftsmanship"
    },
    {
      id: 3,
      title: "Flat Roof Construction",
      category: "flat-roof",
      image: "/lovable-uploads/0a13b8d0-dbb9-4acd-81be-7b233428163e.png",
      description: "Modern flat roofing solution with superior waterproofing"
    },
    {
      id: 4,
      title: "Roof Repair & Maintenance",
      category: "repair",
      image: "/lovable-uploads/5a5ca086-fef5-4966-86bb-563da8c21f43.png",
      description: "Expert roof repairs and maintenance services"
    },
    {
      id: 5,
      title: "Insulation Installation",
      category: "repair",
      image: "/lovable-uploads/06a1a1ce-7b65-443a-a33b-e03a7cca5c95.png",
      description: "Professional roof insulation for energy efficiency"
    },
    {
      id: 6,
      title: "Pitched Roof Restoration",
      category: "new-roof",
      image: "/lovable-uploads/2bd6a32f-04a3-4926-842e-a3ca35d6e000.png",
      description: "Complete pitched roof restoration with modern materials"
    },
    {
      id: 7,
      title: "Roof Maintenance Project",
      category: "repair",
      image: "/lovable-uploads/ecc3c2b0-d7f9-4ae5-916b-b003ba711a3a.png",
      description: "Regular maintenance and inspection services"
    },
    {
      id: 8,
      title: "Tile Roofing Installation",
      category: "new-roof",
      image: "/lovable-uploads/daadab30-29ac-49db-b071-4085d12b7374.png",
      description: "High-quality tile roofing with excellent durability"
    },
    {
      id: 9,
      title: "Commercial Roofing Project",
      category: "new-roof",
      image: "/lovable-uploads/5e2864cd-ef76-45f7-b8ac-f52181c2393f.png",
      description: "Professional commercial roofing with specialized equipment"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            See examples of our quality roofing work across residential and commercial projects.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`${
                  activeFilter === filter.id 
                    ? 'bg-primary hover:bg-orange-600 text-white' 
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
