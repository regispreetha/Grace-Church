import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { sermons } from '@/data/mockData';
import { ChevronRightIcon } from '@/components/icons';

const getYouTubeEmbedUrl = (url: string): string => {
  if (!url) return '';

  // Handle youtube.com/watch?v=ID format
  if (url.includes('youtube.com/watch')) {
    const videoId = new URL(url).searchParams.get('v');
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // Handle youtu.be/ID format
  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return url;
};

const SermonDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const sermon = sermons.find((s) => s.id === id);

  if (!sermon) {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-brand-dark-blue mb-4">
            Sermon Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the sermon you're looking for.
          </p>
          <Link
            to="/sermons"
            className="inline-flex items-center px-6 py-3 bg-brand-gold text-brand-dark-blue font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300"
          >
            Back to Sermons
            <ChevronRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  const embedUrl = getYouTubeEmbedUrl(sermon.videoUrl || '');
  const scriptures = sermon.scripture.split(',').map((s) => s.trim());

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
            <Link to="/sermons" className="text-brand-gold hover:underline">
              Sermons
            </Link>
            <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-600">{sermon.title}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-br from-brand-dark-blue to-brand-navy py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-gold font-semibold text-lg mb-3 animate-fade-in-down">
              {sermon.series}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 animate-fade-in-up">
              {sermon.title}
            </h1>
            <div className="flex items-center justify-center text-gray-200 text-lg animate-fade-in">
              <span className="font-semibold">{sermon.speaker}</span>
              <span className="mx-3">•</span>
              <span>{sermon.date}</span>
            </div>
            {sermon.livestream && (
              <div className="mt-6 inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full font-semibold animate-pulse-slow">
                <span className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse" />
                Live Stream Available
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Video Player */}
            {embedUrl && (
              <div className="mb-12 animate-fade-in-up">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={embedUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={sermon.title}
                  />
                </div>
              </div>
            )}

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-serif font-bold text-brand-dark-blue mb-4">
                    About This Message
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {sermon.description}
                  </p>
                </div>

                {/* Scripture References */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-serif font-bold text-brand-dark-blue mb-4">
                    Scripture References
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {scriptures.map((scripture, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-brand-gold/10 text-brand-dark-blue font-semibold rounded-lg border-2 border-brand-gold/20 hover:bg-brand-gold/20 transition-colors duration-300"
                      >
                        {scripture}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Download Resources */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark-blue mb-4">
                    Resources
                  </h3>
                  <div className="space-y-3">
                    {sermon.audioUrl && (
                      <a
                        href={sermon.audioUrl}
                        className="block w-full px-4 py-3 bg-brand-gold text-brand-dark-blue font-semibold text-center rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
                      >
                        Download Audio
                      </a>
                    )}
                    {sermon.notesUrl && (
                      <a
                        href={sermon.notesUrl}
                        className="block w-full px-4 py-3 bg-brand-blue text-white font-semibold text-center rounded-lg hover:bg-brand-navy hover:scale-105 transition-all duration-300"
                      >
                        Download Notes
                      </a>
                    )}
                  </div>
                </div>

                {/* Series Info */}
                <div className="bg-gradient-to-br from-brand-blue to-brand-navy rounded-xl shadow-lg p-6 text-white">
                  <h3 className="text-xl font-serif font-bold mb-3">
                    Part of Series
                  </h3>
                  <p className="text-brand-gold font-semibold text-lg mb-4">
                    {sermon.series}
                  </p>
                  <Link
                    to="/sermons"
                    className="inline-flex items-center text-white hover:text-brand-gold transition-colors duration-300 font-semibold"
                  >
                    View All Sermons
                    <ChevronRightIcon className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                {/* Share */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-serif font-bold text-brand-dark-blue mb-4">
                    Share This Message
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Help others grow in their faith by sharing this sermon with your friends and family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SermonDetailPage;
