import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Link } from 'react-router-dom';
import { fetchPortfolioItems } from '@/lib/api.js'; // Import the API function
import { truncateText } from '@/lib/textUtils.js'; // Import truncateText
import PageMeta from '@/components/PageMeta.jsx';

const PortfolioPage = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPortfolioItems = async () => {
      try {
        const data = await fetchPortfolioItems();
        setPortfolioItems(data);
      } catch (err) {
        setError("Failed to load portfolio items. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getPortfolioItems();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
        <p className="text-xl text-gray-700 dark:text-gray-300">Loading portfolio items...</p>
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
      <PageMeta 
        title="Our Portfolio" 
        description="Browse our creative showcase of recent projects. See how Maxbles delivers innovation and success through expert design and development." 
      />
      <Header />
      <main className="flex-grow container mx-auto py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gradient-primary mb-6 animate-fade-in-up">
            Our Creative Showcase
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Explore a selection of our recent projects that highlight our expertise in design, development, and digital strategy. Each project is a testament to our commitment to innovation and client success.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {portfolioItems.length > 0 ? (
            portfolioItems.map((item, index) => (
              <Card key={item.id || index} className={`overflow-hidden shadow-lg border border-primary/20 dark:border-primary/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm group animate-scale-in delay-${index * 100}`}>
                <Link to={`/portfolio/${item.slug}`}>
                  <div className="relative overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                      <div className="text-white text-center p-4">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm mb-3 opacity-90">{item.category}</p>
                        {/* Render description as HTML */}
                        <div className="text-base opacity-90 mb-4" dangerouslySetInnerHTML={{ __html: truncateText(item.description, 120) }}></div>
                        <div className="flex flex-wrap justify-center gap-2">
                          {item.tags && item.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-white text-primary text-xs px-3 py-1 rounded-full font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 dark:text-gray-400">No portfolio items found.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;