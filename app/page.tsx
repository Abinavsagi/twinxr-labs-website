'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🏢</span>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              TWINXR
            </div>
          </div>
          
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition">Services</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Features</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
            {/* Left side - Text */}
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Building the <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">Digital Future</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Transform your real estate projects with immersive 3D digital twins. Visualize, showcase, and sell faster with cutting-edge visualization technology.
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition transform hover:scale-105">
                  ▶ Watch Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                alt="3D Visualization"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl border-2 border-teal-500 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">See Our Work in Action</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Experience immersive digital twin demonstrations</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%] h-0 overflow-hidden bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Digital Twin Demo"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 bg-gradient-to-r from-blue-50 to-teal-50">
                <h3 className="font-bold text-lg text-gray-900">Project Walkthrough</h3>
                <p className="text-gray-600">Interactive 3D tour of residential project</p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%] h-0 overflow-hidden bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/9bZkp7q19f0"
                  title="Digital Twin Features"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 bg-gradient-to-r from-blue-50 to-teal-50">
                <h3 className="font-bold text-lg text-gray-900">Technology Showcase</h3>
                <p className="text-gray-600">Latest UE5 rendering capabilities</p>
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
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-blue-100 text-lg">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-blue-100 text-lg">Cities Transformed</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10M+</div>
              <p className="text-blue-100 text-lg">Sq Ft Visualized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Comprehensive digital twin solutions</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: '🏢', 
                title: 'Digital Twins', 
                desc: 'Photorealistic 3D visualizations',
                img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=300&fit=crop'
              },
              { 
                icon: '🎬', 
                title: 'Interactive Tours', 
                desc: 'Immersive walkthrough experiences',
                img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop'
              },
              { 
                icon: '📊', 
                title: 'Sales Intelligence', 
                desc: 'Data-driven insights & analytics',
                img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop'
              },
              { 
                icon: '🌆', 
                title: 'Smart Cities', 
                desc: 'Infrastructure planning solutions',
                img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=300&h=300&fit=crop'
              }
            ].map((service, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                <img 
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 bg-gradient-to-br from-blue-50 to-teal-50">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Recent Projects</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Transforming real estate with digital innovation</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                name: 'Trump Phase 2', 
                location: 'Hyderabad', 
                status: '500+ Units',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop'
              },
              { 
                name: 'Whispering Woods', 
                location: 'Shamshabad', 
                status: 'Luxury Villas',
                img: 'https://images.unsplash.com/photo-1512216547905-9a306292fbe1?w=400&h=300&fit=crop'
              },
              { 
                name: 'Neopolis', 
                location: 'Hyderabad', 
                status: 'Smart Development',
                img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop'
              },
              { 
                name: 'Amaravati', 
                location: 'Capital Region', 
                status: 'Government Project',
                img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop'
              }
            ].map((project, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105 cursor-pointer">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-blue-100 mb-3">{project.location}</p>
                  <div className="pt-3 border-t border-blue-300">
                    <p className="text-blue-100 font-semibold">{project.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Why Choose TWINXR</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Industry-leading technology and expertise</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Unreal Engine 5', 
                desc: 'Latest real-time rendering technology',
                icon: '⚡'
              },
              { 
                title: '4K Resolution', 
                desc: 'Crystal clear photorealistic quality',
                icon: '📸'
              },
              { 
                title: 'AI Integration', 
                desc: 'Smart insights and analytics',
                icon: '🤖'
              },
              { 
                title: '24/7 Support', 
                desc: 'Dedicated expert team',
                icon: '🎯'
              }
            ].map((feature, i) => (
              <div key={i} className="flex gap-6 p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 text-3xl">
                  {feature.icon}
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

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Our Team</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Expert professionals dedicated to your success</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Abi Naveen', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
              { name: 'Tech Lead', role: '3D Visualization Expert', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop' },
              { name: 'Sales Head', role: 'Business Development', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop' }
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={member.img}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-teal-600 font-semibold">{member.role}</p>
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
          
          <div className="flex flex-col md:flex-row gap-4 mb-12 bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition transform hover:scale-105">
              Get Started
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <p className="text-blue-100 mb-2">📍 Location</p>
              <p className="font-semibold text-lg">5th Floor, Babukhan Rasheed Plaza, Jubilee Hills, Hyderabad</p>
            </div>
            <div>
              <p className="text-blue-100 mb-2">📱 Phone</p>
              <p className="font-semibold text-lg">+91-9390062725</p>
            </div>
            <div>
              <p className="text-blue-100 mb-2">📧 Email</p>
              <p className="font-semibold text-lg">info@twinxrlabs.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">TWINXR Labs</h3>
              <p className="text-gray-400">Building the Digital Future of Real Estate</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Digital Twins</a></li>
                <li><a href="#" className="hover:text-white transition">3D Visualization</a></li>
                <li><a href="#" className="hover:text-white transition">Sales Intelligence</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-white transition">LinkedIn</a>
                <a href="#" className="hover:text-white transition">Twitter</a>
                <a href="#" className="hover:text-white transition">YouTube</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2026 TWINXR Labs. All rights reserved.</p>
            <p className="text-gray-400 mt-2">Building the Digital Future of Real Estate, Cities & Infrastructure</p>
          </div>
        </div>
      </footer>
    </div>
  );
}