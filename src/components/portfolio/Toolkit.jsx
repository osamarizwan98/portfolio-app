import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Workflow, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Core Tech',
    icon: Code2,
    description: 'Building robust, scalable applications',
    skills: [
      { name: 'Next.js', level: 95 },
      { name: 'React', level: 95 },
      { name: 'Node.js', level: 90 },
      { name: 'Python/FastAPI', level: 85 },
    ],
  },
  {
    title: 'Automation',
    icon: Workflow,
    description: 'Streamlining workflows & processes',
    skills: [
      { name: 'n8n', level: 95 },
      { name: 'Zapier', level: 90 },
      { name: 'API Integration', level: 92 },
      { name: 'Webhooks', level: 88 },
    ],
  },
  {
    title: 'Tools & Cloud',
    icon: Cloud,
    description: 'Infrastructure & deployment',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 82 },
      { name: 'Git', level: 95 },
    ],
  },
];

const SkillBar = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="mb-4 last:mb-0"
  >
    <div className="flex justify-between mb-1.5">
      <span 
        className="text-sm text-gray-300"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {skill.name}
      </span>
      <span 
        className="text-sm text-[#38BDF8]"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {skill.level}%
      </span>
    </div>
    <div className="h-2 bg-[#0F172A] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
        className="h-full bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full"
      />
    </div>
  </motion.div>
);

export default function Toolkit() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A]/50">
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
            Expertise
          </span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            My Toolkit
          </h2>
          <p 
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Technologies and tools I use to bring ideas to life and 
            create exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              className="bg-[#1E293B] rounded-2xl border border-[#334155] p-6 lg:p-8 hover:border-[#38BDF8]/30 transition-colors duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-[#38BDF8]" />
                </div>
                <div>
                  <h3 
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {category.title}
                  </h3>
                  <p 
                    className="text-sm text-gray-400"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div>
                {category.skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}