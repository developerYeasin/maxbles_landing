import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "The Future of Web Design: Trends to Watch in 2024",
    date: "October 26, 2023",
    excerpt: "Explore the exciting new trends shaping the landscape of web design and user experience, from AI integration to immersive interfaces. Stay ahead of the curve with our expert insights.",
    image: "https://via.placeholder.com/400x250/ADD8E6/FFFFFF?text=Web+Design+Trends",
  },
  {
    title: "Mastering SEO: A Comprehensive Guide for Small Businesses",
    date: "September 15, 2023",
    excerpt: "Unlock the secrets to improving your search engine rankings and driving organic traffic. This guide covers everything from keyword research to technical SEO best practices.",
    image: "https://via.placeholder.com/400x250/90EE90/FFFFFF?text=SEO+Guide",
  },
  {
    title: "Why Mobile-First Design is Crucial in Today's Digital World",
    date: "August 01, 2023",
    excerpt: "Understand the importance of designing for mobile devices first in today's digital world. Learn how a mobile-first approach can enhance user experience and boost your online presence.",
    image: "https://via.placeholder.com/400x250/FFB6C1/FFFFFF?text=Mobile-First+Design",
  },
  {
    title: "The Power of Storytelling in Digital Marketing",
    date: "July 10, 2023",
    excerpt: "Discover how compelling narratives can transform your digital marketing efforts, creating deeper connections with your audience and driving brand loyalty. Learn to craft impactful stories.",
    image: "https://via.placeholder.com/400x250/87CEEB/FFFFFF?text=Storytelling",
  },
  {
    title: "Choosing the Right CMS for Your Business Website",
    date: "June 20, 2023",
    excerpt: "Navigating the world of Content Management Systems can be daunting. Our guide helps you choose the perfect CMS that aligns with your business goals and technical requirements.",
    image: "https://via.placeholder.com/400x250/F08080/FFFFFF?text=CMS+Selection",
  },
  {
    title: "Maximizing ROI with Data-Driven Marketing",
    date: "May 05, 2023",
    excerpt: "Learn how to leverage data analytics to optimize your marketing campaigns, improve targeting, and achieve a higher return on investment. Data is your most powerful asset.",
    image: "https://via.placeholder.com/400x250/DDA0DD/FFFFFF?text=Data-Driven+Marketing",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className={`overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-${index * 100}`}>
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
        </div>
      </div>
    </section>
  );
};

export default BlogSection;