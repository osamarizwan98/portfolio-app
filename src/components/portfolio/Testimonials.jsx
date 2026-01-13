import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, MapPin, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    quote: "I have worked with Osama several times, always does a great job and is super quick. He is the best!",
    name: "Sawyer G.",
    location: "United States",
    rating: 5,
    highlight: "Repeat client",
  },
  {
    quote: "Have used him several times, always delivers great work. Highly recommend!",
    name: "Sawyer G.",
    location: "United States",
    rating: 5,
    highlight: "Multiple projects",
  },
  {
    quote: "Amazing guy. Fixed all my Shopify issues quickly and professionally.",
    name: "Kavendy O.",
    location: "Canada",
    rating: 5,
    highlight: "Quick turnaround",
  },
  {
    quote: "Great every time I work with him! Professional communication and excellent results.",
    name: "Verified Client",
    location: "Fiverr",
    rating: 5,
    highlight: "5-star service",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38BDF8]/[0.01] to-transparent" />
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20 mb-4"
          >
            <MessageSquare className="w-4 h-4" />
            Reviews
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Client Feedback
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div 
            className="relative rounded-3xl border border-white/[0.06] p-8 md:p-12 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.7) 0%, rgba(17, 24, 39, 0.5) 100%)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Background Glow */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-60 h-60 bg-[#38BDF8] rounded-full blur-[80px]"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.08, 0.05] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#818CF8] rounded-full blur-[80px]"
            />

            {/* Quote Icon */}
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="relative flex justify-center mb-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#38BDF8]/10 to-[#818CF8]/10 border border-white/[0.06] flex items-center justify-center">
                <Quote className="w-7 h-7 text-[#38BDF8]" />
              </div>
            </motion.div>

            {/* Stars */}
            <div className="relative flex justify-center gap-1.5 mb-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                </motion.div>
              ))}
            </div>

            {/* Testimonial Content */}
            <div className="relative min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                    "{testimonials[current].quote}"
                  </p>

                  <div className="flex flex-col items-center gap-3">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#38BDF8]/20 to-[#818CF8]/20 text-[#38BDF8] border border-[#38BDF8]/20"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {testimonials[current].highlight}
                    </motion.span>
                    <div className="text-lg font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {testimonials[current].name}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {testimonials[current].location}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="relative flex items-center justify-center gap-6 mt-8">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-white/[0.1] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/5 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrent(index)}
                    whileHover={{ scale: 1.2 }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current 
                        ? 'bg-gradient-to-r from-[#38BDF8] to-[#818CF8] w-8' 
                        : 'bg-white/10 w-2 hover:bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-white/[0.1] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/5 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}