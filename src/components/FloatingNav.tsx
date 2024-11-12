import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface FloatingNavProps {
  onNext: () => void;
  isLastSection?: boolean;
}

const FloatingNav: React.FC<FloatingNavProps> = ({ onNext, isLastSection }) => {
  if (isLastSection) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onNext}
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-violet-500/25 transition-shadow duration-300 z-50"
    >
      <ChevronRight className="w-8 h-8 text-white" />
      <div className="absolute w-full h-full rounded-full animate-ping bg-violet-600/20" />
    </motion.button>
  );
};

export default FloatingNav;