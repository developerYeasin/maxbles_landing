import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const testimonials = [
  {
    quote: "Maxbles transformed our online presence. Their design work is exceptional and their team is a pleasure to work with! They truly understood our brand and delivered beyond expectations, leading to a 50% increase in customer engagement.",
    name: "Jane Doe",
    title: "CEO, Tech Solutions",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Jane",
  },
  {
    quote: "Professional, creative, and highly responsive. Maxbles exceeded all our expectations for our new website. The communication was excellent throughout the entire project, making the process seamless and enjoyable.",
    name: "John Smith",
    title: "Founder, Creative Hub",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=John",
  },
  {
    quote: "The digital marketing strategy developed by Maxbles significantly boosted our leads. Highly recommended! Their data-driven approach made a real difference to our bottom line, with a 40% increase in qualified leads.",
    name: "Emily White",
    title: "Marketing Director, Global Corp",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Emily",
  },
  {
    quote: "Working with Maxbles was a game-changer for our startup. Their UI/UX expertise made our application incredibly user-friendly and visually appealing, resulting in higher user retention rates.",
    name: "Michael Brown",
    title: "CTO, Innovate Labs",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Michael",
  },
  {
    quote: "Maxbles delivered a stunning corporate website that perfectly captures our brand essence. The attention to detail and commitment to quality were outstanding, enhancing our professional image.",
    name: "Sarah Johnson",
    title: "Communications Manager, Apex Holdings",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Sarah",
  },
  {
    quote: "Their SEO optimization services brought us to the top of search results. We've seen a significant increase in organic traffic since partnering with Maxbles, leading to a 60% boost in website visitors.",
    name: "David Lee",
    title: "E-commerce Manager, Retail Giant",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=David",
  },
  {
    quote: "The team at Maxbles is truly exceptional. They took our complex ideas and turned them into a beautifully functional web application. Their technical prowess is unmatched.",
    name: "Olivia Green",
    title: "Product Lead, Innovate Solutions",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Olivia",
  },
  {
    quote: "Maxbles provided invaluable insights for our content strategy. Their guidance helped us create engaging content that resonated deeply with our target audience.",
    name: "Daniel Clark",
    title: "Content Strategist, Digital Minds",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Daniel",
  },
  {
    quote: "From concept to launch, Maxbles was a reliable and creative partner. Their dedication to our project's success was evident every step of the way.",
    name: "Sophia Martinez",
    title: "Founder, Artisan Crafts",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Sophia",
  },
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary dark:text-primary-foreground mb-6 animate-fade-in-up">
            What Our Valued Clients Say
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Hear directly from the businesses and individuals who have partnered with Maxbles and experienced exceptional results. Their success stories are our greatest reward.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`p-6 shadow-lg border border-primary/20 dark:border-primary/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex flex-col items-center text-center animate-slide-in-bottom delay-${index * 100}`}>
              <CardContent className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4 border-4 border-primary shadow-md">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary/20 text-primary text-2xl font-bold">{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <p className="font-bold text-primary dark:text-primary-foreground text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;