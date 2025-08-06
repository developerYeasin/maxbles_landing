import React from 'react';
import { Globe } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PageMeta from '@/components/PageMeta.jsx';

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
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              At Maxbles, we stay ahead of industry trends and leverage the
              latest technologies to ensure your brand stands out in an
              ever-evolving digital landscape.
            </p>
          </div>
          <div className="animate-slide-in-right delay-400 flex items-center justify-center">
            <img 
              src={imageUrl} 
              alt="A creative team collaborating on a project" 
              className="rounded-xl shadow-2xl w-full max-w-md h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            />
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