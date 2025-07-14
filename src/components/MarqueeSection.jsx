import React from 'react';
import { cn } from "@/lib/utils.js";
import Carousel from './Carousel.jsx'; // Import the Carousel component

const logos = [
  "https://www.zatiqeasy.com/assets/shops/tofa.svg",
  "https://www.zatiqeasy.com/assets/shops/pearl-house.svg",
  "https://www.zatiqeasy.com/assets/partner/pathao.svg",
  "https://www.zatiqeasy.com/assets/partner/redx.svg",
  "https://www.zatiqeasy.com/assets/partner/stripe.svg",
  "https://www.zatiqeasy.com/assets/partner/nagad.svg",
  "https://www.zatiqeasy.com/assets/partner/upay.svg",
  "https://www.zatiqeasy.com/assets/partner/bKash.svg",
  "https://www.zatiqeasy.com/assets/partner/steadfast.svg",
  "https://www.zatiqeasy.com/assets/partner/rx-courier.svg",
  "https://www.zatiqeasy.com/assets/partner/ssl-commerz.svg",
  "https://www.zatiqeasy.com/assets/partner/paperfly.svg",
];

const MarqueeSection = ({ className }) => {
  return (
    <section className={cn("py-12 bg-gray-100/80 dark:bg-gray-900/80 overflow-hidden", className)}>
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white animate-fade-in-up">
          Trusted by Leading Brands
        </h2>
      </div>
      <Carousel 
        options={{ loop: true, align: 'start', dragFree: true }} // dragFree allows continuous dragging
        className="py-4"
        slideClassName="flex-shrink-0 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] flex justify-center items-center" // Adjust slide width for responsiveness
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-4"> {/* Reduced mx to allow more logos per view */}
            <img 
              src={logo} 
              alt={`Client Logo ${index + 1}`} 
              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 dark:invert" 
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default MarqueeSection;