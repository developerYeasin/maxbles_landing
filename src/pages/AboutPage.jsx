import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Handshake, Globe, Users, Lightbulb } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PageMeta from '@/components/PageMeta.jsx';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    avatar: 'https://placehold.co/100x100/e2e8f0/4a5568?text=JD',
  },
  {
    name: 'Jane Smith',
    role: 'Lead Designer',
    avatar: 'https://placehold.co/100x100/e2e8f0/4a5568?text=JS',
  },
  {
    name: 'Peter Jones',
    role: 'Lead Developer',
    avatar: 'https://placehold.co/100x100/e2e8f0/4a5568?text=PJ',
  },
];

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly seek new and better ways to solve problems and create value.',
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    description: 'We work closely with our clients and each other to achieve shared goals.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality work and exceeding expectations.',
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
      <PageMeta 
        title="About Us" 
        description="Learn about Maxbles, our story, philosophy, and the expert team dedicated to innovating digital futures and driving client success." 
      />
      <Header />
      <main className="flex-grow container mx-auto py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gradient-primary mb-6 animate-fade-in-up">
            About Maxbles: Innovating Digital Futures
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            At Maxbles, we are more than just a digital agency; we are architects of online success. With a passion for innovation and a commitment to excellence, we transform visions into captivating digital realities.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in-left delay-300">
            <h2 className="text-4xl font-bold text-gradient-primary mb-6">Our Story & Philosophy</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              <span className=" font-bold ">
                Maxbles is a creative agency committed to crafting exceptional
                digital solutions.
              </span>{" "}
              We specialize in web design, development, branding, and digital
              marketing—helping businesses build a strong online presence and
              achieve measurable growth.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our collaborative approach puts your vision at the core of every
              project. With a team of passionate experts, we blend innovative
              thinking and precise execution to deliver digital experiences that
              truly engage your audience.
            </p>
          </div>
          <div className="animate-slide-in-right delay-400">
            <Card className="bg-white/80 dark:bg-gray-900/80 p-6 shadow-lg border border-primary/20 dark:border-primary/50">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary dark:text-primary-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  To empower businesses with innovative digital solutions that drive growth, foster engagement, and create lasting value.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gradient-primary mb-12 animate-fade-in-up delay-500">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className={`text-center p-6 shadow-lg border border-primary/20 dark:border-primary/50 bg-white/80 dark:bg-gray-900/80 animate-zoom-in delay-${600 + index * 100}`}>
                <CardHeader className="flex flex-col items-center pb-4">
                  <value.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gradient-primary mb-12 animate-fade-in-up delay-800">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className={`text-center animate-fade-in-up delay-${900 + index * 100}`}>
                <img src={member.avatar} alt={member.name} className="h-24 w-24 rounded-full mx-auto mb-4 shadow-md" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-16 mt-20 bg-primary/10 dark:bg-primary/20 rounded-lg shadow-inner animate-fade-in-up delay-1000">
          <h2 className="text-4xl font-bold text-primary dark:text-primary-foreground mb-6">Our Global Reach</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Maxbles serves clients worldwide, bringing digital excellence to businesses across diverse industries and geographies.
          </p>
          <Globe className="h-24 w-24 text-primary mx-auto animate-rotate-in delay-1100" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;