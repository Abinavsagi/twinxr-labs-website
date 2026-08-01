'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-blue-500/20">
        <div className="text-2xl font-bold text-cyan-400">TWINXR</div>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#industries" className="hover:text-blue-400">Industries</a>
          <a href="#solutions" className="hover:text-blue-400">Solutions</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-sm font-semibold">
          Book Demo
        </button>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover" src="https://videos.pexels.com/video-files/855370/855370-hd_1280_720_30fps.mp4" />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div className="relative z-10 text-center max-w-4xl mx-auto px-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
            Building the Digital Future
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">of Real Estate & Cities</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">TwinXR creates AI-powered Digital Twin platforms for Real Estate, Smart Cities, Government and Infrastructure.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold">Book Demo</button>
            <button className="border-2 border-cyan-400 hover:bg-cyan-400/10 px-8 py-3 rounded-full font-semibold">Watch Demo</button>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section id="about" className="min-h-screen bg-gradient-to-b from-black via-blue-950/20 to-black py-20 px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-5xl font-bold mb-6">About TwinXR Labs</h2>
              <p className="text-gray-300 text-lg mb-4">TwinXR Labs is transforming how the real estate, infrastructure, and smart cities industries operate using digital twin technology.</p>
              <p className="text-gray-300 text-lg mb-6">Using Unreal Engine 5, AI, and IoT integration, we create immersive, photorealistic 3D environments.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3"><div className="w-3 h-3 bg-cyan-400 rounded-full" /><span>500+ Projects Completed</span></div>
                <div className="flex items-center gap-3"><div className="w-3 h-3 bg-cyan-400 rounded-full" /><span>50+ Cities Transformed</span></div>
                <div className="flex items-center gap-3"><div className="w-3 h-3 bg-cyan-400 rounded-full" /><span>10M+ Sq Ft Visualized</span></div>
              </div>
            </motion.div>
            <motion.div className="h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl border border-blue-500/30 flex items-center justify-center" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="text-6xl">🏢</motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INDUSTRIES */}
      <section id="industries" className="min-h-screen bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-400 text-lg">Transforming diverse sectors with digital twin technology</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Residential', icon: '🏘️', desc: 'Premium residential visualizations' },
              { name: 'Commercial', icon: '🏢', desc: 'Mixed-use developments' },
              { name: 'Industrial', icon: '🏭', desc: 'Manufacturing & logistics' },
              { name: 'Government', icon: '🏛️', desc: 'Public infrastructure' },
              { name: 'Infrastructure', icon: '🌉', desc: 'Roads, bridges & utilities' },
              { name: 'Smart Cities', icon: '🌆', desc: 'Connected urban environments' },
            ].map((industry, i) => (
              <motion.div key={i} className="p-8 rounded-2xl bg-gradient-to-br from-blue-950/40 to-cyan-950/40 border border-blue-500/30 hover:border-cyan-400" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -10 }}>
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
                <p className="text-gray-400">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: DIGITAL TWIN */}
      <section className="min-h-screen bg-gradient-to-b from-black to-blue-950/20 py-20 px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">What is a Digital Twin?</h2>
            <p className="text-gray-400 text-lg">A complete virtual representation of the physical world</p>
          </motion.div>
          <div className="flex flex-col items-center gap-6">
            {['Physical World', '3D Model', 'GIS Data', 'IoT Sensors', 'AI Analytics', 'Dashboard', 'Insights'].map((step, i) => (
              <div key={i} className="flex items-center w-full max-w-2xl">
                <motion.div className="flex-1 flex items-center justify-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-full w-24 h-24 flex flex-col items-center justify-center text-center text-xs font-bold">{step}</div>
                </motion.div>
                {i < 6 && <motion.div className="text-2xl text-cyan-400 px-4" animate={{ y: [0, 5, 0] }} transition={{ delay: i * 0.1, duration: 1.5, repeat: Infinity }}>↓</motion.div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SOLUTIONS */}
      <section id="solutions" className="min-h-screen bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">Our Solutions</h2>
          </motion.div>
          <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
            {['Sales Digital Twin', 'Construction Monitoring', 'Command Center', 'Asset Management'].map((sol, i) => (
              <button key={i} onClick={() => setActiveTab(i)} className={`px-6 py-3 rounded-full whitespace-nowrap font-semibold transition ${activeTab === i ? 'bg-blue-600' : 'bg-gray-900'}`}>
                {sol}
              </button>
            ))}
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={activeTab}>
            <img src={['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'][activeTab]} alt="Solution" className="rounded-2xl w-full h-96 object-cover" />
            <div>
              <h3 className="text-4xl font-bold mb-4">{'Sales Digital Twin|Construction Monitoring|Digital Command Center|Asset Management'.split('|')[activeTab]}</h3>
              <p className="text-gray-300 text-lg">Industry-leading solution for transforming your business operations and maximizing efficiency.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6-14: PLACEHOLDER SECTIONS */}
      <section className="min-h-screen bg-gradient-to-b from-black to-blue-950/20 py-20 px-6 flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <h2 className="text-5xl font-bold mb-6">More Premium Sections Coming</h2>
          <p className="text-gray-400 text-xl">This is your premium 14-section website. Sections 6-14 include: Feature Showcase, Video Gallery, Case Studies, Command Center, Technology Stack, Why TWINXR, Testimonials, Clients, and Contact.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-blue-500/20 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">&copy; 2026 TWINXR Labs. All rights reserved.</p>
          <p className="text-gray-400">5th Floor, Jubilee Hills, Hyderabad | +91-9390062725 | Abinav@twinxr.co</p>
        </div>
      </footer>
    </div>
  );
}
