import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, ExternalLink } from 'lucide-react';

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0B1220]/80 backdrop-blur-xl border-b border-white/[0.06]' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-white font-bold text-xl"
              whileHover={{ scale: 1.02 }}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#818CF8] flex items-center justify-center"
              >
                <Code2 className="w-5 h-5 text-white" />
              </motion.div>
              <span>Osama<span className="text-[#38BDF8]">.</span></span>
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                href="https://www.fiverr.com/osamarizwan277"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-[#38BDF8]/20"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <ExternalLink className="w-4 h-4" />
                Hire Me
              </motion.a>
            </div>

            <motion.button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 bg-[#111827]/95 backdrop-blur-xl border-l border-white/[0.06] p-6 pt-20"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="text-left text-gray-300 hover:text-white py-4 border-b border-white/[0.06] text-lg font-medium transition-all"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.a
                  href="https://www.fiverr.com/osamarizwan277"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-white py-3 rounded-full font-semibold"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}