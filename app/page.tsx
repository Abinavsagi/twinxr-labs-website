'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: ABOUT */}
      <AboutSection />

      {/* SECTION 3: INDUSTRIES */}
      <IndustriesSection />

      {/* SECTION 4: DIGITAL TWIN PLATFORM */}
      <DigitalTwinSection />

      {/* SECTION 5: SOLUTIONS */}
      <SolutionsSection activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* SECTION 6: FEATURE SHOWCASE */}
      <FeatureShowcase />

      {/* SECTION 7: VIDEO GALLERY */}
      <VideoGallery />

      {/* SECTION 8: CASE STUDIES */}
      <CaseStudies />

      {/* SECTION 9: COMMAND CENTER */}
      <CommandCenter />

      {/* SECTION 10: TECHNOLOGY */}
      <TechnologySection />

      {/* SECTION 11: WHY TWINXR */}
      <WhyTwinXR />

      {/* SECTION 12: TESTIMONIALS */}
      <TestimonialsSection currentIndex={currentTestimonial} />

      {/* SECTION 13: CLIENTS */}
      <ClientsSection />

      {/* SECTION 14: CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

// ==================== COMPONENTS ====================

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-blue-500/20' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        TWINXR
      </div>
      <div className="hidden md:flex gap-8 text-sm">
        {['Solutions', 'Industries', 'Projects', 'Technology', 'About', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition">
            {item}
          </a>
        ))}
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-sm font-semibold transition">
        Book Demo
      </button>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/855370/855370-hd_1280_720_30fps.mp4"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-7xl md:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Building the Digital Future
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            of Real Estate, Cities & Infrastructure
          </span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          TwinXR creates AI-powered Digital Twin platforms for Real Estate, Smart Cities, Government and Infrastructure. Visualize, analyze, and optimize with cutting-edge 3D technology.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition transform hover:scale-105">
            Book Demo
          </button>
          <button className="border-2 border-cyan-400 hover:bg-cyan-400/10 px-8 py-3 rounded-full font-semibold transition">
            Watch Platform
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-blue-950/20 to-black py-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">About TwinXR Labs</h2>
            <p className="text-gray-300 text-lg mb-4">
              TwinXR Labs is at the forefront of digital twin technology, transforming how the real estate, infrastructure, and smart cities industries operate.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Using Unreal Engine 5, AI, and IoT integration, we create immersive, photorealistic 3D environments that allow stakeholders to visualize, analyze, and optimize complex projects before they're built.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                <span>500+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                <span>50+ Cities Transformed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                <span>10M+ Sq Ft Visualized</span>
              </div>
            </div>
          </motion.div>

          {/* Right: 3D Rotating Illustration */}
          <motion.div
            className="h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl border border-blue-500/30 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="text-6xl"
            >
              🏢
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    { name: 'Residential', icon: '🏘️', description: 'Premium residential visualizations' },
    { name: 'Commercial', icon: '🏢', description: 'Mixed-use developments' },
    { name: 'Industrial', icon: '🏭', description: 'Manufacturing & logistics' },
    { name: 'Government', icon: '🏛️', description: 'Public infrastructure projects' },
    { name: 'Infrastructure', icon: '🌉', description: 'Roads, bridges & utilities' },
    { name: 'Smart Cities', icon: '🌆', description: 'Connected urban environments' },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-gray-400 text-lg">Transforming diverse sectors with digital twin technology</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-950/40 to-cyan-950/40 border border-blue-500/30 hover:border-cyan-400 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="text-5xl mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
              <p className="text-gray-400">{industry.description}</p>
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-cyan-400 rounded-tr-2xl group-hover:border-t-cyan-300 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DigitalTwinSection() {
  const steps = [
    { label: 'Physical World', icon: '🌍' },
    { label: '3D Model', icon: '📐' },
    { label: 'GIS Data', icon: '🗺️' },
    { label: 'IoT Sensors', icon: '📡' },
    { label: 'AI Analytics', icon: '🤖' },
    { label: 'Dashboard', icon: '📊' },
    { label: 'Insights', icon: '💡' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-blue-950/20 py-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">What is a Digital Twin?</h2>
          <p className="text-gray-400 text-lg">A complete virtual representation of the physical world</p>
        </motion.div>

        <div className="flex flex-col items-center gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center w-full max-w-2xl">
              <motion.div
                className="flex-1 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-full w-24 h-24 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl mb-1">{step.icon}</div>
                  <div className="text-xs font-bold">{step.label}</div>
                </div>
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  className="text-2xl text-cyan-400 px-4"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ delay: index * 0.1, duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection({ activeTab, setActiveTab }: any) {
  const solutions = [
    {
      name: 'Sales Digital Twin',
      description: 'Immersive property showcases that close deals faster',
      features: ['Interactive 3D Tours', 'Real-time Customization', 'Virtual Staging'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    },
    {
      name: 'Construction Monitoring',
      description: 'Real-time project tracking with digital overlays',
      features: ['Progress Tracking', 'Safety Monitoring', 'Resource Optimization'],
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    },
    {
      name: 'Digital Command Center',
      description: 'Centralized control room for smart cities',
      features: ['Live Dashboards', 'Sensor Integration', 'Alert System'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      name: 'Asset Management',
      description: 'Lifecycle tracking for infrastructure assets',
      features: ['Maintenance Scheduling', 'Performance Analytics', 'Predictive Maintenance'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">Our Solutions</h2>
          <p className="text-gray-400 text-lg">Tailored platforms for every use case</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
          {solutions.map((solution, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full whitespace-nowrap font-semibold transition-all ${
                activeTab === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {solution.name}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <img
                src={solutions[activeTab].image}
                alt={solutions[activeTab].name}
                className="rounded-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-4">{solutions[activeTab].name}</h3>
              <p className="text-gray-300 text-lg mb-6">{solutions[activeTab].description}</p>
              <div className="space-y-3 mb-8">
                {solutions[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition">
                Learn More
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function FeatureShowcase() {
  const features = [
    {
      title: 'Interactive Walkthrough',
      description: 'Navigate through complex projects in real-time',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    },
    {
      title: 'AI Analytics',
      description: 'Extract actionable insights from your digital twin',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      title: 'GIS Integration',
      description: 'Connect with real-world geographic data',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop',
    },
    {
      title: 'IoT Monitoring',
      description: 'Real-time sensor data visualization',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-blue-950/20 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Platform Features
        </motion.h2>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-cols-2 md:[&>*:first-child]:order-2' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-4xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-lg">{feature.description}</p>
              </div>
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-2xl w-full h-96 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoGallery() {
  const videos = [
    { title: 'Project Walkthrough', thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop' },
    { title: 'Construction Timelapse', thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop' },
    { title: 'Smart City Overview', thumbnail: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop' },
    { title: 'AI Analytics Demo', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' },
    { title: 'Real Estate Tour', thumbnail: 'https://images.unsplash.com/photo-1512217547905-9a306292fbe1?w=400&h=300&fit=crop' },
    { title: 'Infrastructure Planning', thumbnail: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop' },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">Video Gallery</h2>
          <p className="text-gray-400 text-lg">See our digital twins in action</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative rounded-2xl overflow-hidden h-64">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-2xl">▶</span>
                  </motion.div>
                </div>
              </div>
              <p className="mt-4 text-lg font-semibold">{video.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const cases = [
    {
      name: 'Trump Towers',
      industry: 'Residential',
      description: '500+ unit luxury residential complex',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop',
    },
    {
      name: 'Whispering Woods',
      industry: 'Luxury Villas',
      description: 'Premium gated community project',
      image: 'https://images.unsplash.com/photo-1512217547905-9a306292fbe1?w=400&h=400&fit=crop',
    },
    {
      name: 'Amaravati',
      industry: 'Government',
      description: 'Smart capital city development',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=400&fit=crop',
    },
    {
      name: 'Neopolis',
      industry: 'Mixed-Use',
      description: 'Integrated urban development',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-blue-950/20 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">Case Studies</h2>
          <p className="text-gray-400 text-lg">Transforming real-world projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative rounded-2xl overflow-hidden h-64 mb-4">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="bg-cyan-500 text-black px-6 py-2 rounded-full font-semibold">
                    Read Case Study
                  </button>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{caseStudy.name}</h3>
              <p className="text-cyan-400 text-sm mb-2">{caseStudy.industry}</p>
              <p className="text-gray-400">{caseStudy.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommandCenter() {
  return (
    <section className="min-h-screen bg-black py-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">Digital Command Center</h2>
          <p className="text-gray-400 text-lg">Centralized control for smart cities</p>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-cyan-500/30 overflow-hidden bg-gradient-to-b from-blue-950/40 to-cyan-950/20 p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-xl p-4 border border-blue-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-2">{metric.icon}</div>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TechnologySection() {
  const techs = [
    { name: 'Unreal Engine 5', icon: '🎮' },
    { name: 'AI / ML', icon: '🤖' },
    { name: 'GIS', icon: '🗺️' },
    { name: 'IoT', icon: '📡' },
    { name: 'Cesium', icon: '🌐' },
    { name: 'React', icon: '⚛️' },
    { name: 'FastAPI', icon: '🚀' },
    { name: 'PostgreSQL', icon: '🗄️' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-blue-950/20 py-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">Technology Stack</h2>
          <p className="text-gray-400 text-lg">Built on the best tools available</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 hover:border-cyan-400 transition cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
            >
              <div className="text-5xl mb-4">{tech.icon}</div>
              <div className="font-semibold text-center">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyTwinXR() {
  const reasons = [
    { title: 'Immersive', description: 'Photorealistic 3D environments' },
    { title: 'Scalable', description: 'From projects to entire cities' },
    { title: 'AI Powered', description: 'Intelligent analytics & insights' },
    { title: 'Cloud Native', description: 'Accessible anywhere, anytime' },
    { title: 'Interactive', description: 'Real-time customization' },
    { title: 'Real-time', description: 'Live data integration' },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">Why Choose TWINXR</h2>
          <p className="text-gray-400 text-lg">Unmatched capabilities for digital transformation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 hover:border-cyan-400 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: 'TwinXR transformed how we visualize and sell our projects. Sales increased by 40%.',
    author: 'Real Estate Developer',
    company: 'Leading Property Group',
  },
  {
    quote: 'The digital command center gave us unprecedented control over our smart city infrastructure.',
    author: 'City Planner',
    company: 'Metropolitan Government',
  },
  {
    quote: 'AI-powered analytics helped us reduce construction costs by 20%.',
    author: 'Project Manager',
    company: 'Infrastructure Firm',
  },
];

function TestimonialsSection({ currentIndex }: any) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-blue-950/20 py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">What Our Clients Say</h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-5xl mb-6">❝</div>
            <p className="text-2xl font-semibold mb-8">{testimonials[currentIndex].quote}</p>
            <p className="text-cyan-400 font-semibold">{testimonials[currentIndex].author}</p>
            <p className="text-gray-400">{testimonials[currentIndex].company}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex ? 'bg-cyan-400 w-8' : 'bg-gray-600'
              }`}
              animate={{ scale: index === currentIndex ? 1.2 : 1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  const clients = [
    '🏢 Microsoft',
    '🏢 Google',
    '🏢 Amazon',
    '🏢 Apple',
    '🏢 Tesla',
    '🏢 Meta',
    '🏢 IBM',
    '🏢 Oracle',
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">Trusted by Leading Organizations</h2>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -2000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-xl flex items-center justify-center text-lg font-semibold text-gray-300"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-blue-950/20 py-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">Let's Build the Future Together</h2>
          <p className="text-gray-400 text-lg">Get in touch with our team today</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-6 py-3 rounded-full bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-6 py-3 rounded-full bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-6 py-3 rounded-2xl bg-gray-900/50 border border-blue-500/30 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition resize-none"
            />
            <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3 rounded-full font-semibold transition">
              Send Message
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">📍 Location</h3>
              <p className="text-gray-400">5th Floor, Babukhan Rasheed Plaza, Jubilee Hills, Hyderabad, Telangana 500033</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">📱 Phone</h3>
              <p className="text-gray-400">+91-9390062725</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">📧 Email</h3>
              <p className="text-gray-400">Abinav@twinxr.co</p>
            </div>
            <div className="flex gap-4 pt-4">
              {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                
                  key={social}
                  href="#"
                  className="px-4 py-2 bg-gray-900/50 border border-blue-500/30 rounded-full hover:border-cyan-400 transition"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
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
              <li><a href="#" className="hover:text-cyan-400 transition">About</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition">Privacy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Terms</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-500/20 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 TWINXR Labs. All rights reserved.</p>
          <p className="mt-2">Building the Digital Future of Real Estate, Cities & Infrastructure</p>
        </div>
      </div>
    </footer>
  );
}