'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              <h3 className="text-4xl font-bold mb-4">{['Sales Digital Twin', 'Construction Monitoring', 'Digital Command Center', 'Asset Management'][activeTab]}</h3>
              <p className="text-gray-300 text-lg">Industry-leading solution for transforming your business operations and maximizing efficiency.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: SALES DIGITAL TWIN BENEFITS */}
      <section className="min-h-screen bg-gradient-to-b from-black to-blue-950/20 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">Sales Digital Twin Benefits</h2>
            <p className="text-gray-400 text-lg">Transform your sales process with immersive visualization</p>
          </motion.div>

          <div className="space-y-8">
            {[
              { before: 'Multiple Site Visits', after: 'Instant Selection', beforeDesc: 'Buyers Confused About Orientation', afterDesc: 'Plot & Orientation Clear', icon: '📍' },
              { before: 'Cannot Visualize', after: 'See Every Angle', beforeDesc: 'Space & Light Unclear', afterDesc: 'Light & Ventilation Visible', icon: '💡' },
              { before: 'Sales Estimates', after: 'Live Routing Data', beforeDesc: 'Buyer Skeptical About Timing', afterDesc: 'Instantly Verified', icon: '📊' },
              { before: 'Wait for Construction', after: 'Walk Amenities Now', beforeDesc: 'Amenity Details Uncertain', afterDesc: 'Pool, Gym, Gardens Visible', icon: '🏊' },
              { before: 'Different Narratives', after: 'One Unified Narrative', beforeDesc: 'Team Explains Differently', afterDesc: 'Consistent Message Always', icon: '📢' },
            ].map((benefit, i) => (
              <motion.div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                {/* Before */}
                <div className="p-8 rounded-2xl bg-red-950/30 border-2 border-red-500/50">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-red-300">{benefit.before}</h3>
                  <p className="text-gray-300">{benefit.beforeDesc}</p>
                </div>
                {/* After */}
                <div className="p-8 rounded-2xl bg-green-950/30 border-2 border-green-500/50">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-green-300">{benefit.after}</h3>
                  <p className="text-gray-300">{benefit.afterDesc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: ROI METRICS */}
      <section className="min-h-screen bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">Proven ROI Results</h2>
            <p className="text-gray-400 text-lg">Real impact from digital twin implementation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { stat: '40%', label: 'Faster Sales Cycles', color: 'from-blue-600 to-cyan-600' },
              { stat: '65%', label: 'Higher Conversion Rates', color: 'from-cyan-600 to-green-600' },
              { stat: '50%', label: 'Reduction in Follow-up Costs', color: 'from-green-600 to-blue-600' },
              { stat: '3x', label: 'More Qualified Leads', color: 'from-purple-600 to-pink-600' },
            ].map((metric, i) => (
              <motion.div key={i} className={`p-8 rounded-2xl bg-gradient-to-br ${metric.color} bg-opacity-20 border border-opacity-50 text-center`} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <div className="text-6xl font-bold mb-4">{metric.stat}</div>
                <p className="text-xl text-gray-200">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FEATURE SHOWCASE */}
      <section className="min-h-screen bg-gradient-to-b from-black to-blue-950/20 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-5xl font-bold text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Platform Features
          </motion.h2>

          <div className="space-y-20">
            {[
              { title: 'Interactive Walkthrough', desc: 'Navigate through complex projects in real-time', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop' },
              { title: 'AI Analytics', desc: 'Extract actionable insights from your digital twin', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop' },
              { title: 'GIS Integration', desc: 'Connect with real-world geographic data', img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop' },
              { title: 'IoT Monitoring', desc: 'Real-time sensor data visualization', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop' },
            ].map((feature, i) => (
              <motion.div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:grid-cols-2 md:[&>*:first-child]:order-2' : ''}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <div>
                  <h3 className="text-4xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300 text-lg">{feature.desc}</p>
                </div>
                <img src={feature.img} alt={feature.title} className="rounded-2xl w-full h-96 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: COMMAND CENTER */}
      <section className="min-h-screen bg-black py-20 px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div className="text-center mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">Digital Command Center</h2>
            <p className="text-gray-400 text-lg">Centralized control for smart cities</p>
          </motion.div>

          <motion.div className="rounded-2xl border border-cyan-500/30 overflow-hidden bg-gradient-to-b from-blue-950/40 to-cyan-950/20 p-8" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Power Usage', value: '2,847 MW', icon: '⚡' },
                { label: 'Water Flow', value: '1,234 L/s', icon: '💧' },
                { label: 'Traffic Flow', value: '94% Optimal', icon: '🚗' },
                { label: 'Air Quality', value: 'Good', icon: '🌬️' },
                { label: 'Construction Progress', value: '72%', icon: '🏗️' },
                { label: 'Active Sensors', value: '1,847', icon: '📡' },
                { label: 'Incidents Today', value: '0', icon: '⚠️' },
                { label: 'System Health', value: '99.8%', icon: '✅' },
              ].map((metric, i) => (
                <motion.div key={i} className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-xl p-4 border border-blue-500/20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                  <div className="text-3xl mb-2">{metric.icon}</div>
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 10: WHY TWINXR */}
      <section className="min-h-screen bg-gradient-to-b from-black to-blue-950/20 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">Why Choose TWINXR</h2>
            <p className="text-gray-400 text-lg">Unmatched capabilities for digital transformation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Immersive', desc: 'Photorealistic 3D environments' },
              { title: 'Scalable', desc: 'From projects to entire cities' },
              { title: 'AI-Powered', desc: 'Intelligent analytics & insights' },
              { title: 'Cloud-Native', desc: 'Accessible anywhere, anytime' },
              { title: 'Interactive', desc: 'Real-time customization' },
              { title: 'Real-Time', desc: 'Live data integration' },
            ].map((reason, i) => (
              <motion.div key={i} className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 hover:border-cyan-400 transition" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -10 }}>
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">{reason.title}</h3>
                <p className="text-gray-300">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: CONTACT */}
      <section id="contact" className="min-h-screen bg-black py-20 px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg">Let's build the future together</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.form className="space-y-4" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <input type="text" placeholder="Your Name" className="w-full px-6 py-3 rounded-full bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition text-white" name="name" value={formData.name} onChange={handleInputChange} />
              <input type="email" placeholder="Your Email" className="w-full px-6 py-3 rounded-full bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition text-white" name="email" value={formData.email} onChange={handleInputChange} />
              <input type="tel" placeholder="Your Phone" className="w-full px-6 py-3 rounded-full bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition text-white" name="phone" value={formData.phone} onChange={handleInputChange} />
              <input type="text" placeholder="Company Name" className="w-full px-6 py-3 rounded-full bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition text-white" name="company" value={formData.company} onChange={handleInputChange} />
              <textarea placeholder="Your Message" rows={4} className="w-full px-6 py-3 rounded-2xl bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition resize-none text-white" name="message" value={formData.message} onChange={handleInputChange} />
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3 rounded-full font-semibold transition">
                Send Message
              </button>
            </motion.form>

            {/* Info */}
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
              <h4 className="font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Sales Digital Twin</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Construction Monitoring</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Command Center</a></li>
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
