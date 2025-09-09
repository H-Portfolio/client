import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-purple-500/20 py-12 relative z-10 bg-gray-900/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-light text-white">
              Hansaka Rathnayake
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Full-Stack Developer & AI Engineer passionate about building innovative 
              solutions that make a difference in the cosmos of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <div className="flex flex-wrap gap-6">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'DevOps', href: '#devops' },
                { name: 'Tech Stack', href: '#skills' },
                { name: 'Blogs', href: '#blogs' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-500/20 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Hansaka Rathnayake. All rights reserved. Designed with 💜 in the digital universe.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;