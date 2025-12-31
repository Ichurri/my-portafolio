'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Trail {
  id: number;
  x: number;
  y: number;
}

export const CursorTrail = () => {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (throttleTimeout) return;

      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;
      }, 50);

      const newTrail: Trail = {
        id: idCounter,
        x: e.clientX,
        y: e.clientY,
      };

      setIdCounter((prev) => prev + 1);
      setTrails((prev) => [...prev.slice(-10), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, [idCounter]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            className="absolute w-2 h-2 rounded-full bg-dark-400"
            style={{
              left: trail.x - 4,
              top: trail.y - 4,
            }}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 0, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
