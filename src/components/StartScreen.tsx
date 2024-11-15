import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';


interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background AI Image */}
      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Main content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center z-10 backdrop-blur-sm bg-black/30 p-12 rounded-2xl"
      >
        <Code2 className="w-20 h-20 text-violet-300 mx-auto mb-8" />
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
          Fatuma Yattani
        </h1>
        <p className="text-xl text-violet-200 mb-12">
          Fullstack Developer & Technical Writer
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="group relative px-8 py-4 bg-violet-600 text-white rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-violet-700"
        >
          <span className="relative z-10 flex items-center gap-2">
            Begin Adventure <Sparkles className="w-5 h-5" />
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            initial={false}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default StartScreen;