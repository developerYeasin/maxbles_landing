import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "E-commerce Redesign",
    category: "Web Design",
    image: "https://via.placeholder.com/400x300/ADD8E6/FFFFFF?text=Project+1",
  },
  {
    title: "Mobile App Development",
    category: "App Development",
    image: "https://via.placeholder.com/400x300/90EE90/FFFFFF?text=Project+2",
  },
  {
    title: "Brand Identity Creation",
    category: "Branding",
    image: "https://via.placeholder.com/400x300/FFB6C1/FFFFFF?text=Project+3",
  },
  {
    title: "SaaS Platform UI",
    category: "UI/UX",
    image: "https://via.placeholder.com/400x300/87CEEB/FFFFFF?text=Project+4",
  },
  {
    title: "Marketing Campaign",
    category: "Digital Marketing",
    image: "https://via.placeholder.com/400x300/F08080/FFFFFF?text=Project+5",
  },
  {
    title: "Corporate Website",
    category: "Web Development",
    image: "https://via.placeholder.com/400x300/DDA0DD/FFFFFF?text=Project+6",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 group">
              <div className="relative overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;