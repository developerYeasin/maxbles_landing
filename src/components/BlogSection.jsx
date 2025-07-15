import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils.js";
import Carousel from './Carousel.jsx';
import { Link } from 'react-router-dom';
import { fetchBlogPosts } from '@/lib/api.js'; // Import the API function

const BlogSection = ({ className }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        // Fetch only a limited number of posts for the carousel
        const data = await fetchBlogPosts({ limit: 6, sortBy: 'date', order: 'desc' });
        setBlogPosts(data);
      } catch (err) {
        setError("Failed to load blog posts for carousel.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getBlogPosts();
  }, []);

  if (loading) {
    return (
      <section id="blog" className={cn("py-20 bg-gray-50/80 dark:bg-gray-900/80", className)}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">Latest from Our Blog</h2>
          <p className="text-gray-700 dark:text-gray-300">Loading latest blog posts...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blog" className={cn("py-20 bg-gray-50/80 dark:bg-gray-900/80", className)}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">Latest from Our Blog</h2>
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className={cn("py-20 bg-gray-50/80 dark:bg-gray-900/80", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">Latest from Our Blog</h2>
        {blogPosts.length > 0 ? (
          <Carousel 
            options={{ loop: true, align: 'start' }} 
            className="py-4"
            slideClassName="w-full sm:w-1/2 lg:w-1/3" // Adjust slide width for responsiveness
          >
            {blogPosts.map((post, index) => (
              <Card key={post.id || index} className={`overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-${index * 100} hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:-translate-y-1`}>
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">{post.title}</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="link" className="p-0 h-auto text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">Read More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">No blog posts found.</p>
        )}
      </div>
    </section>
  );
};

export default BlogSection;