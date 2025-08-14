'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="About PAACK"
          subtitle="The premier organization for the Pakistani academic and professional community in South Korea."
        />
        
        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              {/* Quick Navigation */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                marginBottom: '80px',
                flexWrap: 'wrap'
              }}>
                <Link href="/about/mission" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 25px',
                  background: 'var(--white-color)',
                  border: '2px solid var(--primary-color)',
                  borderRadius: '15px',
                  color: 'var(--primary-color)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                className="about-nav-link"
                >
                  🎯 Our Mission & Vision
                </Link>
                <Link href="/about/team" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 25px',
                  background: 'var(--white-color)',
                  border: '2px solid var(--primary-color)',
                  borderRadius: '15px',
                  color: 'var(--primary-color)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                className="about-nav-link"
                >
                  👥 Our Team
                </Link>
                <Link href="/about/history" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 25px',
                  background: 'var(--white-color)',
                  border: '2px solid var(--primary-color)',
                  borderRadius: '15px',
                  color: 'var(--primary-color)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                className="about-nav-link"
                >
                  📚 Our History
                </Link>
              </div>

              <div className="about-grid" style={{ display: 'flex', alignItems: 'center', gap: '80px', marginBottom: '80px' }}>
                <div className="about-text" style={{ flex: 1 }}>
                  <h2 style={{
                    color: 'var(--primary-color)',
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    marginBottom: '30px'
                  }}>Our Story</h2>
                  <p style={{
                    color: 'var(--dark-gray)',
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    marginBottom: '25px'
                  }}>
                    The Pakistani Academic Community Korea (PAACK) was founded with
                    the vision of creating a thriving network that bridges cultures
                    and facilitates professional growth. We serve as a vital
                    platform for collaboration, advocacy, and community building.
                  </p>
                  <p style={{
                    color: 'var(--dark-gray)',
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    marginBottom: '30px'
                  }}>
                    Our organization addresses the unique challenges faced by the
                    Pakistani diaspora in Korea while celebrating our shared
                    heritage and contributing to Korean society through academic
                    excellence and professional innovation.
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{
                      background: 'var(--accent-color)',
                      color: 'var(--primary-color)',
                      padding: '8px 16px',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}>
                      🏛️ Academic Excellence
                    </div>
                    <div style={{
                      background: 'var(--accent-color)',
                      color: 'var(--primary-color)',
                      padding: '8px 16px',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}>
                      🤝 Community Building
                    </div>
                    <div style={{
                      background: 'var(--accent-color)',
                      color: 'var(--primary-color)',
                      padding: '8px 16px',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}>
                      🌍 Cultural Bridge
                    </div>
                  </div>
                </div>
                <div className="about-image" style={{ flex: 1 }}>
                  <div style={{ 
                    width: '100%', 
                    height: '320px', 
                    background: 'linear-gradient(135deg, var(--secondary-color), var(--primary-color))', 
                    borderRadius: '20px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'white',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌟</div>
                      <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>Our Vision</h3>
                      <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>A Thriving Community</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistics Section */}
              <div style={{
                background: 'var(--light-gray)',
                borderRadius: '25px',
                padding: '60px',
                marginBottom: '80px'
              }}>
                <h2 style={{
                  color: 'var(--primary-color)',
                  fontSize: '2.2rem',
                  fontWeight: '700',
                  textAlign: 'center',
                  marginBottom: '50px'
                }}>PAACK by the Numbers</h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '40px',
                  textAlign: 'center'
                }}>
                  <div>
                    <div style={{
                      fontSize: '3rem',
                      fontWeight: '700',
                      color: 'var(--secondary-color)',
                      marginBottom: '10px'
                    }}>500+</div>
                    <div style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.1rem',
                      fontWeight: '600'
                    }}>Active Members</div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '3rem',
                      fontWeight: '700',
                      color: 'var(--secondary-color)',
                      marginBottom: '10px'
                    }}>50+</div>
                    <div style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.1rem',
                      fontWeight: '600'
                    }}>Universities</div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '3rem',
                      fontWeight: '700',
                      color: 'var(--secondary-color)',
                      marginBottom: '10px'
                    }}>15+</div>
                    <div style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.1rem',
                      fontWeight: '600'
                    }}>Research Fields</div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '3rem',
                      fontWeight: '700',
                      color: 'var(--secondary-color)',
                      marginBottom: '10px'
                    }}>100+</div>
                    <div style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.1rem',
                      fontWeight: '600'
                    }}>Success Stories</div>
                  </div>
                </div>
              </div>

              {/* What We Do Section */}
              <div style={{ marginBottom: '80px' }}>
                <h2 style={{
                  color: 'var(--primary-color)',
                  fontSize: '2.2rem',
                  fontWeight: '700',
                  textAlign: 'center',
                  marginBottom: '50px'
                }}>What We Do</h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '30px'
                }}>
                  <div style={{
                    background: 'var(--white-color)',
                    padding: '40px',
                    borderRadius: '20px',
                    border: '1px solid #e0e0e0',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  className="service-card"
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎓</div>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      marginBottom: '15px'
                    }}>Academic Support</h3>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6'
                    }}>
                      Providing guidance, mentorship, and resources to help Pakistani students and researchers excel in Korean academic institutions.
                    </p>
                  </div>
                  <div style={{
                    background: 'var(--white-color)',
                    padding: '40px',
                    borderRadius: '20px',
                    border: '1px solid #e0e0e0',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  className="service-card"
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💼</div>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      marginBottom: '15px'
                    }}>Professional Development</h3>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6'
                    }}>
                      Career advancement opportunities, networking events, and skill development programs for professional growth.
                    </p>
                  </div>
                  <div style={{
                    background: 'var(--white-color)',
                    padding: '40px',
                    borderRadius: '20px',
                    border: '1px solid #e0e0e0',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  className="service-card"
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🌍</div>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      marginBottom: '15px'
                    }}>Cultural Integration</h3>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6'
                    }}>
                      Facilitating cultural exchange and integration while preserving Pakistani heritage and fostering community bonds.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div style={{
                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                borderRadius: '25px',
                padding: '60px',
                textAlign: 'center',
                color: 'white'
              }}>
                <h2 style={{
                  fontSize: '2.2rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  color: 'white'
                }}>Join Our Community</h2>
                <p style={{
                  fontSize: '1.2rem',
                  marginBottom: '30px',
                  opacity: 0.9
                }}>
                  Be part of a network that empowers Pakistani professionals in Korea
                </p>
                <Link href="/get-involved" style={{
                  background: 'white',
                  color: 'var(--primary-color)',
                  padding: '15px 35px',
                  borderRadius: '15px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  display: 'inline-block',
                  transition: 'all 0.3s ease'
                }}
                className="cta-button"
                >
                  Get Involved Today
                </Link>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .about-nav-link:hover {
          background: var(--primary-color) !important;
          color: white !important;
          transform: translateY(-2px);
        }
        .service-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transform: translateY(-5px);
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        @media (max-width: 768px) {
          .about-grid {
            flex-direction: column !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  );
}
