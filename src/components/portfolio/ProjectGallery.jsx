import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'E-commerce Automation Suite',
    description: 'Built a complete automation system that reduced manual order processing by 85% and increased customer satisfaction scores by 40%.',
    techStack: ['Next.js', 'n8n', 'Shopify', 'PostgreSQL'],
    emoji: '🛒',
    isFreelance: true,
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Developed a real-time analytics platform processing 1M+ events daily, enabling data-driven decisions that boosted revenue by 25%.',
    techStack: ['React', 'Node.js', 'AWS', 'Redis'],
    emoji: '📊',
    isFreelance: false,
  },
  {
    title: 'Inventory Management System',
    description: 'Created an intelligent inventory system with predictive restocking, reducing stockouts by 60% and excess inventory by 35%.',
    techStack: ['Python', 'FastAPI', 'Docker', 'PostgreSQL'],
    emoji: '📦',
    isFreelance: true,
  },
  {
    title: 'Marketing Automation Pipeline',
    description: 'Engineered a multi-channel marketing automation workflow that increased lead conversion rates by 150% while reducing manual effort.',
    techStack: ['n8n', 'Zapier', 'React', 'API Integration'],
    emoji: '🚀',
    isFreelance: true,
  },
  {
    title: 'Customer Portal Platform',
    description: 'Built a self-service customer portal that decreased support tickets by 45% and improved customer onboarding time by 3x.',
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'AWS'],
    emoji: '👥',
    isFreelance: false,
  },
  {
    title: 'Payment Processing Integration',
    description: 'Integrated multiple payment gateways with automated reconciliation, processing $2M+ monthly with 99.99% uptime.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    emoji: '💳',
    isFreelance: true,
  },
];

export default function ProjectGallery() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span 
            className="text-[#38BDF8] text-sm font-medium tracking-wider uppercase"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Portfolio
          </span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Featured Projects
          </h2>
          <p 
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            A selection of projects showcasing expertise in scalable solutions, 
            automation workflows, and business-driven development.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}