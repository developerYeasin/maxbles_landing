import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { fetchPortfolioItemBySlug } from '@/lib/api.js'; // Import the API function

const PortfolioItemPage = () => {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPortfolioItem = async () => {
      try {
        const data = await fetchPortfolioItemBySlug(slug);
        setItem(data);
      } catch (err) {
        setError("Failed to load portfolio item. It might not exist or there was a server error.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getPortfolioItem();
  }, [slug]);

  // Function to check if a URL is generally embeddable
  const isEmbeddable = (url) => {
    if (!url) return false;
    // List of domains known to prevent embedding in iframes
    const nonEmbeddableDomains = ['behance.net', 'dribbble.com', 'youtube.com', 'vimeo.com', 'facebook.com', 'twitter.com', 'linkedin.com', 'instagram.com'];
    return !nonEmbeddableDomains.some(domain => url.includes(domain));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
        <p className="text-xl text-gray-700 dark:text-gray-300">Loading portfolio item...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
        <p className="text-xl text-red-500">{error}</p>
        <Link to="/portfolio" className="mt-4">
          <Button variant="outline" className="text-primary dark:text-primary-foreground border-primary dark:border-primary-foreground hover:bg-primary/10 dark:hover:bg-primary-foreground/10">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Projects
          </Button>
        </Link>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
        <Header />
        <main className="flex-grow container mx-auto py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Portfolio Item Not Found</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">The portfolio item you are looking for does not exist.</p>
          <Link to="/portfolio">
            <Button variant="outline" className="text-primary dark:text-primary-foreground border-primary dark:border-primary-foreground hover:bg-primary/10 dark:hover:bg-primary-foreground/10">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Portfolio
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Format description to include line breaks
  const formattedDescription = item.description ? item.description.replace(/\\n/g, '<br />') : '';
  // Assume full_content is already proper HTML string
  const fullContentHtml = item.full_content || ''; // Ensure it's not null/undefined

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
      <Header />
      <main className="flex-grow container mx-auto py-20">
        <article className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg border border-primary/20 dark:border-primary/50 animate-fade-in-up">
          <div className="mb-8 rounded-lg overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-auto" />
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-gradient-primary mb-4 leading-tight">{item.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-md mb-6">
            Category: <span className="font-semibold text-primary dark:text-primary-foreground">{item.category}</span>
          </p>

          {formattedDescription && (
            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-8" dangerouslySetInnerHTML={{ __html: formattedDescription }}>
            </div>
          )}

          {fullContentHtml && (
            <div className="mt-8 prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Project Details</h2>
              <div dangerouslySetInnerHTML={{ __html: fullContentHtml }}></div>
            </div>
          )}

          {item.tags && item.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Technologies & Tags:</h3>
              <div className="flex flex-wrap gap-3">
                {item.tags.map((tag, index) => (
                  <span key={index} className="bg-primary/10 text-primary dark:bg-primary-foreground/10 dark:text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(item.live_url || item.github_url) && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Project Links:</h3>
              <div className="flex flex-wrap gap-4">
                {item.live_url && (
                  <a href={item.live_url} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md hover:scale-105 transition-transform">
                      <ExternalLink className="h-5 w-5 mr-2" /> Live Preview
                    </Button>
                  </a>
                )}
                {item.github_url && (
                  <a href={item.github_url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="group relative border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 shadow-md hover:scale-105 transition-transform overflow-hidden">
                      <div className="flex items-center justify-center">
                        <Github className="h-5 w-5 mr-2 transition-all duration-300" />
                        <span className="transition-all duration-300 whitespace-nowrap">GitHub Repo</span>
                      </div>
                    </Button>
                  </a>
                )}
              </div>
            </div>
          )}

          {item.live_url && isEmbeddable(item.live_url) && (
            <div className="mt-10 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Live Website Preview:</h3>
              <div className="relative w-full pt-[100%] md:pt-[75%] lg:pt-[56.25%] rounded-lg overflow-hidden shadow-xl border border-primary/30 dark:border-primary/60"> {/* Responsive Aspect Ratio */}
                <iframe
                  src={item.live_url}
                  title={`${item.title} Live Preview`}
                  className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                Note: Some websites may prevent embedding in an iframe due to security policies (X-Frame-Options).
              </p>
            </div>
          )}

          <div className="mt-10 text-center">
            <Link to="/portfolio">
              <Button variant="outline" className="text-primary dark:text-primary-foreground border-primary dark:border-primary-foreground hover:bg-primary/10 dark:hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Projects
              </Button>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioItemPage;