import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Redacted = ({ children, revealText }: { children: React.ReactNode, revealText: string }) => (
  <span className="group relative inline-block cursor-help mx-1 align-bottom">
    <span className="bg-black text-black group-hover:bg-transparent group-hover:text-censored transition-all duration-300 select-none px-1 rounded-sm">
       {children}
    </span>
    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
      {revealText}
      <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
    </span>
  </span>
);

interface TheFilesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TheFilesModal: React.FC<TheFilesModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#fcfcfc] shadow-2xl border-2 border-gray-900 transform rotate-[-0.5deg] custom-scrollbar" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors border-2 border-black shadow-lg"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Document Content */}
        <div className="p-8 md:p-16 relative">
          {/* Staples */}
          <div className="absolute top-4 left-4 w-12 h-4 bg-gray-300 rounded-full rotate-[-5deg] opacity-50"></div>
          <div className="absolute top-4 right-12 w-12 h-4 bg-gray-300 rounded-full rotate-[5deg] opacity-50"></div>

          {/* Stamps */}
          <div className="absolute top-10 right-10 border-4 border-red-700 text-red-700 px-4 py-2 text-2xl font-black uppercase tracking-widest opacity-40 rotate-12 pointer-events-none z-10">
            DECLASSIFIED
          </div>
          
          <div className="absolute bottom-20 left-10 border-4 border-presidential text-presidential px-4 py-2 text-xl font-black uppercase tracking-widest opacity-30 -rotate-12 pointer-events-none">
            FOR PUBLIC RELEASE
          </div>

          {/* Header */}
          <div className="border-b-4 border-black pb-6 mb-8">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-serif text-4xl font-bold text-gray-900 mb-2">
                  CLASSIFIED INTELLIGENCE BRIEFING
                </h2>
                <p className="font-mono text-sm text-gray-600">
                  DOCUMENT ID: CLASSIFIED-FILES-2024-PIGGY-001
                </p>
                <p className="font-mono text-xs text-gray-500 mt-1">
                  DATE: [REDACTED] | CLEARANCE LEVEL: PUBLIC EYES ONLY
                </p>
              </div>
              <div className="hidden sm:block">
                <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-white font-mono text-xs text-center p-2 border-4 border-red-600">
                  <span>NOT FOR</span>
                  <span className="block">DISTRIBUTION</span>
                  <span className="block">(EXCEPT TO HOLDERS)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mb-8 bg-yellow-50 border-l-4 border-yellow-600 p-4 font-serif">
            <h3 className="font-bold text-lg mb-2 uppercase text-gray-900">EXECUTIVE SUMMARY</h3>
            <p className="text-gray-800 leading-relaxed">
              This document contains <Redacted revealText="meme coin">classified</Redacted> intelligence regarding 
              the <Redacted revealText="$PIGGY token launch">Operation Quiet Piggy</Redacted>. All information 
              herein has been <Redacted revealText="legally approved by our lawyer">carefully vetted</Redacted> 
              and is suitable for public consumption. The intelligence community regrets any confusion.
            </p>
          </div>

          {/* Main Content */}
          <div className="font-serif text-base leading-relaxed text-gray-800 space-y-6">
            
            <section>
              <h3 className="font-bold text-xl mb-3 uppercase border-b-2 border-gray-300 pb-2">
                SECTION 1: ORIGINS OF THE THREAT
              </h3>
              <p>
                On an unspecified date, an unidentified subject (codenamed: <span className="font-bold">"THE PIG"</span>) 
                infiltrated <Redacted revealText="Twitter">secure communication channels</Redacted> using 
                <Redacted revealText="extremely good memes">advanced psychological warfare techniques</Redacted>. 
                Initial reports suggested the subject was harmless, but subsequent analysis revealed 
                <Redacted revealText="we made a meme coin">a sophisticated operation</Redacted> designed to 
                <Redacted revealText="make money">spread awareness</Redacted>.
              </p>
              <p className="mt-3 italic text-gray-600">
                Intelligence Note: The subject's preferred method of communication involves excessive use of 
                <Redacted revealText="emojis">classified symbols</Redacted> and 
                <Redacted revealText="Twitter">social media platforms</Redacted>. 
                Analysts are still determining if this constitutes a security risk or just poor taste.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-xl mb-3 uppercase border-b-2 border-gray-300 pb-2">
                SECTION 2: THE INCIDENT
              </h3>
              <p>
                During what should have been a routine <Redacted revealText="token launch">diplomatic briefing</Redacted>, 
                the subject bypassed all security protocols. Witnesses report the subject was wearing 
                <Redacted revealText="a fedora hat">protective headgear</Redacted> and carrying 
                <Redacted revealText="a microphone emoji">recording equipment</Redacted>.
              </p>
              <p className="mt-3">
                Attempts to <Redacted revealText="FUD">suppress</Redacted> the subject's message resulted in 
                <Redacted revealText="viral memes">unprecedented public response</Redacted>. The subject's 
                catchphrase, <span className="font-bold">"BE QUIET"</span>, has since been adopted by 
                <Redacted revealText="degenerates">supporters</Redacted> worldwide.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-xl mb-3 uppercase border-b-2 border-gray-300 pb-2">
                SECTION 3: FINANCIAL IMPLICATIONS
              </h3>
              <p>
                Our <Redacted revealText="rug pull">financial analysts</Redacted> have determined that the 
                subject's activities have <Redacted revealText="pumped the token">impacted markets</Redacted> 
                in ways we don't fully understand. The <Redacted revealText="market cap">economic indicators</Redacted> 
                suggest <Redacted revealText="moon">continued growth</Redacted>, though we're not entirely 
                sure why. Our usual methods of <Redacted revealText="regulation">intervention</Redacted> 
                appear to be ineffective against <Redacted revealText="the power of memes">this threat</Redacted>.
              </p>
              <div className="bg-gray-100 p-4 border-l-4 border-censored mt-4 font-mono text-sm">
                <span className="font-bold text-red-600">CLASSIFIED NOTE:</span> We've tried everything. 
                Taxes didn't work. Regulations didn't work. Even trying to ignore it didn't work. 
                At this point, we're considering <Redacted revealText="buying more">strategic options</Redacted>.
              </div>
            </section>

            <section>
              <h3 className="font-bold text-xl mb-3 uppercase border-b-2 border-gray-300 pb-2">
                SECTION 4: CURRENT STATUS
              </h3>
              <p>
                The subject is currently <Redacted revealText="on Solana blockchain">at large</Redacted>, 
                with sightings reported across <Redacted revealText="Twitter, Telegram, Discord">multiple 
                communication channels</Redacted>. Intelligence suggests the subject is planning 
                <Redacted revealText="community takeover">further operations</Redacted>.
              </p>
              <p className="mt-3">
                We have <Redacted revealText="no idea">limited visibility</Redacted> into the subject's 
                long-term plans. However, intercepted communications suggest the subject believes in 
                <Redacted revealText="decentralization">transparency</Redacted> and 
                <Redacted revealText="community governance">democratic processes</Redacted>, which is 
                <Redacted revealText="concerning for our centralized model">unexpected</Redacted>.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-xl mb-3 uppercase border-b-2 border-gray-300 pb-2">
                SECTION 5: RECOMMENDATIONS
              </h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><Redacted revealText="Buy the token">Monitor the situation</Redacted> closely.</li>
                <li>Do not <Redacted revealText="sell">engage</Redacted> the subject directly.</li>
                <li><Redacted revealText="HODL">Maintain</Redacted> current protocols.</li>
                <li>Prepare for <Redacted revealText="the moon">potential escalation</Redacted>.</li>
                <li><Redacted revealText="Tell your friends">Classify this document</Redacted> appropriately.</li>
              </ol>
            </section>

            {/* Classified Warning */}
            <div className="bg-red-50 border-2 border-red-600 p-6 mt-8 font-mono text-sm">
              <p className="font-bold text-red-600 mb-2 uppercase">⚠ CLASSIFIED INFORMATION ⚠</p>
              <p className="text-gray-800 leading-relaxed">
                This document contains <Redacted revealText="zero">sensitive</Redacted> information. 
                Unauthorized distribution is <Redacted revealText="actually encouraged">prohibited</Redacted>. 
                Violators will be <Redacted revealText="welcomed to the community">prosecuted</Redacted>.
              </p>
            </div>

          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t-2 border-gray-300 flex justify-between items-center font-mono text-xs text-gray-500 uppercase">
            <div>
              <p>Page 1 of 420</p>
              <p className="mt-1">Ref: CLASSIFIED-FILES-PIGGY-2024</p>
            </div>
            <div className="text-right">
              <p>APPROVED FOR PUBLIC RELEASE</p>
              <p className="mt-1">By: The Quiet Piggy Administration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

