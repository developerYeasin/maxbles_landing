import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Link } from 'react-router-dom';
import { fetchBlogPosts } from '@/lib/api.js'; // Import the API function

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        const data = await fetchBlogPosts();
        setBlogPosts(data);
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getBlogPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
        <p className="text-xl text-gray-700 dark:text-gray-300">Loading blog posts...</p>
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
          {blogPosts.length > 0 ? (
            blogPosts.map((post, index) => (
              <Card key={post.id || index} className={`overflow-hidden shadow-lg border border-primary/20 dark:border-primary/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300 animate-slide-in-bottom delay-${index * 100}`}>
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">{post.title}</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-between">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{post.readTime}</span>
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">By {post.author}</span>
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="link" className="p-0 h-auto text-primary hover:text-accent dark:text-primary-foreground dark:hover:text-accent-foreground">Read More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 dark:text-gray-400">No blog posts found.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;