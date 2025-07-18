import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils.js";
import Carousel from './Carousel.jsx';
import { Link } from 'react-router-dom';
import { fetchPortfolioItems } from '@/lib/api.js'; // Import the API function
import { truncateText } from '@/lib/textUtils.js'; // Import truncateText

const PortfolioSection = ({ className }) => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPortfolioItems = async () => {
      try {
        // Fetch only a limited number of items for the carousel
        const data = await fetchPortfolioItems({ limit: 8 });
        setPortfolioItems(data);
      } catch (err) {
        setError("Failed to load portfolio items for carousel.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getPortfolioItems();
  }, []);

  if (loading) {
    return (
      <section id="portfolio" className={cn("py-20 bg-gray-50/80 dark:bg-gray-900/80", className)}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">Our Portfolio</h2>
          <p className="text-gray-700 dark:text-gray-300">Loading latest portfolio items...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="portfolio" className={cn("py-20 bg-gray-50/80 dark:bg-gray-900/80", className)}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">Our Portfolio</h2>
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className={cn("py-20 bg-gray-50/80 dark:bg-gray-900/80", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-primary animate-fade-in-up">Our Portfolio</h2>
        {portfolioItems.length > 0 ? (
          <Carousel 
            options={{ loop: true, align: 'start' }} 
            className="py-4"
            slideClassName="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" // Adjust slide width for responsiveness
          >
            {portfolioItems.map((item, index) => (
              <Card key={item.id || index} className={`overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 group animate-scale-in delay-${index * 100} hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:-translate-y-1`}>
                <Link to={`/portfolio/${item.slug}`}>
                  <div className="relative overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                      <div className="text-white text-center p-4">
                        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm mb-2">{item.category}</p>
                        <div className="text-xs opacity-80 hidden group-hover:block transition-opacity duration-300" dangerouslySetInnerHTML={{ __html: truncateText(item.description, 120) }}></div>
                      </div>
                    </div>
                  </div>
                </Link>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">No portfolio items found.</p>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;