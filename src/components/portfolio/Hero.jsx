import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles, Code2, ShoppingBag, Workflow, Layers } from 'lucide-react';

const bentoItems = [
  { icon: Code2, label: 'Full-Stack', color: 'from-violet-500 to-purple-500' },
  { icon: ShoppingBag, label: 'E-commerce', color: 'from-emerald-500 to-teal-500' },
  { icon: Workflow, label: 'Automation', color: 'from-orange-500 to-amber-500' },
  { icon: Layers, label: '6+ Years', color: 'from-sky-500 to-blue-500' },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#38BDF8] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#818CF8] rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.02)_0%,_transparent_70%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111827]/80 border border-white/[0.06] backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-sm text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              Available for new projects
            </span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-500"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I Build{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#38BDF8] bg-[length:200%_auto] animate-gradient"
            >
              Scalable Digital
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Solutions
            </motion.span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Full-Stack Developer & E-commerce Specialist with 6+ years of experience 
            building high-performance web applications, Shopify stores, and automation systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 bg-white text-[#0B1220] px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-xl shadow-white/10"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View My Work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.button>

            <motion.a
              href="https://www.fiverr.com/osamarizwan277"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg border border-white/[0.1] text-gray-300 hover:border-[#38BDF8]/50 hover:text-white transition-all bg-[#111827]/50 backdrop-blur-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <ExternalLink className="w-5 h-5" />
              Hire Me on Fiverr
            </motion.a>
          </motion.div>

          {/* Bento Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto"
          >
            {bentoItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative p-4 sm:p-5 rounded-2xl border border-white/[0.06] backdrop-blur-sm overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-300`} />
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white mb-2 mx-auto" />
                  </motion.div>
                  <p className="text-xs sm:text-sm font-medium text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-9 rounded-full border-2 border-white/20 flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1.5 rounded-full bg-[#38BDF8]"
            />
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}