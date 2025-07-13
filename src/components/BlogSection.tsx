import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "The Future of Web Design: Trends to Watch",
    date: "October 26, 2023",
    excerpt: "Explore the exciting new trends shaping the landscape of web design and user experience.",
    image: "https://via.placeholder.com/400x250/ADD8E6/FFFFFF?text=Blog+Post+1",
  },
  {
    title: "Mastering SEO: A Guide for Small Businesses",
    date: "September 15, 2023",
    excerpt: "Unlock the secrets to improving your search engine rankings and driving organic traffic.",
    image: "https://via.placeholder.com/400x250/90EE90/FFFFFF?text=Blog+Post+2",
  },
  {
    title: "Why Mobile-First Design is Crucial in 2023",
    date: "August 01, 2023",
    excerpt: "Understand the importance of designing for mobile devices first in today's digital world.",
    image: "https://via.placeholder.com/400x250/FFB6C1/FFFFFF?text=Blog+Post+3",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
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