"use client"

import React from 'react';
import Navbar from '@/components/portfolio/Navbar';
import ScrollProgress from '@/components/portfolio/ScrollProgress';
import Hero from '@/components/portfolio/Hero';
import Projects from '@/components/portfolio/Projects';
import Expertise from '@/components/portfolio/Expertise';
import Services from '@/components/portfolio/Services';
import Experience from '@/components/portfolio/Experience';
import Stats from '@/components/portfolio/Stats';
import Testimonials from '@/components/portfolio/Testimonials';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Expertise />
        <Services />
        <Experience />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}