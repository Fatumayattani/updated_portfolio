import React from 'react';
import { motion } from 'framer-motion';
import { Code, Link2, Globe2, Sparkles } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
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

      {/* Background Images */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        <img
          src="https://images.unsplash.com/photo-1702055894943-1f4012fae0c7?auto=format&fit=crop&q=80"
          alt="AI Developer"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          <span className="text-gradient inline-flex items-center gap-2">
            About Me <Sparkles className="w-6 h-6" />
          </span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Code className="w-8 h-8 text-violet-400" />,
                title: "Frontend & Backend Development",
                description: "Skilled in React, Node.js, Python, and TypeScript."
              },
              {
                icon: <Link2 className="w-8 h-8 text-violet-400" />,
                title: "Blockchain Integration",
                description: "Experienced with ICP, Ethereum, and dApp development."
              },
              {
                icon: <Cpu className="w-8 h-8 text-violet-400" />,
                title: "Technical Writing",
                description: "Skilled in clear, accessible documentation and tutorials."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <div className="flex flex-col items-center text-center relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="bg-slate-800/30 p-8 rounded-lg backdrop-blur-sm relative group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-lg leading-relaxed relative z-10">
            I'm a full-stack developer dedicated to building impactful solutions that address real-world challenges. With expertise in frontend and backend development, as well as emerging technologies like AI and blockchain, I design and implement applications that prioritize user experience and functionality. My work focuses on bridging technology with practical needs, enhancing transparency, fostering community-driven projects, and driving social impact through multichain integrations and AI-driven insights.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSection;