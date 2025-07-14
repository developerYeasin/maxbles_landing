import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, Rocket } from 'lucide-react';
import { cn } from "@/lib/utils.js";

const AboutSection = ({ className }) => {
  return (
    <section id="about" className={cn("py-20 bg-white/80 dark:bg-gray-800/80", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">About Maxbles</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left delay-200">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Maxbles is a creative agency dedicated to delivering exceptional digital solutions. We specialize in web design, development, branding, and digital marketing, helping businesses establish a strong online presence and achieve their goals. Our approach is collaborative, ensuring that your vision is at the heart of everything we create.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our team of passionate experts combines innovative thinking with meticulous execution to create engaging and effective digital experiences that resonate with your audience. We pride ourselves on staying ahead of industry trends and utilizing the latest technologies to deliver cutting-edge results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="text-center p-6 shadow-md border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/80 hover:shadow-lg transition-shadow duration-300 animate-zoom-in delay-300 group transform-gpu perspective-[1000px] hover:rotate-x-[3deg] hover:rotate-y-[3deg] hover:scale-105">
              <CardHeader className="flex flex-col items-center pb-4">
                <Lightbulb className="h-12 w-12 text-blue-500 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:text-primary" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Innovative Ideas</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                We bring fresh perspectives and creative solutions to every project, pushing boundaries to deliver unique outcomes.
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-md border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/80 hover:shadow-lg transition-shadow duration-300 animate-zoom-in delay-400 group transform-gpu perspective-[1000px] hover:rotate-x-[3deg] hover:rotate-y-[3deg] hover:scale-105">
              <CardHeader className="flex flex-col items-center pb-4">
                <Users className="h-12 w-12 text-pink-500 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:text-accent" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Expert Team</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                Our professionals are dedicated to excellence and client satisfaction, with years of experience in the digital realm.
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-md border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/80 hover:shadow-lg transition-shadow duration-300 animate-zoom-in delay-500 group transform-gpu perspective-[1000px] hover:rotate-x-[3deg] hover:rotate-y-[3deg] hover:scale-105">
              <CardHeader className="flex flex-col items-center pb-4">
                <Rocket className="h-12 w-12 text-green-500 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:text-green-600" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Driven by Results</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                We focus on delivering measurable outcomes that boost your business, ensuring a strong return on investment.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;