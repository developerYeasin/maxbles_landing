import React, { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from "@/lib/utils.js";

const Carousel = ({ children, options, className, slideClassName }) => {
  const autoplayOptions = {
    delay: 3000, // Autoplay every 3 seconds
    stopOnInteraction: false, // Keep playing even if user interacts
    stopOnMouseEnter: true, // Pause on hover
    stopOnLastSnap: false, // Keep looping
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);
  const [isDragging, setIsDragging] = useState(false); // New state for dragging

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('pointerDown', handleMouseDown);
      emblaApi.on('pointerUp', handleMouseUp);
      emblaApi.on('pointerLeave', handleMouseUp); // Also reset if mouse leaves while dragging
    }
    return () => {
      if (emblaApi) {
        emblaApi.off('pointerDown', handleMouseDown);
        emblaApi.off('pointerUp', handleMouseUp);
        emblaApi.off('pointerLeave', handleMouseUp);
      }
    };
  }, [emblaApi, handleMouseDown, handleMouseUp]);


  return (
    <div className={cn("embla overflow-hidden relative", className)}>
      <div
        className={cn("embla__viewport", isDragging ? "cursor-grabbing" : "cursor-grab")} // Apply cursor based on dragging state
        ref={emblaRef}
      >
        <div className="embla__container flex touch-pan-y -ml-4"> {/* Removed cursor-grab from here */}
          {React.Children.map(children, (child, index) => (
            <div key={index} className={cn("embla__slide flex-shrink-0 min-w-0 pl-4", slideClassName)}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;