import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Handshake } from "lucide-react";
import { cn } from "@/lib/utils.js";

const infoCards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses with innovative digital solutions that drive growth, foster engagement, and create lasting value.",
    borderColor: "border-t-blue-500",
    textColor: "text-blue-500",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be a leading digital agency recognized for our creativity, strategic thinking, and commitment to client success.",
    borderColor: "border-t-purple-500",
    textColor: "text-purple-500",
  },
  {
    icon: Handshake,
    title: "Our Values",
    description:
      "We believe in collaboration, integrity, and a passion for excellence in everything we do. Your success is our success.",
    borderColor: "border-t-green-500",
    textColor: "text-green-500",
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
          <div className="grid grid-cols-1 gap-8 animate-slide-in-right delay-300">
            {infoCards.map((card, index) => (
              <Card
                key={index}
                className={cn(
                  "text-center sm:px-4 px-2 py-3 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 transform hover:-translate-y-1",
                  card.borderColor
                )}
              >
                <CardHeader className="flex flex-col items-center p-0 pb-4">
                  <card.icon className={cn("h-12 w-12 mb-4", card.textColor)} />
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-400 p-0">
                  {card.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;