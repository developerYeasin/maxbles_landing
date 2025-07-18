import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Megaphone, Search, Layout, TrendingUp, ShieldCheck, Cloud, Database, Zap, BarChart2, Users2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building robust, scalable, and high-performance websites and web applications tailored to your needs. We specialize in modern frameworks and secure architectures.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing user interfaces for exceptional experiences that delight your users. Our designs focus on usability and aesthetic appeal.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategies to boost your online presence, engage your audience, and drive conversions effectively. Includes social media, email, and content marketing.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improving your search engine rankings to drive organic traffic and visibility, ensuring you're found online. Comprehensive keyword research and on-page/off-page strategies.",
  },
  {
    icon: Layout,
    title: "Branding & Identity",
    description: "Developing strong brand identities that resonate with your target audience and stand out in the market. From logo design to brand guidelines, we build cohesive identities.",
  },
  {
    icon: TrendingUp,
    title: "Content Strategy",
    description: "Creating compelling content plans that attract, engage, and convert your audience across all platforms. We help you tell your story effectively.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Consulting",
    description: "Protecting your digital assets with comprehensive security audits and robust implementation strategies. Safeguard your business from evolving threats.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Leveraging cloud technologies for scalable, flexible, and efficient infrastructure to support your growth. AWS, Azure, Google Cloud expertise.",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Designing, implementing, and optimizing databases for efficient data storage and retrieval. Ensuring data integrity and performance.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Enhancing the speed and responsiveness of your digital platforms for a seamless user experience. Reducing load times and improving core web vitals.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    description: "Providing in-depth insights into your digital performance with comprehensive analytics and custom reporting. Make data-driven decisions.",
  },
  {
    icon: Users2,
    title: "CRM Integration",
    description: "Seamlessly integrating Customer Relationship Management systems to streamline your sales, marketing, and customer service processes.",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gradient-primary mb-6 animate-fade-in-up">
            Our Comprehensive Digital Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Maxbles offers a full spectrum of digital services designed to elevate your brand, engage your audience, and drive sustainable growth in the competitive online landscape.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`text-center p-6 shadow-lg border border-primary/20 dark:border-primary/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl hover:border-accent transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-bottom delay-${index * 100}`}>
              <CardHeader className="flex flex-col items-center pb-4">
                <service.icon className="h-12 w-12 text-primary mb-4 transition-colors group-hover:text-accent" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                {service.description}
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="text-center py-16 mt-20 bg-accent/10 dark:bg-accent/20 rounded-lg shadow-inner animate-fade-in-up delay-1000">
          <h2 className="text-4xl font-bold text-accent dark:text-accent-foreground mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Our team is eager to discuss your unique challenges and craft a tailored strategy that delivers exceptional results.
          </p>
          {/* You can add a button here linking to the contact page */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;