'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function GetInvolved() {
  const involvementOptions = [
    {
      title: 'Become a Member',
      href: '/get-involved/membership',
      icon: '👥',
      description: 'Join our growing community of 500+ Pakistani academics, professionals, and fresh graduates in Korea. Access exclusive resources, networking events, and support services.',
      benefits: ['Member Directory Access', 'Priority Event Registration', 'Professional Networking', 'Career Support'],
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      buttonText: 'Join Now',
      featured: true
    },
    {
      title: 'Partner With Us',
      href: '/get-involved/partner',
      icon: '🤝',
      description: 'Collaborate with PAACK to create meaningful impact. We welcome partnerships with organizations, businesses, and institutions.',
      benefits: ['Brand Exposure', 'CSR Opportunities', 'Talent Pipeline', 'Community Outreach'],
      color: 'bg-green-50 border-green-200 hover:bg-green-100',
      buttonText: 'Partner',
      featured: false
    },
    {
      title: 'Volunteer',
      href: '/get-involved/volunteer',
      icon: '🙋‍♀️',
      description: 'Contribute your time and skills to help build and strengthen our community. Make a lasting difference in people\'s lives.',
      benefits: ['Skill Development', 'Community Impact', 'Leadership Experience', 'Professional Network'],
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      buttonText: 'Volunteer',
      featured: false
    }
  ];

  const impactStats = [
    { number: '500+', label: 'Active Members', icon: '👥' },
    { number: '50+', label: 'Partner Organizations', icon: '🤝' },
    { number: '100+', label: 'Volunteers', icon: '🙋‍♀️' },
    { number: '1000+', label: 'Lives Impacted', icon: '❤️' }
  ];

  const testimonials = [
    {
      quote: "Joining PAACK was the best decision I made when I moved to Korea. The community support and networking opportunities have been invaluable for my career.",
      author: "Dr. Ahmed Hassan",
      position: "Research Professor, Seoul National University",
      type: "Member"
    },
    {
      quote: "Our partnership with PAACK has allowed us to connect with talented Pakistani professionals and contribute to community development in meaningful ways.",
      author: "Sarah Kim",
      position: "HR Director, Samsung Electronics",
      type: "Partner"
    },
    {
      quote: "Volunteering with PAACK has given me the opportunity to give back to my community while developing leadership skills and making lifelong friends.",
      author: "Fatima Sheikh",
      position: "Fresh Graduate & PAACK Volunteer",
      type: "Volunteer"
    }
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Get Involved"
          subtitle="Join us in our mission to empower the Pakistani community in South Korea."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              {/* Impact Statistics */}
              <div style={{
                background: 'var(--light-gray)',
                padding: '60px',
                borderRadius: '20px',
                marginBottom: '80px',
                textAlign: 'center'
              }}>
                <h2 style={{ 
                  color: 'var(--primary-color)', 
                  fontSize: '2.5rem', 
                  marginBottom: '20px' 
                }}>
                  Our Growing Impact
                </h2>
                <p style={{ 
                  color: 'var(--dark-gray)', 
                  fontSize: '1.2rem', 
                  marginBottom: '40px',
                  maxWidth: '600px',
                  margin: '0 auto 40px auto'
                }}>
                  Together, we&apos;re building a stronger, more connected Pakistani community in Korea.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '40px'
                }}>
                  {impactStats.map((stat, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '3rem', marginBottom: '10px' }}>
                        {stat.icon}
                      </div>
                      <div style={{ 
                        fontSize: '3rem', 
                        fontWeight: '700', 
                        color: 'var(--secondary-color)',
                        marginBottom: '10px'
                      }}>
                        {stat.number}
                      </div>
                      <div style={{ 
                        color: 'var(--dark-gray)', 
                        fontWeight: '600',
                        fontSize: '1.1rem'
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ways to Get Involved */}
              <div style={{ marginBottom: '80px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                  <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}>
                    Ways to Get Involved
                  </h2>
                  <p style={{ fontSize: '1.2rem', color: 'var(--dark-gray)', maxWidth: '700px', margin: '0 auto' }}>
                    Whether you&apos;re looking to join our community, partner with us, or volunteer your time, 
                    we have meaningful ways for you to make an impact.
                  </p>
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                  gap: '30px',
                  marginBottom: '60px'
                }}>
                  {involvementOptions.map((option, index) => (
                    <Link 
                      key={index}
                      href={option.href}
                      style={{ textDecoration: 'none' }}
                    >
                      <div style={{
                        background: 'var(--white-color)',
                        padding: '40px',
                        borderRadius: '20px',
                        border: '2px solid #e0e0e0',
                        transition: 'all 0.3s ease',
                        height: '100%',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      className="involvement-card"
                      >
                        {option.featured && (
                          <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'var(--accent-color)',
                            color: 'var(--primary-color)',
                            padding: '5px 12px',
                            borderRadius: '15px',
                            fontSize: '0.8rem',
                            fontWeight: '600'
                          }}>
                            Most Popular
                          </div>
                        )}
                        <div style={{ fontSize: '4rem', marginBottom: '20px', textAlign: 'center' }}>
                          {option.icon}
                        </div>
                        <h3 style={{ 
                          fontSize: '1.8rem', 
                          color: 'var(--primary-color)', 
                          marginBottom: '15px',
                          fontWeight: '700',
                          textAlign: 'center'
                        }}>
                          {option.title}
                        </h3>
                        <p style={{ 
                          color: 'var(--dark-gray)', 
                          lineHeight: '1.6',
                          fontSize: '1rem',
                          marginBottom: '25px',
                          textAlign: 'center'
                        }}>
                          {option.description}
                        </p>
                        <div style={{ marginBottom: '30px' }}>
                          <h4 style={{
                            color: 'var(--secondary-color)',
                            fontSize: '1rem',
                            fontWeight: '600',
                            marginBottom: '15px',
                            textAlign: 'center'
                          }}>
                            Key Benefits:
                          </h4>
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '10px'
                          }}>
                            {option.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} style={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '0.9rem',
                                color: 'var(--dark-gray)'
                              }}>
                                <span style={{ color: 'var(--secondary-color)', marginRight: '8px' }}>✓</span>
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <span className="btn btn-primary" style={{
                            display: 'inline-block',
                            padding: '15px 30px',
                            fontSize: '1.1rem',
                            fontWeight: '600'
                          }}>
                            {option.buttonText}
                          </span>
                        </div>
                        <div style={{
                          position: 'absolute',
                          bottom: '20px',
                          right: '20px',
                          color: 'var(--secondary-color)',
                          fontSize: '1.5rem',
                          transform: 'translateX(10px)',
                          opacity: 0,
                          transition: 'all 0.3s ease'
                        }}
                        className="arrow-icon"
                        >
                          →
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div style={{ marginBottom: '80px' }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  fontSize: '2.2rem', 
                  marginBottom: '50px' 
                }}>
                  Hear From Our Community
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '30px'
                }}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} style={{
                      background: 'var(--white-color)',
                      padding: '30px',
                      borderRadius: '15px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      border: '1px solid #f0f0f0',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '-10px',
                        left: '30px',
                        background: 'var(--secondary-color)',
                        color: 'white',
                        padding: '5px 15px',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>
                        {testimonial.type}
                      </div>
                      <div style={{
                        fontSize: '3rem',
                        color: 'var(--accent-color)',
                        marginBottom: '15px',
                        opacity: 0.7
                      }}>
                        &ldquo;
                      </div>
                      <p style={{
                        color: 'var(--dark-gray)',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                        fontSize: '1rem',
                        fontStyle: 'italic'
                      }}>
                        {testimonial.quote}
                      </p>
                      <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '15px' }}>
                        <div style={{
                          color: 'var(--primary-color)',
                          fontWeight: '700',
                          fontSize: '1rem'
                        }}>
                          {testimonial.author}
                        </div>
                        <div style={{
                          color: 'var(--dark-gray)',
                          fontSize: '0.9rem'
                        }}>
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div style={{
                background: 'linear-gradient(135deg, var(--primary-color), #0a2347)',
                padding: '60px',
                borderRadius: '20px',
                textAlign: 'center',
                color: 'white'
              }}>
                <h2 style={{ 
                  color: 'white', 
                  fontSize: '2.5rem', 
                  marginBottom: '20px' 
                }}>
                  Ready to Make a Difference?
                </h2>
                <p style={{ 
                  fontSize: '1.3rem', 
                  marginBottom: '40px', 
                  opacity: 0.9,
                  maxWidth: '700px',
                  margin: '0 auto 40px auto'
                }}>
                  Join thousands of Pakistani professionals and fresh graduates who are already part of our thriving community. 
                  Together, we can achieve more.
                </p>
                <div style={{ 
                  display: 'flex', 
                  gap: '25px', 
                  justifyContent: 'center', 
                  flexWrap: 'wrap' 
                }}>
                  <Link href="/get-involved/membership" className="btn btn-accent" style={{
                    fontSize: '1.2rem',
                    padding: '15px 30px'
                  }}>
                    Become a Member
                  </Link>
                  <Link href="/contact" className="btn" 
                        style={{ 
                          background: 'rgba(255,255,255,0.2)', 
                          color: 'white', 
                          border: '2px solid white',
                          fontSize: '1.2rem',
                          padding: '15px 30px'
                        }}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .involvement-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
          border-color: var(--secondary-color);
        }
        .involvement-card:hover .arrow-icon {
          transform: translateX(0);
          opacity: 1;
        }
      `}</style>
    </>
  );
}
