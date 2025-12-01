import React from 'react';
import { Link } from 'react-router-dom';
import { sermons, events } from '@/data/mockData';
import { ChevronRightIcon, PlayIcon, CalendarIcon, UsersIcon, HeartIcon, BookOpenIcon } from '@/components/icons';

const HomePage: React.FC = () => {
  const latestSermon = sermons[0];
  const upcomingEvents = events.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-dark-blue via-brand-navy to-brand-blue overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold rounded-full mix-blend-multiply filter blur-xl animate-gentle-float" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-brand-teal rounded-full mix-blend-multiply filter blur-xl animate-gentle-float" style={{ animationDelay: '2s' }} />
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-brand-gold rounded-full mix-blend-multiply filter blur-xl animate-gentle-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in-down">
            Welcome to<br />
            <span className="text-brand-gold">Grace Covenant Church</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto animate-fade-in-up">
            A place to belong, believe, and become.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link
              to="/about"
              className="px-8 py-4 bg-brand-gold text-brand-dark-blue font-semibold rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
            >
              Learn More About Us
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-dark-blue hover:scale-105 transition-all duration-300"
            >
              Plan a Visit
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRightIcon className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark-blue mb-6 animate-fade-in-up">
              Welcome Home
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              We're so glad you're here! Grace Covenant Church is a community of believers
              passionate about knowing God and making Him known. Whether you're exploring faith
              for the first time or have walked with Jesus for years, there's a place for you here.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Join us this Sunday as we gather to worship, grow, and serve together.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Sermon */}
      {latestSermon && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark-blue mb-4">
                Latest Message
              </h2>
              <p className="text-lg text-gray-600">
                Catch up on our most recent sermon
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl-warm overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative group overflow-hidden">
                    <img
                      src={latestSermon.thumbnail}
                      alt={latestSermon.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                      <Link
                        to={`/sermons/${latestSermon.id}`}
                        className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center hover:bg-yellow-500 hover:scale-110 transition-all duration-300 shadow-lg"
                      >
                        <PlayIcon className="w-10 h-10 text-white ml-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <p className="text-brand-gold font-semibold mb-2">{latestSermon.series}</p>
                    <h3 className="text-3xl font-serif font-bold text-brand-dark-blue mb-3">
                      {latestSermon.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      <span className="font-semibold">{latestSermon.speaker}</span> • {latestSermon.date}
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {latestSermon.description}
                    </p>
                    <Link
                      to={`/sermons/${latestSermon.id}`}
                      className="inline-flex items-center text-brand-gold hover:text-brand-dark-blue font-semibold transition-colors duration-300"
                    >
                      Watch Now
                      <ChevronRightIcon className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ministries Highlight */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Get Connected
            </h2>
            <p className="text-xl text-gray-200">
              Find your place in our community
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'GraceKids',
                description: 'A fun, safe place for children to learn about Jesus and grow in faith.',
                icon: UsersIcon,
                link: '/ministries',
              },
              {
                title: 'Youth Ministry',
                description: 'Empowering the next generation to live boldly for Christ.',
                icon: BookOpenIcon,
                link: '/ministries',
              },
              {
                title: 'Small Groups',
                description: 'Connect deeply with others through fellowship and Bible study.',
                icon: HeartIcon,
                link: '/ministries',
              },
            ].map((ministry, index) => (
              <Link
                key={index}
                to={ministry.link}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
              >
                <ministry.icon className="w-12 h-12 text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  {ministry.title}
                </h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  {ministry.description}
                </p>
                <span className="inline-flex items-center text-brand-gold font-semibold">
                  Learn More
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark-blue mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Join us for these exciting gatherings
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {upcomingEvents.map((event) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-brand-gold text-brand-dark-blue px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark-blue mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2 text-sm">
                    <CalendarIcon className="w-4 h-4 mr-2 text-brand-gold" />
                    {event.date} • {event.time}
                  </div>
                  <p className="text-gray-700 line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3 bg-brand-gold text-brand-dark-blue font-semibold rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
            >
              View All Events
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link
              to="/about"
              className="relative overflow-hidden rounded-2xl shadow-xl group h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-navy" />
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                <UsersIcon className="w-16 h-16 text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  Meet Our Team
                </h3>
                <p className="text-gray-200 mb-6">
                  Get to know the people leading our church family.
                </p>
                <span className="text-brand-gold font-semibold flex items-center">
                  Learn More
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </Link>

            <Link
              to="/give"
              className="relative overflow-hidden rounded-2xl shadow-xl group h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal to-brand-blue" />
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                <HeartIcon className="w-16 h-16 text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  Give Online
                </h3>
                <p className="text-gray-200 mb-6">
                  Support our mission through your generous giving.
                </p>
                <span className="text-brand-gold font-semibold flex items-center">
                  Give Now
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </Link>

            <Link
              to="/contact"
              className="relative overflow-hidden rounded-2xl shadow-xl group h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-dark-blue" />
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                <BookOpenIcon className="w-16 h-16 text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  Connect With Us
                </h3>
                <p className="text-gray-200 mb-6">
                  Have questions? We'd love to hear from you.
                </p>
                <span className="text-brand-gold font-semibold flex items-center">
                  Get in Touch
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
