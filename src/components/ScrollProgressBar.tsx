import React, { useEffect, useRef } from 'react';

/**
 * ScrollProgressBar - Thin cinematic progress line at top of page
 */
export const ScrollProgressBar: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.width = `${pct}%`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        zIndex: 9999,
        background: 'rgba(255,255,255,0.1)',
      }}
    >
      <div
        ref={barRef}
        style={{
          height: '100%',
          width: '0%',
          background: 'linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,1))',
          transition: 'width 0.1s ease',
          boxShadow: '0 0 8px rgba(255,255,255,0.6)',
        }}
      />
    </div>
  );
};
