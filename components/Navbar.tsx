import React, { useState, useEffect } from 'react';
import { Menu, X, AlertCircle } from 'lucide-react';
import { NAV_ITEMS, BREAKING_NEWS } from '../constants';
import { scrollToSection } from '../utils/scrollTo';
import { Confetti } from './Confetti';

const BuyPiggyButton: React.FC<{ mobile?: boolean }> = ({ mobile = false }) => {
  const [confetti, setConfetti] = useState(false);

  const handleClick = () => {
    setConfetti(true);
    // Add your buy functionality here
    console.log('BUY $PIGGY clicked!');
  };

  return (
    <>
      <Confetti trigger={confetti} onComplete={() => setConfetti(false)} />
      <button
        onClick={handleClick}
        className={`bg-presidential hover:bg-presidential-dark text-white px-6 py-3 text-base font-bold rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all border border-black ${mobile ? 'w-full mt-2' : ''}`}
      >
        BUY $PIGGY
      </button>
    </>
  );
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans">
      {/* News Ticker */}
      <div className="bg-black text-white py-1 overflow-hidden flex items-center border-b-2 border-censored h-10 relative">
        <div className="bg-censored text-white px-3 py-1 text-xs font-bold uppercase tracking-widest absolute left-0 z-10 h-full flex items-center shadow-lg">
          <AlertCircle size={14} className="mr-2" />
          Breaking
        </div>
        <div className="whitespace-nowrap overflow-hidden flex-1 ml-24">
          <div className="animate-marquee inline-block">
            {BREAKING_NEWS.map((news, idx) => (
              <span key={idx} className={`mx-8 text-sm ${news.urgent ? 'text-red-400 font-bold' : 'text-gray-300'}`}>
                {news.text}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {BREAKING_NEWS.map((news, idx) => (
              <span key={`dup-${idx}`} className={`mx-8 text-sm ${news.urgent ? 'text-red-400 font-bold' : 'text-gray-300'}`}>
                {news.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`transition-all duration-300 border-b border-gray-200/10 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo Area - Left aligned */}
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="w-14 h-14 flex items-center justify-center overflow-visible">
                <img 
                  src="/assets/images/piggy-logo.png" 
                  alt="Quiet Piggy Logo" 
                  className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'normal', background: 'transparent' }}
                />
              </div>
              <span className={`text-2xl font-bold tracking-tight font-serif ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                QUIET PIGGY
              </span>
            </div>

            {/* Desktop Links - Right aligned */}
            <div className="hidden md:flex items-center space-x-10">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const id = item.href.replace('#', '');
                    scrollToSection(id, 150);
                  }}
                  className="text-base font-medium text-gray-600 hover:text-presidential transition-colors relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-censored transition-all group-hover:w-full"></span>
                </a>
              ))}
              <BuyPiggyButton />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-900 focus:outline-none"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-3 flex flex-col">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    const id = item.href.replace('#', '');
                    setTimeout(() => scrollToSection(id, 150), 100);
                  }}
                  className="block text-base font-medium text-gray-800 py-2 border-b border-gray-100 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <BuyPiggyButton mobile />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
