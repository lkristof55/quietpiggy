import React from 'react';

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

export const IncidentReport: React.FC = () => {
  return (
    <section id="incident" className="py-24 bg-gray-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* The Document Container */}
        <div className="bg-[#fcfcfc] p-8 md:p-16 shadow-2xl transform rotate-1 relative border border-gray-300">
          
          {/* Staples / Clips */}
          <div className="absolute top-4 left-4 w-12 h-4 bg-gray-300 rounded-full rotate-[-5deg] opacity-50"></div>

          {/* Stamps */}
          <div className="absolute top-10 right-10 border-4 border-red-700 text-red-700 px-4 py-2 text-2xl font-black uppercase tracking-widest opacity-40 rotate-12 pointer-events-none">
            Declassified
          </div>
          
          <div className="absolute bottom-20 left-10 border-4 border-presidential text-presidential px-4 py-2 text-xl font-black uppercase tracking-widest opacity-30 -rotate-12 pointer-events-none">
            Confidential
          </div>

          {/* Header */}
          <div className="border-b-2 border-black pb-6 mb-8 flex justify-between items-end">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">INCIDENT REPORT: #AF1-PIGGY</h2>
              <p className="font-mono text-sm text-gray-500 mt-1">DATE: 09/25/202X | LOCATION: 35,000 FT</p>
            </div>
            <div className="hidden sm:block">
               <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-mono text-xs text-center p-2">
                 DO NOT COPY
               </div>
            </div>
          </div>

          {/* Body Text */}
          <div className="font-serif text-lg leading-loose text-gray-800 space-y-6">
            <p>
              <strong className="uppercase font-sans text-sm tracking-wide text-gray-500">Summary of Events:</strong><br/>
              During a routine press interaction aboard the executive aircraft, an unidentified journalist (later identified as species <span className="italic">Sus domesticus</span>) bypassed security protocols using <Redacted revealText="sheer cuteness">advanced stealth tech</Redacted>.
            </p>

            <p>
              The subject approached the podium while holding a <Redacted revealText="plastic toy mic">recording device</Redacted> and inquired about the allocation of <Redacted revealText="blockchain assets">national reserves</Redacted>. When prompted by security to "cease squealing," the subject instead donned a fedora and initiated the <Redacted revealText="$PIGGY Token Generation Event">Operation Loudmouth</Redacted> protocol.
            </p>

            <p>
              Attempts to silence the subject resulted in a <Redacted revealText="3000% meme pump">catastrophic PR failure</Redacted>. The subject was last seen parachuting with a Ledger Nano S.
            </p>
            
            <div className="bg-gray-100 p-4 border-l-4 border-censored mt-8 font-mono text-sm text-gray-700">
              <span className="font-bold text-red-600">NOTE FROM COMMAND:</span> Do not feed the pig. Do not buy the dip. (Wait, actually, buy the dip, just don't tell the Senator).
            </div>
          </div>

          {/* Footer of Doc */}
          <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between items-center font-mono text-xs text-gray-400 uppercase">
             <span>Page 1 of 420</span>
             <span>Ref: SOL-PIG-8821</span>
          </div>
        </div>
      </div>
    </section>
  );
};
