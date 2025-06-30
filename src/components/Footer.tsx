import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Maheshwaran </span>Iyer
            </div>
            <p className="text-gray-400 mb-4">
              Full-Stack Developer passionate about creating exceptional digital experiences.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="mailto:alex@example.com"
                 className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-200">Experience</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>Maheshwaran Iyer</p>
              <p>+91 9082472884</p>
              <p>Dombivli,India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Maheshwaran Iyer
            <span className="mx-2">•</span>
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;