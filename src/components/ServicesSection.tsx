import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Megaphone, Search } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building robust, scalable, and high-performance websites and web applications.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing user interfaces for exceptional experiences.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategies to boost your online presence and reach your target audience effectively.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improving your search engine rankings to drive organic traffic and visibility.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-6 shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg hover:border-blue-500 transition-all duration-300">
              <CardHeader className="flex flex-col items-center pb-4">
                <service.icon className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;