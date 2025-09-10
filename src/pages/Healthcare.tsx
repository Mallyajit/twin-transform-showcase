import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import healthcareHero from '@/assets/healthcare-hero.jpg';

const Healthcare = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-white relative overflow-hidden">
      {/* Heartbeat/Pulse Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-1/4 left-0 w-full h-24" viewBox="0 0 1200 100">
          <path
            d="M0,50 L200,50 L220,20 L240,80 L260,10 L280,90 L300,50 L1200,50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-teal-400 animate-pulse"
          />
        </svg>
        <svg className="absolute top-2/3 left-0 w-full h-24" viewBox="0 0 1200 100">
          <path
            d="M0,50 L150,50 L170,30 L190,70 L210,20 L230,80 L250,50 L1200,50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-teal-300 animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      {/* Floating Medical Icons */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-20 w-8 h-8 bg-teal-400 rounded-full animate-float" />
        <div className="absolute top-48 right-32 w-6 h-6 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-40 w-10 h-10 bg-teal-300 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 right-24 w-7 h-7 bg-cyan-300 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 animate-slide-in-left">
              Healing with Precision
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              Virtual patient models and treatment simulations ensure safer, faster, and more personalized healthcare.
            </p>
          </div>

          {/* Hero Image Section */}
          <div className="mb-16 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={healthcareHero} 
                alt="Digital Twin Healthcare Technology"
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent" />
            </div>
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 border-2 border-teal-500 rounded-full animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Virtual Patient Models</h3>
              <p className="text-slate-600">Create accurate digital representations of patients for personalized treatment planning and simulation.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 border-2 border-cyan-500 rounded animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Treatment Simulation</h3>
              <p className="text-slate-600">Test treatment outcomes virtually before implementation to ensure optimal patient care and safety.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in" style={{ animationDelay: '1.5s' }}>
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 border-2 border-teal-500 rounded-sm animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Medical Equipment Monitoring</h3>
              <p className="text-slate-600">Real-time monitoring and predictive maintenance of critical medical devices and systems.</p>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '1.8s' }}>
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              size="lg"
              className="bg-white/70 border-teal-500/50 text-slate-800 hover:bg-teal-50 hover:border-teal-500 hover:shadow-glow hover:shadow-teal-500/30 transition-all duration-300 group"
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

export default Healthcare;