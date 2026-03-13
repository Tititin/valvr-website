import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Workflow, Monitor, Gamepad2 } from 'lucide-react';

const features = [
  {
    icon: Workflow,
    title: 'DEVOPS',
    description: 'Expertise en intégration continue, déploiement et gestion d\'infrastructure cloud'
  },
  {
    icon: Monitor,
    title: 'SOFTWARE',
    description: 'Programmation orientée objet, Qt, C++ et C#'
  },
  {
    icon: Gamepad2,
    title: 'VR & JEUX VIDEO',
    description: 'La plus pure expression de "créer en s\'amusant"'
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

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center md:text-left"
            >
              <p className="text-lg" style={{ color: 'rgba(0, 217, 255, 0.8)' }}>
                Ingénieur DevOps de métier, programmeur passionné et joueur invétéré, c'est en m'amusant que je déploie tout mon potentiel créatif.
                Nantais et fier de l'être, j'ai du Petit Beurre dans les veines et les bords de l'Erdre dans le coeur.
              </p>
              <p className="text-lg" style={{ color: 'rgba(0, 217, 255, 0.8)' }}>
                Mon approche combine code propre, design innovant et une compréhension profonde
                de l'expérience utilisateur pour livrer des solutions qui ne sont pas seulement fonctionnelles—elles sont exceptionnelles.
              </p>
            </motion.div>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <img
              src="/petitbeurre.png"
              alt="Petit Beurre"
              className="w-40 h-40 object-contain rounded-xl border border-cyan-300/50 shadow-[0_0_25px_rgba(0,255,255,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}