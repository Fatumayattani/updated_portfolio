import React from 'react';
import { motion } from 'framer-motion';
import { Mail, BookOpen, Send, Sparkles, Github } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
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

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="text-gradient inline-flex items-center gap-2">
            Get in Touch <Sparkles className="w-6 h-6" />
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gradient">Contact Information</h3>
            <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-violet-500/10 rounded-lg">
                  <Mail className="w-5 h-5 text-violet-400" />
                </div>
                <span>fyattani@gmail.com</span> 
              </div>
              <div className="flex items-center gap-3 text-gray-300">
  <div className="p-2 bg-violet-500/10 rounded-lg">
    <BookOpen className="w-5 h-5 text-violet-400" /> {/* Use BookOpen to represent Medium */}
  </div>
  <span>@fyattani</span> {/* Replace with Medium handle */}
</div>
<div className="flex items-center gap-3 text-gray-300">
  <div className="p-2 bg-violet-500/10 rounded-lg">
    <Github className="w-5 h-5 text-violet-400" /> {/* Use Github icon */}
  </div>
  <span>Fatumayattani</span> {/* Replace with GitHub handle */}
</div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 px-4 bg-violet-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-violet-700 transition-colors"
              >
                Send Message
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;