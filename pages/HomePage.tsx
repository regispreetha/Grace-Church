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
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-brand-dark-blue via-brand-navy to-brand-blue overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold rounded-full mix-blend-multiply filter blur-xl animate-gentle-float" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-brand-teal rounded-full mix-blend-multiply filter blur-xl animate-gentle-float" style={{ animationDelay: '2s' }} />
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-brand-gold rounded-full mix-blend-multiply filter blur-xl animate-gentle-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-brand-gold font-semibold text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-in-down">
            WELCOME TO
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 animate-fade-in-down leading-tight">
            Grace Covenant<br />
            Church
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto animate-fade-in-up">
            A place to belong, believe, and become.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-brand-dark-blue font-semibold rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 uppercase text-sm tracking-wide"
            >
              PLAN YOUR VISIT
            </Link>
            <Link
              to="/sermons"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand-dark-blue hover:scale-105 transition-all duration-300 uppercase text-sm tracking-wide"
            >
              WATCH LATEST
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
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark-blue mb-6 animate-fade-in-up">
              Welcome Home
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              We are a community of believers passionate about encountering God, connecting with
              others, and transforming our world. Whether you're new to church or have been a
              Christian for years, you have a place here.
            </p>
          </div>

          {/* Three Pillars: Belong, Believe, Become */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-brand-gold">
                <UsersIcon className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark-blue mb-3">
                Belong
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Find your community and build lasting friendships in a place where everyone is welcomed.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-brand-gold">
                <BookOpenIcon className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark-blue mb-3">
                Believe
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Grow in your faith through powerful biblical teaching and authentic worship.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-brand-gold">
                <HeartIcon className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark-blue mb-3">
                Become
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Transform into who God created you to be and make a lasting impact in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermon */}
      {latestSermon && (
        <section className="py-20 bg-gradient-to-br from-brand-dark-blue via-brand-navy to-brand-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-white">
                  <p className="text-brand-gold font-semibold uppercase tracking-wider text-sm mb-4">
                    LATEST MESSAGE
                  </p>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                    {latestSermon.title}
                  </h2>
                  <p className="text-gray-300 mb-4">
                    with {latestSermon.speaker}
                  </p>
                  <p className="text-gray-200 mb-8 leading-relaxed">
                    {latestSermon.description}
                  </p>
                  <Link
                    to={`/sermons/${latestSermon.id}`}
                    className="inline-flex items-center px-8 py-3 bg-brand-gold text-brand-dark-blue font-semibold rounded-full hover:bg-yellow-500 hover:scale-105 transition-all duration-300 uppercase text-sm tracking-wide"
                  >
                    WATCH NOW
                    <ChevronRightIcon className="w-5 h-5 ml-2" />
                  </Link>
                </div>
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={latestSermon.thumbnail}
                    alt={latestSermon.title}
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center rounded-2xl">
                    <Link
                      to={`/sermons/${latestSermon.id}`}
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                      <PlayIcon className="w-10 h-10 text-brand-dark-blue ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Join Us Section */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark-blue mb-4">
              Join Us
            </h2>
            <p className="text-lg text-gray-700">
              Connect with our community through our regular services and ministries.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {/* Sunday Service Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop"
                  alt="Sunday Service"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-brand-dark-blue mb-3">
                  Sunday Service
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Join us every Sunday for worship, fellowship, and powerful biblical teaching. Experience God's presence as we gather together to worship and learn from His Word.
                </p>
                <div className="flex items-center text-brand-gold text-sm mb-2">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span className="font-semibold">Sundays 9:00 AM - 10:30 AM</span>
                </div>
                <p className="text-gray-600 text-sm">Led by Pastor Santhosh</p>
              </div>
            </div>

            {/* Bible Study Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop"
                  alt="Bible Study"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-brand-dark-blue mb-3">
                  Bible Study
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Dive deeper into God's Word with our Bible Study sessions. A time to study scripture, share insights, and grow together in faith and understanding.
                </p>
                <div className="flex items-center text-brand-gold text-sm mb-2">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span className="font-semibold">1st and 3rd Friday 7:30 PM</span>
                </div>
                <p className="text-gray-600 text-sm">Led by Pastor Santhosh</p>
              </div>
            </div>

            {/* Kids Bible Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
                  alt="Kids Bible"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-brand-dark-blue mb-3">
                  Kids Bible
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Kids Bible provides an engaging and age-appropriate environment for children to learn about Jesus and grow in their faith. Led with love and creativity to inspire the next generation.
                </p>
                <div className="flex items-center text-brand-gold text-sm mb-2">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span className="font-semibold">Saturdays 6:30 PM</span>
                </div>
                <p className="text-gray-600 text-sm">Led by Nancy Anand</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/ministries"
              className="inline-flex items-center px-8 py-3 bg-brand-dark-blue text-white font-semibold rounded-full hover:bg-brand-navy hover:scale-105 transition-all duration-300 uppercase text-sm tracking-wide"
            >
              EXPLORE ALL MINISTRIES
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* New Here Card */}
            <div className="bg-brand-cream rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-brand-gold">
                <UsersIcon className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark-blue mb-3">
                New Here?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We'd love to meet you! Plan your first visit and discover what to expect.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-brand-gold hover:text-brand-dark-blue font-semibold transition-colors duration-300"
              >
                Learn More
                <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Give Online Card */}
            <div className="bg-brand-cream rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-brand-gold">
                <HeartIcon className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark-blue mb-3">
                Give Online
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Partner with us in spreading the Gospel and making a difference in our community.
              </p>
              <Link
                to="/give"
                className="inline-flex items-center text-brand-gold hover:text-brand-dark-blue font-semibold transition-colors duration-300"
              >
                Learn More
                <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* About Us Card */}
            <div className="bg-brand-cream rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-brand-gold">
                <BookOpenIcon className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark-blue mb-3">
                About Us
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Learn more about our mission, vision, beliefs, and the story of Grace Covenant Church.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-brand-gold hover:text-brand-dark-blue font-semibold transition-colors duration-300"
              >
                Learn More
                <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
