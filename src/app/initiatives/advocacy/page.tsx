'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function Advocacy() {
  const services = [
    {
      title: 'Insurance Navigation',
      icon: '🏥',
      description: 'Comprehensive guidance on Korean health insurance systems, claims processing, and medical coverage options.',
      features: [
        'Health insurance registration assistance',
        'Claims process guidance',
        'Medical coverage explanations',
        'Insurance policy comparisons'
      ]
    },
    {
      title: 'Hospital & Healthcare Support',
      icon: '🩺',
      description: 'Professional support for navigating Korean healthcare systems and medical procedures.',
      features: [
        'Hospital system navigation',
        'Medical interpreter services',
        'Doctor appointment assistance',
        'Treatment option guidance'
      ]
    },
    {
      title: 'Visa & Immigration',
      icon: '📋',
      description: 'Expert assistance with visa applications, renewals, and immigration-related procedures.',
      features: [
        'Visa application support',
        'Document preparation assistance',
        'Renewal process guidance',
        'Legal requirement updates'
      ]
    },
    {
      title: 'Government Relations',
      icon: '🏛️',
      description: 'Active engagement with Korean government agencies and Pakistani embassy for community advocacy.',
      features: [
        'Policy advocacy initiatives',
        'Community representation',
        'Government liaison services',
        'Embassy coordination'
      ]
    }
  ];

  const achievements = [
    { number: '500+', label: 'Members Assisted' },
    { number: '150+', label: 'Visa Applications Supported' },
    { number: '25+', label: 'Policy Discussions' },
    { number: '100%', label: 'Success Rate' }
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Advocacy & Support"
          subtitle="Professional support on insurance, hospital navigation, visas, and engagement with Korean government and Pakistani embassy."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}>
                  Comprehensive Support Services
                </h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--dark-gray)', maxWidth: '700px', margin: '0 auto' }}>
                  PAACK provides essential advocacy and support services to help Pakistani professionals 
                  navigate complex systems and procedures in South Korea with confidence and ease.
                </p>
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '30px',
                marginBottom: '80px'
              }}>
                {services.map((service, index) => (
                  <div key={index} style={{
                    background: 'var(--white-color)',
                    padding: '40px',
                    borderRadius: '15px',
                    border: '1px solid #e0e0e0',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                  }}
                  className="service-card"
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
                      {service.features.map((feature, idx) => (
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
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Statistics Section */}
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
                  Our Impact
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '30px',
                  textAlign: 'center'
                }}>
                  {achievements.map((achievement, index) => (
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
                        {achievement.number}
                      </div>
                      <div style={{
                        fontSize: '1.1rem',
                        color: 'var(--dark-gray)',
                        fontWeight: '600'
                      }}>
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
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
                  Need Support?
                </h2>
                <p style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: '30px', 
                  opacity: 0.9,
                  maxWidth: '600px',
                  margin: '0 auto 30px auto'
                }}>
                  Our advocacy team is here to help you navigate any challenges you face. 
                  Don&apos;t hesitate to reach out for professional guidance and support.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn btn-accent">
                    Contact Support Team
                  </Link>
                  <Link href="/get-involved/membership" className="btn" 
                        style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '2px solid white' }}>
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
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
          border-color: var(--secondary-color);
        }
      `}</style>
    </>
  );
}
