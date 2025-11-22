import React from 'react';
import { Plane, Radio, CheckCircle2, CircleDashed } from 'lucide-react';

export const FlightPlan: React.FC = () => {
  const phases = [
    {
      title: "TAKEOFF",
      desc: "Launch on Solana. Stealth deployment. No presale (we aren't politicians).",
      status: "complete"
    },
    {
      title: "TURBULENCE",
      desc: "Viral Twitter chaos. The hashtag #QuietPiggy trends above legitimate news.",
      status: "active"
    },
    {
      title: "PRESS CONFERENCE",
      desc: "Listings on CMC/CG. The mainstream media is forced to acknowledge the pig.",
      status: "pending"
    },
    {
      title: "THE FILES DROP",
      desc: "Exclusive NFT meme pack unlocks for top holders. Redactions removed.",
      status: "pending"
    },
    {
      title: "ALTITUDE UNKNOWN",
      desc: "Depends entirely on community insanity. Moon or Mars.",
      status: "pending"
    }
  ];

  return (
    <section id="flight-plan" className="py-24 bg-gray-900 text-green-400 font-mono relative overflow-hidden">
      
      {/* Radar overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] border border-green-500/30 rounded-full absolute animate-spin-slow"></div>
        <div className="w-[600px] h-[600px] border border-green-500/30 rounded-full absolute"></div>
        <div className="w-[400px] h-[400px] border border-green-500/30 rounded-full absolute"></div>
        <div className="w-full h-[1px] bg-green-500/20 absolute top-1/2"></div>
        <div className="h-full w-[1px] bg-green-500/20 absolute left-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900/30 mb-6 border border-green-500 animate-pulse">
            <Plane className="text-green-400" size={32} />
          </div>
          <h2 className="text-4xl font-bold text-white mb-2 tracking-tighter">FLIGHT PLAN</h2>
          <p className="text-green-500/60 text-sm">RADAR SYSTEM: ACTIVE</p>
        </div>

        <div className="space-y-12">
          {phases.map((phase, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 group">
              
              {/* Time/Status Marker */}
              <div className="flex-none md:w-32 flex flex-col items-center md:items-end pt-1">
                 <span className={`text-xs uppercase border px-2 py-1 mb-2 ${phase.status === 'complete' ? 'border-green-500 text-green-400' : phase.status === 'active' ? 'border-yellow-400 text-yellow-400 animate-pulse' : 'border-gray-600 text-gray-600'}`}>
                   {phase.status === 'active' ? 'Current Alt' : phase.status}
                 </span>
              </div>

              {/* Timeline Line */}
              <div className="hidden md:flex flex-col items-center px-4 relative">
                <div className={`w-4 h-4 rounded-full border-2 z-10 bg-gray-900 ${phase.status === 'complete' ? 'bg-green-500 border-green-500' : phase.status === 'active' ? 'border-yellow-400' : 'border-gray-700'}`}></div>
                {idx !== phases.length - 1 && <div className="w-0.5 h-full bg-gray-800 absolute top-4"></div>}
              </div>

              {/* Content */}
              <div className="flex-1 bg-gray-800/50 p-6 border border-green-900/50 hover:border-green-500/50 transition-colors rounded-sm relative overflow-hidden">
                 {/* Scanline effect */}
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none h-full w-full bg-[length:100%_4px]"></div>
                 
                 <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                    {phase.status === 'active' && <Radio className="text-yellow-400 animate-ping" size={16} />}
                 </div>
                 <p className="text-green-400/80">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <p className="text-xs text-gray-500 border-t border-gray-800 pt-4 inline-block px-8">
             DISCLAIMER: All timelines are estimates. Blockchain time is not real time. 
             Ideally, we land before we run out of fuel.
           </p>
        </div>
      </div>
    </section>
  );
};
