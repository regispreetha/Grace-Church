import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { sermons, churchInfo } from '@/data/mockData';
import { PlayIcon } from '@/components/icons';

const SermonCard: React.FC<{ sermon: typeof sermons[0] }> = ({ sermon }) => (
  <Link
    to={`/sermons/${sermon.id}`}
    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
  >
    <div className="relative overflow-hidden h-56">
      <img
        src={sermon.thumbnail}
        alt={sermon.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
        <div className="w-14 h-14 bg-brand-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <PlayIcon className="w-7 h-7 text-white ml-1" />
        </div>
      </div>
      {sermon.livestream && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center animate-pulse">
          <span className="w-2 h-2 bg-white rounded-full mr-2" />
          Live
        </div>
      )}
    </div>
    <div className="p-6">
      <p className="text-brand-gold font-semibold text-sm mb-2">{sermon.series}</p>
      <h3 className="text-xl font-serif font-bold text-brand-dark-blue mb-2 group-hover:text-brand-gold transition-colors duration-300">
        {sermon.title}
      </h3>
      <p className="text-gray-600 text-sm mb-3">
        <span className="font-semibold">{sermon.speaker}</span> • {sermon.date}
      </p>
      <p className="text-gray-700 line-clamp-2 text-sm">
        {sermon.description}
      </p>
    </div>
  </Link>
);

const SermonsPage: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<string>('all');
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [showLiveOnly, setShowLiveOnly] = useState(false);

  const speakers = useMemo(() => {
    const speakerSet = new Set(sermons.map((s) => s.speaker));
    return ['all', ...Array.from(speakerSet)];
  }, []);

  const series = useMemo(() => {
    const seriesSet = new Set(sermons.map((s) => s.series));
    return ['all', ...Array.from(seriesSet)];
  }, []);

  const filteredSermons = useMemo(() => {
    return sermons.filter((sermon) => {
      const speakerMatch = selectedSpeaker === 'all' || sermon.speaker === selectedSpeaker;
      const seriesMatch = selectedSeries === 'all' || sermon.series === selectedSeries;
      const liveMatch = !showLiveOnly || sermon.livestream;
      return speakerMatch && seriesMatch && liveMatch;
    });
  }, [selectedSpeaker, selectedSeries, showLiveOnly]);

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
            Sermons
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Grow in your faith through biblical teaching that's practical, relevant, and transformative.
          </p>
          <a
            href={churchInfo.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-brand-gold text-brand-dark-blue font-semibold rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 uppercase text-sm tracking-wide animate-fade-in"
          >
            <PlayIcon className="w-5 h-5 mr-2" />
            VIEW ALL SERMONS ON YOUTUBE
          </a>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-white shadow-md sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="w-full md:w-auto">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Speaker
              </label>
              <select
                value={selectedSpeaker}
                onChange={(e) => setSelectedSpeaker(e.target.value)}
                className="w-full md:w-48 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:outline-none transition-colors duration-300"
              >
                {speakers.map((speaker) => (
                  <option key={speaker} value={speaker}>
                    {speaker === 'all' ? 'All Speakers' : speaker}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:w-auto">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Series
              </label>
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="w-full md:w-48 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-gold focus:outline-none transition-colors duration-300"
              >
                {series.map((s) => (
                  <option key={s} value={s}>
                    {s === 'all' ? 'All Series' : s}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:w-auto pt-0 md:pt-7">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={showLiveOnly}
                  onChange={(e) => setShowLiveOnly(e.target.checked)}
                  className="w-5 h-5 text-brand-gold border-gray-300 rounded focus:ring-brand-gold focus:ring-2 cursor-pointer"
                />
                <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-gold transition-colors duration-300">
                  Live Stream Available
                </span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          {filteredSermons.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSermons.map((sermon) => (
                <SermonCard key={sermon.id} sermon={sermon} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 mb-4">
                No sermons found matching your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedSpeaker('all');
                  setSelectedSeries('all');
                  setShowLiveOnly(false);
                }}
                className="px-6 py-3 bg-brand-gold text-brand-dark-blue font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SermonsPage;
