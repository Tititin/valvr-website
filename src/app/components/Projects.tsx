import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'VEGETABLE DECK BUILDER',
    description: 'Jeu de cartes où il faut construire un deck de légumes pour se débarrasser d\'artichauts',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGFic3RyYWN0fGVufDF8fHx8MTc3MzMzMTU0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['C++', 'SFML', 'VS Code'],
    github: 'https://github.com/Tititin/vegetable-deck-builder',
    demo: 'https://github.com/Tititin/vegetable-deck-builder/releases/tag/v0.4.0',
    linkText: 'Démo'
  },
  {
    title: 'ADVENT OF CODE',
    description: 'Participation annuelle à l\'événement de programmation Advent of Code, résolvant des puzzles variés en C++',
    image: 'https://cdn.thenewstack.io/media/2021/12/521cd034-advent-of-code-2021.jpg',
    tags: ['C++', 'Algorithm', 'Git'],
    github: 'https://github.com/Tititin/AdventOfCode',
    demo: 'https://adventofcode.com/',
    linkText: 'Site officiel'
  },
  {
    title: 'INTERFACE CYBER',
    description: 'Dashboard futuriste avec visualisation de données en temps réel',
    image: 'https://images.unsplash.com/photo-1677439283162-79114d6c84c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzczMjI1NjYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Vue.js', 'D3.js', 'GraphQL'],
    github: '#',
    demo: '#'
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