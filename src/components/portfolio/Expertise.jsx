import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Workflow, Gauge, Wrench, Layers, Database } from 'lucide-react';

const expertiseCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    description: 'Building beautiful, responsive user interfaces',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'from-[#38BDF8] to-[#0EA5E9]',
    iconBg: 'bg-[#38BDF8]/10',
  },
  {
    title: 'Backend & APIs',
    icon: Database,
    description: 'Scalable server-side solutions',
    skills: ['Node.js', 'Laravel/PHP', 'Python', 'PostgreSQL', 'MongoDB'],
    gradient: 'from-[#818CF8] to-[#6366F1]',
    iconBg: 'bg-[#818CF8]/10',
  },
  {
    title: 'E-commerce',
    icon: Layers,
    description: 'Complete online store solutions',
    skills: ['Shopify', 'Liquid', 'WooCommerce', 'Payment APIs', 'Inventory'],
    gradient: 'from-[#22C55E] to-[#16A34A]',
    iconBg: 'bg-[#22C55E]/10',
  },
  {
    title: 'Automation',
    icon: Workflow,
    description: 'Streamlining business workflows',
    skills: ['n8n', 'Zapier', 'API Integration', 'Webhooks', 'Scripts'],
    gradient: 'from-[#F59E0B] to-[#D97706]',
    iconBg: 'bg-[#F59E0B]/10',
  },
  {
    title: 'Performance',
    icon: Gauge,
    description: 'Speed and optimization expertise',
    skills: ['Core Web Vitals', 'SEO', 'Caching', 'CDN', 'Lazy Loading'],
    gradient: 'from-[#EF4444] to-[#DC2626]',
    iconBg: 'bg-[#EF4444]/10',
  },
  {
    title: 'DevOps & Tools',
    icon: Wrench,
    description: 'Modern development practices',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
    gradient: 'from-[#EC4899] to-[#DB2777]',
    iconBg: 'bg-[#EC4899]/10',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#38BDF8]/[0.02] rounded-full blur-[120px]" />
      
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
            Technical Skills
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Areas of Expertise
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Six years of hands-on experience across the full development stack
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {expertiseCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl bg-[#111827]/80 border border-white/[0.06] p-6 overflow-hidden hover:border-white/[0.12] transition-all duration-300 backdrop-blur-sm">
                {/* Hover Glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-[0.08] rounded-full blur-[50px] transition-all duration-500`} />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`relative w-14 h-14 rounded-xl ${category.iconBg} border border-white/[0.06] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}
                >
                  <category.icon className={`w-6 h-6 bg-gradient-to-r ${category.gradient} bg-clip-text`} style={{ color: category.gradient.includes('38BDF8') ? '#38BDF8' : category.gradient.includes('818CF8') ? '#818CF8' : category.gradient.includes('22C55E') ? '#22C55E' : category.gradient.includes('F59E0B') ? '#F59E0B' : category.gradient.includes('EF4444') ? '#EF4444' : '#EC4899' }} />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {category.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-xs font-medium bg-white/[0.03] text-gray-300 rounded-lg border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.06] transition-all cursor-default"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}