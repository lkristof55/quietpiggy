import React, { useEffect, useState } from 'react';
import { Mic, FileText } from 'lucide-react';
import { TheFilesModal } from './TheFilesModal';

export const Hero: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [filesModalOpen, setFilesModalOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setOffset({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="mission" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-paper">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 z-0"
        style={{
          transform: `translate(${offset.x * -1}px, ${offset.y * -1}px)`,
          backgroundImage: 'radial-gradient(circle at 50% 50%, #5D8AA8 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Silhouette Parallax */}
      <div 
        className="absolute bottom-0 right-0 w-[800px] h-[400px] opacity-20 pointer-events-none z-0 transition-transform duration-75 ease-out"
        style={{ transform: `translate(${offset.x * 2}px, ${offset.y * 2}px)` }}
      >
         {/* Abstract shape resembling plane tail */}
         <svg viewBox="0 0 200 100" className="w-full h-full fill-presidential">
            <path d="M0,100 L200,100 L180,20 L100,40 L50,80 Z" />
         </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 z-10 text-center relative">
        
        {/* Floating Badge */}
        <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm animate-float">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Transmission Live from Air Force One</span>
        </div>

        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-6">
          THEY TOLD US TO <br/>
          <span className="relative inline-block">
            BE QUIET.
            <div className="absolute -inset-1 bg-censored transform -skew-x-3 opacity-90 -z-10"></div>
            <span className="absolute -right-8 -top-8 transform rotate-12 border-2 border-red-800 text-red-800 px-2 py-1 text-sm font-bold uppercase opacity-80 hidden lg:block">Censored</span>
          </span>
          <br/>
          <span className="text-presidential">WE GOT LOUDER.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          A digital pig with a microphone vs. a presidential "shhh". 
          <span className="block mt-2 font-serif italic text-gray-500 text-base">
            Historical odds favor the internet.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => {
              const incidentSection = document.getElementById('incident');
              if (incidentSection) {
                const offset = 150;
                const elementPosition = incidentSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="group relative bg-presidential text-white px-8 py-4 text-lg font-bold uppercase tracking-wider shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all border-2 border-black flex items-center cursor-pointer"
          >
            <Mic className="mr-2 group-hover:animate-bounce" size={20} />
            Unsilence The Pig
          </button>
          
          <button 
            onClick={() => setFilesModalOpen(true)}
            className="group bg-white text-gray-900 px-8 py-4 text-lg font-bold uppercase tracking-wider shadow-[6px_6px_0px_0px_#e5e7eb] hover:shadow-none hover:bg-gray-50 transition-all border-2 border-gray-200 flex items-center cursor-pointer"
          >
            <FileText className="mr-2 text-gray-400 group-hover:text-gray-600 transition-colors" size={20} />
            View The Files
          </button>
        </div>
      </div>

      {/* Decorative Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-piggy opacity-20 blur-[120px] -z-10 rounded-full pointer-events-none mix-blend-multiply"></div>

      {/* The Files Modal */}
      <TheFilesModal isOpen={filesModalOpen} onClose={() => setFilesModalOpen(false)} />
    </section>
  );
};
