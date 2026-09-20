import React, { useEffect, useRef } from 'react';

/**
 * ScrollCanvasBackground
 *
 * Plays 300 frames of animation across the full page scroll.
 * No preloader — frames load silently in the background.
 */
export const ScrollCanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const FRAME_COUNT = 300;
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | undefined>(undefined);
  const loadedCountRef = useRef(0);

  // ─── Frame URL helper ────────────────────────────────────────────────────
  const frameUrl = (index: number) =>
    `/assets/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;

  // ─── Draw one frame to canvas (cover-fit) ────────────────────────────────
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const images = imagesRef.current;
    const img = images[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scale = Math.max(
      canvas.width / img.naturalWidth,
      canvas.height / img.naturalHeight
    );
    const x = (canvas.width - img.naturalWidth * scale) / 2;
    const y = (canvas.height - img.naturalHeight * scale) / 2;
    ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
  };

  // ─── Preload all frames silently ─────────────────────────────────────────
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();

      const onDone = () => {
        loadedCountRef.current++;
        if (loadedCountRef.current === FRAME_COUNT) {
          drawFrame(0);
        }
      };

      img.onload = onDone;
      img.onerror = onDone;
      img.src = frameUrl(i);
      images[i] = img;
    }

    imagesRef.current = images;

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ─── Scroll → target frame ───────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const fraction = maxScroll > 0 ? scrollTop / maxScroll : 0;

      targetFrameRef.current = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, fraction * (FRAME_COUNT - 1))
      );
    };

    const onResize = () => {
      drawFrame(Math.round(currentFrameRef.current));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // ─── RAF animation loop (lerp toward target) ─────────────────────────────
  useEffect(() => {
    const loop = () => {
      const lerp = 0.08;
      currentFrameRef.current +=
        (targetFrameRef.current - currentFrameRef.current) * lerp;

      const frameIndex = Math.round(currentFrameRef.current);
      drawFrame(frameIndex);

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'transparent',
        zIndex: -10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
};
