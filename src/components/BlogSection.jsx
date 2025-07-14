import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils.js";
import Carousel from './Carousel.jsx'; // Import the new Carousel component

const newImages = [
  "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2021/10/2.jpg",
  "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2020/08/3-10.jpg",
  "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2021/08/2-10.jpg",
];

const blogPosts = [
  {
    title: "The Future of Web Design: Trends to Watch in 2024",
    date: "October 26, 2023",
    excerpt: "Explore the exciting new trends shaping the landscape of web design and user experience, from AI integration to immersive interfaces. Stay ahead of the curve with our expert insights.",
    image: newImages[0],
  },
  {
    title: "Mastering SEO: A Comprehensive Guide for Small Businesses",
    date: "September 15, 2023",
    excerpt: "Unlock the secrets to improving your search engine rankings and driving organic traffic. This guide covers everything from keyword research to technical SEO best practices.",
    image: newImages[1],
  },
  {
    title: "Why Mobile-First Design is Crucial in Today's Digital World",
    date: "August 01, 2023",
    excerpt: "Understand the importance of designing for mobile devices first in today's digital world. Learn how a mobile-first approach can enhance user experience and boost your online presence.",
    image: newImages[2],
  },
  {
    title: "The Power of Storytelling in Digital Marketing",
    date: "July 10, 2023",
    excerpt: "Discover how compelling narratives can transform your digital marketing efforts, creating deeper connections with your audience and driving brand loyalty. Learn to craft impactful stories.",
    image: newImages[0],
  },
  {
    title: "Choosing the Right CMS for Your Business Website",
    date: "June 20, 2023",
    excerpt: "Navigating the world of Content Management Systems can be daunting. Our guide helps you choose the perfect CMS that aligns with your business goals and technical requirements.",
    image: newImages[1],
  },
  {
    title: "Maximizing ROI with Data-Driven Marketing",
    date: "May 05, 2023",
    excerpt: "Learn how to leverage data analytics to optimize your marketing campaigns, improve targeting, and achieve a higher return on investment. Data is your most powerful asset.",
    image: newImages[2],
  },
];

const BlogSection = ({ className }) => {
  return (
    <section id="blog" className={cn("py-20 bg-gray-50/80 dark:bg-gray-900/80", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">Latest from Our Blog</h2>
        <Carousel 
          options={{ loop: true, align: 'start' }} 
          className="py-4"
          slideClassName="w-full sm:w-1/2 lg:w-1/3" // Adjust slide width for responsiveness
        >
          {blogPosts.map((post, index) => (
            <Card key={index} className={`overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-${index * 100} hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:-translate-y-1 transform-gpu perspective-[1000px] hover:rotate-x-[3deg] hover:rotate-y-[3deg] hover:scale-105`}>
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">{post.title}</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <Button variant="link" className="p-0 h-auto text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default BlogSection;