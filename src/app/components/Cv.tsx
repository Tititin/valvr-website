import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';

const cvSections = [
  {
    id: 'informations',
    title: 'INFORMATIONS',
    lines: ['Né le : 09.05.1997 à Nantes', 'Permis : Oui', 'Voiture : Oui', 'Ville : Nantes'],
    angle: -125,
    distance: 234,
    align: 'left',
    icon: 'ℹ️'
  },
  {
    id: 'contact',
    title: 'CONTACT',
    lines: ['Mobile : 06.75.55.90.46', 'Mail : val.rouquet@gmail.com', 'LinkedIn : /val-rouquet'],
    angle: -90,
    distance: 194,
    align: 'center',
    icon: '✉️'
  },
  {
    id: 'experiences',
    title: 'EXPÉRIENCES PRO',
    lines: [
      'TOTEM ENTERTAINMENT 10.2019 - 02.2021',
      'MISCIBLE.IO 03.2019 - 09.2019',
      'UNVR STUDIO 09.2018 - 12.2018'
    ],
    angle: -35,
    distance: 262,
    align: 'right',
    icon: '💼'
  },
  {
    id: 'competences',
    title: 'COMPÉTENCES',
    lines: ['Unreal Engine', 'Unity 3D', 'C++', 'C#', 'Blueprint', 'VR/AR', 'DevOps'],
    angle: 170,
    distance: 245,
    align: 'left',
    icon: '🛠️'
  },
  {
    id: 'autres',
    title: 'AUTRES',
    lines: ['Anglais : Professionnel', 'Coréen : Notions', 'Centres d’intérêt : Natation & Voyages'],
    angle: 65,
    distance: 250,
    align: 'right',
    icon: '⭐'
  },
  {
    id: 'formation',
    title: 'FORMATION',
    lines: ['2014-2019 : EPITECH', '2017-2018 : Keimyung University (Corée du Sud)', 'Expert en Technologies du Numérique'],
    angle: 105,
    distance: 248,
    align: 'left',
    icon: '🎓'
  }
];

export function Cv() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section id="cv" className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/futuristic-user-interface-elements-vector-set.png"
          alt="Background futuriste"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 p-4 md:p-10 lg:px-24">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold neon-text tracking-wider"
          >
            CV DASHBOARD
          </motion.h2>
          <motion.div
            className="mx-auto mt-3 h-1 w-36 rounded-full bg-cyan-300/80 shadow-[0_0_18px_rgba(0,255,255,0.6)]"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        <div ref={ref} className="relative mx-auto h-[78vh] max-h-[820px] w-full rounded-2xl border border-cyan-400/30 bg-black/20 backdrop-blur-md shadow-[0_0_40px_rgba(0,255,255,0.2)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),rgba(0,0,0,0.80))]" />

          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/60 shadow-[0_0_60px_rgba(0,255,255,0.45)]">
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-cyan-300/80"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/15"
              animate={{ scale: [1, 1.04, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            <img
              src="/artichoke.jpeg"
              alt="Portrait"
              className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/80 object-cover"
            />
          </div>

          {cvSections.map((section, idx) => {
            const angleRad = (section.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * section.distance;
            const y = Math.sin(angleRad) * section.distance;
            const alignClass = section.align === 'right' ? 'text-right' : section.align === 'center' ? 'text-center' : 'text-left';

            return (
              <div key={section.id}>
                <motion.div
                  className="absolute left-1/2 top-1/2 h-[2px] w-0 bg-gradient-to-r from-cyan-300 via-cyan-200 to-transparent"
                  style={{ transform: `translate(-50%, -50%) rotate(${section.angle}deg)` }}
                  initial={{ width: 0, opacity: 0 }}
                  animate={isInView ? { width: section.distance, opacity: 1 } : {}}
                  transition={{ delay: 0.4 + idx * 0.12, duration: 0.8, ease: 'easeOut' }}
                />

                <motion.div
                  className={`absolute rounded-xl border border-cyan-400/60 bg-black/80 px-4 py-4 shadow-[0_0_20px_rgba(0,255,255,0.25)] backdrop-blur-sm ${alignClass}`}
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
                  initial={{ opacity: 0, y: 20, scale: 0.86 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.8 + idx * 0.15, duration: 0.6, ease: 'easeOut' }}
                >
                  <div className="mb-2 flex items-center justify-between gap-2 text-sm text-cyan-200">
                    <span className="text-xl">{section.icon}</span>
                    <span className="text-base font-bold uppercase tracking-wider neon-text">{section.title}</span>
                  </div>
                  <ul className="text-xs md:text-sm leading-relaxed text-cyan-100">
                    {section.lines.map((line, lineIndex) => (
                      <li key={`${section.id}-${lineIndex}`} className="relative mb-1 pl-4 before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-cyan-300">
                        {line}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}

          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40"
            initial={{ opacity: 0.3, scale: 0.95 }}
            animate={isInView ? { opacity: [0.3, 0.5, 0.3], scale: [0.95, 1.02, 0.95] } : {}}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.9)]"
            animate={{ scale: [0.8, 1.6, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.25, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
}
