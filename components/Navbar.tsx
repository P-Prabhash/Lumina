
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: 'fa-home' },
    { name: 'Assistant', path: '/chat', icon: 'fa-comment-dots' },
    { name: 'Studio', path: '/creative', icon: 'fa-wand-magic-sparkles' },
    { name: 'Research', path: '/research', icon: 'fa-magnifying-glass' },
    { name: 'About', path: '/about', icon: 'fa-info-circle' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
              <i className="fas fa-bolt text-white"></i>
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              LUMINA
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  location.pathname === link.path 
                  ? 'bg-white/10 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <i className={`fas ${link.icon} mr-2`}></i>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            {/* Mobile menu button could be added here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
