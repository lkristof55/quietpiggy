import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = [
    "Accessing classified files...",
    "Decrypting pig communications...",
    "Bypassing security protocols...",
    "Initializing squeal sequence...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    const phaseInterval = setInterval(() => {
      setPhase((prev) => (prev < phases.length - 1 ? prev + 1 : prev));
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(phaseInterval);
    };
  }, [onComplete]);

  useEffect(() => {
    setPhase(Math.floor((progress / 100) * phases.length));
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-[#1a2332] z-[9999] flex items-center justify-center">
      <div className="text-center">
        {/* Animated Piggy Logo */}
        <div className="mb-12 relative">
          <div className="w-32 h-32 mx-auto relative animate-bounce">
            <img 
              src="/assets/images/piggy-logo.png" 
              alt="Quiet Piggy Logo" 
              className="w-full h-full object-contain"
              style={{ mixBlendMode: 'normal' }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8 min-h-[60px]">
          <p className="text-white font-mono text-lg mb-2">{phases[phase] || phases[phases.length - 1]}</p>
          <div className="text-presidential text-xs font-mono">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto bg-gray-800 border-2 border-gray-700 h-4 relative overflow-hidden">
          <div
            className="h-full bg-presidential transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 text-gray-400 font-mono text-xs">
          <p>CLASSIFIED - EYES ONLY</p>
          <p className="mt-2 text-red-500 animate-pulse">⚠ DO NOT DISTRIBUTE ⚠</p>
        </div>
      </div>
    </div>
  );
};

