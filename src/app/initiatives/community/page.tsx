'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function Community() {
  const supportAreas = [
    {
      title: 'Children\'s Education',
      icon: '📚',
      description: 'Comprehensive support for Pakistani families navigating the Korean education system.',
      services: [
        'School enrollment assistance',
        'Academic tutoring programs',
        'Language support services',
        'Educational pathway guidance'
      ]
    },
    {
      title: 'Social Integration',
      icon: '🤝',
      description: 'Programs and resources to help families integrate seamlessly into Korean society.',
      services: [
        'Cultural orientation workshops',
        'Language exchange programs',
        'Community integration events',
        'Local resource navigation'
      ]
    },
    {
      title: 'Family Support Services',
      icon: '👨‍👩‍👧‍👦',
      description: 'Holistic support addressing the diverse needs of Pakistani families in Korea.',
      services: [
        'Childcare assistance programs',
        'Family counseling services',
        'Healthcare guidance',
        'Emergency support network'
      ]
    },
    {
      title: 'Cultural Preservation',
      icon: '🎭',
      description: 'Promoting and preserving Pakistani culture while fostering cross-cultural understanding.',
      services: [
        'Cultural celebration events',
        'Traditional arts workshops',
        'Heritage preservation programs',
        'Cross-cultural dialogue forums'
      ]
    }
  ];

  const communityStats = [
    { number: '300+', label: 'Families Supported' },
    { number: '450+', label: 'Children in Programs' },
    { number: '25+', label: 'Cultural Events' },
    { number: '90%', label: 'Integration Success Rate' }
  ];

  const programs = [
    {
      title: 'Little Leaders Academy',
      category: 'Education',
      age: '6-12 years',
      description: 'After-school program combining Korean language learning with Pakistani cultural education.',
      participants: '85 children',
      schedule: 'Mon, Wed, Fri - 4:00 PM'
    },
    {
      title: 'Family Integration Workshops',
      category: 'Social Integration',
      age: 'All ages',
      description: 'Monthly workshops covering Korean customs, legal requirements, and social norms.',
      participants: '60 families',
      schedule: 'First Saturday of each month'
    },
    {
      title: 'Cultural Heritage Festival',
      category: 'Cultural',
      age: 'All ages',
      description: 'Annual celebration showcasing Pakistani traditions, food, and arts to the Korean community.',
      participants: '500+ attendees',
      schedule: 'Annual - August'
    },
    {
      title: 'Teen Mentorship Program',
      category: 'Youth Development',
      age: '13-18 years',
      description: 'Peer mentorship connecting Pakistani teens with successful young professionals.',
      participants: '40 teens',
      schedule: 'Bi-weekly meetings'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Spring Cultural Festival',
      date: 'April 15, 2025',
      type: 'Cultural Event',
      description: 'Celebrating Pakistani spring traditions with Korean community participation.'
    },
    {
      title: 'Education Fair for Families',
      date: 'March 20, 2025',
      type: 'Educational',
      description: 'Information session on Korean education system and opportunities for Pakistani children.'
    },
    {
      title: 'Women\'s Empowerment Workshop',
      date: 'May 5, 2025',
      type: 'Workshop',
      description: 'Supporting Pakistani women in building careers and social networks in Korea.'
    }
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Community & Family Support"
          subtitle="Support for families including children's education, social integration, and promoting cultural causes."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}>
                  Strengthening Our Community
                </h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
                  PAACK is committed to supporting Pakistani families as they build new lives in Korea, 
                  ensuring children thrive academically while preserving cultural heritage and fostering 
                  meaningful connections within the broader Korean community.
                </p>
              </div>

              {/* Support Areas */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '30px',
                marginBottom: '80px'
              }}>
                {supportAreas.map((area, index) => (
                  <div key={index} style={{
                    background: 'var(--white-color)',
                    padding: '40px',
                    borderRadius: '15px',
                    border: '1px solid #e0e0e0',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                  }}
                  className="support-card"
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '20px', textAlign: 'center' }}>
                      {area.icon}
                    </div>
                    <h3 style={{ 
                      fontSize: '1.4rem', 
                      color: 'var(--primary-color)', 
                      marginBottom: '15px',
                      fontWeight: '700',
                      textAlign: 'center'
                    }}>
                      {area.title}
                    </h3>
                    <p style={{ 
                      color: 'var(--dark-gray)', 
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      textAlign: 'center'
                    }}>
                      {area.description}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {area.services.map((service, idx) => (
                        <li key={idx} style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '10px',
                          fontSize: '0.95rem',
                          color: 'var(--dark-gray)'
                        }}>
                          <span style={{ 
                            color: 'var(--secondary-color)', 
                            marginRight: '10px',
                            fontSize: '1.2rem'
                          }}>✓</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Community Statistics */}
              <div style={{
                background: 'linear-gradient(135deg, var(--primary-color), #0a2347)',
                padding: '60px',
                borderRadius: '20px',
                marginBottom: '60px',
                color: 'white'
              }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'white', 
                  marginBottom: '40px',
                  fontSize: '2.2rem'
                }}>
                  Community Impact
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '30px',
                  textAlign: 'center'
                }}>
                  {communityStats.map((stat, index) => (
                    <div key={index}>
                      <div style={{
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        color: 'var(--accent-color)',
                        marginBottom: '10px'
                      }}>
                        {stat.number}
                      </div>
                      <div style={{
                        fontSize: '1.1rem',
                        opacity: 0.9,
                        fontWeight: '600'
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Programs */}
              <div style={{ marginBottom: '60px' }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  marginBottom: '40px',
                  fontSize: '2.2rem'
                }}>
                  Active Community Programs
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '25px'
                }}>
                  {programs.map((program, index) => (
                    <div key={index} style={{
                      background: 'var(--light-gray)',
                      padding: '30px',
                      borderRadius: '15px',
                      border: '1px solid #e0e0e0',
                      transition: 'all 0.3s ease'
                    }}
                    className="program-card"
                    >
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '15px'
                      }}>
                        <div style={{
                          background: 'var(--secondary-color)',
                          color: 'white',
                          padding: '5px 15px',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: '600'
                        }}>
                          {program.category}
                        </div>
                        <div style={{
                          color: 'var(--dark-gray)',
                          fontSize: '0.9rem',
                          fontWeight: '600'
                        }}>
                          {program.age}
                        </div>
                      </div>
                      <h3 style={{
                        color: 'var(--primary-color)',
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        marginBottom: '10px'
                      }}>
                        {program.title}
                      </h3>
                      <p style={{
                        color: 'var(--dark-gray)',
                        lineHeight: '1.5',
                        marginBottom: '15px',
                        fontSize: '0.95rem'
                      }}>
                        {program.description}
                      </p>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.9rem',
                        color: 'var(--dark-gray)'
                      }}>
                        <div>
                          <strong>👥 {program.participants}</strong>
                        </div>
                        <div>
                          <strong>📅 {program.schedule}</strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Community Events */}
              <div style={{ marginBottom: '60px' }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  marginBottom: '40px',
                  fontSize: '2.2rem'
                }}>
                  Upcoming Community Events
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '25px'
                }}>
                  {upcomingEvents.map((event, index) => (
                    <div key={index} style={{
                      background: 'var(--white-color)',
                      padding: '30px',
                      borderRadius: '15px',
                      border: '1px solid #e0e0e0',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                    }}
                    className="event-card"
                    >
                      <div style={{
                        background: 'var(--accent-color)',
                        color: 'var(--primary-color)',
                        padding: '5px 15px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        display: 'inline-block',
                        marginBottom: '15px'
                      }}>
                        {event.type}
                      </div>
                      <h3 style={{
                        color: 'var(--primary-color)',
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        marginBottom: '10px'
                      }}>
                        {event.title}
                      </h3>
                      <div style={{
                        color: 'var(--secondary-color)',
                        fontWeight: '600',
                        marginBottom: '10px'
                      }}>
                        📅 {event.date}
                      </div>
                      <p style={{
                        color: 'var(--dark-gray)',
                        lineHeight: '1.5',
                        fontSize: '0.95rem'
                      }}>
                        {event.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div style={{
                background: 'var(--light-gray)',
                padding: '50px',
                borderRadius: '20px',
                textAlign: 'center'
              }}>
                <h2 style={{ 
                  color: 'var(--primary-color)', 
                  fontSize: '2.2rem', 
                  marginBottom: '20px' 
                }}>
                  Join Our Community Family
                </h2>
                <p style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: '30px', 
                  color: 'var(--dark-gray)',
                  maxWidth: '600px',
                  margin: '0 auto 30px auto'
                }}>
                  Whether you&apos;re a new family or have been in Korea for years, 
                  our community programs offer support, friendship, and cultural connection.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/events" className="btn">
                    View Upcoming Events
                  </Link>
                  <Link href="/get-involved/volunteer" className="btn btn-accent">
                    Volunteer With Us
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .support-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
          border-color: var(--secondary-color);
        }
        .program-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .event-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
      `}</style>
    </>
  );
}
