import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, Rocket, Award, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary dark:text-primary-foreground mb-6 animate-fade-in-up">
            About Maxbles: Innovating Digital Futures
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            At Maxbles, we are more than just a digital agency; we are architects of online success. With a passion for innovation and a commitment to excellence, we transform visions into captivating digital realities.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in-left delay-300">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Our Story & Philosophy</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Founded on the principle of delivering measurable results through creative solutions, Maxbles began with a small team of dedicated professionals. Over the years, we've grown into a full-service agency, but our core philosophy remains the same: **client success is our success.** We believe in transparent communication, collaborative partnerships, and a relentless pursuit of perfection in every project.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We pride ourselves on our agile approach, adapting to the ever-evolving digital landscape to ensure our clients always stay ahead. From cutting-edge web development to impactful digital marketing campaigns, we craft bespoke strategies that resonate with your audience and drive tangible growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="text-center p-6 shadow-lg border border-primary/20 dark:border-primary/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-scale-in delay-400">
              <CardHeader className="flex flex-col items-center pb-4">
                <Lightbulb className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Innovative Ideas</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                We foster a culture of creativity, constantly exploring new technologies and approaches to deliver unique and effective solutions.
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-lg border border-accent/20 dark:border-accent/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-scale-in delay-500">
              <CardHeader className="flex flex-col items-center pb-4">
                <Users className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Expert Team</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                Our diverse team of designers, developers, and strategists brings a wealth of experience and passion to every project.
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-lg border border-green-500/20 dark:border-green-500/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-scale-in delay-600">
              <CardHeader className="flex flex-col items-center pb-4">
                <Rocket className="h-12 w-12 text-green-500 mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Driven by Results</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                We are committed to delivering measurable outcomes that boost your business, ensuring a strong return on investment.
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-lg border border-yellow-500/20 dark:border-yellow-500/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-scale-in delay-700">
              <CardHeader className="flex flex-col items-center pb-4">
                <Award className="h-12 w-12 text-yellow-500 mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Quality Focused</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                Every project undergoes rigorous quality assurance to ensure it meets the highest standards of performance and design.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center py-16 bg-primary/10 dark:bg-primary/20 rounded-lg shadow-inner animate-fade-in-up delay-800">
          <h2 className="text-4xl font-bold text-primary dark:text-primary-foreground mb-6">Our Global Reach</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Maxbles serves clients worldwide, bringing digital excellence to businesses across diverse industries and geographies.
          </p>
          <Globe className="h-24 w-24 text-primary mx-auto animate-rotate-in delay-900" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;