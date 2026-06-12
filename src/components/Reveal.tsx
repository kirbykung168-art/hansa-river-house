'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * Reveal — every section animates in with a slow, glide-curve fade.
 * Uses the same swan-glide easing as the rest of the site so the
 * whole page reads as one continuous drift downward.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.4, ease: [0.16, 0.84, 0.30, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
