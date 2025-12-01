import React from 'react';
import { staff } from '@/data/mockData';

const StaffCard: React.FC<{ member: typeof staff[0] }> = ({ member }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
    <div className="relative overflow-hidden h-64 bg-gradient-to-br from-brand-blue to-brand-navy">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-serif font-bold text-brand-dark-blue mb-1 group-hover:text-brand-gold transition-colors duration-300">
        {member.name}
      </h3>
      <p className="text-brand-gold font-semibold mb-3">{member.role}</p>
      <p className="text-gray-700 leading-relaxed">{member.bio}</p>
    </div>
  </div>
);

const AboutPage: React.FC = () => {
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
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in-down">
            About Us
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up">
            Learn more about who we are, what we believe, and the people who lead our community.
          </p>
        </div>
      </section>

      {/* Vision & Beliefs Section */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-up">
                <h2 className="text-3xl font-serif font-bold text-brand-dark-blue mb-6">
                  Our Vision
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  We are a life-giving church where people encounter the love of God, experience
                  authentic community, and are equipped to fulfill their God-given purpose.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our heart is to see lives transformed by the gospel, families strengthened,
                  and our community impacted through the love of Jesus Christ.
                </p>
              </div>

              {/* Beliefs */}
              <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl font-serif font-bold text-brand-dark-blue mb-6">
                  What We Believe
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-brand-dark-blue">The Bible</strong> is the inspired and authoritative Word of God, our guide for faith and life.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-brand-dark-blue">The Trinity</strong> - one God eternally existing in three persons: Father, Son, and Holy Spirit.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-brand-dark-blue">Jesus Christ</strong> is fully God and fully man, who died for our sins and rose again.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-brand-dark-blue">Salvation</strong> is a gift of grace through faith in Jesus Christ alone.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-brand-dark-blue">The Church</strong> is the body of Christ, called to worship, fellowship, and serve.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-brand-dark-blue mb-8">
              Our Story
            </h2>
            <div className="text-left space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Grace Covenant Church was born out of a deep desire to see people come to know Jesus
                and experience the transforming power of His love. What started as a small group of
                believers gathering in homes has grown into a vibrant community of faith.
              </p>
              <p>
                We are committed to creating a space where people can belong before they believe,
                where questions are welcomed, and where authentic relationships are formed. Our
                church family represents diverse backgrounds, ages, and stages of faith, united by
                our love for Jesus and one another.
              </p>
              <p>
                Today, we continue to pursue our calling to be a light in our community, sharing
                the hope of the gospel through worship, service, and genuine relationships. We
                believe that the church is not a building, but a family - and we invite you to be
                part of ours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-200">
              The people leading our church family
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {staff.map((member, index) => (
              <div
                key={member.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <StaffCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-brand-dark-blue mb-6">
            Want to Know More?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We'd love to connect with you and answer any questions you might have about our church.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-brand-gold text-brand-dark-blue font-semibold rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
