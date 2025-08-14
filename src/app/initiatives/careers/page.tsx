'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function Careers() {
  const careerServices = [
    {
      title: 'Job Market Navigation',
      icon: '🎯',
      description: 'Comprehensive guidance for understanding and succeeding in the Korean job market.',
      services: [
        'Industry landscape analysis',
        'Company culture insights',
        'Application process guidance',
        'Interview preparation workshops'
      ]
    },
    {
      title: 'Professional Development',
      icon: '📚',
      description: 'Resources and programs to enhance your professional skills and career trajectory.',
      services: [
        'Skill development workshops',
        'Leadership training programs',
        'Professional certification guidance',
        'Career planning consultations'
      ]
    },
    {
      title: 'Networking & Mentorship',
      icon: '🤝',
      description: 'Building valuable professional connections and mentorship relationships.',
      services: [
        'Industry networking events',
        'Mentor-mentee matching',
        'Professional meetups',
        'Alumni network access'
      ]
    },
    {
      title: 'Conference & Seminar Insights',
      icon: '🎓',
      description: 'Access to valuable information from industry conferences and professional seminars.',
      services: [
        'Conference attendance support',
        'Seminar content sharing',
        'Industry trend briefings',
        'Knowledge sharing sessions'
      ]
    }
  ];

  const careerStats = [
    { number: '85%', label: 'Job Placement Success' },
    { number: '200+', label: 'Career Consultations' },
    { number: '50+', label: 'Industry Partnerships' },
    { number: '30+', label: 'Monthly Job Opportunities' }
  ];

  const jobSectors = [
    {
      sector: 'Healthcare & Medical',
      opportunities: '45+',
      avgSalary: '₩80-120M',
      description: 'Hospitals, clinics, research institutions, pharmaceutical companies'
    },
    {
      sector: 'Technology & Engineering',
      opportunities: '35+',
      avgSalary: '₩70-110M',
      description: 'IT companies, semiconductor, automotive, telecommunications'
    },
    {
      sector: 'Academia & Research',
      opportunities: '25+',
      avgSalary: '₩60-100M',
      description: 'Universities, research institutes, government agencies'
    },
    {
      sector: 'Business & Finance',
      opportunities: '20+',
      avgSalary: '₩65-95M',
      description: 'Banks, consulting firms, multinational corporations'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Career Fair 2025',
      date: 'February 28, 2025',
      type: 'Career Fair',
      description: 'Meet leading employers and explore job opportunities across various sectors.'
    },
    {
      title: 'Resume Writing Workshop',
      date: 'March 10, 2025',
      type: 'Workshop',
      description: 'Learn to create compelling resumes that stand out in the Korean job market.'
    },
    {
      title: 'Industry Leaders Panel',
      date: 'March 25, 2025',
      type: 'Panel Discussion',
      description: 'Insights from successful Pakistani professionals in Korean companies.'
    }
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Career Development"
          subtitle="Resources for professional growth, navigating job markets, and insights from conferences and seminars."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}>
                  Accelerate Your Career
                </h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--dark-gray)', maxWidth: '800px', margin: '0 auto' }}>
                  PAACK provides comprehensive career development support to help Pakistani professionals 
                  thrive in the Korean job market and advance their careers to new heights.
                </p>
              </div>

              {/* Career Services */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '30px',
                marginBottom: '80px'
              }}>
                {careerServices.map((service, index) => (
                  <div key={index} style={{
                    background: 'var(--white-color)',
                    padding: '40px',
                    borderRadius: '15px',
                    border: '1px solid #e0e0e0',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                  }}
                  className="career-card"
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '20px', textAlign: 'center' }}>
                      {service.icon}
                    </div>
                    <h3 style={{ 
                      fontSize: '1.4rem', 
                      color: 'var(--primary-color)', 
                      marginBottom: '15px',
                      fontWeight: '700',
                      textAlign: 'center'
                    }}>
                      {service.title}
                    </h3>
                    <p style={{ 
                      color: 'var(--dark-gray)', 
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      textAlign: 'center'
                    }}>
                      {service.description}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {service.services.map((item, idx) => (
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
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Career Statistics */}
              <div style={{
                background: 'var(--light-gray)',
                padding: '60px',
                borderRadius: '20px',
                marginBottom: '60px'
              }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  marginBottom: '40px',
                  fontSize: '2.2rem'
                }}>
                  Career Success Metrics
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '30px',
                  textAlign: 'center'
                }}>
                  {careerStats.map((stat, index) => (
                    <div key={index} style={{
                      background: 'var(--white-color)',
                      padding: '30px',
                      borderRadius: '15px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                    }}>
                      <div style={{
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        color: 'var(--secondary-color)',
                        marginBottom: '10px'
                      }}>
                        {stat.number}
                      </div>
                      <div style={{
                        fontSize: '1.1rem',
                        color: 'var(--dark-gray)',
                        fontWeight: '600'
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Job Market Sectors */}
              <div style={{ marginBottom: '60px' }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  marginBottom: '40px',
                  fontSize: '2.2rem'
                }}>
                  Job Market Opportunities
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '25px'
                }}>
                  {jobSectors.map((sector, index) => (
                    <div key={index} style={{
                      background: 'var(--white-color)',
                      padding: '30px',
                      borderRadius: '15px',
                      border: '1px solid #e0e0e0',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                    }}
                    className="sector-card"
                    >
                      <h3 style={{
                        color: 'var(--primary-color)',
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        marginBottom: '15px'
                      }}>
                        {sector.sector}
                      </h3>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '15px'
                      }}>
                        <div style={{
                          background: 'var(--secondary-color)',
                          color: 'white',
                          padding: '5px 12px',
                          borderRadius: '15px',
                          fontSize: '0.85rem',
                          fontWeight: '600'
                        }}>
                          {sector.opportunities} positions
                        </div>
                        <div style={{
                          background: 'var(--accent-color)',
                          color: 'var(--primary-color)',
                          padding: '5px 12px',
                          borderRadius: '15px',
                          fontSize: '0.85rem',
                          fontWeight: '600'
                        }}>
                          {sector.avgSalary}
                        </div>
                      </div>
                      <p style={{
                        color: 'var(--dark-gray)',
                        lineHeight: '1.5',
                        fontSize: '0.95rem'
                      }}>
                        {sector.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Career Events */}
              <div style={{ marginBottom: '60px' }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  marginBottom: '40px',
                  fontSize: '2.2rem'
                }}>
                  Upcoming Career Events
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '25px'
                }}>
                  {upcomingEvents.map((event, index) => (
                    <div key={index} style={{
                      background: 'linear-gradient(135deg, var(--primary-color), #0a2347)',
                      color: 'white',
                      padding: '30px',
                      borderRadius: '15px',
                      transition: 'all 0.3s ease'
                    }}
                    className="career-event-card"
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
                        color: 'white',
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        marginBottom: '10px'
                      }}>
                        {event.title}
                      </h3>
                      <div style={{
                        color: 'var(--accent-color)',
                        fontWeight: '600',
                        marginBottom: '10px'
                      }}>
                        📅 {event.date}
                      </div>
                      <p style={{
                        color: 'rgba(255,255,255,0.9)',
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
                background: 'linear-gradient(135deg, var(--secondary-color), #007a56)',
                padding: '50px',
                borderRadius: '20px',
                textAlign: 'center',
                color: 'white'
              }}>
                <h2 style={{ 
                  color: 'white', 
                  fontSize: '2.2rem', 
                  marginBottom: '20px' 
                }}>
                  Ready to Advance Your Career?
                </h2>
                <p style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: '30px', 
                  opacity: 0.9,
                  maxWidth: '600px',
                  margin: '0 auto 30px auto'
                }}>
                  Join our career development programs and connect with a network 
                  of successful professionals who can help you achieve your goals.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/portal/community/jobs" className="btn btn-accent">
                    View Job Board
                  </Link>
                  <Link href="/get-involved/membership" className="btn" 
                        style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '2px solid white' }}>
                    Join PAACK
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .career-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
          border-color: var(--secondary-color);
        }
        .sector-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .career-event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
      `}</style>
    </>
  );
}
