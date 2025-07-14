import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils.js";

const testimonials = [
  {
    quote: "Maxbles transformed our online presence. Their design work is exceptional and their team is a pleasure to work with! They truly understood our brand and delivered beyond expectations.",
    name: "Jane Doe",
    title: "CEO, Tech Solutions",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Jane",
  },
  {
    quote: "Professional, creative, and highly responsive. Maxbles exceeded all our expectations for our new website. The communication was excellent throughout the entire project.",
    name: "John Smith",
    title: "Founder, Creative Hub",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=John",
  },
  {
    quote: "The digital marketing strategy developed by Maxbles significantly boosted our leads. Highly recommended! Their data-driven approach made a real difference to our bottom line.",
    name: "Emily White",
    title: "Marketing Director, Global Corp",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Emily",
  },
  {
    quote: "Working with Maxbles was a game-changer for our startup. Their UI/UX expertise made our application incredibly user-friendly and visually appealing.",
    name: "Michael Brown",
    title: "CTO, Innovate Labs",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Michael",
  },
  {
    quote: "Maxbles delivered a stunning corporate website that perfectly captures our brand essence. The attention to detail and commitment to quality were outstanding.",
    name: "Sarah Johnson",
    title: "Communications Manager, Apex Holdings",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Sarah",
  },
  {
    quote: "Their SEO optimization services brought us to the top of search results. We've seen a significant increase in organic traffic since partnering with Maxbles.",
    name: "David Lee",
    title: "E-commerce Manager, Retail Giant",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=David",
  },
];

const TestimonialsSection = ({ className }) => {
  return (
    <section id="testimonials" className={cn("py-20 bg-white dark:bg-gray-800", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`p-6 shadow-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex flex-col items-center text-center animate-zoom-in delay-${index * 100}`}>
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