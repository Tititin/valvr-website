import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

// Composant personnalisé pour les ticks avec animation de défilement
const AnimatedTick = (props: any) => {
  const { payload, x, y, textAnchor, dominantBaseline } = props;
  const text = payload.value;
  const isLong = text.length > 12;
  const displayText = isLong ? text + '   ' + text + '   ' + text : text; // Répéter 3 fois pour la boucle

  const clipId = `clip-${text.replace(/\s+/g, '-')}`;

  return (
    <g>
      <defs>
        <clipPath id={clipId}>
          <rect x={x - 50} y={y - 10} width={100} height={20} />
        </clipPath>
      </defs>
      <text
        x={x}
        y={y}
        textAnchor={textAnchor}
        dominantBaseline={dominantBaseline}
        fill="rgb(0, 255, 255)"
        fontSize={12}
        fontFamily="Rajdhani, sans-serif"
        clipPath={`url(#${clipId})`}
      >
        {displayText}
        {isLong && (
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;-100,0"
            dur="4s"
            repeatCount="indefinite"
          />
        )}
      </text>
    </g>
  );
};

const skillCategories = [
  {
    category: 'DEVOPS',
    skills: [
      { name: 'Github', level: 80 },
      { name: 'CI/CD', level: 75 },
      { name: 'AzureDevOps', level: 80 },
      { name: 'Azure Pipelines', level: 40 },
      { name: 'Github Actions', level: 70 },
      { name: 'Terraform/IaC', level: 60 }
    ]
  },
  {
    category: 'SOFTWARE',
    skills: [
      { name: 'C++', level: 80 },
      { name: 'C#/.NET', level: 60 },
      { name: 'Visual Studio', level: 80 }
    ]
  },
  {
    category: 'VR/3D',
    skills: [
      { name: 'Unreal Engine', level: 70 },
      { name: 'SFML', level: 85 },
      { name: 'Unity3D', level: 55 },
      { name: 'WebGL/OpenGL', level: 20 }
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
                      tick={<AnimatedTick />}
                      tickFormatter={(value) => value.length > 12 ? value.substring(0, 12) + '...' : value}
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