import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { events } from '@/data/mockData';
import { CalendarIcon, ClockIcon, MapPinIcon, ChevronRightIcon } from '@/components/icons';

const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-brand-dark-blue mb-4">
            Event Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the event you're looking for.
          </p>
          <Link
            to="/events"
            className="inline-flex items-center px-6 py-3 bg-brand-gold text-brand-dark-blue font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300"
          >
            Back to Events
            <ChevronRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-brand-gold hover:underline">
              Home
            </Link>
            <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-400" />
            <Link to="/events" className="text-brand-gold hover:underline">
              Events
            </Link>
            <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-600">{event.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 25, 41, 0.75), rgba(10, 25, 41, 0.75)), url(${event.imageUrl})`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-brand-gold text-brand-dark-blue px-4 py-2 rounded-full text-sm font-bold mb-6 animate-fade-in-down">
            {event.category}
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in-up">
            {event.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <h2 className="text-3xl font-serif font-bold text-brand-dark-blue mb-6">
                    About This Event
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    {event.description}
                  </p>
                  {event.leadBy && (
                    <div className="bg-brand-cream p-6 rounded-lg border-l-4 border-brand-gold">
                      <p className="text-sm font-semibold text-gray-600 mb-1">Led by</p>
                      <p className="text-lg font-bold text-brand-dark-blue">{event.leadBy}</p>
                    </div>
                  )}
                </div>

                {/* Map */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-serif font-bold text-brand-dark-blue mb-6">
                    Location
                  </h2>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.5425595359146!2d150.83829431520743!3d-33.74916808069228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sStonecutters%20Neighbourhood%20Centre!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Event Location"
                    />
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Event Details Card */}
                <div className="bg-gradient-to-br from-brand-blue to-brand-navy rounded-xl shadow-lg p-6 text-white sticky top-28">
                  <h3 className="text-2xl font-serif font-bold mb-6">
                    When & Where
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CalendarIcon className="w-6 h-6 mr-4 mt-1 text-brand-gold flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-300 mb-1">Date</p>
                        <p className="font-semibold text-lg">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ClockIcon className="w-6 h-6 mr-4 mt-1 text-brand-gold flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-300 mb-1">Time</p>
                        <p className="font-semibold text-lg">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPinIcon className="w-6 h-6 mr-4 mt-1 text-brand-gold flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-300 mb-1">Location</p>
                        <p className="font-semibold text-lg">{event.location}</p>
                      </div>
                    </div>
                  </div>

                  {event.registrationLink ? (
                    <a
                      href={event.registrationLink}
                      className="block w-full px-6 py-4 bg-brand-gold text-brand-dark-blue font-bold text-center rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      Register Now
                    </a>
                  ) : (
                    <button
                      onClick={() => alert('Registration coming soon!')}
                      className="block w-full px-6 py-4 bg-brand-gold text-brand-dark-blue font-bold text-center rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      Register Now
                    </button>
                  )}

                  <p className="text-xs text-gray-300 mt-4 text-center">
                    All are welcome to attend!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Events CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-brand-dark-blue mb-4">
            Discover More Events
          </h2>
          <p className="text-gray-600 mb-8">
            Check out other exciting gatherings and opportunities to connect.
          </p>
          <Link
            to="/events"
            className="inline-flex items-center px-8 py-4 bg-brand-gold text-brand-dark-blue font-semibold rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
          >
            View All Events
            <ChevronRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EventDetailPage;
