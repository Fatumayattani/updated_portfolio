import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js and Stripe',
    image: 'https://images.unsplash.com/photo-1702055894943-1f4012fae0c7?auto=format&fit=crop&q=80&w=1000',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com'
    }
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat app with AI-powered responses and voice recognition',
    image: 'https://images.unsplash.com/photo-1701977407870-99c498c8ea63?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Socket.io', 'OpenAI', 'Node.js'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com'
    }
  },
  {
    title: 'Business Forecasting Tool',
    description: 'AI-powered Business Forecasting Tool enables businesses to make informed decisions through data processing and predictive modeling.',
    image: 'https://images.unsplash.com/photo-1702238843310-4e95f1a549cd?auto=format&fit=crop&q=80&w=1000',
    tags: ['Typescript', 'JavaScript', 'Tailwind', 'API'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com'
    }
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background patterns */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-violet-400 rounded-full"
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            scale: [1, 1.5, 1],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        <img
          src="https://images.unsplash.com/photo-1701977407870-99c498c8ea63?auto=format&fit=crop&q=80"
          alt="AI Projects"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="text-gradient inline-flex items-center gap-2">
            Featured Projects <Sparkles className="w-6 h-6" />
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group relative bg-gray-800/30 rounded-xl overflow-hidden backdrop-blur-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"
                  animate={{
                    background: ['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.7)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              <div className="p-6 relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 opacity-0 group-hover:opacity-100"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-sm bg-gray-700/50 rounded-full text-gray-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;