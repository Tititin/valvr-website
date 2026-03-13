import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const skillCategories = [
  {
    category: 'VR/3D',
    skills: [
      { name: 'Three.js', level: 95 },
      { name: 'WebXR', level: 90 },
      { name: 'A-Frame', level: 85 },
      { name: 'Babylon.js', level: 80 }
    ]
  },
  {
    category: 'FRONTEND',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Vue.js', level: 85 },
      { name: 'Tailwind', level: 92 }
    ]
  },
  {
    category: 'OUTILS',
    skills: [
      { name: 'Git', level: 93 },
      { name: 'Node.js', level: 90 },
      { name: 'Vite', level: 87 },
      { name: 'Docker', level: 82 }
    ]
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center relative bg-black py-20">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-4 neon-text tracking-wider">
            COMPÉTENCES
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.2 }}
              className="tron-card p-6"
            >
              <h3 className="text-2xl mb-6 neon-text tracking-wider text-center">
                {category.category}
              </h3>

              <div className="w-full" style={{ height: '320px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={category.skills} cx="50%" cy="50%">
                    <PolarGrid
                      stroke="rgba(0, 255, 255, 0.4)"
                      strokeWidth={1.5}
                    />
                    <PolarAngleAxis
                      dataKey="name"
                      tick={{
                        fill: 'rgb(0, 255, 255)',
                        fontSize: 12,
                        fontFamily: 'Rajdhani, sans-serif'
                      }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={{
                        fill: 'rgba(0, 255, 255, 0.8)',
                        fontSize: 10
                      }}
                      stroke="rgba(0, 255, 255, 0.4)"
                    />
                    <Radar
                      dataKey="level"
                      stroke="rgb(0, 255, 255)"
                      fill="rgb(0, 255, 255)"
                      fillOpacity={0.4}
                      strokeWidth={2.5}
                      dot={{
                        fill: 'rgb(0, 255, 255)',
                        r: 5,
                        strokeWidth: 2,
                        stroke: '#000'
                      }}
                      animationDuration={1500}
                      animationBegin={categoryIndex * 200}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}