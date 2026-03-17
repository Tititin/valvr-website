import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';

const cvSections = [
  {
    id: 'informations',
    title: 'INFORMATIONS',
    lines: ['Né le : 09.05.1997 à Nantes', 'Permis : Oui', 'Voiture : Oui', 'Ville : Nantes'],
    angle: -130,
    distance: 240,
    align: 'right'
  },
  {
    id: 'contact',
    title: 'CONTACT',
    lines: ['Mobile : 06.75.55.90.46', 'Mail : val.rouquet@gmail.com'],
    angle: -90,
    distance: 210,
    align: 'center'
  },
  {
    id: 'experiences',
    title: 'EXPÉRIENCES PRO',
    lines: [
      'TOTEM ENTERTAINMENT 10.2019 - 02.2021',
      'MISCIBLE.IO 03.2019 - 09.2019',
      'UNVR STUDIO 09.2018 - 12.2018'
    ],
    angle: -30,
    distance: 260,
    align: 'left'
  },
  {
    id: 'competences',
    title: 'COMPÉTENCES',
    lines: ['Unreal Engine', 'Unity 3D', 'C++', 'C#', 'Blueprint', 'VR/AR'],
    angle: 170,
    distance: 240,
    align: 'left'
  },
  {
    id: 'autres',
    title: 'AUTRES',
    lines: ['Anglais : Professionnel', 'Coréen : Notions', 'Centres d’intérêt : Natation & Voyages'],
    angle: 60,
    distance: 250,
    align: 'left'
  },
  {
    id: 'formation',
    title: 'FORMATION',
    lines: ['2014-2019 : EPITECH', '2017.2018 : Keimyung University, Corée du Sud', 'Expert en Technologies du Numérique'],
    angle: 110,
    distance: 245,
    align: 'right'
  }
];

export function Cv() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="cv" className="min-h-screen relative bg-black px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 tron-grid" />
      <div className="relative z-10 container mx-auto h-full">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl neon-text tracking-wider">CV ANIMÉ</h2>
          <div className="neon-line max-w-xs mx-auto mt-4" />
        </div>

        <div ref={ref} className="relative w-full h-[70vh] max-h-[760px] rounded-xl">
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-400"
                style={{ boxShadow: '0 0 25px rgba(0,255,255,0.8), 0 0 55px rgba(0,255,255,0.6)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: [0, 0.6, 0.2, 0.7] } : {}}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <img
                src="https://placehold.co/300x300/ffffff/000000?text=Photo"
                alt="Portrait"
                className="relative z-10 w-full h-full object-cover rounded-full border-2 border-cyan-300"
              />
            </div>
          </motion.div>

          {cvSections.map((section, idx) => {
            const angleRad = (section.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * section.distance;
            const y = Math.sin(angleRad) * section.distance;

            const cardAlignment = section.align === 'right' ? 'text-right' : section.align === 'center' ? 'text-center' : 'text-left';

            return (
              <div key={section.id}>
                <motion.div
                  className="absolute left-1/2 top-1/2 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"
                  style={{
                    width: 0,
                    transform: `translate(-50%, -50%) rotate(${section.angle}deg)`
                  }}
                  initial={{ width: 0, opacity: 0 }}
                  animate={isInView ? { width: section.distance, opacity: 1 } : {}}
                  transition={{ delay: 0.45 + idx * 0.16, duration: 0.8, ease: 'easeOut' }}
                />

                <motion.div
                  className={`absolute p-5 rounded-xl neon-border bg-black/70 border-cyan-400 shadow-2xl shadow-cyan-900 max-w-[270px] ${cardAlignment}`}
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
                  initial={{ opacity: 0, y: 14, scale: 0.86 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.82 + idx * 0.18, duration: 0.7, ease: 'easeOut' }}
                >
                  <h3 className="text-lg font-bold neon-text mb-2">{section.title}</h3>
                  <ul className="text-sm text-cyan-100 leading-snug">
                    {section.lines.map((line, lineIndex) => (
                      <li key={`${section.id}-${lineIndex}`} className="mb-1">{line}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
            initial={{ scale: 0.7, opacity: 0.2 }}
            animate={isInView ? { scale: [0.8, 1.05, 0.9], opacity: [0.25, 0.8, 0.3] } : {}}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ boxShadow: '0 0 40px rgba(0, 255, 255, 0.4), inset 0 0 35px rgba(0,255,255,0.35)' }}
          />
        </div>
      </div>
    </section>
  );
}
