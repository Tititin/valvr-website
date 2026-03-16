import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'VEGETABLE DECK BUILDER',
    description: 'Jeu de cartes où il faut construire un deck de légumes pour se débarrasser d\'artichauts',
    image: '/artichoke.jpeg',
    tags: ['C++', 'SFML', 'VS Code'],
    github: 'https://github.com/Tititin/vegetable-deck-builder',
    demo: 'https://github.com/Tititin/vegetable-deck-builder/releases/tag/v0.4.0',
    linkText: 'Démo'
  },
  {
    title: 'ADVENT OF CODE',
    description: 'Participation annuelle à l\'événement de programmation Advent of Code, résolvant des puzzles variés en langage libre',
    image: 'https://cdn.thenewstack.io/media/2021/12/521cd034-advent-of-code-2021.jpg',
    tags: ['C++', 'Algorithm', 'Git'],
    github: 'https://github.com/Tititin/AdventOfCode',
    demo: 'https://adventofcode.com/',
    linkText: 'Site officiel'
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center relative tron-grid py-20">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-4 neon-text tracking-wider">
            PROJETS (WIP)
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="tron-card overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl mb-3 neon-text tracking-wider">
                  {project.title}
                </h3>
                <p className="mb-4" style={{ color: 'rgba(0, 217, 255, 0.7)' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm neon-border"
                      style={{ color: 'var(--tron-cyan)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 transition-all hover:text-cyan-400"
                    style={{ color: 'var(--tron-cyan)' }}
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 transition-all hover:text-cyan-400"
                    style={{ color: 'var(--tron-cyan)' }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>{project.linkText}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}