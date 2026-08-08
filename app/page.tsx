'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [productTab, setProductTab] = useState(0);
  const [benefitToggles, setBenefitToggles] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
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
      title: 'Space & Light',
      conventional: { text: 'Cannot Visualize', desc: 'Space & Light Unclear', icon: '❌' },
      digital: { text: 'See Every Angle', desc: 'Light & Ventilation Visible', icon: '✅' },
    },
    {
      title: 'Amenities Preview',
      conventional: { text: 'Wait for Construction', desc: 'Amenity Details Uncertain', icon: '⏳' },
      digital: { text: 'Walk Amenities Now', desc: 'Pool, Gym, Gardens Visible', icon: '🏊' },
    },
    {
      title: 'Sales Verification',
      conventional: { text: 'Buyer Skeptical', desc: 'Sales Estimates - No Proof', icon: '🤔' },
      digital: { text: 'Live Routing Data', desc: 'Instantly Verified with Data', icon: '📊' },
    },
  ];

  const industries = [
    {
      main: 'Residential',
      icon: '🏘️',
      subcategories: ['Apartments', 'Villas', 'Open Plots', 'Townhouses']
    },
    {
      main: 'Commercial',
      icon: '🏢',
      subcategories: ['Office Spaces', 'Retail Shops', 'Showrooms', 'Co-working']
    },
    {
      main: 'Smart Cities',
      icon: '🌆',
      subcategories: ['Urban Planning', 'Infrastructure', 'Public Spaces', 'Transit Hubs']
    },
    {
      main: 'Housing & Logistics',
      icon: '🏭',
      subcategories: ['Warehouses', 'Distribution', 'Fulfillment', 'Storage']
    },
    {
      main: 'Aviation',
      icon: '✈️',
      subcategories: ['Terminals', 'Hangars', 'Runways', 'Ground Services']
    },
    {
      main: 'Hospitality',
      icon: '🏨',
      subcategories: ['Hotels', 'Resorts', 'Restaurants', 'Lounges']
    },
  ];

  const products = [
    { name: '3D Model Showcase', icon: '🎨' },
    { name: '3D Space Mapping & Amenities', icon: '📍' },
    { name: 'Real Time City View', icon: '🌍' },
    { name: 'Interior Space Experience', icon: '🏠' },
    { name: 'Time & Climate Simulation', icon: '🌤️' },
    { name: 'Property Visualization', icon: '🏗️' },
    { name: '360° Tours', icon: '🔄' },
    { name: 'Drive Mode', icon: '🚗' },
    { name: 'Drone Mode', icon: '🚁' },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-blue-500/20">
        <div className="text-2xl font-bold text-cyan-400">TWINXR</div>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#industries" className="hover:text-blue-400">Industries</a>
          <a href="#products" className="hover:text-blue-400">Products</a>
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
              <p className="text-gray-300 text-lg mb-6">Using Unreal Engine 5, AI, and IoT integration, we create immersive, photorealistic 3D environments that allow stakeholders to visualize, analyze, and optimize complex projects before they're built.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3"><div className="w-3 h-3 bg-cyan-400 rounded-full" /><span>20+ Projects Completed</span></div>
                <div className="flex items-center gap-3"><div className="w-3 h-3 bg-cyan-400 rounded-full" /><span>2 Cities Transformed</span></div>
                <div className="flex items-center gap-3"><div className="w-3 h-3 bg-cyan-400 rounded-full" /><span>Growing Across India</span></div>
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

          <div className="space-y-12">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* LEFT - Sub-categories */}
                <div className="space-y-3">
                  {industry.subcategories.slice(0, 2).map((sub, idx) => (
                    <motion.div
                      key={idx}
                      className="p-4 rounded-xl bg-gradient-to-br from-blue-950/30 to-cyan-950/30 border border-blue-500/30 hover:border-cyan-400 transition"
                      whileHover={{ x: 10 }}
                    >
                      <p className="text-sm text-gray-300">{sub}</p>
                    </motion.div>
                  ))}
                </div>

                {/* CENTER - Main Industry */}
                <motion.div
                  className="p-12 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border-2 border-cyan-400 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-6xl mb-4">{industry.icon}</div>
                  <h3 className="text-3xl font-bold mb-2 text-cyan-300">{industry.main}</h3>
                  <p className="text-gray-400 text-sm">Digital Twin Solutions</p>
                </motion.div>

                {/* RIGHT - Sub-categories */}
                <div className="space-y-3">
                  {industry.subcategories.slice(2).map((sub, idx) => (
                    <motion.div
                      key={idx}
                      className="p-4 rounded-xl bg-gradient-to-br from-blue-950/30 to-cyan-950/30 border border-blue-500/30 hover:border-cyan-400 transition"
                      whileHover={{ x: -10 }}
                    >
                      <p className="text-sm text-gray-300">{sub}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: DIGITAL TWIN - HORIZONTAL FLOW */}
      <section className="min-h-screen bg-gradient-to-b from-black to-blue-950/20 py-20 px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">What is a Digital Twin?</h2>
            <p className="text-gray-400 text-lg">A complete virtual representation of the physical world</p>
          </motion.div>

          {/* HORIZONTAL FLOW */}
          <div className="overflow-x-auto pb-8">
            <div className="flex items-center gap-6 min-w-max justify-center px-4">
              {['Physical World', '3D Model', 'GIS Data', 'IoT Sensors', 'AI Analytics', 'Dashboard', 'Insights'].map((step, i) => (
                <motion.div
                  key={i}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-full w-28 h-28 flex flex-col items-center justify-center text-center text-xs font-bold whitespace-normal">
                    {step}
                  </div>
                  {i < 6 && (
                    <motion.div
                      className="text-3xl text-cyan-400 mx-6"
                      animate={{ x: [0, 10, 0] }}
                      transition={{ delay: i * 0.1, duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BENEFITS - CONVENTIONAL vs DIGITAL TWIN */}
      <section className="min-h-screen bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">Sales Digital Twin Benefits</h2>
            <p className="text-gray-400 text-lg">Comparing Conventional Approach vs Digital Twin</p>
          </motion.div>

          <div className="space-y-16">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch cursor-pointer"
                onClick={() => toggleBenefit(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* TITLE - LEFT */}
                <motion.div className="flex items-center justify-end pr-8 md:pr-0">
                  <h3 className="text-2xl font-bold text-cyan-400 text-right">{benefit.title}</h3>
                </motion.div>

                {/* CONVENTIONAL - MIDDLE */}
                <motion.div
                  className={`p-12 rounded-2xl border-2 transition-all duration-500 flex flex-col items-center justify-center text-center ${
                    benefitToggles[i]
                      ? 'border-red-500/30 bg-red-950/20'
                      : 'border-red-500/50 bg-red-950/30'
                  }`}
                  animate={{ scale: benefitToggles[i] ? 0.95 : 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-7xl mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ delay: i * 0.1, duration: 2, repeat: Infinity }}
                  >
                    {benefit.conventional.icon}
                  </motion.div>
                  <h4 className="text-2xl font-bold mb-3 text-red-300">{benefit.conventional.text}</h4>
                  <p className="text-gray-300 text-sm">{benefit.conventional.desc}</p>
                  <p className="text-red-400 font-bold mt-6 text-lg">CONVENTIONAL</p>
                </motion.div>

                {/* DIGITAL TWIN - RIGHT */}
                <motion.div
                  className={`p-12 rounded-2xl border-2 transition-all duration-500 flex flex-col items-center justify-center text-center ${
                    benefitToggles[i]
                      ? 'border-green-500/50 bg-green-950/30'
                      : 'border-green-500/30 bg-green-950/20'
                  }`}
                  animate={{ scale: benefitToggles[i] ? 1 : 0.95 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-7xl mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ delay: i * 0.1, duration: 2, repeat: Infinity }}
                  >
                    {benefit.digital.icon}
                  </motion.div>
                  <h4 className="text-2xl font-bold mb-3 text-green-300">{benefit.digital.text}</h4>
                  <p className="text-gray-300 text-sm">{benefit.digital.desc}</p>
                  <p className="text-green-400 font-bold mt-6 text-lg">DIGITAL TWIN</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PRODUCTS */}
      <section id="products" className="min-h-screen bg-gradient-to-b from-black to-blue-950/20 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-400 text-lg">Complete digital twin solutions for every need</p>
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
                {/* PRODUCT CARD */}
                <div className="p-8 flex flex-col items-center justify-between h-full">
                  <div>
                    <div className="text-6xl mb-4 text-center">{product.icon}</div>
                    <h3 className="text-xl font-bold text-center text-cyan-300 mb-6">{product.name}</h3>
                  </div>

                  {/* VIDEO PLACEHOLDER */}
                  <div className="w-full aspect-video bg-gradient-to-br from-blue-800/40 to-cyan-800/40 border border-blue-500/30 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🎬</div>
                      <p className="text-xs text-gray-400">Video Coming Soon</p>
                    </div>
                  </div>

                  <p className="text-center text-gray-400 text-sm">Watch on YouTube</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CONTACT */}
      <section id="contact" className="min-h-screen bg-black py-20 px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg">Let's build the future together</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* FORM */}
            <motion.form className="space-y-4" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <input type="text" placeholder="Your Name" className="w-full px-6 py-3 rounded-full bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition text-white" />
              <input type="email" placeholder="Your Email" className="w-full px-6 py-3 rounded-full bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition text-white" />
              <input type="tel" placeholder="Your Phone" className="w-full px-6 py-3 rounded-full bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition text-white" />
              <input type="text" placeholder="Company Name" className="w-full px-6 py-3 rounded-full bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition text-white" />
              <textarea placeholder="Your Message" rows={4} className="w-full px-6 py-3 rounded-2xl bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition resize-none text-white" />
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3 rounded-full font-semibold transition">
                Send Message
              </button>
            </motion.form>

            {/* INFO */}
            <motion.div className="space-y-8" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div>
                <h3 className="text-2xl font-bold mb-2">📍 Location</h3>
                <p className="text-gray-400">3rd Floor, Babukhan Rasheed Plaza, Plot # 682, Road No. 36, Aditya Enclave, Venkatagiri, Jubilee Hills, Hyderabad, Telangana 500033</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">📱 Phone</h3>
                <p className="text-gray-400">+91-9390062725</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">📧 Email</h3>
                <p className="text-gray-400">Abinav@twinxr.co</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-blue-500/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-cyan-400">TWINXR</h4>
              <p className="text-gray-400 text-sm">Building the digital future of real estate, cities, and infrastructure.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#products" className="hover:text-cyan-400 transition">3D Model Showcase</a></li>
                <li><a href="#products" className="hover:text-cyan-400 transition">Drive & Drone Mode</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
                <li><a href="#industries" className="hover:text-cyan-400 transition">Industries</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4 text-2xl">
                <a href="https://instagram.com" className="hover:text-cyan-400 transition">📷</a>
                <a href="https://youtube.com" className="hover:text-cyan-400 transition">📹</a>
                <a href="https://linkedin.com" className="hover:text-cyan-400 transition">💼</a>
                <a href="https://facebook.com" className="hover:text-cyan-400 transition">👥</a>
                <a href="https://twitter.com" className="hover:text-cyan-400 transition">𝕏</a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-500/20 pt-8 text-center">
            <p className="text-gray-400">&copy; 2026 TWINXR Labs. All rights reserved.</p>
            <p className="text-gray-400 mt-2">3rd Floor, Babukhan Rasheed Plaza, Jubilee Hills, Hyderabad, Telangana 500033</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
