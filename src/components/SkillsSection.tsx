import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Smartphone, Terminal, Sparkles } from 'lucide-react';


const skills = [
  {
    category: 'Frontend',
    icon: <Layout className="w-6 h-6" />,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    color: 'from-blue-500 to-cyan-400',
    image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6" />,
    items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
    color: 'from-green-500 to-emerald-400',
    image: 'https://images.unsplash.com/photo-1702055894943-1f4012fae0c7?auto=format&fit=crop&q=80'
  },
  {
    category: 'Mobile',
    icon: <Smartphone className="w-6 h-6" />,
    items: ['React Native', 'Flutter', 'iOS', 'Android'],
    color: 'from-purple-500 to-pink-400',
    image: 'https://images.unsplash.com/photo-1701977407870-99c498c8ea63?auto=format&fit=crop&q=80'
  },
  {
    category: 'DevOps',
    icon: <Terminal className="w-6 h-6" />,
    items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'],
    color: 'from-orange-500 to-yellow-400',
    image: 'https://images.unsplash.com/photo-1702238843310-4e95f1a549cd?auto=format&fit=crop&q=80'
  }
];

const SkillsSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_70%)]" />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
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

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="text-gradient inline-flex items-center gap-2">
            Skills & Expertise <Sparkles className="w-6 h-6" />
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group"
            >
              <div className="h-32 relative overflow-hidden">
                <motion.img
                  src={skill.image}
                  alt={skill.category}
                  className="w-full h-full object-cover"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
              </div>

              <div className="p-6 relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>

                <div className="space-y-4 relative z-10">
                  {skill.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + itemIndex * 0.1 }}
                      className="relative"
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-300">{item}</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;