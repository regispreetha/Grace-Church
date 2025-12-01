import React from 'react';
import { HeartIcon } from '@/components/icons';

const GivePage: React.FC = () => {
  const handleGive = () => {
    alert('Thank you for your generosity! This will redirect to a secure giving platform.');
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 25, 41, 0.85), rgba(10, 25, 41, 0.85)), url('/artifacts/sunday_service_worship_1763537430650.png')`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <HeartIcon className="w-20 h-20 text-brand-gold mx-auto mb-6 animate-fade-in-down" />
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in-up">
            Give
          </h1>
          <p className="text-2xl text-gray-200 font-light animate-fade-in">
            Generosity is our privilege.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark-blue mb-6 text-center">
                Partnering in the Gospel
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                We believe that generous giving is a joyful act of worship that makes a tangible
                difference in our church, our community, and our world. Every gift helps us fulfill
                our mission to know God and make Him known.
              </p>

              <div className="bg-gradient-to-br from-brand-blue to-brand-navy rounded-xl p-8 text-white mb-8">
                <h3 className="text-2xl font-serif font-bold mb-4">Why We Give</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-3 text-2xl">•</span>
                    <span className="leading-relaxed">
                      <strong>To Honor God:</strong> Giving is an act of worship and gratitude for all He has given us.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-3 text-2xl">•</span>
                    <span className="leading-relaxed">
                      <strong>To Support Ministry:</strong> Your gifts enable us to spread the gospel and serve our community.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-3 text-2xl">•</span>
                    <span className="leading-relaxed">
                      <strong>To Grow in Faith:</strong> Giving teaches us to trust God and put His kingdom first.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-3 text-2xl">•</span>
                    <span className="leading-relaxed">
                      <strong>To Make an Impact:</strong> Together, we can accomplish more for God's glory.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Give Button */}
              <div className="text-center">
                <button
                  onClick={handleGive}
                  className="inline-block px-12 py-5 bg-brand-gold text-brand-dark-blue font-bold text-xl rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  Give Online
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  You will be redirected to a secure third-party giving platform.
                </p>
              </div>
            </div>

            {/* Other Ways to Give */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-dark-blue mb-2">
                  In Person
                </h3>
                <p className="text-gray-600">
                  Drop your offering in the box during Sunday service.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-dark-blue mb-2">
                  Bank Transfer
                </h3>
                <p className="text-gray-600">
                  Contact us for direct deposit details.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-dark-blue mb-2">
                  Check
                </h3>
                <p className="text-gray-600">
                  Mail checks to our church address.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-6">
              "Each of you should give what you have decided in your heart to give, not reluctantly
              or under compulsion, for God loves a cheerful giver."
            </blockquote>
            <cite className="text-brand-gold font-semibold text-xl">2 Corinthians 9:7</cite>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-brand-dark-blue mb-8 text-center">
              Questions About Giving?
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Is my donation tax-deductible?',
                  a: 'Yes! Grace Covenant Church is a registered nonprofit organization. You will receive a receipt for tax purposes.',
                },
                {
                  q: 'Is online giving secure?',
                  a: 'Absolutely. We use industry-standard encryption and security measures to protect your information.',
                },
                {
                  q: 'How is my gift used?',
                  a: 'Your generosity supports our ministries, missions, facilities, and staff. We are committed to faithful stewardship of every dollar.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-brand-cream rounded-lg p-6 border-l-4 border-brand-gold"
                >
                  <h3 className="font-bold text-brand-dark-blue mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GivePage;
