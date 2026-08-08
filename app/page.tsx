'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [benefitToggles, setBenefitToggles] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const toggleBenefit = (index: number) => {
    setBenefitToggles((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const benefits = [
    {
      title: 'Plot & Orientation',
      conventional: { text: 'Multiple Visits', desc: 'Buyers Confused About Orientation', icon: '🚗' },
      digital: { text: 'Instant Selection', desc: 'Plot & Orientation Crystal Clear', icon: '⚡' },
    },
    {
      title: 'Sales Team Narratives',
      conventional: { text: 'Different Stories', desc: 'Team Explains Differently', icon: '🗣️' },
      digital: { text: 'Unified Message', desc: 'Consistent Message Always', icon: '📢' },
    },
    {
      title: 'Space & Light Visualization',
      conventional: { text: 'Cannot Visualize', desc: 'Space & Light Unclear', icon: '❌' },
      digital: { text: 'See Every Angle', desc: 'Light & Ventilation Visible', icon: '✅' },
    },
    {
      title: 'Amenities Preview',
      conventional: { text: 'Wait for Construction', desc: 'Amenity Details Uncertain', icon: '⏳' },
      digital: { text: 'Walk Amenities Now', desc: 'Pool, Gym, Gardens Visible', icon: '🏊' },
    },
  ];

  const industries = [
    {
      main: 'Residential',
      icon: '🏘️',
      subcategories: [
        { name: 'Apartments', emoji: '🏢' },
        { name: 'Villas', emoji: '🏡' },
        { name: 'Open Plots', emoji: '📍' },
        { name: 'Townhouses', emoji: '🏠' }
      ]
    },
    {
      main: 'Commercial',
      icon: '🏢',
      subcategories: [
        { name: 'Office Spaces', emoji: '💼' },
        { name: 'Retail Shops', emoji: '🛍️' },
        { name: 'Showrooms', emoji: '🎨' },
        { name: 'Co-working', emoji: '👥' }
      ]
    },
    {
      main: 'Smart Cities',
      icon: '🌆',
      subcategories: [
        { name: 'Urban Planning', emoji: '📐' },
        { name: 'Infrastructure', emoji: '🌉' },
        { name: 'Public Spaces', emoji: '🏞️' },
        { name: 'Transit Hubs', emoji: '🚇' }
      ]
    },
    {
      main: 'Housing & Logistics',
      icon: '🏭',
      subcategories: [
        { name: 'Warehouses', emoji: '📦' },
        { name: 'Distribution', emoji: '🚚' },
        { name: 'Fulfillment', emoji: '✅' },
        { name: 'Storage', emoji: '🗄️' }
      ]
    },
    {
      main: 'Aviation',
      icon: '✈️',
      subcategories: [
        { name: 'Terminals', emoji: '🏛️' },
        { name: 'Hangars', emoji: '🛩️' },
        { name: 'Runways', emoji: '🛫' },
        { name: 'Ground Services', emoji: '🛠️' }
      ]
    },
    {
      main: 'Hospitality',
      icon: '🏨',
      subcategories: [
        { name: 'Hotels', emoji: '🛏️' },
        { name: 'Resorts', emoji: '🏖️' },
        { name: 'Restaurants', emoji: '🍽️' },
        { name: 'Lounges', emoji: '🍸' }
      ]
    },
  ];

  const products = [
    { name: '3D Model Showcase', emoji: '🎨' },
    { name: '3D Space Mapping & Amenities', emoji: '📍' },
    { name: 'Real Time City View', emoji: '🌍' },
    { name: 'Interior Space Experience', emoji: '🏠' },
    { name: 'Time & Climate Simulation', emoji: '🌤️' },
    { name: 'Property Visualization', emoji: '🏗️' },
    { name: '360° Tours', emoji: '🔄' },
    { name: 'Drive Mode', emoji: '🚗' },
    { name: 'Drone Mode', emoji: '🚁' },
  ];

  const digitalTwinSteps = [
    { name: 'Physical World', emoji: '🌍' },
    { name: '3D Model', emoji: '🎨' },
    { name: 'GIS Data', emoji: '📍' },
    { name: 'IoT Sensors', emoji: '📡' },
    { name: 'AI Analytics', emoji: '🤖' },
    { name: 'Dashboard', emoji: '📊' },
    { name: 'Insights', emoji: '💡' },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-blue-500/20">
        <div className="text-2xl font-bold text-cyan-400">TWINXR</div>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#industries" className="hover:text-blue-400">Industries</a>
          <a href="#products" className="hover:text-blue-400">Products</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-sm font-semibold">
          Book Demo
        </button>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
        <iframe
          src="https://www.youtube.com/embed/qwuqmW4t7cM?autoplay=1&mute=1&loop=1&playlist=qwuqmW4t7cM"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div className="relative z-10 text-center max-w-4xl mx-auto px-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
            Building the Digital Future
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">of Real Estate & Cities</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Experience projects before they exist. Transform how buyers decide, teams collaborate, and cities evolve.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold">Book Demo</button>
            <button className="border-2 border-cyan-400 hover:bg-cyan-400/10 px-8 py-3 rounded-full font-semibold">Watch Demo</button>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: INDUSTRIES */}
      <section id="industries" className="min-h-screen bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">Industries We Transform</h2>
            <p className="text-gray-400 text-lg">Digital twin solutions for every sector</p>
          </motion.div>

          <div className="space-y-16">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* LEFT - Sub-categories (2) */}
                <div className="space-y-3">
                  {industry.subcategories.slice(0, 2).map((sub, idx) => (
                    <motion.div
                      key={idx}
                      className="p-4 rounded-xl bg-gradient-to-br from-blue-950/30 to-cyan-950/30 border border-blue-500/30 hover:border-cyan-400 transition text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-3xl mb-2">{sub.emoji}</div>
                      <p className="text-sm text-gray-300 font-semibold">{sub.name}</p>
                    </motion.div>
                  ))}
                </div>

                {/* CENTER - Main Industry (3 columns width) */}
                <motion.div
                  className="col-span-1 md:col-span-3 p-12 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border-2 border-cyan-400 text-center flex flex-col items-center justify-center mx-auto md:mx-0"
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="text-7xl mb-4">{industry.icon}</div>
                  <h3 className="text-3xl font-bold text-cyan-300">{industry.main}</h3>
                </motion.div>

                {/* RIGHT - Sub-categories (2) */}
                <div className="space-y-3">
                  {industry.subcategories.slice(2).map((sub, idx) => (
                    <motion.div
                      key={idx}
                      className="p-4 rounded-xl bg-gradient-to-br from-blue-950/30 to-cyan-950/30 border border-blue-500/30 hover:border-cyan-400 transition text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-3xl mb-2">{sub.emoji}</div>
                      <p className="text-sm text-gray-300 font-semibold">{sub.name}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: DIGITAL TWIN - HORIZONTAL WITH ARROWS */}
      <section className="min-h-screen bg-gradient-to-b from-black to-blue-950/20 py-20 px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">What is a Digital Twin?</h2>
            <p className="text-gray-400 text-lg">A complete virtual representation connected to reality</p>
          </motion.div>

          {/* GRID WITH ARROWS - ALL ON SCREEN */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
            {digitalTwinSteps.map((step, i) => (
              <motion.div
                key={i}
                className="flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg p-4 w-24 h-24 flex flex-col items-center justify-center text-center border border-cyan-400/50 hover:border-cyan-400"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-1">{step.emoji}</div>
                  <p className="text-xs font-bold text-white">{step.name.split(' ')[0]}</p>
                </motion.div>
                
                {i < digitalTwinSteps.length - 1 && (
                  <motion.div
                    className="text-3xl text-cyan-400 mx-2 font-bold"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ delay: i * 0.08, duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p 
            className="text-center mt-8 text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Every step connected, every insight actionable. From physical data to strategic decisions in real-time.
          </motion.p>
        </div>
      </section>

      {/* SECTION 4: BENEFITS - CLEANER SPACING */}
      <section className="min-h-screen bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">Sales Digital Twin Benefits</h2>
            <p className="text-gray-400 text-lg">Conventional Approach vs Digital Twin</p>
          </motion.div>

          <div className="space-y-20">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="cursor-pointer"
                onClick={() => toggleBenefit(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-center text-cyan-400 mb-12">{benefit.title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                  {/* CONVENTIONAL */}
                  <motion.div
                    className={`p-12 rounded-2xl border-2 transition-all duration-500 text-center ${
                      benefitToggles[i]
                        ? 'border-red-500/30 bg-red-950/20'
                        : 'border-red-500/50 bg-red-950/30'
                    }`}
                    animate={{ scale: benefitToggles[i] ? 0.95 : 1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <motion.div
                      className="text-7xl mb-6"
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ delay: i * 0.1, duration: 2.5, repeat: Infinity }}
                    >
                      {benefit.conventional.icon}
                    </motion.div>
                    <h4 className="text-2xl font-bold mb-3 text-red-300">{benefit.conventional.text}</h4>
                    <p className="text-gray-300 mb-6">{benefit.conventional.desc}</p>
                    <p className="text-red-400 font-bold text-lg">CONVENTIONAL</p>
                  </motion.div>

                  {/* DIGITAL TWIN */}
                  <motion.div
                    className={`p-12 rounded-2xl border-2 transition-all duration-500 text-center ${
                      benefitToggles[i]
                        ? 'border-green-500/50 bg-green-950/30'
                        : 'border-green-500/30 bg-green-950/20'
                    }`}
                    animate={{ scale: benefitToggles[i] ? 1 : 0.95 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <motion.div
                      className="text-7xl mb-6"
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ delay: i * 0.1, duration: 2.5, repeat: Infinity }}
                    >
                      {benefit.digital.icon}
                    </motion.div>
                    <h4 className="text-2xl font-bold mb-3 text-green-300">{benefit.digital.text}</h4>
                    <p className="text-gray-300 mb-6">{benefit.digital.desc}</p>
                    <p className="text-green-400 font-bold text-lg">DIGITAL TWIN</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PRODUCTS */}
      <section id="products" className="min-h-screen bg-gradient-to-b from-black to-blue-950/20 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-400 text-lg">Comprehensive solutions for complete visualization</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={i}
                className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 hover:border-cyan-400 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="p-8 flex flex-col items-center justify-between h-full">
                  {/* ICON */}
                  <div className="text-5xl mb-4">{product.emoji}</div>
                  
                  {/* NAME */}
                  <h3 className="text-xl font-bold text-center text-cyan-300 mb-6">{product.name}</h3>
                  
                  {/* VIDEO PLACEHOLDER */}
                  <div className="w-full aspect-video bg-gradient-to-br from-blue-800/40 to-cyan-800/40 border border-blue-500/30 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🎬</div>
                      <p className="text-xs text-gray-400">Video Coming Soon</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: ABOUT */}
      <section id="about" className="min-h-screen bg-black py-20 px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* TEXT */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-5xl font-bold mb-8">About TwinXR Labs</h2>
              
              <div className="space-y-6 text-gray-300 text-lg">
                <p>We're reimagining how the world builds, sells, and experiences real estate. TwinXR transforms vision into reality through photorealistic 3D digital twins powered by cutting-edge AI and IoT technology.</p>
                
                <p>Our mission is simple: <span className="text-cyan-400 font-semibold">see it before you build it</span>. We empower developers, architects, and sales teams to make smarter decisions faster—reducing risk, accelerating sales, and creating immersive experiences that captivate buyers.</p>
                
                <p>From sprawling smart cities to intimate residential communities, TwinXR brings projects to life—virtually. Our platform integrates live data, environmental simulations, and interactive visualization to give stakeholders complete confidence before ground is broken.</p>
              </div>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">20+ Projects Deployed</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">2 Cities Transformed</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">Expanding Across India</span>
                </div>
              </div>
            </motion.div>

            {/* PROFESSIONAL GENERATED IMAGE */}
            <motion.div
              className="h-full min-h-96 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#0369a1', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                {/* Background */}
                <rect width="400" height="400" fill="none" />
                
                {/* Isometric City - Left Building */}
                <g>
                  <polygon points="80,200 80,280 140,320 140,240" fill="#1e40af" opacity="0.8" />
                  <polygon points="80,200 140,240 140,160 80,120" fill="#3b82f6" opacity="0.8" />
                  <polygon points="140,240 140,320 200,360 200,280" fill="#0ea5e9" opacity="0.8" />
                </g>
                
                {/* Center Building (Tallest) */}
                <g>
                  <polygon points="160,120 160,280 220,320 220,160" fill="#06b6d4" opacity="0.9" />
                  <polygon points="160,120 220,160 220,80 160,40" fill="#22d3ee" opacity="0.9" />
                  <polygon points="220,160 220,320 280,360 280,200" fill="#0891b2" opacity="0.9" />
                </g>
                
                {/* Right Building */}
                <g>
                  <polygon points="240,180 240,280 300,320 300,220" fill="#1e40af" opacity="0.8" />
                  <polygon points="240,180 300,220 300,120 240,80" fill="#3b82f6" opacity="0.8" />
                  <polygon points="300,220 300,320 360,360 360,260" fill="#0ea5e9" opacity="0.8" />
                </g>
                
                {/* Accent Elements */}
                <circle cx="160" cy="150" r="8" fill="#06b6d4" opacity="0.6" />
                <circle cx="220" cy="200" r="6" fill="#22d3ee" opacity="0.6" />
                <circle cx="280" cy="240" r="7" fill="#0891b2" opacity="0.6" />
                
                {/* Grid Lines */}
                <line x1="160" y1="40" x2="160" y2="320" stroke="#0891b2" strokeWidth="1" opacity="0.3" strokeDasharray="5,5" />
                <line x1="220" y1="80" x2="220" y2="360" stroke="#0891b2" strokeWidth="1" opacity="0.3" strokeDasharray="5,5" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CONTACT */}
      <section id="contact" className="min-h-screen bg-black py-20 px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">Let's Build Together</h2>
            <p className="text-gray-400 text-lg">Ready to transform your next project?</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* FORM */}
            <motion.form className="space-y-4" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <input type="text" placeholder="Your Name" className="w-full px-6 py-3 rounded-full bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition text-white" />
              <input type="email" placeholder="Your Email" className="w-full px-6 py-3 rounded-full bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition text-white" />
              <input type="tel" placeholder="Your Phone" className="w-full px-6 py-3 rounded-full bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition text-white" />
              <input type="text" placeholder="Company Name" className="w-full px-6 py-3 rounded-full bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition text-white" />
              <textarea placeholder="Tell us about your project..." rows={4} className="w-full px-6 py-3 rounded-2xl bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition resize-none text-white" />
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3 rounded-full font-semibold transition">
                Send Message
              </button>
            </motion.form>

            {/* INFO */}
            <motion.div className="space-y-8" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">📍 Location</h3>
                <p className="text-gray-400">3rd Floor, Babukhan Rasheed Plaza, Plot # 682, Road No. 36, Aditya Enclave, Venkatagiri, Jubilee Hills, Hyderabad, Telangana 500033</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">📱 Phone</h3>
                <p className="text-gray-400">+91-9390062725</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">📧 Email</h3>
                <p className="text-gray-400">Abinav@twinxr.co</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-black to-blue-950/20 border-t border-blue-500/20 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h4 className="text-2xl font-bold mb-4 text-cyan-400">TWINXR</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Transforming real estate through immersive digital twin technology. Building the future, today.</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h4 className="font-bold mb-4 text-gray-300">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#products" className="hover:text-cyan-400 transition">3D Model Showcase</a></li>
                <li><a href="#products" className="hover:text-cyan-400 transition">Drive & Drone Mode</a></li>
              </ul>
            </motion.div>
            
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h4 className="font-bold mb-4 text-gray-300">Explore</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#industries" className="hover:text-cyan-400 transition">Industries</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
              </ul>
            </motion.div>
            
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <h4 className="font-bold mb-4 text-gray-300">Follow Us</h4>
              <div className="flex gap-4 text-2xl">
                <a href="https://instagram.com" className="hover:text-cyan-400 transition">📷</a>
                <a href="https://youtube.com" className="hover:text-cyan-400 transition">📹</a>
                <a href="https://linkedin.com" className="hover:text-cyan-400 transition">💼</a>
                <a href="https://facebook.com" className="hover:text-cyan-400 transition">👥</a>
                <a href="https://twitter.com" className="hover:text-cyan-400 transition">𝕏</a>
              </div>
            </motion.div>
          </div>
          
          <motion.div className="border-t border-blue-500/20 pt-8 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="text-gray-400 mb-2">&copy; 2026 TWINXR Labs. All rights reserved.</p>
            <p className="text-gray-500 text-sm">3rd Floor, Babukhan Rasheed Plaza, Jubilee Hills, Hyderabad</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
