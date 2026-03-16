import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Twitch } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Tititin',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/valentin-rouquet-vr-engineer/',
    label: 'LinkedIn'
  },
  {
    icon: Twitch,
    href: 'https://twitch.tv/valvr44',
    label: 'Twitch'
  },
  {
    icon: Mail,
    href: 'mailto:valvrpro@gmail.com',
    label: 'Email'
  }
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative tron-grid py-20">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-4 neon-text tracking-wider">
            CONTACT
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <p className="text-xl mb-8" style={{ color: 'rgba(0, 217, 255, 0.8)' }}>
            Créons quelque chose d'extraordinaire ensemble. Contactez-moi et connectons-nous.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center gap-8 flex-wrap mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="neon-border p-6 transition-all duration-300 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.6),inset_0_0_20px_rgba(0,255,255,0.3)]">
                <social.icon className="w-8 h-8 neon-text transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,1)]" />
              </div>
              <p className="mt-2 text-sm transition-all duration-300 group-hover:text-shadow-[0_0_10px_rgba(0,255,255,1)]" style={{ color: 'var(--tron-cyan)' }}>
                {social.label}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <a
            href="mailto:valvrpro@gmail.com"
            className="tron-button text-xl tracking-wider inline-block"
          >
            ENVOYER UN MESSAGE
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="neon-line max-w-md mx-auto mb-6" />
          <p style={{ color: 'rgba(0, 217, 255, 0.5)' }}>
            © 2026 Val'VR. Tous droits réservés. Version du site : v0.5.0
          </p>
        </motion.div>
      </div>
    </section>
  );
}