import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Cpu, Zap, Gamepad2 } from 'lucide-react';

const features = [
  {
    icon: Gamepad2,
    title: 'VR DEVELOPMENT',
    description: 'Spécialiste en réalité virtuelle et expériences immersives'
  },
  {
    icon: Cpu,
    title: 'WEB TECH',
    description: 'Expert en technologies web modernes et frameworks'
  },
  {
    icon: Zap,
    title: 'PERFORMANCE',
    description: 'Solutions optimisées pour une expérience fluide'
  }
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative bg-black py-20">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-4 neon-text tracking-wider">
            À PROPOS (WIP)
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="tron-card p-8 text-center transition-all duration-300"
            >
              <feature.icon
                className="w-16 h-16 mx-auto mb-4"
                style={{ color: 'var(--tron-cyan)' }}
              />
              <h3 className="text-xl mb-3 neon-text tracking-wider">
                {feature.title}
              </h3>
              <p style={{ color: 'rgba(0, 217, 255, 0.7)' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg mb-6" style={{ color: 'rgba(0, 217, 255, 0.8)' }}>
            Je suis un développeur passionné par la réalité virtuelle et les expériences immersives.
            Avec une expertise en technologies web modernes, je me spécialise dans la création
            d'applications haute performance qui repoussent les limites du possible.
          </p>
          <p className="text-lg" style={{ color: 'rgba(0, 217, 255, 0.8)' }}>
            Mon approche combine code propre, design innovant et une compréhension profonde
            de l'expérience utilisateur pour livrer des solutions qui ne sont pas seulement fonctionnelles—elles sont exceptionnelles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}