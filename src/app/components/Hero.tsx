import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative tron-grid overflow-hidden">
      {/* Animated scanline effect */}
      <div className="scanline" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          {/* Decorative line */}
          <motion.div
            className="neon-line max-w-xs mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl mb-6 neon-text tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            VAL'VR
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl lg:text-3xl mb-4"
            style={{ color: 'var(--tron-cyan)' }}
          >
            DEVOPS, PROGRAMMEUR & JOUEUR
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-base md:text-lg max-w-2xl mx-auto mb-12"
            style={{ color: 'rgba(0, 217, 255, 0.7)' }}
          >
            Créant des expériences immersives, une ligne de code à la fois
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="neon-line max-w-xs mx-auto mb-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          />

          <motion.button
            className="tron-button text-lg tracking-wider transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            ENTRER DANS LA MATRICE
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown className="w-8 h-8 neon-text" />
      </motion.div>
    </section>
  );
}