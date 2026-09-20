import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * BackToTop — Floats in bottom-right corner, appears after scrolling 300px
 */
export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 1000,
        width: 44,
        height: 44,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(255,255,255,0.3)',
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(12px)',
        color: '#fff',
        cursor: 'pointer',
        transition: 'opacity 0.3s ease, transform 0.3s ease, background 0.2s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        pointerEvents: visible ? 'all' : 'none',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.9)';
        (e.currentTarget as HTMLButtonElement).style.color = '#000';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)';
        (e.currentTarget as HTMLButtonElement).style.color = '#fff';
      }}
    >
      <ArrowUp style={{ width: 18, height: 18 }} />
    </button>
  );
};
