import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Briefcase, Code, Rocket, Globe, ShoppingCart, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Premium Shopify Store',
    description: 'Built a high-converting Shopify store with custom theme development, resulting in 45% increase in sales.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    tag: 'E-commerce',
    tagIcon: ShoppingCart,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Full-Stack SaaS Platform',
    description: 'Developed a complete SaaS application with user authentication, payment integration, and real-time features.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    tag: 'Full Stack',
    tagIcon: Code,
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'E-commerce Automation System',
    description: 'Created automated workflows for inventory management, order processing, and customer notifications.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    techStack: ['n8n', 'API', 'Webhooks', 'Node.js'],
    tag: 'Automation',
    tagIcon: Cpu,
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Corporate Website Redesign',
    description: 'Complete redesign and development of a corporate website with modern UI/UX and improved performance.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    techStack: ['Next.js', 'Tailwind', 'Framer Motion'],
    tag: 'Web Development',
    tagIcon: Globe,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Laravel CRM System',
    description: 'Built a custom CRM solution with lead management, analytics dashboard, and automated reporting.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    techStack: ['Laravel', 'PHP', 'MySQL', 'Vue.js'],
    tag: 'Enterprise',
    tagIcon: Briefcase,
    color: 'from-rose-500 to-pink-500',
  },
  {
    title: 'Performance Optimization',
    description: 'Optimized Core Web Vitals for multiple e-commerce stores, achieving 40% faster load times.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
    techStack: ['Performance', 'SEO', 'Caching', 'CDN'],
    tag: 'Optimization',
    tagIcon: Rocket,
    color: 'from-sky-500 to-blue-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38BDF8]/[0.02] to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20 mb-4"
          >
            Selected Work
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Projects & Case Studies
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            A showcase of impactful projects delivering real business results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl overflow-hidden bg-[#111827] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/20 to-transparent" />
                
                {/* Tag Badge */}
                <div className="absolute top-4 left-4">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white shadow-lg`}
                  >
                    <project.tagIcon className="w-3.5 h-3.5" />
                    {project.tag}
                  </motion.div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/20 to-[#818CF8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {project.title}
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center group-hover:bg-[#38BDF8]/20 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#38BDF8]" />
                  </motion.div>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-white/[0.05] text-gray-300 rounded-lg border border-white/[0.08] hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/5 transition-all cursor-default"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <motion.a
            href="https://www.fiverr.com/osamarizwan277"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/[0.1] text-white font-medium hover:bg-[#38BDF8]/10 hover:border-[#38BDF8]/30 transition-all"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <ExternalLink className="w-4 h-4" />
            View All Projects on Fiverr
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}