import React, { useEffect, useRef } from 'react';

/**
 * CursorGlow - Smooth ambient glow that follows the cursor.
 * Creates a premium cinematic feel as users move around the page.
 */
export const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -300, y: -300 });
  const currentRef = useRef({ x: -300, y: -300 });
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const loop = () => {
      currentRef.current.x = lerp(currentRef.current.x, posRef.current.x, 0.07);
      currentRef.current.y = lerp(currentRef.current.y, posRef.current.y, 0.07);
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentRef.current.x - 200}px, ${currentRef.current.y - 200}px)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 40%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 5,
        transition: 'opacity 0.3s ease',
        willChange: 'transform',
      }}
    />
  );
};
