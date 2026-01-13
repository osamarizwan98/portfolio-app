import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#1E293B] rounded-2xl border border-[#334155] overflow-hidden hover:border-[#38BDF8]/50 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-[#0F172A]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/20 to-[#818CF8]/20 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-6xl opacity-20">{project.emoji}</div>
        </motion.div>
        
        {/* Freelance Tag */}
        {project.isFreelance && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-[#38BDF8] text-[#0F172A] text-xs font-semibold rounded-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Freelance Project
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 
          className="text-xl font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {project.title}
        </h3>
        
        <p 
          className="text-gray-400 text-sm mb-4 leading-relaxed"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-[#0F172A] text-gray-300 rounded-full border border-[#334155]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-[#334155]">
          <motion.a
            href="#"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#38BDF8] transition-colors"
            whileHover={{ x: 2 }}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>
          <motion.a
            href="#"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#38BDF8] transition-colors"
            whileHover={{ x: 2 }}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <Github className="w-4 h-4" />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}