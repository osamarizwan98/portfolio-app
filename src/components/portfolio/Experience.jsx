import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  MapPin,
  ExternalLink,
  Briefcase,
} from "lucide-react";

const experiences = [
  {
    company: "Devmont Digital",
    role: "Senior Shopify Theme & App Developer",
    period: "Jan 2025 - Present",
    location: "Karāchi, Pakistan",
    description:
      "Working on enterprise-level software solutions, developing scalable applications and contributing to complex technical projects.",
    highlights: [
      "Enterprise Software",
      "Full-Stack Development",
      "Team Collaboration",
    ],
    color: "from-[#38BDF8] to-[#0EA5E9]",
    current: true,
  },
  {
    company: "Devmont Digital",
    role: "Shopify Theme & App Developer",
    period: "Jan 2024 - Dec 2024",
    location: "Karāchi, Pakistan",
    description:
      "Working on Shopify projects to create Shopify Apps, web applications and e-commerce solutions. Specialized in Shopify development, custom integrations.",
    highlights: [
      "Shopify Expert",
      "React/Node.js",
      "Reactjs/Nextjs",
      "API Integration",
      "GraphQL",
      "Tailwindcss",
    ],
    color: "from-[#818CF8] to-[#6366F1]",
    current: false,
  },
  {
    company: "Devmont Digital",
    role: "Associate Web Developer",
    period: "Jul 2021 - Dec 2023",
    location: "Karāchi, Pakistan",
    description:
      "Built responsive websites and web applications using modern technologies. Worked on client projects involving Laravel, PHP, JavaScript and Shopify.",
    highlights: ["Laravel/PHP", "JavaScript", "MySQL", "Shopify", "Liquid"],
    color: "from-[#22C55E] to-[#16A34A]",
    current: false,
  },
  {
    company: "Devmont Digital",
    role: "Web Developer Intern",
    period: "Feb 2020 - Jun 2021",
    location: "Karāchi, Pakistan",
    description:
      "Started professional journey learning web development fundamentals, working on real client projects under senior developer guidance.",
    highlights: [
      "HTML/CSS",
      "WordPress",
      "Web Fundamentals",
      "Theme Development",
    ],
    color: "from-[#F59E0B] to-[#D97706]",
    current: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#818CF8]/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto relative">
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
            <Briefcase className="w-4 h-4" />
            Career
          </motion.span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mt-3"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Work Experience
          </h2>
          <p
            className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Building digital solutions across different industries and roles
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#38BDF8]/50 via-white/10 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.period}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#0B1220] border-2 border-[#38BDF8] md:-translate-x-1/2 -translate-x-1/2 z-10">
                {exp.current && (
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-[#38BDF8]/50"
                  />
                )}
              </div>

              {/* Content Card */}
              <div
                className={`md:w-[calc(50%-40px)] pl-8 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative p-6 rounded-2xl bg-[#111827]/80 border border-white/[0.06] hover:border-white/[0.12] transition-all backdrop-blur-sm overflow-hidden"
                >
                  {/* Glow */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-[0.08] rounded-full blur-[50px] transition-opacity duration-500`}
                  />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Building2 className="w-4 h-4 text-[#38BDF8]" />
                          <span
                            className="text-white font-semibold"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            {exp.company}
                          </span>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <h3
                          className="text-lg font-bold text-white"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {exp.role}
                        </h3>
                      </div>
                    </div>

                    {/* Meta */}
                    <div
                      className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className="text-gray-400 text-sm leading-relaxed mb-4"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} bg-opacity-10 text-white/80 border border-white/[0.08]`}
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-40px)]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
