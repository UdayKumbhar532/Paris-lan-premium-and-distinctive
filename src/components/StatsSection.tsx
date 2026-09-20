import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: 12000, suffix: '+', label: 'Travelers Served' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
  { value: 150, suffix: '+', label: 'Curated Experiences' },
  { value: 8, suffix: ' yrs', label: 'Of Paris Expertise' },
];

function useCountUp(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!started) return;
    startTimeRef.current = undefined;

    const animate = (now: number) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, started]);

  return count;
}

const StatCard: React.FC<{ stat: StatItem; started: boolean }> = ({ stat, started }) => {
  const count = useCountUp(stat.value, 2200, started);
  return (
    <div className="flex flex-col items-center text-center px-4 py-6">
      <span className="text-4xl sm:text-5xl font-light text-white leading-none mb-2">
        {count.toLocaleString()}{stat.suffix}
      </span>
      <span className="text-xs tracking-[0.25em] uppercase text-white/50 font-normal">
        {stat.label}
      </span>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="w-full border-t border-white/10 py-16 sm:py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
};
