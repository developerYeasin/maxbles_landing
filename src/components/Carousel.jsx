import React, { useCallback, useEffect, useRef } from 'react';
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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Optional: Add navigation dots or arrows if needed, but for auto-play, often not required.
  // For simplicity, I'm omitting explicit navigation buttons for now.

  return (
    <div className={cn("embla overflow-hidden relative", className)}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex touch-pan-y -ml-4"> {/* Added negative margin for gap */}
          {React.Children.map(children, (child, index) => (
            <div key={index} className={cn("embla__slide flex-shrink-0 min-w-0 pl-4", slideClassName)}> {/* Added padding for gap */}
              {child}
            </div>
          ))}
        </div>
      </div>
      {/* Optional navigation arrows */}
      {/* <button className="embla__prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 p-2 rounded-full shadow-md" onClick={scrollPrev}>&#9664;</button>
      <button className="embla__next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 p-2 rounded-full shadow-md" onClick={scrollNext}>&#9654;</button> */}
    </div>
  );
};

export default Carousel;