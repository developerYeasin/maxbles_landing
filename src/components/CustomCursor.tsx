import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <div
      className="fixed z-[9999] pointer-events-none transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)', // Center the cursor on the mouse position
      }}
    >
      <div className="custom-cursor-outer flex items-center justify-center">
        <div className="custom-cursor-inner" />
      </div>
    </div>
  );
};

export default CustomCursor;