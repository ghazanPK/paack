'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function History() {
  const milestones = [
    {
      year: '2018',
      title: 'Foundation of PAACK',
      description: 'PAACK was established by a group of visionary Pakistani academics and professionals in South Korea, recognizing the need for a unified platform to address community challenges.',
      icon: '🌱',
      color: 'var(--secondary-color)'
    },
    {
      year: '2019',
      title: 'First National Conference',
      description: 'Organized the inaugural Pakistani Academic Conference in Seoul, bringing together over 200 participants from across Korea to discuss research collaboration and community development.',
      icon: '🎓',
      color: 'var(--primary-color)'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Adapted to the pandemic by launching digital platforms for virtual conferences, online mentorship programs, and remote community support services.',
      icon: '💻',
      color: 'var(--secondary-color)'
    },
    {
      year: '2021',
      title: 'Research Collaboration Initiative',
      description: 'Launched the Pakistan-Korea Research Partnership Program, facilitating joint research projects between Pakistani and Korean institutions.',
      icon: '🔬',
      color: 'var(--primary-color)'
    },
    {
      year: '2022',
      title: 'Regional Expansion',
      description: 'Established regional chapters in major Korean cities including Busan, Daejeon, and Daegu to better serve the growing Pakistani community.',
      icon: '🌍',
      color: 'var(--secondary-color)'
    },
    {
      year: '2023',
      title: 'Professional Development Hub',
      description: 'Created comprehensive career services including job placement assistance, professional skill workshops, and industry networking events.',
      icon: '💼',
      color: 'var(--primary-color)'
    },
    {
      year: '2024',
      title: 'Cultural Heritage Center',
      description: 'Established a cultural center to preserve Pakistani traditions, organize festivals, and promote cultural exchange with Korean communities.',
      icon: '🎭',
      color: 'var(--secondary-color)'
    },
    {
      year: '2025',
      title: 'Innovation & Growth',
      description: 'Launched the Members-Only Portal and expanded advocacy efforts, positioning PAACK as the premier organization for Pakistani professionals in Korea.',
      icon: '🚀',
      color: 'var(--primary-color)'
    }
  ];

  const achievements = [
    {
      number: '500+',
      label: 'Members Served',
      description: 'Active community members across Korea',
      icon: '👥'
    },
    {
      number: '50+',
      label: 'Universities',
      description: 'Partner institutions nationwide',
      icon: '🏛️'
    },
    {
      number: '100+',
      label: 'Events Organized',
      description: 'Conferences, workshops, and cultural programs',
      icon: '📅'
    },
    {
      number: '25+',
      label: 'Research Projects',
      description: 'Collaborative international research initiatives',
      icon: '📊'
    }
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Our History"
          subtitle="The journey of building Pakistan's premier academic community in South Korea"
        />
        
        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              {/* Breadcrumb */}
              <div style={{
                marginBottom: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'var(--dark-gray)',
                fontSize: '0.9rem'
              }}>
                <Link href="/about" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>About</Link>
                <span>›</span>
                <span>Our History</span>
              </div>

              {/* Introduction */}
              <div style={{
                background: 'var(--light-gray)',
                borderRadius: '25px',
                padding: '60px',
                textAlign: 'center',
                marginBottom: '80px'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '30px' }}>📚</div>
                <h2 style={{
                  color: 'var(--primary-color)',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '30px'
                }}>Our Journey</h2>
                <p style={{
                  color: 'var(--dark-gray)',
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  From humble beginnings as a small group of Pakistani academics to becoming the premier organization representing Pakistani interests in Korea, PAACK&apos;s journey reflects the collective dreams and aspirations of our vibrant community.
                </p>
              </div>

              {/* Timeline */}
              <div style={{ marginBottom: '100px' }}>
                <h2 style={{
                  color: 'var(--primary-color)',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  textAlign: 'center',
                  marginBottom: '60px'
                }}>Major Milestones</h2>
                <div style={{ position: 'relative' }}>
                  {/* Timeline Line */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '0',
                    bottom: '0',
                    width: '4px',
                    background: 'linear-gradient(to bottom, var(--primary-color), var(--secondary-color))',
                    transform: 'translateX(-50%)',
                    zIndex: 1
                  }}></div>
                  
                  {milestones.map((milestone, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '60px',
                      position: 'relative'
                    }}>
                      {/* Timeline Item */}
                      <div style={{
                        width: '50%',
                        paddingRight: index % 2 === 0 ? '40px' : '0',
                        paddingLeft: index % 2 === 0 ? '0' : '40px',
                        textAlign: index % 2 === 0 ? 'right' : 'left',
                        order: index % 2 === 0 ? 1 : 2
                      }}>
                        <div style={{
                          background: 'white',
                          padding: '30px',
                          borderRadius: '20px',
                          border: '1px solid #e0e0e0',
                          boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                          position: 'relative'
                        }}>
                          <div style={{
                            background: milestone.color,
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '12px',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            marginBottom: '15px',
                            display: 'inline-block'
                          }}>
                            {milestone.year}
                          </div>
                          <h3 style={{
                            color: 'var(--primary-color)',
                            fontSize: '1.4rem',
                            fontWeight: '700',
                            marginBottom: '15px'
                          }}>{milestone.title}</h3>
                          <p style={{
                            color: 'var(--dark-gray)',
                            lineHeight: '1.6'
                          }}>{milestone.description}</p>
                        </div>
                      </div>

                      {/* Timeline Node */}
                      <div style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 2,
                        order: index % 2 === 0 ? 2 : 1
                      }}>
                        <div style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: milestone.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          border: '4px solid white',
                          boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                        }}>
                          {milestone.icon}
                        </div>
                      </div>

                      {/* Empty space for alternating layout */}
                      <div style={{
                        width: '50%',
                        order: index % 2 === 0 ? 2 : 1
                      }}></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div style={{ marginBottom: '100px' }}>
                <h2 style={{
                  color: 'var(--primary-color)',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  textAlign: 'center',
                  marginBottom: '60px'
                }}>Our Achievements</h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '30px'
                }}>
                  {achievements.map((achievement, index) => (
                    <div key={index} style={{
                      background: 'white',
                      padding: '40px',
                      borderRadius: '20px',
                      border: '1px solid #e0e0e0',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                    }}
                    className="achievement-card"
                    >
                      <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{achievement.icon}</div>
                      <div style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: 'var(--secondary-color)',
                        marginBottom: '10px'
                      }}>{achievement.number}</div>
                      <h3 style={{
                        color: 'var(--primary-color)',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        marginBottom: '10px'
                      }}>{achievement.label}</h3>
                      <p style={{
                        color: 'var(--dark-gray)',
                        fontSize: '0.9rem'
                      }}>{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legacy Section */}
              <div style={{
                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                borderRadius: '25px',
                padding: '80px',
                textAlign: 'center',
                color: 'white',
                marginBottom: '80px'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '30px' }}>🏆</div>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '30px',
                  color: 'white'
                }}>Our Legacy</h2>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  maxWidth: '800px',
                  margin: '0 auto 40px',
                  opacity: 0.95
                }}>
                  PAACK&apos;s legacy is built on the collective achievements of our members, the bridges we&apos;ve built between communities, and the pathways we&apos;ve created for future generations of Pakistani professionals in Korea.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '30px',
                  marginTop: '40px'
                }}>
                  <div>
                    <h4 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px', color: 'white' }}>Academic Excellence</h4>
                    <p style={{ opacity: 0.9 }}>Advancing research and education standards</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px', color: 'white' }}>Cultural Bridge</h4>
                    <p style={{ opacity: 0.9 }}>Connecting Pakistani and Korean communities</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px', color: 'white' }}>Future Leaders</h4>
                    <p style={{ opacity: 0.9 }}>Nurturing the next generation</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div style={{
                background: 'var(--light-gray)',
                borderRadius: '25px',
                padding: '60px',
                textAlign: 'center'
              }}>
                <h2 style={{
                  color: 'var(--primary-color)',
                  fontSize: '2.2rem',
                  fontWeight: '700',
                  marginBottom: '20px'
                }}>Be Part of Our Continuing Story</h2>
                <p style={{
                  color: 'var(--dark-gray)',
                  fontSize: '1.2rem',
                  marginBottom: '30px'
                }}>
                  Help us write the next chapter of PAACK&apos;s history
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                  flexWrap: 'wrap'
                }}>
                  <Link href="/get-involved" style={{
                    background: 'var(--primary-color)',
                    color: 'white',
                    padding: '15px 30px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '700',
                    display: 'inline-block',
                    transition: 'all 0.3s ease'
                  }}
                  className="cta-button"
                  >
                    Join Our Community
                  </Link>
                  <Link href="/about/team" style={{
                    background: 'white',
                    color: 'var(--primary-color)',
                    padding: '15px 30px',
                    borderRadius: '12px',
                    border: '2px solid var(--primary-color)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '700',
                    display: 'inline-block',
                    transition: 'all 0.3s ease'
                  }}
                  className="cta-button-outline"
                  >
                    Meet Our Team
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .achievement-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        .cta-button-outline:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
          /* Stack timeline vertically on mobile */
          .timeline-item {
            flex-direction: column !important;
          }
          .timeline-item > div {
            width: 100% !important;
            text-align: center !important;
            padding: 0 20px !important;
            order: unset !important;
          }
        }
      `}</style>
    </>
  );
}
