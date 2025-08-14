'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function Initiatives() {
  const initiatives = [
    {
      title: 'Advocacy & Support',
      href: '/initiatives/advocacy',
      icon: '🛡️',
      description: 'Professional support on insurance, hospital navigation, visas, and engagement with Korean government and Pakistani embassy.',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      title: 'Research & Collaboration',
      href: '/initiatives/research',
      icon: '🔬',
      description: 'Boosting research collaboration among doctors and engaging with the wider diaspora to foster new projects.',
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    {
      title: 'Career Development',
      href: '/initiatives/careers',
      icon: '📈',
      description: 'Resources for professional growth, navigating job markets, and insights from conferences and seminars.',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
    },
    {
      title: 'Community & Family Support',
      href: '/initiatives/community',
      icon: '👨‍👩‍👧‍👦',
      description: 'Support for families including children\'s education, social integration, and promoting cultural causes.',
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100'
    }
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Our Initiatives"
          subtitle="A catalog of PAACK's core activities and services that support our community in South Korea."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}>
                  What We Do
                </h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--dark-gray)', maxWidth: '700px', margin: '0 auto' }}>
                  PAACK focuses on four key pillars that address the diverse needs of Pakistani 
                  academics and professionals living in South Korea. Each initiative is designed 
                  to provide comprehensive support and foster growth within our community.
                </p>
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '30px',
                marginBottom: '60px'
              }}>
                {initiatives.map((initiative, index) => (
                  <Link 
                    key={index}
                    href={initiative.href}
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{
                      background: 'var(--white-color)',
                      padding: '40px',
                      borderRadius: '15px',
                      border: '2px solid #e0e0e0',
                      transition: 'all 0.3s ease',
                      height: '100%',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    className="initiative-card"
                    >
                      <div style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        {initiative.icon}
                      </div>
                      <h3 style={{ 
                        fontSize: '1.5rem', 
                        color: 'var(--primary-color)', 
                        marginBottom: '15px',
                        fontWeight: '700'
                      }}>
                        {initiative.title}
                      </h3>
                      <p style={{ 
                        color: 'var(--dark-gray)', 
                        lineHeight: '1.6',
                        fontSize: '1rem'
                      }}>
                        {initiative.description}
                      </p>
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

              <div style={{
                background: 'linear-gradient(135deg, var(--primary-color), #0a2347)',
                padding: '60px',
                borderRadius: '20px',
                textAlign: 'center',
                color: 'white'
              }}>
                <h2 style={{ 
                  color: 'white', 
                  fontSize: '2.2rem', 
                  marginBottom: '20px' 
                }}>
                  Making an Impact Together
                </h2>
                <p style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: '30px', 
                  opacity: 0.9,
                  maxWidth: '600px',
                  margin: '0 auto 30px auto'
                }}>
                  Through these initiatives, PAACK has supported over 500 community members, 
                  facilitated 50+ research collaborations, and helped countless families 
                  integrate successfully into Korean society.
                </p>
                <Link href="/get-involved" className="btn btn-accent">
                  Get Involved Today
                </Link>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .initiative-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: var(--secondary-color);
        }
        .initiative-card:hover .arrow-icon {
          transform: translateX(0);
          opacity: 1;
        }
      `}</style>
    </>
  );
}
