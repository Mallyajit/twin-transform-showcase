import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface DigitalTwinsButtonProps {
  title: string;
  traditionalImage: string;
  techImage: string;
  onClick?: () => void;
  className?: string;
}

const DigitalTwinsButton: React.FC<DigitalTwinsButtonProps> = ({
  title,
  traditionalImage,
  techImage,
  onClick,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative w-80 h-64 rounded-xl overflow-hidden cursor-pointer tech-button transition-all duration-500 hover:scale-105 hover:shadow-cyber border border-border/40 hover:border-neon-cyan/60",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-all duration-700">
        <img
          src={traditionalImage}
          alt={`Traditional ${title}`}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            isHovered ? "opacity-0 scale-110" : "opacity-100 scale-100"
          )}
        />
        <img
          src={techImage}
          alt={`Technology-enhanced ${title}`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-700",
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-blue/90 via-cyber-blue/40 to-transparent group-hover:from-cyber-blue/70 transition-all duration-500" />

      {/* Glow Effect */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-glow opacity-0 transition-all duration-500",
          isHovered && "opacity-30"
        )}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
        <h3 className="text-xl font-bold text-glow-white mb-2 transition-all duration-500 group-hover:text-neon-cyan group-hover:glow-text">
          {title}
        </h3>
        
        {/* Progress indicators */}
        <div className="flex space-x-1 mb-3">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1 bg-border transition-all duration-500 rounded-full",
                isHovered ? "bg-neon-cyan shadow-glow" : "bg-muted-foreground/40",
                i === 0 ? "w-8" : i === 1 ? "w-6" : i === 2 ? "w-4" : "w-3"
              )}
            />
          ))}
        </div>

        {/* Animated subtitle */}
        <div className="overflow-hidden">
          <p 
            className={cn(
              "text-sm text-muted-foreground transition-all duration-500 transform",
              isHovered 
                ? "translate-x-0 opacity-100 text-electric-teal" 
                : "translate-x-full opacity-0"
            )}
          >
            {isHovered ? "Technology Enhanced" : "Traditional Approach"}
          </p>
        </div>
      </div>

      {/* Floating particles effect */}
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="floating-particles"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </>
      )}

      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-neon-cyan/40 transition-all duration-500 group-hover:border-neon-cyan group-hover:shadow-glow" />
    </div>
  );
};

export default DigitalTwinsButton;