import React from 'react';
import DigitalTwinsTitle from '@/components/DigitalTwinsTitle';
import DigitalTwinsButton from '@/components/DigitalTwinsButton';

// Import images
import manufacturingTraditional from '@/assets/manufacturing-traditional.jpg';
import manufacturingTech from '@/assets/manufacturing-tech.jpg';
import transportTraditional from '@/assets/transport-traditional.jpg';
import transportTech from '@/assets/transport-tech.jpg';
import healthcareTraditional from '@/assets/healthcare-traditional.jpg';
import healthcareTech from '@/assets/healthcare-tech.jpg';

const Index = () => {
  const handleButtonClick = (category: string) => {
    console.log(`Clicked on ${category}`);
    // Add navigation or modal logic here
  };

  return (
    <div className="min-h-screen bg-gradient-cyber relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-neon-cyan rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-electric-teal rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-digital-mint rounded-full blur-2xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--neon-cyan) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--neon-cyan) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 container mx-auto px-8 py-16">
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Title Section */}
          <DigitalTwinsTitle />

          {/* Buttons Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
            <DigitalTwinsButton
              title="Engineering & Manufacturing"
              traditionalImage={manufacturingTraditional}
              techImage={manufacturingTech}
              onClick={() => handleButtonClick('Engineering & Manufacturing')}
            />
            
            <DigitalTwinsButton
              title="Smart Transport"
              traditionalImage={transportTraditional}
              techImage={transportTech}
              onClick={() => handleButtonClick('Smart Transport')}
            />
            
            <DigitalTwinsButton
              title="Healthcare"
              traditionalImage={healthcareTraditional}
              techImage={healthcareTech}
              onClick={() => handleButtonClick('Healthcare')}
            />
          </div>

          {/* Bottom decoration */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 text-muted-foreground text-sm">
              <div className="w-8 h-px bg-gradient-neon" />
              <span>Explore the Future</span>
              <div className="w-8 h-px bg-gradient-neon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
