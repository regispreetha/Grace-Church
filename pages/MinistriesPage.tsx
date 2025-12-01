import React from 'react';
import { ministries } from '@/data/mockData';
import { EnvelopeIcon, CalendarIcon, ClockIcon } from '@/components/icons';

const MinistryCard: React.FC<{ ministry: typeof ministries[0]; index: number }> = ({
  ministry,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`grid md:grid-cols-2 gap-8 items-center ${
        isEven ? '' : 'md:grid-flow-dense'
      }`}
    >
      <div className={`${isEven ? '' : 'md:col-start-2'} animate-fade-in-up`}>
        <div className="relative rounded-2xl overflow-hidden shadow-xl group">
          <img
            src={ministry.imageUrl}
            alt={ministry.name}
            className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
      <div
        className={`${
          isEven ? '' : 'md:col-start-1 md:row-start-1'
        } animate-fade-in-up`}
        style={{ animationDelay: '0.2s' }}
      >
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-3xl font-serif font-bold text-brand-dark-blue mb-4">
            {ministry.name}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            {ministry.description}
          </p>
          <div className="space-y-3 border-t pt-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <EnvelopeIcon className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">Leader</p>
                <p className="text-brand-dark-blue font-medium">{ministry.leader}</p>
                <a
                  href={`mailto:${ministry.contactEmail}`}
                  className="text-brand-gold hover:text-brand-navy transition-colors duration-300 text-sm"
                >
                  {ministry.contactEmail}
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <CalendarIcon className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">Meeting Day</p>
                <p className="text-brand-dark-blue font-medium">{ministry.meetingDay}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <ClockIcon className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">Meeting Time</p>
                <p className="text-brand-dark-blue font-medium">{ministry.meetingTime}</p>
              </div>
            </div>
          </div>
          <a
            href={`mailto:${ministry.contactEmail}`}
            className="mt-6 inline-block w-full px-6 py-3 bg-brand-gold text-brand-dark-blue font-semibold text-center rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
          >
            Get Involved
          </a>
        </div>
      </div>
    </div>
  );
};

const MinistriesPage: React.FC = () => {
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
            Ministries
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up">
            Find your place to connect, grow, and serve alongside others in our community.
          </p>
        </div>
      </section>

      {/* Ministries List */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {ministries.map((ministry, index) => (
              <MinistryCard key={ministry.id} ministry={ministry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-brand-dark-blue mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We'd love to help you find the perfect place to connect and grow. Reach out to us today!
          </p>
          <a
            href="mailto:connect@gracecovenant.org"
            className="inline-block px-8 py-4 bg-brand-gold text-brand-dark-blue font-semibold rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default MinistriesPage;
