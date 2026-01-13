import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Mail } from 'lucide-react';

export default function CopyEmailButton({ email = "hello@devportfolio.com" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      className="relative group flex items-center gap-3 px-6 py-4 bg-[#1E293B] border border-[#334155] rounded-xl hover:border-[#38BDF8]/50 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center">
        <Mail className="w-5 h-5 text-[#38BDF8]" />
      </div>

      <div className="text-left">
        <div 
          className="text-xs text-gray-400 mb-0.5"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Quick Copy Email
        </div>
        <div 
          className="text-white font-medium"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {email}
        </div>
      </div>

      <div className="ml-3 w-10 h-10 rounded-lg border border-[#334155] flex items-center justify-center group-hover:border-[#38BDF8]/50 transition-colors">
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key="check"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="text-[#38BDF8]"
            >
              <Check className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="text-gray-400 group-hover:text-[#38BDF8] transition-colors"
            >
              <Copy className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#38BDF8] text-[#0F172A] text-sm font-semibold rounded-lg shadow-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Copied!
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#38BDF8] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}