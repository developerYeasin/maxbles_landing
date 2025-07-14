import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import GradientButton from './GradientButton.jsx';

const HeroSection = () => {
  const imageUrl = "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2021/08/1-12.jpg"; // Using the new image of the smiling man
  
  // Ref for the image wrapper to apply parallax effect
  const imageWrapperRef = useRef(null);

  useEffect(() => {
      const wrapper = imageWrapperRef.current;
      if (!wrapper) return;

      const handleMouseMove = (e) => {
          const { left, top, width, height } = wrapper.getBoundingClientRect();
          const x = (e.clientX - left) / width - 0.5;
          const y = (e.clientY - top) / height - 0.5;
          
          const rotateY = x * 15; // Decreased rotation for a subtler effect
          const rotateX = -y * 15;

          wrapper.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
          wrapper.style.transition = 'none';
      };

      const handleMouseLeave = () => {
          wrapper.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
          wrapper.style.transform = `perspective(1200px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
      };

      wrapper.addEventListener('mousemove', handleMouseMove);
      wrapper.addEventListener('mouseleave', handleMouseLeave);

      return () => {
          wrapper.removeEventListener('mousemove', handleMouseMove);
          wrapper.removeEventListener('mouseleave', handleMouseLeave);
      };
  }, []);

  return (
    <section id="hero" className="bg-slate-50 dark:bg-gray-950 flex items-center justify-center min-h-screen p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 bg-white dark:bg-gray-900 p-8 md:p-20 rounded-3xl shadow-lg overflow-hidden animate-fade-in-up">
          {/* Text Content Section */}
          <div className="md:w-5/12 text-center md:text-left">
            <p className="text-gradient-primary font-bold tracking-wider mb-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              DIGITAL CONSULTING AGENCY
            </p>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-5 leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Unique Business Consulting.
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Link to="/about">
              <GradientButton 
                  size="lg"
                  className="font-bold py-4 px-10 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in-up"
                  style={{ animationDelay: '0.8s' }}
              >
                  About Us
              </GradientButton>
            </Link>
          </div>

          {/* Image Section */}
          <div className="md:w-7/12 flex justify-center items-center">
            <div 
                ref={imageWrapperRef}
                className="relative w-full max-w-xl gradient-border-wrapper"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <img 
                    src={imageUrl} 
                    alt="A man working at a desk" 
                    className="relative w-full h-auto rounded-xl shadow-2xl z-10 transform -rotate-3 animate-slide-in-right"
                    style={{ animationDelay: '0.5s' }}
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x400/e2e8f0/4a5568?text=Image+Not+Found'; }}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;