import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

const blogPosts = [
  {
    title: 'Top 10 Layer 2 Blockchain Solutions for 2024',
    excerpt: 'Layer 2 solutions enhance blockchain scalability, speed, and reduce transaction costs by processing transactions off-chain.',
    date: '2024-10-01',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1642576422624-fd0df2b084d3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Blockchain',
    link: 'https://medium.com/@fyattani/top-10-layer-2-blockchain-solutions-for-2024-cdb0e265815a',
  },
  {
    title: '20 Things That Make React Hooks Powerful for Developers',
    excerpt: 'With React Hooks, you can manage state, perform side effects, and access lifecycle methods in functional components, making them more powerful and expressive.',
    date: '2024-07-06',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'React',
    link: 'https://medium.com/@fyattani/20-things-that-make-react-hooks-powerful-for-developers-79bcf035b5c3',
  },
  {
    title: 'Tips for Writing Clean and Maintainable Code',
    excerpt: 'Creating code that is both clean and maintainable is a fundamental aspect of software development. Clean code not only enhances readability but also simplifies debugging, testing, and collaboration. ',
    date: '2024-02-25',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1616138276663-5041438a8476?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Clean Code',
    link: 'https://medium.com/@fyattani/10-tips-for-writing-clean-and-maintainable-code-48750d49e2fb',
  }
];

const BlogSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-indigo-400 rounded-full"
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
            Latest Blog Posts <Sparkles className="w-6 h-6" />
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/30 rounded-xl overflow-hidden backdrop-blur-sm group hover:bg-gray-800/40 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-violet-500/90 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <a href={post.link} target="_blank" rel="noopener noreferrer">

                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-4 flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </motion.button>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogSection;