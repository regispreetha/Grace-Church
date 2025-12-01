import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, YoutubeIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from './icons';
import { churchInfo } from '@/data/mockData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-3 text-brand-gold">
              Grace Covenant Church
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              A place to belong, believe, and become. Join us as we grow together in faith, fellowship, and service.
            </p>
            <div className="flex space-x-4">
              <a
                href={churchInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={churchInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={churchInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-gold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/sermons', label: 'Sermons' },
                { to: '/events', label: 'Events' },
                { to: '/ministries', label: 'Ministries' },
                { to: '/give', label: 'Give' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-brand-gold transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-brand-gold mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <MapPinIcon className="w-5 h-5 mr-3 mt-0.5 text-brand-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 text-sm leading-relaxed">{churchInfo.address}</span>
              </li>
              <li className="flex items-center group">
                <PhoneIcon className="w-5 h-5 mr-3 text-brand-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href={`tel:${churchInfo.phone}`} className="text-gray-300 hover:text-brand-gold transition-colors duration-300 text-sm">
                  {churchInfo.phone}
                </a>
              </li>
              <li className="flex items-center group">
                <EnvelopeIcon className="w-5 h-5 mr-3 text-brand-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href={`mailto:${churchInfo.email}`} className="text-gray-300 hover:text-brand-gold transition-colors duration-300 text-sm">
                  {churchInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Grace Covenant Church. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Service Time: {churchInfo.serviceTime}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
