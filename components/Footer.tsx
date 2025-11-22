import React from 'react';
import { Twitter } from 'lucide-react';

// PumpFun Icon Component - Pill/Capsule shape (outline style like Twitter)
const PumpFunIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Capsule shape - ellipse with horizontal line dividing two halves */}
    <ellipse cx="12" cy="12" rx="8" ry="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-piggy border border-black flex items-center justify-center text-xs font-bold">
                QP
            </div>
            <span className="font-serif font-bold text-xl tracking-tight">QUIET PIGGY</span>
        </div>

        <div className="flex space-x-8 mb-8">
          <a href="https://x.com/quietpiggyX" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-presidential hover:text-white transition-all transform hover:-translate-y-1">
            <Twitter size={20} />
          </a>
          <a href="https://pump.fun/coin/5QkgEoE8B12Yi9Kbu2SUcDZczxj37Lmt54xBqRiFpump" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-presidential hover:text-white transition-all transform hover:-translate-y-1">
            <PumpFunIcon size={20} />
          </a>
        </div>

        <div className="text-center max-w-2xl text-gray-500 text-sm space-y-4">
          <p>
            $PIGGY is a meme coin with no intrinsic value or expectation of financial return. 
            The coin is for entertainment purposes only. No pigs were silenced during development.
          </p>
          <p className="font-mono text-xs">
            © {new Date().getFullYear()} Quiet Piggy Administration. Not affiliated with any government agency, obviously.
          </p>
        </div>
      </div>
    </footer>
  );
};
