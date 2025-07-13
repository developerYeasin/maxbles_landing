import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Megaphone, Search, Layout, TrendingUp, ShieldCheck, Cloud } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building robust, scalable, and high-performance websites and web applications tailored to your needs.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing user interfaces for exceptional experiences that delight your users.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategies to boost your online presence, engage your audience, and drive conversions effectively.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improving your search engine rankings to drive organic traffic and visibility, ensuring you're found online.",
  },
  {
    icon: Layout,
    title: "Branding & Identity",
    description: "Developing strong brand identities that resonate with your target audience and stand out in the market.",
  },
  {
    icon: TrendingUp,
    title: "Content Strategy",
    description: "Creating compelling content plans that attract, engage, and convert your audience across all platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Consulting",
    description: "Protecting your digital assets with comprehensive security audits and robust implementation strategies.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Leveraging cloud technologies for scalable, flexible, and efficient infrastructure to support your growth.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white animate-fade-in-up">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`text-center p-6 shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 animate-zoom-in delay-${index * 100}`}>
              <CardHeader className="flex flex-col items-center pb-4">
                <service.icon className="h-12 w-12 text-blue-500 mb-4 transition-colors group-hover:text-blue-600" />
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