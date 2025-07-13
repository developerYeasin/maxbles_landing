import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "E-commerce Redesign",
    category: "Web Design",
    image: "https://via.placeholder.com/400x300/6A5ACD/FFFFFF?text=Project+1", // SlateBlue
    description: "A complete overhaul of an existing e-commerce platform, focusing on user experience and conversion rates. Implemented modern UI/UX principles and a responsive design for all devices."
  },
  {
    title: "Mobile App Development",
    category: "App Development",
    image: "https://via.placeholder.com/400x300/FF6347/FFFFFF?text=Project+2", // Tomato
    description: "Developed a cross-platform mobile application for a fitness brand, featuring personalized workout plans and progress tracking. Built with React Native for seamless iOS and Android experience."
  },
  {
    title: "Brand Identity Creation",
    category: "Branding",
    image: "https://via.placeholder.com/400x300/3CB371/FFFFFF?text=Project+3", // MediumSeaGreen
    description: "Crafted a comprehensive brand identity for a new tech startup, including logo design, typography, color palette, and brand guidelines. Established a strong visual presence from the ground up."
  },
  {
    title: "SaaS Platform UI",
    category: "UI/UX",
    image: "https://via.placeholder.com/400x300/FFD700/FFFFFF?text=Project+4", // Gold
    description: "Designed an intuitive and efficient user interface for a complex SaaS analytics platform. Focused on data visualization and streamlined workflows to enhance user productivity."
  },
  {
    title: "Marketing Campaign",
    category: "Digital Marketing",
    image: "https://via.placeholder.com/400x300/DA70D6/FFFFFF?text=Project+5", // Orchid
    description: "Executed a multi-channel digital marketing campaign that resulted in a 40% increase in lead generation. Utilized SEO, SEM, and social media strategies for maximum impact."
  },
  {
    title: "Corporate Website",
    category: "Web Development",
    image: "https://via.placeholder.com/400x300/4682B4/FFFFFF?text=Project+6", // SteelBlue
    description: "Developed a modern, secure, and scalable corporate website for a large enterprise. Integrated various third-party services and ensured compliance with accessibility standards."
  },
  {
    title: "Custom CRM System",
    category: "Software Development",
    image: "https://via.placeholder.com/400x300/8FBC8F/FFFFFF?text=Project+7", // DarkSeaGreen
    description: "Built a bespoke CRM system to manage client relationships and sales pipelines, significantly improving operational efficiency and data management for our client."
  },
  {
    title: "Interactive Kiosk Design",
    category: "UI/UX",
    image: "https://via.placeholder.com/400x300/FFA07A/FFFFFF?text=Project+8", // LightSalmon
    description: "Designed and developed an interactive kiosk interface for a retail environment, providing customers with product information and self-service options."
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white animate-fade-in-up">Our Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className={`overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 group animate-zoom-in delay-${index * 100}`}>
              <div className="relative overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm mb-2">{item.category}</p>
                    <p className="text-xs opacity-80 hidden group-hover:block transition-opacity duration-300">{item.description}</p>
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