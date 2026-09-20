import React from 'react';
import { Sun, Cloud, CloudRain, Snowflake, Calendar } from 'lucide-react';

const MONTHS = [
  { month: 'Jan', temp: '5°C', icon: Snowflake, label: 'Cold', color: 'text-blue-300' },
  { month: 'Feb', temp: '7°C', icon: Snowflake, label: 'Cold', color: 'text-blue-300' },
  { month: 'Mar', temp: '12°C', icon: Cloud, label: 'Mild', color: 'text-white/70' },
  { month: 'Apr', temp: '15°C', icon: Cloud, label: 'Pleasant', color: 'text-white/70' },
  { month: 'May', temp: '19°C', icon: Sun, label: 'Warm', color: 'text-yellow-200' },
  { month: 'Jun', temp: '23°C', icon: Sun, label: 'Best', color: 'text-yellow-300' },
  { month: 'Jul', temp: '25°C', icon: Sun, label: 'Best', color: 'text-yellow-300' },
  { month: 'Aug', temp: '24°C', icon: Sun, label: 'Best', color: 'text-yellow-300' },
  { month: 'Sep', temp: '20°C', icon: Sun, label: 'Great', color: 'text-yellow-200' },
  { month: 'Oct', temp: '14°C', icon: CloudRain, label: 'Rainy', color: 'text-blue-200' },
  { month: 'Nov', temp: '9°C', icon: CloudRain, label: 'Chilly', color: 'text-blue-300' },
  { month: 'Dec', temp: '5°C', icon: Snowflake, label: 'Festive', color: 'text-blue-300' },
];

const currentMonthIdx = new Date().getMonth();

export const BestTimeSection: React.FC = () => {
  return (
    <section id="best-time" className="w-full text-white border-t border-white/10 py-20 sm:py-28 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs sm:text-sm font-normal text-white tracking-normal mb-8">
            <Calendar className="w-4 h-4 text-white/70" />
            Plan Your Visit
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-[1.1] mt-6 mb-4">
            When to Visit<br />
            <span className="italic font-extralight text-white/90">Paris.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-normal leading-relaxed max-w-xl mx-auto">
            Paris is beautiful year-round, but each season offers a distinct charm. Find your perfect moment.
          </p>
        </div>

        {/* Month Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-12">
          {MONTHS.map((m, i) => {
            const Icon = m.icon;
            const isCurrent = i === currentMonthIdx;
            return (
              <div
                key={m.month}
                className={`flex flex-col items-center p-3 rounded-xl border transition-all duration-300 cursor-default ${
                  isCurrent
                    ? 'border-white bg-white/10 backdrop-blur-sm scale-105'
                    : 'border-white/15 bg-white/[0.02] hover:border-white/40 hover:bg-white/[0.06]'
                }`}
              >
                <span className="text-[10px] tracking-widest uppercase text-white/50 mb-1.5">{m.month}</span>
                <Icon className={`w-4 h-4 mb-1.5 ${m.color}`} />
                <span className="text-xs font-light text-white">{m.temp}</span>
                {isCurrent && (
                  <span className="text-[9px] mt-1 text-white/70 tracking-wide">Now</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Best Times Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl border border-yellow-300/20 bg-yellow-300/5 backdrop-blur-sm hover:border-yellow-300/40 transition-all duration-300">
            <div className="flex items-center gap-2 mb-2">
              <Sun className="w-4 h-4 text-yellow-200" />
              <span className="text-xs tracking-widest uppercase text-yellow-200/80">Peak Season</span>
            </div>
            <p className="text-sm text-white font-light">June, July, August</p>
            <p className="text-xs text-white/50 mt-1">Warm, vibrant, busy — the full Paris experience.</p>
          </div>
          <div className="p-5 rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-sm hover:border-white/30 transition-all duration-300">
            <div className="flex items-center gap-2 mb-2">
              <Cloud className="w-4 h-4 text-white/70" />
              <span className="text-xs tracking-widest uppercase text-white/60">Sweet Spot</span>
            </div>
            <p className="text-sm text-white font-light">May & September</p>
            <p className="text-xs text-white/50 mt-1">Fewer crowds, mild weather, still magical.</p>
          </div>
          <div className="p-5 rounded-2xl border border-blue-300/20 bg-blue-300/5 backdrop-blur-sm hover:border-blue-300/40 transition-all duration-300">
            <div className="flex items-center gap-2 mb-2">
              <Snowflake className="w-4 h-4 text-blue-200" />
              <span className="text-xs tracking-widest uppercase text-blue-200/80">Festive Season</span>
            </div>
            <p className="text-sm text-white font-light">November – February</p>
            <p className="text-xs text-white/50 mt-1">Christmas markets, fewer tourists, romantic mist.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
