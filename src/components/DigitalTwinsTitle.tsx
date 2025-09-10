import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const DigitalTwinsTitle: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative text-center mb-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Title */}
      <h1 className="text-6xl md:text-8xl font-bold text-glow-white mb-6 transition-all duration-500 hover:glow-text cursor-default">
        DIGITAL TWINS:
      </h1>

      {/* Subtitle with slide animation */}
      <div className="relative overflow-hidden h-16">
        <p 
          className={cn(
            "text-2xl md:text-3xl font-light text-electric-teal transition-all duration-800 absolute inset-0 flex items-center justify-center",
            isHovered 
              ? "transform translate-x-0 opacity-100 slide-text-enter" 
              : "transform -translate-x-full opacity-0"
          )}
        >
          Where the physical meets the virtual
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-neon rounded-full opacity-60" />
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-digital rounded-full opacity-40" />
      
      {/* Floating accent dots */}
      <div className="absolute top-8 left-8 w-2 h-2 bg-neon-cyan rounded-full animate-pulse-glow" />
      <div className="absolute top-16 right-12 w-1.5 h-1.5 bg-electric-teal rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-8 left-16 w-1 h-1 bg-digital-mint rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-12 right-8 w-2.5 h-2.5 bg-neon-cyan/60 rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default DigitalTwinsTitle;