import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Palette,
  Megaphone,
  Search,
  Layout,
  TrendingUp,
  ShieldCheck,
  Cloud,
  Bot,
  Scissors,
  Store
} from "lucide-react";
import { cn } from "@/lib/utils.js";

const services = [
  {
    icon: Bot,
    title: "Automation Software development ",
    description:
      "Building intelligent automation solutions that streamline operations, boost efficiency, and drive growth across your entire business ecosystem.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building robust, scalable, and high-performance websites and web applications tailored to your needs.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually appealing user interfaces for exceptional experiences that delight your users.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategies to boost your online presence, engage your audience, and drive conversions effectively.",
  },
  {
    icon: Scissors,
    title: "Video editing",
    description:
      "We turn raw footage into compelling content that connects, converts, and communicates your brand message.",
  },
  {
    icon: Layout,
    title: "Branding & Identity",
    description:
      "Developing strong brand identities that resonate with your target audience and stand out in the market.",
  },
  {
    icon: TrendingUp,
    title: "Content Strategy",
    description:
      "Creating compelling content plans that attract, engage, and convert your audience across all platforms.",
  },

  {
    icon: Store,
    title: "Ecommerce A to Z solution",
    description:
      "Providing end-to-end eCommerce solutions—from branding and store setup to marketing, automation, and growth optimization.",
  },
];

const ServicesSection = ({ className }) => {
  return (
    <section
      id="services"
      className={cn("py-20 bg-gray-50/80 dark:bg-gray-900/80", className)}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`text-center p-6 shadow-md border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 hover:shadow-lg hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 animate-zoom-in delay-${
                index * 100
              } group transform-gpu perspective-[1000px] hover:rotate-x-[3deg] hover:rotate-y-[3deg] hover:scale-105`}
            >
              <CardHeader className="flex flex-col items-center pb-4">
                <service.icon className="h-12 w-12 text-blue-500 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:text-primary" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                  {service.title}
                </CardTitle>
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
