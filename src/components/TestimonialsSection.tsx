import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Maxbles transformed our online presence. Their design work is exceptional and their team is a pleasure to work with!",
    name: "Jane Doe",
    title: "CEO, Tech Solutions",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Jane",
  },
  {
    quote: "Professional, creative, and highly responsive. Maxbles exceeded all our expectations for our new website.",
    name: "John Smith",
    title: "Founder, Creative Hub",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=John",
  },
  {
    quote: "The digital marketing strategy developed by Maxbles significantly boosted our leads. Highly recommended!",
    name: "Emily White",
    title: "Marketing Director, Global Corp",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Emily",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col items-center text-center">
              <CardContent className="flex flex-col items-center">
                <Avatar className="h-20 w-20 mb-4 border-2 border-blue-500">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-blue-100 text-blue-600">{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;