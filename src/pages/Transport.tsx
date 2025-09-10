import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import transportHero from '@/assets/transport-hero.jpg';

const Transport = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Animated Flow Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Vertical flowing lines */}
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-emerald-400 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-emerald-300 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Moving Data Points */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
        <div className="absolute top-48 right-32 w-3 h-3 bg-emerald-300 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-emerald-500 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 right-24 w-3 h-3 bg-emerald-400 rounded-full animate-ping" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-in-left">
              Redefining the Way We Move
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              From real-time monitoring to predictive traffic insights, digital twins make travel seamless and efficient.
            </p>
          </div>

          {/* Hero Image Section */}
          <div className="mb-16 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={transportHero} 
                alt="Digital Twin Smart Transportation"
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </div>
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 border-2 border-emerald-400 rounded-full animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Traffic Optimization</h3>
              <p className="text-blue-200">Real-time traffic flow analysis and intelligent routing to reduce congestion and travel time.</p>
            </div>

            <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 border-2 border-emerald-400 rounded animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Autonomous Vehicles</h3>
              <p className="text-blue-200">Connected vehicle networks with predictive maintenance and safety optimization.</p>
            </div>

            <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in" style={{ animationDelay: '1.5s' }}>
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 border-2 border-emerald-400 rounded-sm animate-ping" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Smart Infrastructure</h3>
              <p className="text-blue-200">Intelligent transportation systems with real-time monitoring and adaptive control.</p>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '1.8s' }}>
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              size="lg"
              className="bg-blue-900/30 border-emerald-500/50 text-white hover:bg-blue-800/50 hover:border-emerald-400 hover:shadow-glow hover:shadow-emerald-500/30 transition-all duration-300 group"
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

export default Transport;