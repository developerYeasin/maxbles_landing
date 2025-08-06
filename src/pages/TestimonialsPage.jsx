import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { fetchTestimonials } from '@/lib/api.js'; // Import the API function
import PageMeta from '@/components/PageMeta.jsx';

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data);
      } catch (err) {
        setError("Failed to load testimonials. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
        <p className="text-xl text-gray-700 dark:text-gray-300">Loading testimonials...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
      <PageMeta 
        title="Testimonials" 
        description="Read what our valued clients have to say about their experience with Maxbles and the exceptional results we've delivered for their businesses." 
      />
      <Header />
      <main className="flex-grow container mx-auto py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gradient-primary mb-6 animate-fade-in-up">
            What Our Valued Clients Say
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Hear directly from the businesses and individuals who have partnered with Maxbles and experienced exceptional results. Their success stories are our greatest reward.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <Card key={testimonial.id || index} className={`p-4 md:p-6 shadow-lg border border-primary/20 dark:border-primary/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex flex-col items-center text-center animate-slide-in-bottom delay-${index * 100}`}>
                <CardContent className="sm:px-6 px-0 sm:py-6 py-6 flex flex-col items-center">
                  <Avatar className="h-20 w-20 md:h-24 md:w-24 mb-4 border-4 border-primary shadow-md">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/20 text-primary text-2xl font-bold">{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {/* Render quote as HTML, removed hardcoded quotes */}
                  <div className="text-lg md:text-xl italic text-gray-700 dark:text-gray-300 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: testimonial.quote }}></div>
                  <p className="font-bold text-primary dark:text-primary-foreground text-base md:text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 dark:text-gray-400">No testimonials found.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;