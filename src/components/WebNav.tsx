import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Newspaper, Phone, Briefcase, Home } from 'lucide-react';

interface WebNavProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const WebNav: React.FC<WebNavProps> = ({ currentSection, onSectionChange }) => {
  const navItems = [
    { id: 'start', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'blog', label: 'Blog', icon: Newspaper },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block"
    >
      <div className="bg-gray-900/20 backdrop-blur-lg rounded-full p-2">
        <div className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentSection === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className="relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-violet-600 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-violet-600/50 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                
                {/* Tooltip */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-3 py-1 rounded-lg bg-gray-900 text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full border-2 border-violet-400"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default WebNav;