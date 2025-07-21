import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { fetchBlogPostBySlug } from '@/lib/api.js'; // Import the API function

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlogPost = async () => {
      try {
        const data = await fetchBlogPostBySlug(slug);
        setPost(data);
      } catch (err) {
        setError("Failed to load blog post. It might not exist or there was a server error.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
        <p className="text-xl text-gray-700 dark:text-gray-300">Loading blog post...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
        <p className="text-xl text-red-500">{error}</p>
        <Link to="/blog" className="mt-4">
          <Button variant="outline" className="text-primary dark:text-primary-foreground border-primary dark:border-primary-foreground hover:bg-primary/10 dark:hover:bg-primary-foreground/10">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Posts
          </Button>
        </Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Blog Post Not Found</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">The post you are looking for does not exist.</p>
          <Link to="/blog">
            <Button variant="outline" className="text-primary dark:text-primary-foreground border-primary dark:border-primary-foreground hover:bg-primary/10 dark:hover:bg-primary-foreground/10">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20">
        <article className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg border border-primary/20 dark:border-primary/50 animate-fade-in-up">
          <img src={post.image} alt={post.title} className="w-full h-64 object-contain rounded-lg mb-8 shadow-md" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-gradient-primary mb-4 leading-tight">{post.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-md mb-6">
            By <span className="font-semibold text-primary dark:text-primary-foreground">{post.author}</span> on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} &bull; {post.readTime}
          </p>
          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: post.content }}>
          </div>
          <div className="mt-10 text-center">
            <Link to="/blog">
              <Button variant="outline" className="text-primary dark:text-primary-foreground border-primary dark:border-primary-foreground hover:bg-primary/10 dark:hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Posts
              </Button>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;