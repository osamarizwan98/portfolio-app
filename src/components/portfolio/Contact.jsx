import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Loader2,
  CheckCircle,
  Copy,
  Check,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
// import { base44 } from "@/api/base44Client";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/osama-rizwan/",
    label: "LinkedIn",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Github,
    href: "https://github.com/osamarizwan98",
    label: "GitHub",
    color: "from-gray-500 to-gray-600",
  },
  {
    icon: ExternalLink,
    href: "https://www.fiverr.com/osamarizwan277",
    label: "Fiverr",
    color: "from-green-500 to-green-600",
  },
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    color: "text-rose-400",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "~1 Hour",
    color: "text-amber-400",
  },
];

function CopyEmailButton({ email = "osamarizwan277@gmail.com" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="relative group w-full p-5 bg-gradient-to-br from-[#111827] to-[#0B1220] border border-white/[0.06] rounded-2xl hover:border-[#38BDF8]/30 transition-all duration-300 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/5 to-[#818CF8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-center gap-4">
        <motion.div
          whileHover={{ rotate: 10 }}
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#38BDF8] to-[#818CF8] p-[1px]"
        >
          <div className="w-full h-full rounded-[11px] bg-[#111827] flex items-center justify-center">
            <Mail className="w-6 h-6 text-[#38BDF8]" />
          </div>
        </motion.div>

        <div className="text-left flex-1">
          <div
            className="text-xs text-gray-500 mb-1"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Email Address
          </div>
          <div
            className="text-white font-semibold text-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {email}
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-[#38BDF8]/30 group-hover:bg-[#38BDF8]/5 transition-all"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
              >
                <Check className="w-5 h-5 text-green-400" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Copy className="w-5 h-5 text-gray-400 group-hover:text-[#38BDF8] transition-colors" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-xl shadow-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Email Copied!
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-500 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Email sent successfully");
        setStatus("success");
      } else {
        console.error("Error sending email");
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    } finally {
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#38BDF8]/[0.03] to-[#818CF8]/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative">
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
            <MessageCircle className="w-4 h-4" />
            Get in Touch
          </motion.span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mt-3"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Let's Build Something Amazing
          </h2>
          <p
            className="text-gray-400 mt-4 max-w-xl mx-auto text-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Ready to start your next project? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Email Card */}
            <CopyEmailButton />

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-2xl bg-[#111827]/80 border border-white/[0.06] hover:border-white/[0.1] transition-all"
                >
                  <info.icon className={`w-5 h-5 ${info.color} mb-2`} />
                  <div
                    className="text-xs text-gray-500 mb-0.5"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {info.label}
                  </div>
                  <div
                    className="text-white font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {info.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-5 rounded-2xl bg-[#111827]/80 border border-white/[0.06]">
              <h3
                className="text-sm font-semibold text-gray-400 mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-white hover:border-white/[0.15] transition-all group"
                  >
                    <link.icon className="w-5 h-5" />
                    <span
                      className="text-sm font-medium hidden sm:inline"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Fiverr CTA */}
            <motion.a
              href="https://www.fiverr.com/osamarizwan277"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
              className="block p-5 rounded-2xl bg-gradient-to-r from-[#38BDF8]/10 to-[#818CF8]/10 border border-[#38BDF8]/20 hover:border-[#38BDF8]/40 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3
                    className="text-white font-semibold mb-1"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Quick Project?
                  </h3>
                  <p
                    className="text-sm text-gray-400"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Hire me directly on Fiverr
                  </p>
                </div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#818CF8] flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </motion.a>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-2xl border border-white/[0.06] p-6 md:p-8 overflow-hidden h-full bg-[#111827]/60 backdrop-blur-sm">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#38BDF8]/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#818CF8]/10 to-transparent rounded-tr-full" />

              <form onSubmit={handleSubmit} className="relative space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label
                      className="block text-sm font-medium text-gray-300 mb-2"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      required
                      className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#38BDF8]/50 focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                      style={{ fontFamily: "Inter, sans-serif" }}
                      placeholder="John Doe"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label
                      className="block text-sm font-medium text-gray-300 mb-2"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      required
                      className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#38BDF8]/50 focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                      style={{ fontFamily: "Inter, sans-serif" }}
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <label
                    className="block text-sm font-medium text-gray-300 mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Project Details
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#38BDF8]/50 focus:ring-2 focus:ring-[#38BDF8]/20 transition-all resize-none"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    placeholder="Tell me about your project, goals, and timeline..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  whileHover={status === "idle" ? { scale: 1.01, y: -2 } : {}}
                  whileTap={status === "idle" ? { scale: 0.99 } : {}}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg ${
                    status === "success"
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-green-500/20"
                      : "bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-white hover:opacity-90 shadow-[#38BDF8]/20"
                  } disabled:opacity-70`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
