'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function Resources() {
  const resourceSections = [
    {
      title: 'Knowledge Base',
      href: '/resources/knowledge-base',
      icon: '📚',
      description: 'A comprehensive library of articles and guides on practical topics like visa processes, insurance, and living in Korea.',
      stats: '150+ Articles',
      color: '#e3f2fd'
    },
    {
      title: 'Publications & Reports',
      href: '/resources/publications',
      icon: '📄',
      description: 'A public-facing showcase of significant reports or publications produced by PAACK or its members.',
      stats: '25+ Publications',
      color: '#f3e5f5'
    },
    {
      title: 'Useful Links',
      href: '/resources/links',
      icon: '🔗',
      description: 'A curated list of external links helpful to the community including embassy and Korean government sites.',
      stats: '100+ Links',
      color: '#e8f5e8'
    }
  ];

  const featuredResources = [
    {
      title: 'Complete Guide to Korean Health Insurance',
      category: 'Healthcare',
      type: 'Guide',
      readTime: '15 min read',
      description: 'Everything you need to know about registering for and using Korean health insurance system.',
      href: '/resources/knowledge-base#health-insurance'
    },
    {
      title: 'Visa Extension Process 2025',
      category: 'Immigration',
      type: 'Article',
      readTime: '10 min read',
      description: 'Step-by-step guide for extending your visa in Korea with updated requirements.',
      href: '/resources/knowledge-base#visa-extension'
    },
    {
      title: 'Housing Guide for Families',
      category: 'Living',
      type: 'Guide',
      readTime: '20 min read',
      description: 'Comprehensive guide to finding and securing housing for families in Korea.',
      href: '/resources/knowledge-base#housing'
    },
    {
      title: 'PAACK Annual Report 2024',
      category: 'Reports',
      type: 'Publication',
      readTime: '30 min read',
      description: 'Our annual report highlighting achievements, impact, and future plans.',
      href: '/resources/publications#annual-report-2024'
    }
  ];

  const quickLinks = [
    { title: 'Pakistani Embassy Korea', url: 'https://pakembassykorea.com', icon: '🏛️' },
    { title: 'Korea Immigration Service', url: 'https://www.immigration.go.kr', icon: '🛂' },
    { title: 'National Health Insurance', url: 'https://www.nhis.or.kr', icon: '🏥' },
    { title: 'Hi Korea (E-Government)', url: 'https://www.hikorea.go.kr', icon: '💻' }
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Resources"
          subtitle="A comprehensive library of helpful guides, publications, and links for the Pakistani community in Korea."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              {/* Resource Sections */}
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}>
                  Explore Our Resources
                </h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--dark-gray)', maxWidth: '700px', margin: '0 auto' }}>
                  Access a wealth of information designed to help you navigate life in Korea, 
                  from practical guides to research publications and useful external links.
                </p>
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                gap: '30px',
                marginBottom: '80px'
              }}>
                {resourceSections.map((section, index) => (
                  <Link 
                    key={index}
                    href={section.href}
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
                    className="resource-card"
                    >
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, var(--secondary-color), var(--accent-color))`
                      }} />
                      <div style={{ fontSize: '3rem', marginBottom: '20px', textAlign: 'center' }}>
                        {section.icon}
                      </div>
                      <h3 style={{ 
                        fontSize: '1.5rem', 
                        color: 'var(--primary-color)', 
                        marginBottom: '15px',
                        fontWeight: '700',
                        textAlign: 'center'
                      }}>
                        {section.title}
                      </h3>
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
                        {section.stats}
                      </div>
                      <p style={{ 
                        color: 'var(--dark-gray)', 
                        lineHeight: '1.6',
                        fontSize: '1rem',
                        textAlign: 'center'
                      }}>
                        {section.description}
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

              {/* Featured Resources */}
              <div style={{ marginBottom: '60px' }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  marginBottom: '40px',
                  fontSize: '2.2rem'
                }}>
                  Featured Resources
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '25px'
                }}>
                  {featuredResources.map((resource, index) => (
                    <Link key={index} href={resource.href} style={{ textDecoration: 'none' }}>
                      <div style={{
                        background: 'var(--white-color)',
                        padding: '30px',
                        borderRadius: '15px',
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                        height: '100%'
                      }}
                      className="featured-card"
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
                            {resource.category}
                          </div>
                          <div style={{
                            color: 'var(--dark-gray)',
                            fontSize: '0.85rem'
                          }}>
                            {resource.readTime}
                          </div>
                        </div>
                        <h3 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1.3rem',
                          fontWeight: '700',
                          marginBottom: '10px'
                        }}>
                          {resource.title}
                        </h3>
                        <div style={{
                          color: 'var(--secondary-color)',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          marginBottom: '10px'
                        }}>
                          {resource.type}
                        </div>
                        <p style={{
                          color: 'var(--dark-gray)',
                          lineHeight: '1.5',
                          fontSize: '0.95rem'
                        }}>
                          {resource.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div style={{
                background: 'var(--light-gray)',
                padding: '50px',
                borderRadius: '20px',
                marginBottom: '60px'
              }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  marginBottom: '30px',
                  fontSize: '2rem'
                }}>
                  Quick Access Links
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px'
                }}>
                  {quickLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'var(--white-color)',
                        padding: '20px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                      }}
                      className="quick-link"
                    >
                      <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>
                        {link.icon}
                      </span>
                      <span style={{
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        fontSize: '1rem'
                      }}>
                        {link.title}
                      </span>
                    </a>
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
                  Can&apos;t Find What You&apos;re Looking For?
                </h2>
                <p style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: '30px', 
                  opacity: 0.9,
                  maxWidth: '600px',
                  margin: '0 auto 30px auto'
                }}>
                  Our community is here to help. Reach out to us or suggest new resources 
                  that would benefit the Pakistani community in Korea.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn btn-accent">
                    Contact Us
                  </Link>
                  <Link href="/get-involved/volunteer" className="btn" 
                        style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '2px solid white' }}>
                    Contribute Resources
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .resource-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: var(--secondary-color);
        }
        .resource-card:hover .arrow-icon {
          transform: translateX(0);
          opacity: 1;
        }
        .featured-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        .quick-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
      `}</style>
    </>
  );
}
