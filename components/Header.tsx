import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from './icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/sermons', label: 'Sermons' },
    { to: '/events', label: 'Events' },
    { to: '/ministries', label: 'Ministries' },
    { to: '/about', label: 'About' },
    { to: '/give', label: 'Give' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-brand-dark-blue/95 backdrop-blur-sm shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-serif font-bold text-white hover:text-brand-gold transition-colors duration-300 z-50"
            >
              Grace Covenant
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-white hover:text-brand-gold transition-colors duration-300 font-medium relative group ${
                      isActive ? 'text-brand-gold' : ''
                    }`
                  }
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-brand-gold transition-colors z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XIcon className="w-7 h-7" />
              ) : (
                <MenuIcon className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <nav
          className={`absolute top-20 right-0 bottom-0 w-64 bg-brand-dark-blue shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col space-y-1 p-6">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-white hover:text-brand-gold hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                    isActive ? 'text-brand-gold bg-white/10' : ''
                  }`
                }
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? 'fadeInRight 0.3s ease-out forwards' : 'none',
                  opacity: isMobileMenuOpen ? 1 : 0,
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>

      <style>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
