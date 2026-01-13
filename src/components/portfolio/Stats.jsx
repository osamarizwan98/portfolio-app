import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Code, Rocket, Award, Calendar } from 'lucide-react';

const timeline = [
  {
    year: '2020-2021',
    title: 'Wordpress Developer',
    description: 'Began as a Web Developer Intern at Devmont Digital, learning fundamentals and building client projects.',
    icon: Rocket,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    year: '2021-2023',
    title: 'Associate Web Developer',
    description: 'Joined Developers Studio, leading Shopify and full-stack projects. Also started freelancing on Fiverr.',
    icon: Code,
    color: 'from-[#38BDF8] to-[#0EA5E9]',
  },
  {
    year: '2023',
    title: 'Fiverr Level 1 Seller',
    description: 'Achieved Level 1 seller status with 77+ completed projects and maintained 4.9-star rating.',
    icon: Award,
    color: 'from-[#818CF8] to-[#6366F1]',
  },
  {
    year: '2024',
    title: 'Software Engineer at Contour',
    description: 'Joined Contour Software as Software Engineer, working on enterprise-level applications.',
    icon: Briefcase,
    color: 'from-orange-500 to-amber-500',
  },
];

const stats = [
  { value: 6, suffix: '+', label: 'Years Experience' },
  { value: 77, suffix: '+', label: 'Projects Delivered' },
  { value: 4.9, suffix: '', label: 'Client Rating' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
];

const AnimatedCounter = ({ value, suffix, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="tabular-nums">
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
};

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38BDF8]/[0.02] to-transparent" />
      
      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Section Header */}
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
            <Calendar className="w-4 h-4" />
            Stats
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Successful Projects
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative p-6 rounded-2xl bg-[#111827]/80 border border-white/[0.06] hover:border-[#38BDF8]/20 transition-all text-center group overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/5 to-[#818CF8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                </div>
                <div className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}