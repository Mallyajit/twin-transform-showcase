import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import engineeringHero from '@/assets/engineering-hero.jpg';

const Engineering = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-slate-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-40 w-24 h-24 border border-slate-300 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-slate-400 rounded-lg animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-slate-300 rounded-full animate-spin" style={{ animationDuration: '15s', animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 container mx-auto px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-in-left">
              Building Smarter, Faster, Safer
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              Digital twins optimize production, reduce downtime, and drive innovation in factories and design labs.
            </p>
          </div>

          {/* Hero Image Section */}
          <div className="mb-16 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={engineeringHero} 
                alt="Digital Twin Engineering and Manufacturing"
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 border-2 border-slate-300 rounded animate-spin" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Smart Manufacturing</h3>
              <p className="text-slate-300">Real-time monitoring and optimization of production processes through digital twin technology.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 border-2 border-slate-300 rounded-sm animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Predictive Maintenance</h3>
              <p className="text-slate-300">Prevent equipment failures and reduce downtime with AI-powered predictive analytics.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in" style={{ animationDelay: '1.5s' }}>
              <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 border-2 border-slate-300 rounded-full animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Design Innovation</h3>
              <p className="text-slate-300">Accelerate product development with virtual prototyping and simulation capabilities.</p>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '1.8s' }}>
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              size="lg"
              className="bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/70 hover:border-slate-500 hover:shadow-glow transition-all duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Homepage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engineering;