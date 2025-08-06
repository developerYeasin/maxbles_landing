import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Handshake } from "lucide-react";
import { cn } from "@/lib/utils.js";

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

const AboutSection = ({ className }) => {
  const imageUrl = "https://res.cloudinary.com/dbk7ixyvd/image/upload/v1754492383/Gemini_Generated_Image_kucbzmkucbzmkucb-min_1_qlxjhv.png";

  return (
    <section
      id="about"
      className={cn("py-20 bg-white/80 dark:bg-gray-800/80", className)}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">
          About Maxbles
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left delay-200">
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
          <div className="grid grid-cols-1 gap-6 animate-slide-in-right delay-300">
            {infoCards.map((card, index) => (
              <Card
                key={index}
                className="bg-gray-50/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg hover:border-primary transition-all duration-300"
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;