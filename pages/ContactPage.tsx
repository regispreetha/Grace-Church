import React, { useState } from 'react';
import { churchInfo } from '@/data/mockData';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@/components/icons';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-brand-dark-blue via-brand-navy to-brand-blue">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-brand-gold rounded-full mix-blend-multiply filter blur-xl animate-gentle-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-teal rounded-full mix-blend-multiply filter blur-xl animate-gentle-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in-down">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up">
            We'd love to hear from you. Reach out with any questions or prayer requests.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in-up">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-3xl font-serif font-bold text-brand-dark-blue mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:outline-none transition-colors duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:outline-none transition-colors duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:outline-none transition-colors duration-300"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="Tell us what's on your mind..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full px-8 py-4 bg-brand-gold text-brand-dark-blue font-bold rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status === 'success' && (
                      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
                        <p className="font-semibold">Message sent successfully!</p>
                        <p className="text-sm">We'll get back to you as soon as possible.</p>
                      </div>
                    )}
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {/* Visit Us Card */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-serif font-bold text-brand-dark-blue mb-6">
                    Visit Us
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start group">
                      <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors duration-300">
                        <MapPinIcon className="w-6 h-6 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-1">Address</p>
                        <p className="text-gray-700 leading-relaxed">{churchInfo.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors duration-300">
                        <PhoneIcon className="w-6 h-6 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-1">Phone</p>
                        <a
                          href={`tel:${churchInfo.phone}`}
                          className="text-gray-700 hover:text-brand-gold transition-colors duration-300"
                        >
                          {churchInfo.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors duration-300">
                        <EnvelopeIcon className="w-6 h-6 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-1">Email</p>
                        <a
                          href={`mailto:${churchInfo.email}`}
                          className="text-gray-700 hover:text-brand-gold transition-colors duration-300"
                        >
                          {churchInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Times Card */}
                <div className="bg-gradient-to-br from-brand-blue to-brand-navy rounded-xl shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-6">Service Times</h3>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <ClockIcon className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Sunday Worship</p>
                      <p className="text-xl font-semibold">{churchInfo.serviceTime}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Links Card */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-serif font-bold text-brand-dark-blue mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="/about"
                      className="block text-gray-700 hover:text-brand-gold transition-colors duration-300 font-medium"
                    >
                      → About Our Church
                    </a>
                    <a
                      href="/events"
                      className="block text-gray-700 hover:text-brand-gold transition-colors duration-300 font-medium"
                    >
                      → Upcoming Events
                    </a>
                    <a
                      href="/ministries"
                      className="block text-gray-700 hover:text-brand-gold transition-colors duration-300 font-medium"
                    >
                      → Ministries & Programs
                    </a>
                    <a
                      href="/give"
                      className="block text-gray-700 hover:text-brand-gold transition-colors duration-300 font-medium"
                    >
                      → Give Online
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-white">
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.5425595359146!2d150.83829431520743!3d-33.74916808069228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sStonecutters%20Neighbourhood%20Centre!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Church Location"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
