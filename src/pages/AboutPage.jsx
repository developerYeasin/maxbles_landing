import React from 'react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Handshake, Globe, Users } from 'lucide-react';
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

const infoCards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses with innovative digital solutions that drive growth, foster engagement, and create lasting value.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be a leading digital agency recognized for our creativity, strategic thinking, and commitment to client success.",
  },
  {
    icon: Handshake,
    title: "Our Values",
    description:
      "We believe in collaboration, integrity, and a passion for excellence in everything we do. Your success is our success.",
  },
];

const AboutPage = () => {
  const imageUrl = "https://res.cloudinary.com/dbk7ixyvd/image/upload/v1754492383/Gemini_Generated_Image_kucbzmkucbzmkucb-min_1_qlxjhv.png";

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
            <img 
              src={imageUrl} 
              alt="A creative team collaborating on a project" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover mb-8 transform transition-transform duration-500 hover:scale-105"
            />
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
          <div className="grid grid-cols-1 gap-6 animate-slide-in-right delay-400">
            {infoCards.map((card, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg hover:border-primary transition-all duration-300"
              >
                <CardHeader className="flex flex-row items-start gap-4">
                  <card.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {card.title}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-400">
                      {card.description}
                    </p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gradient-primary mb-12 animate-fade-in-up delay-500">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className={`text-center animate-fade-in-up delay-${600 + index * 100}`}>
                <img src={member.avatar} alt={member.name} className="h-24 w-24 rounded-full mx-auto mb-4 shadow-md" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-16 mt-20 bg-primary/10 dark:bg-primary/20 rounded-lg shadow-inner animate-fade-in-up delay-800">
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