import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils.js";
import Carousel from './Carousel.jsx'; // Import the new Carousel component
import { fetchTestimonials } from '@/lib/api.js'; // Import the API function

const TestimonialsSection = ({ className }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        // Fetch only a limited number of testimonials for the carousel
        const data = await fetchTestimonials({ limit: 6 });
        setTestimonials(data);
      } catch (err) {
        setError("Failed to load testimonials for carousel.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getTestimonials();
  }, []);

  if (loading) {
    return (
      <section id="testimonials" className={cn("py-20 bg-white/80 dark:bg-gray-800/80", className)}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">What Our Clients Say</h2>
          <p className="text-gray-700 dark:text-gray-300">Loading latest testimonials...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="testimonials" className={cn("py-20 bg-white/80 dark:bg-gray-800/80", className)}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">What Our Clients Say</h2>
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className={cn("py-20 bg-white/80 dark:bg-gray-800/80", className)}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">What Our Clients Say</h2>
        {testimonials.length > 0 ? (
          <Carousel
            options={{ loop: true, align: 'start' }}
            className="py-4"
            slideClassName="w-full sm:w-1/2 lg:w-1/3 flex" // Added flex to slideClassName to make cards fill height
          >
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id || index} className={`p-6 shadow-md border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/80 flex flex-col items-center text-center animate-zoom-in delay-${index * 100} hover:shadow-xl hover:border-accent transition-all duration-300 transform hover:-translate-y-1 h-full`}> {/* Added h-full to Card */}
                <CardContent className="flex flex-col items-center flex-grow"> {/* Added flex-grow to CardContent */}
                  <Avatar className="h-20 w-20 mb-4 border-2 border-blue-500 transition-all duration-300 group-hover:scale-105 group-hover:border-accent">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-blue-100 text-blue-600">{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">No testimonials found.</p>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;