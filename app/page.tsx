'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            TWINXR
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition">Services</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Features</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Building the Digital Future
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your real estate projects with immersive 3D digital twins. Visualize your vision before it becomes reality.
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition">
                  Watch Demo
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Right side - Visual */}
            <div className="relative h-96 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-teal-500 rounded-3xl transform hover:scale-110 transition duration-500 shadow-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Cities Transformed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10M+</div>
              <p className="text-blue-100">Sq Ft Visualized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Comprehensive digital twin solutions for real estate and infrastructure</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏢', title: 'Digital Twins', desc: 'Photorealistic 3D visualizations' },
              { icon: '🎬', title: 'Interactive Tours', desc: 'Immersive walkthrough experiences' },
              { icon: '📊', title: 'Analytics', desc: 'Data-driven insights & intelligence' },
              { icon: '🌆', title: 'Smart Cities', desc: 'Infrastructure planning solutions' }
            ].map((service, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Why Choose TWINXR</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Industry-leading technology and expertise</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Unreal Engine 5', desc: 'Latest real-time rendering technology' },
              { title: '4K Resolution', desc: 'Crystal clear photorealistic quality' },
              { title: 'AI Integration', desc: 'Smart insights and analytics' },
              { title: '24/7 Support', desc: 'Dedicated expert team' }
            ].map((feature, i) => (
              <div key={i} className="flex gap-6 p-8 bg-white rounded-2xl border border-gray-100 hover:border-blue-300 hover:shadow-lg transition">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Recent Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Trump Phase 2', location: 'Hyderabad', status: '500+ Units' },
              { name: 'Whispering Woods', location: 'Shamshabad', status: 'Luxury Villas' },
              { name: 'Neopolis', location: 'Hyderabad', status: 'Smart Development' },
              { name: 'Amaravati', location: 'Capital Region', status: 'Government Project' }
            ].map((project, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 p-8 text-white cursor-pointer hover:shadow-2xl transition">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <p className="text-blue-100">{project.location}</p>
                </div>
                <div className="pt-4 border-t border-blue-300">
                  <p className="text-blue-100">{project.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8">Let's bring your vision to life with digital twin technology</p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
              Get Started
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <p className="text-blue-100 mb-2">📍 Location</p>
              <p className="font-semibold">Jubilee Hills, Hyderabad</p>
            </div>
            <div>
              <p className="text-blue-100 mb-2">📱 Phone</p>
              <p className="font-semibold">+91-9390062725</p>
            </div>
            <div>
              <p className="text-blue-100 mb-2">📧 Email</p>
              <p className="font-semibold">info@twinxrlabs.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2026 TWINXR Labs. All rights reserved.</p>
          <p className="mt-2 text-sm">Building the Digital Future of Real Estate, Cities & Infrastructure</p>
        </div>
      </footer>
    </div>
  );
}