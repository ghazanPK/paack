'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function Research() {
  const collaborationAreas = [
    {
      title: 'Medical Research Networks',
      icon: '🏥',
      description: 'Connecting Pakistani doctors and researchers across different medical specialties for collaborative projects.',
      projects: [
        'Cross-hospital research initiatives',
        'Medical case study collaborations',
        'Clinical trial partnerships',
        'Medical education programs'
      ]
    },
    {
      title: 'Academic Partnerships',
      icon: '🎓',
      description: 'Building bridges between Pakistani academics in Korean universities and research institutions.',
      projects: [
        'Joint research publications',
        'Conference presentations',
        'Academic exchange programs',
        'Doctoral supervision networks'
      ]
    },
    {
      title: 'Technology & Innovation',
      icon: '💡',
      description: 'Fostering collaboration in emerging technologies and innovative research fields.',
      projects: [
        'AI and machine learning research',
        'Biotechnology initiatives',
        'Engineering collaborations',
        'Digital health solutions'
      ]
    },
    {
      title: 'Diaspora Engagement',
      icon: '🌍',
      description: 'Connecting with Pakistani diaspora worldwide to expand research opportunities and knowledge sharing.',
      projects: [
        'Global research networks',
        'International collaborations',
        'Knowledge transfer programs',
        'Mentorship initiatives'
      ]
    }
  ];

  const researchMetrics = [
    { number: '75+', label: 'Active Collaborations' },
    { number: '120+', label: 'Published Papers' },
    { number: '15+', label: 'Research Grants' },
    { number: '300+', label: 'Researchers Connected' }
  ];

  const upcomingEvents = [
    {
      title: 'Annual Research Symposium',
      date: 'March 15, 2025',
      type: 'Conference',
      description: 'Showcasing collaborative research projects and fostering new partnerships.'
    },
    {
      title: 'Medical Research Workshop',
      date: 'April 8, 2025',
      type: 'Workshop',
      description: 'Hands-on training for research methodologies and publication strategies.'
    },
    {
      title: 'Tech Innovation Meetup',
      date: 'May 20, 2025',
      type: 'Networking',
      description: 'Connecting technology researchers and exploring emerging trends.'
    }
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Research & Collaboration"
          subtitle="Boosting research collaboration among doctors and engaging with the wider diaspora to foster new projects."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}>
                  Collaborative Research Ecosystem
                </h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
                  PAACK serves as a catalyst for research collaboration, connecting Pakistani academics 
                  and professionals across disciplines to create impactful research projects and foster 
                  innovation in South Korea and beyond.
                </p>
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '30px',
                marginBottom: '80px'
              }}>
                {collaborationAreas.map((area, index) => (
                  <div key={index} style={{
                    background: 'var(--white-color)',
                    padding: '40px',
                    borderRadius: '15px',
                    border: '1px solid #e0e0e0',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                  }}
                  className="research-card"
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
                      {area.projects.map((project, idx) => (
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
                          }}>•</span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Research Metrics */}
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
                  Research Impact
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '30px',
                  textAlign: 'center'
                }}>
                  {researchMetrics.map((metric, index) => (
                    <div key={index}>
                      <div style={{
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        color: 'var(--accent-color)',
                        marginBottom: '10px'
                      }}>
                        {metric.number}
                      </div>
                      <div style={{
                        fontSize: '1.1rem',
                        opacity: 0.9,
                        fontWeight: '600'
                      }}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Research Events */}
              <div style={{ marginBottom: '60px' }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  marginBottom: '40px',
                  fontSize: '2.2rem'
                }}>
                  Upcoming Research Events
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '25px'
                }}>
                  {upcomingEvents.map((event, index) => (
                    <div key={index} style={{
                      background: 'var(--light-gray)',
                      padding: '30px',
                      borderRadius: '15px',
                      border: '1px solid #e0e0e0',
                      transition: 'all 0.3s ease'
                    }}
                    className="event-card"
                    >
                      <div style={{
                        background: 'var(--secondary-color)',
                        color: 'white',
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
                  Join Our Research Community
                </h2>
                <p style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: '30px', 
                  color: 'var(--dark-gray)',
                  maxWidth: '600px',
                  margin: '0 auto 30px auto'
                }}>
                  Connect with fellow researchers, access collaboration opportunities, 
                  and contribute to groundbreaking research projects.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/portal/collaborate" className="btn">
                    Explore Collaborations
                  </Link>
                  <Link href="/get-involved/membership" className="btn btn-accent">
                    Become a Member
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .research-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
          border-color: var(--secondary-color);
        }
        .event-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
      `}</style>
    </>
  );
}
