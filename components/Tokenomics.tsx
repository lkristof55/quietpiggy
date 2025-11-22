import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Copy, Check } from 'lucide-react';
import { TOKEN_DATA } from '../constants';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="font-bold font-mono text-xs md:text-sm shadow-black drop-shadow-md">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const Tokenomics: React.FC = () => {
  const [copied, setCopied] = useState(false);
  
  // Replace with your actual contract address
  const contractAddress = '5QkgEoE8B12Yi9Kbu2SUcDZczxj37Lmt54xBqRiFpump';
  const shortAddress = `${contractAddress.slice(0, 4)}...${contractAddress.slice(-4)}`;
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="tokenomics" className="py-24 bg-presidential text-white relative">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">THE FILES ALLOCATION</h2>
          <p className="text-blue-100 font-mono text-sm tracking-widest">FINANCIAL DISCLOSURE FORM 1040-PIG</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Chart */}
          <div className="h-[400px] w-full bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 p-6 shadow-2xl">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={TOKEN_DATA}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={140}
                  fill="#8884d8"
                  dataKey="value"
                  stroke="none"
                >
                  {TOKEN_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff', fontFamily: 'monospace' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Stats - All 4 boxes */}
          <div className="space-y-8">
             <div className="bg-white text-gray-900 p-6 shadow-[8px_8px_0px_0px_#000000] border-2 border-black transform hover:-translate-y-1 transition-transform">
                <h3 className="font-bold text-xl mb-2 uppercase flex justify-between border-b-2 border-gray-200 pb-2">
                  <span>Total Supply</span>
                  <span className="font-mono text-presidential">47,000,000,000</span>
                </h3>
                <p className="text-gray-600 text-sm italic">"Enough for every citizen to have a ham sandwich. Metaphorically."</p>
             </div>

             <div className="bg-white text-gray-900 p-6 shadow-[8px_8px_0px_0px_#000000] border-2 border-black transform hover:-translate-y-1 transition-transform">
                <h3 className="font-bold text-xl mb-2 uppercase flex justify-between border-b-2 border-gray-200 pb-2">
                  <span>Tax</span>
                  <span className="font-mono text-censored">0 / 0</span>
                </h3>
                <p className="text-gray-600 text-sm italic">"We don't tax speech. We also don't tax memes. The IRS hates this one simple trick."</p>
             </div>

             <div className="bg-white text-gray-900 p-6 shadow-[8px_8px_0px_0px_#000000] border-2 border-black transform hover:-translate-y-1 transition-transform">
                <h3 className="font-bold text-xl mb-2 uppercase flex justify-between border-b-2 border-gray-200 pb-2">
                  <span>Liquidity</span>
                  <span className="font-mono text-gray-500">BURNED</span>
                </h3>
                <p className="text-gray-600 text-sm italic">"Unlike certain documents in the shredder, this is permanent."</p>
             </div>

             <div className="bg-white text-gray-900 p-6 shadow-[8px_8px_0px_0px_#000000] border-2 border-black transform hover:-translate-y-1 transition-transform">
                <h3 className="font-bold text-xl mb-3 uppercase flex justify-between items-center border-b-2 border-gray-200 pb-2">
                  <span>Contract Address</span>
                  <button
                    onClick={copyToClipboard}
                    className="p-1.5 rounded hover:bg-gray-100 transition-colors flex items-center gap-1 text-xs font-normal normal-case"
                    title={copied ? "Copied!" : "Copy to clipboard"}
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-green-600" />
                        <span className="text-green-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </h3>
                <div className="font-mono text-sm break-all mb-2">
                  <span className="text-gray-700">{shortAddress}</span>
                  <span 
                    className="text-gray-400 hover:text-gray-900 cursor-help ml-2" 
                    title={contractAddress}
                  >
                    (hover for full)
                  </span>
                </div>
                <p className="text-gray-600 text-sm italic">"The only address you can trust. (Besides your wallet.)"</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
