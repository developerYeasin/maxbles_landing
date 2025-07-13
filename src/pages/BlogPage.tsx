import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    author: "Alex Rivera",
    readTime: "7 min read"
  },
  {
    title: "Mastering SEO: A Comprehensive Guide for Small Businesses",
    date: "September 15, 2023",
    excerpt: "Unlock the secrets to improving your search engine rankings and driving organic traffic. This guide covers everything from keyword research to technical SEO best practices.",
    image: newImages[1],
    author: "Maria Chen",
    readTime: "10 min read"
  },
  {
    title: "Why Mobile-First Design is Crucial in Today's Digital World",
    date: "August 01, 2023",
    excerpt: "Understand the importance of designing for mobile devices first in today's digital world. Learn how a mobile-first approach can enhance user experience and boost your online presence.",
    image: newImages[2],
    author: "David Kim",
    readTime: "5 min read"
  },
  {
    title: "The Power of Storytelling in Digital Marketing",
    date: "July 10, 2023",
    excerpt: "Discover how compelling narratives can transform your digital marketing efforts, creating deeper connections with your audience and driving brand loyalty. Learn to craft impactful stories.",
    image: newImages[0],
    author: "Sophia Lee",
    readTime: "8 min read"
  },
  {
    title: "Choosing the Right CMS for Your Business Website",
    date: "June 20, 2023",
    excerpt: "Navigating the world of Content Management Systems can be daunting. Our guide helps you choose the perfect CMS that aligns with your business goals and technical requirements.",
    image: newImages[1],
    author: "Chris Evans",
    readTime: "6 min read"
  },
  {
    title: "Maximizing ROI with Data-Driven Marketing",
    date: "May 05, 2023",
    excerpt: "Learn how to leverage data analytics to optimize your marketing campaigns, improve targeting, and achieve a higher return on investment. Data is your most powerful asset.",
    image: newImages[2],
    author: "Jessica Wong",
    readTime: "9 min read"
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gradient-primary mb-6 animate-fade-in-up">
            Insights from the Maxbles Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Stay informed with the latest trends, expert advice, and thought leadership in web design, digital marketing, and technology. Our blog is your go-to resource for digital excellence.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className={`overflow-hidden shadow-lg border border-primary/20 dark:border-primary/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300 animate-slide-in-bottom delay-${index * 100}`}>
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">{post.title}</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-between">
                  <span>{post.date}</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{post.readTime}</span>
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">By {post.author}</span>
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-accent dark:text-primary-foreground dark:hover:text-accent-foreground">Read More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;