import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'NFT Marketplace Smart Contract',
    description: 'This smart contract provides a basic NFT (Non-Fungible Token) marketplace on Ethereum. It enables users to create, buy, and manage NFTs.',
    image: 'https://images.unsplash.com/photo-1652858319770-860b97ebe5b2?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Solidity', 'TypeScript', 'Javascript'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com/Fatumayattani/nft_smart_contract'
    }
  },
  {
    title: 'UI Kit Library',
    description: 'An open-source, reusable component library built with React, TypeScript, and Storybook, offering essential UI elements for modern web applications.',
    image: 'https://images.unsplash.com/photo-1506729623306-b5a934d88b53?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'Typescript', 'Storybook', 'Node.js'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com/Fatumayattani/UIkit_Storybook'
    }
  },
  {
    title: 'Business Forecasting Tool',
    description: 'AI-powered Business Forecasting Tool enables businesses to make informed decisions through data processing and predictive modeling.',
    image: 'https://images.unsplash.com/photo-1731495155373-6f5971b7a369?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Typescript', 'JavaScript', 'Tailwind', 'Gemini API'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com/Fatumayattani/business_forecasting_tool'
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