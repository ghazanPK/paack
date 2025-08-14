'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function UsefulLinks() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Government & Embassy', 'Immigration & Visa', 'Healthcare', 'Education', 'Banking & Finance', 'Transportation', 'Utilities', 'Shopping & Services', 'Emergency'];

  const linkCategories = [
    {
      title: 'Government & Embassy',
      icon: '🏛️',
      color: '#1976D2',
      links: [
        {
          title: 'Pakistani Embassy in Seoul',
          url: 'https://pakembassykorea.com',
          description: 'Official website of the Pakistani Embassy in South Korea for consular services.',
          category: 'Government & Embassy',
          type: 'Embassy',
          language: 'English/Urdu'
        },
        {
          title: 'Korea Immigration Service',
          url: 'https://www.immigration.go.kr',
          description: 'Official immigration services for visa applications, extensions, and residency.',
          category: 'Government & Embassy',
          type: 'Government',
          language: 'Korean/English'
        },
        {
          title: 'Hi Korea (E-Government)',
          url: 'https://www.hikorea.go.kr',
          description: 'Comprehensive e-government portal for foreigners living in Korea.',
          category: 'Government & Embassy',
          type: 'E-Government',
          language: 'Multiple'
        },
        {
          title: 'Ministry of Foreign Affairs Korea',
          url: 'https://www.mofa.go.kr',
          description: 'Official Korean foreign ministry website with policy information.',
          category: 'Government & Embassy',
          type: 'Government',
          language: 'Korean/English'
        }
      ]
    },
    {
      title: 'Healthcare',
      icon: '🏥',
      color: '#388E3C',
      links: [
        {
          title: 'National Health Insurance Service',
          url: 'https://www.nhis.or.kr',
          description: 'Official health insurance registration and services.',
          category: 'Healthcare',
          type: 'Insurance',
          language: 'Korean/English'
        },
        {
          title: 'Seoul National University Hospital',
          url: 'https://www.snuh.org',
          description: 'Leading hospital with international patient services.',
          category: 'Healthcare',
          type: 'Hospital',
          language: 'Korean/English'
        },
        {
          title: 'Severance Hospital',
          url: 'https://www.severance.healthcare',
          description: 'International hospital with English-speaking medical staff.',
          category: 'Healthcare',
          type: 'Hospital',
          language: 'Multiple'
        },
        {
          title: 'Seoul Medical Center',
          url: 'https://www.seoulmc.or.kr',
          description: 'Public medical center with foreigner-friendly services.',
          category: 'Healthcare',
          type: 'Medical Center',
          language: 'Korean/English'
        }
      ]
    },
    {
      title: 'Education',
      icon: '🎓',
      color: '#7B1FA2',
      links: [
        {
          title: 'Seoul National University',
          url: 'https://www.snu.ac.kr',
          description: 'Korea\'s premier university with extensive international programs.',
          category: 'Education',
          type: 'University',
          language: 'Korean/English'
        },
        {
          title: 'Korea University',
          url: 'https://www.korea.edu',
          description: 'Top private university with strong international presence.',
          category: 'Education',
          type: 'University',
          language: 'Korean/English'
        },
        {
          title: 'Study in Korea',
          url: 'https://www.studyinkorea.go.kr',
          description: 'Official portal for international students studying in Korea.',
          category: 'Education',
          type: 'Portal',
          language: 'Multiple'
        },
        {
          title: 'Seoul International School',
          url: 'https://www.sis.or.kr',
          description: 'International school for expat children with English curriculum.',
          category: 'Education',
          type: 'International School',
          language: 'English'
        }
      ]
    },
    {
      title: 'Banking & Finance',
      icon: '🏦',
      color: '#F57C00',
      links: [
        {
          title: 'KB Kookmin Bank',
          url: 'https://www.kbstar.com',
          description: 'Major Korean bank with foreigner-friendly services.',
          category: 'Banking & Finance',
          type: 'Bank',
          language: 'Korean/English'
        },
        {
          title: 'Shinhan Bank',
          url: 'https://www.shinhan.com',
          description: 'International banking services for residents and visitors.',
          category: 'Banking & Finance',
          type: 'Bank',
          language: 'Korean/English'
        },
        {
          title: 'Woori Bank',
          url: 'https://www.wooribank.com',
          description: 'Comprehensive banking services with English support.',
          category: 'Banking & Finance',
          type: 'Bank',
          language: 'Korean/English'
        },
        {
          title: 'Korea Exchange Bank (KEB)',
          url: 'https://www.kebhana.com',
          description: 'Bank specializing in foreign exchange and international services.',
          category: 'Banking & Finance',
          type: 'Bank',
          language: 'Korean/English'
        }
      ]
    },
    {
      title: 'Transportation',
      icon: '🚇',
      color: '#5D4037',
      links: [
        {
          title: 'Seoul Subway Map',
          url: 'https://www.seoulmetro.co.kr',
          description: 'Official Seoul subway system information and maps.',
          category: 'Transportation',
          type: 'Public Transport',
          language: 'Korean/English'
        },
        {
          title: 'Incheon International Airport',
          url: 'https://www.airport.kr',
          description: 'Korea\'s main international airport with comprehensive services.',
          category: 'Transportation',
          type: 'Airport',
          language: 'Multiple'
        },
        {
          title: 'KakaoTaxi',
          url: 'https://www.kakaomobility.com',
          description: 'Popular taxi booking app in Korea.',
          category: 'Transportation',
          type: 'Taxi Service',
          language: 'Korean/English'
        },
        {
          title: 'KORAIL (Korea Railroad)',
          url: 'https://www.letskorail.com',
          description: 'National railway system for inter-city travel.',
          category: 'Transportation',
          type: 'Railway',
          language: 'Korean/English'
        }
      ]
    },
    {
      title: 'Emergency Services',
      icon: '🚨',
      color: '#D32F2F',
      links: [
        {
          title: 'Korea Emergency Numbers',
          url: 'https://www.safe.go.kr',
          description: 'Official emergency contact numbers and safety information.',
          category: 'Emergency',
          type: 'Emergency',
          language: 'Korean/English'
        },
        {
          title: '119 Fire & Emergency Medical',
          url: 'tel:119',
          description: 'Emergency fire and medical services (Call 119).',
          category: 'Emergency',
          type: 'Emergency',
          language: 'Korean'
        },
        {
          title: '112 Police Emergency',
          url: 'tel:112',
          description: 'Police emergency services (Call 112).',
          category: 'Emergency',
          type: 'Emergency',
          language: 'Korean'
        },
        {
          title: '1330 Korea Travel Hotline',
          url: 'tel:1330',
          description: '24/7 tourist hotline for travel emergencies and assistance.',
          category: 'Emergency',
          type: 'Assistance',
          language: 'Multiple'
        }
      ]
    }
  ];

  const allLinks = linkCategories.flatMap(cat => cat.links);
  const filteredLinks = selectedCategory === 'All' 
    ? allLinks 
    : allLinks.filter(link => link.category === selectedCategory);

  const quickAccessLinks = [
    { title: 'Emergency: Fire & Medical', number: '119', icon: '🚨', urgent: true },
    { title: 'Emergency: Police', number: '112', icon: '👮', urgent: true },
    { title: 'Tourist Hotline', number: '1330', icon: '📞', urgent: false },
    { title: 'Immigration Inquiry', number: '1345', icon: '🛂', urgent: false }
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Useful Links"
          subtitle="A curated collection of essential websites and resources for the Pakistani community in Korea."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              {/* Quick Access Emergency Numbers */}
              <div style={{
                background: 'linear-gradient(135deg, #D32F2F, #F44336)',
                padding: '40px',
                borderRadius: '20px',
                marginBottom: '60px',
                color: 'white'
              }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'white', 
                  fontSize: '2rem', 
                  marginBottom: '30px' 
                }}>
                  🚨 Emergency & Quick Access Numbers
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px'
                }}>
                  {quickAccessLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.urgent ? `tel:${link.number}` : '#'}
                      style={{
                        background: link.urgent ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
                        padding: '20px',
                        borderRadius: '15px',
                        textDecoration: 'none',
                        color: 'white',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        border: link.urgent ? '2px solid rgba(255,255,255,0.5)' : '1px solid rgba(255,255,255,0.3)'
                      }}
                      className="emergency-link"
                    >
                      <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
                        {link.icon}
                      </div>
                      <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '5px' }}>
                        {link.title}
                      </div>
                      <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                        {link.number}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Statistics */}
              <div style={{
                background: 'var(--light-gray)',
                padding: '40px',
                borderRadius: '15px',
                marginBottom: '60px',
                textAlign: 'center'
              }}>
                <h2 style={{ 
                  color: 'var(--primary-color)', 
                  fontSize: '2.2rem', 
                  marginBottom: '20px' 
                }}>
                  Your Digital Guide to Korea
                </h2>
                <p style={{ 
                  color: 'var(--dark-gray)', 
                  fontSize: '1.1rem', 
                  marginBottom: '30px',
                  maxWidth: '600px',
                  margin: '0 auto 30px auto'
                }}>
                  Access {allLinks.length}+ carefully curated links covering all aspects 
                  of living, working, and studying in Korea.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '40px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      fontSize: '2.5rem', 
                      fontWeight: '700', 
                      color: 'var(--secondary-color)' 
                    }}>
                      {allLinks.length}+
                    </div>
                    <div style={{ color: 'var(--dark-gray)', fontWeight: '600' }}>
                      Useful Links
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      fontSize: '2.5rem', 
                      fontWeight: '700', 
                      color: 'var(--secondary-color)' 
                    }}>
                      {categories.length - 1}
                    </div>
                    <div style={{ color: 'var(--dark-gray)', fontWeight: '600' }}>
                      Categories
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      fontSize: '2.5rem', 
                      fontWeight: '700', 
                      color: 'var(--secondary-color)' 
                    }}>
                      100%
                    </div>
                    <div style={{ color: 'var(--dark-gray)', fontWeight: '600' }}>
                      Verified Links
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Overview */}
              <div style={{ marginBottom: '60px' }}>
                <h2 style={{ 
                  color: 'var(--primary-color)', 
                  fontSize: '2.2rem', 
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  Browse by Category
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '25px',
                  marginBottom: '40px'
                }}>
                  {linkCategories.map((category, index) => (
                    <div key={index} style={{
                      background: 'var(--white-color)',
                      padding: '30px',
                      borderRadius: '15px',
                      border: '2px solid #f0f0f0',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                    className="category-overview-card"
                    onClick={() => setSelectedCategory(category.title)}
                    >
                      <div style={{
                        fontSize: '3rem',
                        marginBottom: '15px'
                      }}>
                        {category.icon}
                      </div>
                      <h3 style={{
                        color: category.color,
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        marginBottom: '10px'
                      }}>
                        {category.title}
                      </h3>
                      <div style={{
                        background: category.color,
                        color: 'white',
                        padding: '5px 15px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        display: 'inline-block'
                      }}>
                        {category.links.length} Links
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ 
                  color: 'var(--primary-color)', 
                  fontSize: '2.2rem', 
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  All Links
                </h2>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  justifyContent: 'center',
                  marginBottom: '40px'
                }}>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      style={{
                        background: selectedCategory === category ? 'var(--secondary-color)' : 'transparent',
                        color: selectedCategory === category ? 'white' : 'var(--primary-color)',
                        border: `2px solid ${selectedCategory === category ? 'var(--secondary-color)' : 'var(--primary-color)'}`,
                        padding: '10px 20px',
                        borderRadius: '25px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      className="filter-btn"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Links Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '25px',
                marginBottom: '60px'
              }}>
                {filteredLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'var(--white-color)',
                      padding: '25px',
                      borderRadius: '15px',
                      border: '2px solid #f0f0f0',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'block'
                    }}
                    className="link-card"
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '15px'
                    }}>
                      <div style={{
                        background: 'var(--accent-color)',
                        color: 'var(--primary-color)',
                        padding: '5px 12px',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>
                        {link.type}
                      </div>
                      <div style={{
                        background: '#f5f5f5',
                        color: 'var(--dark-gray)',
                        padding: '4px 10px',
                        borderRadius: '10px',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        {link.language}
                      </div>
                    </div>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      marginBottom: '10px'
                    }}>
                      {link.title}
                    </h3>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.5',
                      fontSize: '0.95rem',
                      marginBottom: '15px'
                    }}>
                      {link.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'var(--secondary-color)',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}>
                      <span style={{ marginRight: '10px' }}>🔗</span>
                      Visit Website
                      <span style={{ 
                        marginLeft: 'auto',
                        transform: 'translateX(10px)',
                        opacity: 0,
                        transition: 'all 0.3s ease'
                      }}
                      className="arrow-icon">
                        ↗
                      </span>
                    </div>
                  </a>
                ))}
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
                  Missing a Useful Link?
                </h2>
                <p style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: '30px', 
                  opacity: 0.9,
                  maxWidth: '600px',
                  margin: '0 auto 30px auto'
                }}>
                  Know of a website or service that would benefit our community? 
                  Suggest it and help us keep this resource comprehensive and up-to-date.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn btn-accent">
                    Suggest a Link
                  </Link>
                  <Link href="/get-involved/volunteer" className="btn" 
                        style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '2px solid white' }}>
                    Help Maintain Links
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .emergency-link:hover {
          background: rgba(255,255,255,0.3) !important;
          transform: translateY(-3px);
        }
        .category-overview-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          border-color: var(--secondary-color);
        }
        .link-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          border-color: var(--secondary-color);
        }
        .link-card:hover .arrow-icon {
          transform: translateX(0);
          opacity: 1;
        }
        .filter-btn:hover {
          background: var(--secondary-color) !important;
          color: white !important;
          border-color: var(--secondary-color) !important;
        }
      `}</style>
    </>
  );
}
