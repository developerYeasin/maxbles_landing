import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const newImages = [
  "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2021/10/2.jpg",
  "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2020/08/3-10.jpg",
  "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2021/08/2-10.jpg",
];

const portfolioItems = [
  {
    title: "E-commerce Redesign: LuxeBoutique",
    category: "Web Design",
    image: newImages[0],
    description: "A complete overhaul of an existing e-commerce platform, focusing on user experience and conversion rates. Implemented modern UI/UX principles and a responsive design for all devices, resulting in a 30% increase in sales.",
    tags: ["Shopify", "UI/UX", "Responsive Design", "Conversion Optimization"]
  },
  {
    title: "Mobile App: FitLife Tracker",
    category: "App Development",
    image: newImages[1],
    description: "Developed a cross-platform mobile application for a fitness brand, featuring personalized workout plans, progress tracking, and social sharing. Built with React Native for seamless iOS and Android experience, achieving 100k+ downloads.",
    tags: ["React Native", "iOS", "Android", "Fitness Tech", "API Integration"]
  },
  {
    title: "Brand Identity: Quantum Innovations",
    category: "Branding",
    image: newImages[2],
    description: "Crafted a comprehensive brand identity for a new tech startup, including logo design, typography, color palette, and brand guidelines. Established a strong visual presence from the ground up, aiding in successful seed funding.",
    tags: ["Logo Design", "Brand Guidelines", "Visual Identity", "Startup Branding"]
  },
  {
    title: "SaaS Platform UI: DataFlow Analytics",
    category: "UI/UX",
    image: newImages[0],
    description: "Designed an intuitive and efficient user interface for a complex SaaS analytics platform. Focused on data visualization and streamlined workflows to enhance user productivity and reduce learning curve by 25%.",
    tags: ["SaaS UI", "Data Visualization", "Dashboard Design", "User Research"]
  },
  {
    title: "Marketing Campaign: EcoGrow Launch",
    category: "Digital Marketing",
    image: newImages[1],
    description: "Executed a multi-channel digital marketing campaign that resulted in a 40% increase in lead generation and 20% higher engagement rates. Utilized SEO, SEM, and social media strategies for maximum impact.",
    tags: ["SEO", "SEM", "Social Media Marketing", "Lead Generation", "Content Marketing"]
  },
  {
    title: "Corporate Website: GlobalConnect",
    category: "Web Development",
    image: newImages[2],
    description: "Developed a modern, secure, and scalable corporate website for a large enterprise. Integrated various third-party services and ensured compliance with accessibility standards, improving corporate communication.",
    tags: ["Enterprise Web", "CMS Integration", "Accessibility", "Security"]
  },
  {
    title: "Custom CRM System: ClientHub",
    category: "Software Development",
    image: newImages[0],
    description: "Built a bespoke CRM system to manage client relationships and sales pipelines, significantly improving operational efficiency and data management for our client. Reduced manual data entry by 50%.",
    tags: ["Custom Software", "CRM", "Automation", "Business Process Optimization"]
  },
  {
    title: "Interactive Kiosk: Retail Experience",
    category: "UI/UX",
    image: newImages[1],
    description: "Designed and developed an interactive kiosk interface for a retail environment, providing customers with product information, self-service options, and loyalty program sign-ups. Enhanced in-store engagement.",
    tags: ["Interactive Design", "Retail Tech", "Touchscreen UI", "Customer Engagement"]
  },
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gradient-primary mb-6 animate-fade-in-up">
            Our Creative Showcase
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Explore a selection of our recent projects that highlight our expertise in design, development, and digital strategy. Each project is a testament to our commitment to innovation and client success.
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className={`overflow-hidden shadow-lg border border-primary/20 dark:border-primary/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm group animate-scale-in delay-${index * 100}`}>
              <div className="relative overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <div className="text-white text-center p-4">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm mb-3 opacity-90">{item.category}</p>
                    <p className="text-base opacity-90 mb-4">{item.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-white text-primary text-xs px-3 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;