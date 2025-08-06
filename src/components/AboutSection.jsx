import React from "react";
import { cn } from "@/lib/utils.js";

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
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              <span className=" font-bold ">
                Maxbles is a creative agency committed to crafting exceptional
                digital solutions.
              </span>{" "}
              We specialize in web design, development, branding, and digital
              marketing—helping businesses build a strong online presence and
              achieve measurable growth.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
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
          <div className="animate-slide-in-right delay-300 flex items-center justify-center">
            <img 
              src={imageUrl} 
              alt="A creative team collaborating on a project" 
              className="rounded-xl shadow-2xl w-full max-w-md h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;