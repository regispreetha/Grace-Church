import React from 'react';
import { Link } from 'react-router-dom';
import { events } from '@/data/mockData';
import { CalendarIcon, ClockIcon, MapPinIcon, ChevronRightIcon } from '@/components/icons';

const EventCard: React.FC<{ event: typeof events[0] }> = ({ event }) => (
  <Link
    to={`/events/${event.id}`}
    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
  >
    <div className="relative overflow-hidden h-64">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute top-4 right-4 bg-brand-gold text-brand-dark-blue px-4 py-2 rounded-full text-sm font-bold shadow-lg">
        {event.category}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-brand-gold transition-colors duration-300">
          {event.title}
        </h3>
      </div>
    </div>
    <div className="p-6 space-y-3">
      <div className="flex items-start text-gray-600">
        <CalendarIcon className="w-5 h-5 mr-3 mt-0.5 text-brand-gold flex-shrink-0" />
        <span className="text-sm font-medium">{event.date}</span>
      </div>
      <div className="flex items-start text-gray-600">
        <ClockIcon className="w-5 h-5 mr-3 mt-0.5 text-brand-gold flex-shrink-0" />
        <span className="text-sm font-medium">{event.time}</span>
      </div>
      <div className="flex items-start text-gray-600">
        <MapPinIcon className="w-5 h-5 mr-3 mt-0.5 text-brand-gold flex-shrink-0" />
        <span className="text-sm font-medium">{event.location}</span>
      </div>
      <p className="text-gray-700 line-clamp-2 pt-2">
        {event.description}
      </p>
      <div className="pt-4">
        <span className="inline-flex items-center text-brand-gold font-semibold group-hover:text-brand-dark-blue transition-colors duration-300">
          Learn More
          <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </div>
    </div>
  </Link>
);

const EventsPage: React.FC = () => {
  // Sort events chronologically (in a real app, you'd compare actual dates)
  const upcomingEvents = events;

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
            Events
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up">
            Find out what's happening at Grace Covenant Church and join us for these exciting gatherings.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          {upcomingEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <CalendarIcon className="w-20 h-20 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-bold text-gray-700 mb-2">
                No Upcoming Events
              </h2>
              <p className="text-gray-600">
                Check back soon for new events and gatherings.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-brand-dark-blue mb-6">
            Want to Stay Updated?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with us to receive updates about upcoming events, service times, and church news.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand-gold text-brand-dark-blue font-semibold rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get Connected
            <ChevronRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
