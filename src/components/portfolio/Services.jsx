import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Zap, Workflow, Code2, Server, Smartphone, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

const services = [
  {
    icon: ShoppingBag,
    title: 'Shopify Development',
    description: 'Custom Shopify stores designed for maximum conversions with beautiful themes and seamless user experience.',
    features: ['Custom Theme Development', 'Store Setup & Migration', 'App Integration', 'Speed Optimization'],
    gradient: 'from-emerald-500 to-teal-500',
    bgGlow: 'bg-emerald-500',
    hasFiverrLink: true,
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'End-to-end web application development from concept to deployment with modern technologies.',
    features: ['React & Next.js Apps', 'Node.js Backend', 'Database Design', 'API Development'],
    gradient: 'from-violet-500 to-purple-500',
    bgGlow: 'bg-violet-500',
    hasFiverrLink: false,
  },
  {
    icon: Workflow,
    title: 'Automation & Integration',
    description: 'Streamline your business operations with intelligent automation workflows and system integrations.',
    features: ['n8n Workflows', 'API Integration', 'Process Automation', 'Data Synchronization'],
    gradient: 'from-orange-500 to-amber-500',
    bgGlow: 'bg-orange-500',
    hasFiverrLink: false,
  },
  {
    icon: Zap,
    title: 'Bug Fixes & Optimization',
    description: 'Quick and reliable fixes for any web application issues with focus on performance and stability.',
    features: ['Debug & Troubleshoot', 'Performance Tuning', 'Core Web Vitals', 'Code Refactoring'],
    gradient: 'from-sky-500 to-blue-500',
    bgGlow: 'bg-sky-500',
    hasFiverrLink: true,
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Robust and scalable backend solutions with secure APIs and efficient database architecture.',
    features: ['Laravel & PHP', 'RESTful APIs', 'Database Optimization', 'Server Management'],
    gradient: 'from-rose-500 to-pink-500',
    bgGlow: 'bg-rose-500',
    hasFiverrLink: true,
  },
  {
    icon: Smartphone,
    title: 'WordPress Development',
    description: 'Custom WordPress solutions from theme development to plugin customization and maintenance.',
    features: ['Theme Customization', 'Plugin Development', 'WooCommerce', 'Site Maintenance'],
    gradient: 'from-cyan-500 to-blue-500',
    bgGlow: 'bg-cyan-500',
    hasFiverrLink: true,
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
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function Services() {
  return (
    <section id="services" className="py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#818CF8]/[0.02] to-transparent" />
      
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20 mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Services
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            How I Can Help
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Comprehensive development services tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-[#111827] rounded-2xl" />
              
              {/* Animated Gradient Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '1px' }}>
                <div className="absolute inset-[1px] bg-[#111827] rounded-2xl" />
              </div>

              {/* Glow Effect */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 ${service.bgGlow} opacity-0 group-hover:opacity-[0.08] rounded-full blur-[60px] transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-[1px] mb-5`}
                >
                  <div className="w-full h-full rounded-[11px] bg-[#111827] flex items-center justify-center group-hover:bg-[#0B1220] transition-colors">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-5 leading-relaxed flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-5">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-2 text-sm text-gray-500"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                {service.hasFiverrLink && (
                  <motion.a
                    href="https://www.fiverr.com/osamarizwan277"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group/link`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    View on Fiverr
                    <ArrowRight className={`w-4 h-4 text-gray-400 group-hover/link:translate-x-1 transition-transform`} />
                  </motion.a>
                )}
              </div>

              {/* Static Border */}
              <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-transparent transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#111827]/80 to-[#111827]/60 border border-white/[0.06] backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#818CF8] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Have a custom project in mind?
              </p>
            </div>
            <motion.a
              href="https://www.fiverr.com/osamarizwan277"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-[#38BDF8]/20"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <ExternalLink className="w-4 h-4" />
              Get a Quote
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}