import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, Rocket } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">About Maxbles</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Maxbles is a creative agency dedicated to delivering exceptional digital solutions. We specialize in web design, development, branding, and digital marketing, helping businesses establish a strong online presence and achieve their goals.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our team of passionate experts combines innovative thinking with meticulous execution to create engaging and effective digital experiences that resonate with your audience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="text-center p-6 shadow-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center pb-4">
                <Lightbulb className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Innovative Ideas</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                We bring fresh perspectives and creative solutions to every project.
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center pb-4">
                <Users className="h-12 w-12 text-pink-500 mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Expert Team</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                Our professionals are dedicated to excellence and client satisfaction.
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center pb-4">
                <Rocket className="h-12 w-12 text-green-500 mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Driven by Results</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                We focus on delivering measurable outcomes that boost your business.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;