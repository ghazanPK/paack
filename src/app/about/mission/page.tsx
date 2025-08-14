'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function Mission() {
  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Our Mission & Vision"
          subtitle="Empowering the Pakistani academic and professional community in South Korea"
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
                <span>Mission & Vision</span>
              </div>

              {/* Mission Section */}
              <div style={{ marginBottom: '100px' }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                  borderRadius: '25px',
                  padding: '80px',
                  color: 'white',
                  textAlign: 'center',
                  marginBottom: '80px'
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: '30px' }}>🎯</div>
                  <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    marginBottom: '30px',
                    color: 'white'
                  }}>Our Mission</h2>
                  <p style={{
                    fontSize: '1.3rem',
                    lineHeight: '1.8',
                    maxWidth: '800px',
                    margin: '0 auto',
                    opacity: 0.95
                  }}>
                    To serve as a comprehensive platform that empowers the Pakistani academic and professional community in South Korea through networking, advocacy, professional development, and cultural integration while fostering excellence in education, research, and innovation.
                  </p>
                </div>
              </div>

              {/* Vision Section */}
              <div style={{ marginBottom: '100px' }}>
                <div style={{
                  background: 'var(--light-gray)',
                  borderRadius: '25px',
                  padding: '80px',
                  textAlign: 'center',
                  marginBottom: '80px'
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: '30px' }}>🌟</div>
                  <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    marginBottom: '30px',
                    color: 'var(--primary-color)'
                  }}>Our Vision</h2>
                  <p style={{
                    fontSize: '1.3rem',
                    lineHeight: '1.8',
                    maxWidth: '800px',
                    margin: '0 auto',
                    color: 'var(--dark-gray)'
                  }}>
                    To become the premier organization representing Pakistani interests in Korea, creating a thriving ecosystem where Pakistani academics and professionals contribute significantly to Korean society while maintaining strong cultural ties and supporting the next generation of leaders.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div style={{ marginBottom: '100px' }}>
                <h2 style={{
                  color: 'var(--primary-color)',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  textAlign: 'center',
                  marginBottom: '60px'
                }}>Our Core Values</h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '40px'
                }}>
                  <div style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '20px',
                    border: '1px solid #e0e0e0',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                  }}
                  className="value-card"
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎓</div>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      marginBottom: '15px'
                    }}>Academic Excellence</h3>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6'
                    }}>
                      Promoting the highest standards of education, research, and scholarly achievement within our community.
                    </p>
                  </div>

                  <div style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '20px',
                    border: '1px solid #e0e0e0',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                  }}
                  className="value-card"
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🤝</div>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      marginBottom: '15px'
                    }}>Community Unity</h3>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6'
                    }}>
                      Building strong bonds among Pakistani professionals and fostering a supportive community network.
                    </p>
                  </div>

                  <div style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '20px',
                    border: '1px solid #e0e0e0',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                  }}
                  className="value-card"
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🌍</div>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      marginBottom: '15px'
                    }}>Cultural Integration</h3>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6'
                    }}>
                      Facilitating meaningful cultural exchange while preserving our Pakistani heritage and values.
                    </p>
                  </div>

                  <div style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '20px',
                    border: '1px solid #e0e0e0',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                  }}
                  className="value-card"
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💡</div>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      marginBottom: '15px'
                    }}>Innovation</h3>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6'
                    }}>
                      Encouraging creative thinking, research breakthroughs, and technological advancement in all fields.
                    </p>
                  </div>

                  <div style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '20px',
                    border: '1px solid #e0e0e0',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                  }}
                  className="value-card"
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>⚖️</div>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      marginBottom: '15px'
                    }}>Integrity</h3>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6'
                    }}>
                      Upholding the highest ethical standards in all our activities and professional endeavors.
                    </p>
                  </div>

                  <div style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '20px',
                    border: '1px solid #e0e0e0',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                  }}
                  className="value-card"
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🌱</div>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      marginBottom: '15px'
                    }}>Growth</h3>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6'
                    }}>
                      Fostering continuous personal and professional development for all community members.
                    </p>
                  </div>
                </div>
              </div>

              {/* Strategic Goals */}
              <div style={{ marginBottom: '100px' }}>
                <h2 style={{
                  color: 'var(--primary-color)',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  textAlign: 'center',
                  marginBottom: '60px'
                }}>Strategic Goals</h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                  gap: '30px'
                }}>
                  <div style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '15px',
                    border: '1px solid #e0e0e0',
                    borderLeft: '5px solid var(--secondary-color)'
                  }}>
                    <h4 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginBottom: '15px'
                    }}>Academic Collaboration</h4>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6'
                    }}>
                      Facilitate research partnerships between Pakistani and Korean institutions, promote joint publications, and create opportunities for academic exchange.
                    </p>
                  </div>

                  <div style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '15px',
                    border: '1px solid #e0e0e0',
                    borderLeft: '5px solid var(--secondary-color)'
                  }}>
                    <h4 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginBottom: '15px'
                    }}>Professional Advancement</h4>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6'
                    }}>
                      Provide career development resources, mentorship programs, and networking opportunities to enhance professional growth.
                    </p>
                  </div>

                  <div style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '15px',
                    border: '1px solid #e0e0e0',
                    borderLeft: '5px solid var(--secondary-color)'
                  }}>
                    <h4 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginBottom: '15px'
                    }}>Community Support</h4>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6'
                    }}>
                      Offer comprehensive support services for new arrivals, establish emergency assistance programs, and create inclusive social activities.
                    </p>
                  </div>

                  <div style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '15px',
                    border: '1px solid #e0e0e0',
                    borderLeft: '5px solid var(--secondary-color)'
                  }}>
                    <h4 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginBottom: '15px'
                    }}>Advocacy & Representation</h4>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6'
                    }}>
                      Advocate for Pakistani community interests, work with Korean institutions on policy matters, and promote cultural understanding.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div style={{
                background: 'linear-gradient(135deg, var(--secondary-color), var(--primary-color))',
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
                }}>Join Our Mission</h2>
                <p style={{
                  fontSize: '1.2rem',
                  marginBottom: '30px',
                  opacity: 0.9
                }}>
                  Be part of building a stronger Pakistani community in Korea
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                  flexWrap: 'wrap'
                }}>
                  <Link href="/get-involved" style={{
                    background: 'white',
                    color: 'var(--primary-color)',
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
                    Get Involved
                  </Link>
                  <Link href="/about/team" style={{
                    background: 'transparent',
                    color: 'white',
                    padding: '15px 30px',
                    borderRadius: '12px',
                    border: '2px solid white',
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
        .value-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        .cta-button-outline:hover {
          background: white;
          color: var(--primary-color);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}
