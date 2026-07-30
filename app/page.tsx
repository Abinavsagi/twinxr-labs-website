export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">TwinXR Labs</h1>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#services" className="hover:text-blue-400">Services</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold mb-4">Building the Digital Future</h2>
        <p className="text-xl text-gray-400 mb-8">Digital Twin Visualization for Real Estate, Cities & Infrastructure</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">About TwinXR Labs</h3>
          <p className="text-gray-300 mb-4">
            TwinXR Labs specializes in creating immersive digital twin visualizations for real estate developers, city planners, and infrastructure projects.
          </p>
          <p className="text-gray-300">
            We transform complex architectural concepts into interactive, photorealistic 3D experiences using cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-12">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-900 rounded-lg">
              <h4 className="text-xl font-bold mb-2">Digital Twin Visualization</h4>
              <p className="text-gray-400">Photorealistic 3D models of real estate projects with Unreal Engine 5</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <h4 className="text-xl font-bold mb-2">Interactive Experiences</h4>
              <p className="text-gray-400">Walk-through animations and interactive tours for clients</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <h4 className="text-xl font-bold mb-2">Sales Intelligence</h4>
              <p className="text-gray-400">AI-powered tools to identify and prioritize real estate prospects</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <h4 className="text-xl font-bold mb-2">Infrastructure Planning</h4>
              <p className="text-gray-400">Smart city and infrastructure visualization solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
          <div className="bg-gray-900 p-8 rounded-lg">
            <p className="mb-4">📍 5th Floor, Babukhan Rasheed Plaza, Jubilee Hills, Hyderabad</p>
            <p className="mb-4">📱 +91-9390062725</p>
            <p className="mb-6">📧 info@twinxrlabs.com</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6 text-center text-gray-500">
        <p>&copy; 2026 TwinXR Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}