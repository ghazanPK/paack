'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function Publications() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Annual Reports', 'Research Papers', 'Policy Briefs', 'Community Studies', 'White Papers', 'Conference Proceedings'];

  const publications = [
    {
      title: 'PAACK Annual Report 2024',
      category: 'Annual Reports',
      type: 'Annual Report',
      year: '2024',
      pages: '48 pages',
      downloads: '1.2k downloads',
      description: 'Comprehensive overview of PAACK\'s achievements, initiatives, financial status, and future plans for 2024. Includes member statistics, program outcomes, and community impact assessment.',
      authors: ['PAACK Executive Committee'],
      publishedDate: 'January 2025',
      featured: true,
      fileSize: '12.5 MB',
      format: 'PDF',
      thumbnail: '📊'
    },
    {
      title: 'Healthcare Access Challenges for Pakistani Diaspora in South Korea',
      category: 'Research Papers',
      type: 'Research Paper',
      year: '2024',
      pages: '32 pages',
      downloads: '850 downloads',
      description: 'An in-depth analysis of healthcare accessibility challenges faced by Pakistani professionals and their families in the Korean healthcare system. Includes policy recommendations.',
      authors: ['Dr. Ahmed Hassan', 'Dr. Fatima Sheikh', 'Dr. Imran Ali'],
      publishedDate: 'November 2024',
      featured: true,
      fileSize: '8.3 MB',
      format: 'PDF',
      thumbnail: '🏥'
    },
    {
      title: 'Integration Policies for Foreign Academics: A Korean Perspective',
      category: 'Policy Briefs',
      type: 'Policy Brief',
      year: '2024',
      pages: '16 pages',
      downloads: '650 downloads',
      description: 'Policy recommendations for improving integration support for foreign academics in Korean universities. Based on surveys and interviews with Pakistani researchers.',
      authors: ['Dr. Sarah Khan', 'Prof. Muhammad Tariq'],
      publishedDate: 'September 2024',
      featured: true,
      fileSize: '4.2 MB',
      format: 'PDF',
      thumbnail: '📋'
    },
    {
      title: 'Pakistani Community Demographics and Trends in South Korea 2023',
      category: 'Community Studies',
      type: 'Community Study',
      year: '2023',
      pages: '28 pages',
      downloads: '920 downloads',
      description: 'Comprehensive demographic study of the Pakistani community in South Korea, including education levels, employment patterns, and regional distribution.',
      authors: ['Research Committee PAACK'],
      publishedDate: 'March 2024',
      featured: false,
      fileSize: '6.7 MB',
      format: 'PDF',
      thumbnail: '📈'
    },
    {
      title: 'Language Barriers in Professional Settings: A Study of Pakistani Professionals',
      category: 'Research Papers',
      type: 'Research Paper',
      year: '2023',
      pages: '24 pages',
      downloads: '540 downloads',
      description: 'Research examining language barriers faced by Pakistani professionals in Korean workplaces and their impact on career advancement.',
      authors: ['Dr. Ayesha Rahman', 'Prof. Zain Malik'],
      publishedDate: 'August 2023',
      featured: false,
      fileSize: '5.1 MB',
      format: 'PDF',
      thumbnail: '💬'
    },
    {
      title: 'Educational Pathways for Pakistani Students in Korean Universities',
      category: 'White Papers',
      type: 'White Paper',
      year: '2023',
      pages: '20 pages',
      downloads: '780 downloads',
      description: 'Analysis of educational opportunities and challenges for Pakistani students pursuing higher education in South Korea.',
      authors: ['Education Committee PAACK'],
      publishedDate: 'June 2023',
      featured: false,
      fileSize: '4.8 MB',
      format: 'PDF',
      thumbnail: '🎓'
    },
    {
      title: 'Proceedings: 1st International Conference on Pakistani Diaspora in East Asia',
      category: 'Conference Proceedings',
      type: 'Conference Proceedings',
      year: '2023',
      pages: '156 pages',
      downloads: '420 downloads',
      description: 'Complete proceedings from the groundbreaking conference on Pakistani diaspora communities across East Asia, featuring presentations from 25 speakers.',
      authors: ['Conference Organizing Committee'],
      publishedDate: 'December 2023',
      featured: false,
      fileSize: '28.4 MB',
      format: 'PDF',
      thumbnail: '🎤'
    },
    {
      title: 'Cross-Cultural Communication in Korean-Pakistani Business Relations',
      category: 'Research Papers',
      type: 'Research Paper',
      year: '2022',
      pages: '36 pages',
      downloads: '690 downloads',
      description: 'Study examining communication patterns and cultural considerations in business relationships between Korean and Pakistani professionals.',
      authors: ['Dr. Usman Tariq', 'Dr. Nadia Hussain'],
      publishedDate: 'October 2022',
      featured: false,
      fileSize: '7.2 MB',
      format: 'PDF',
      thumbnail: '🤝'
    }
  ];

  const filteredPublications = selectedCategory === 'All' 
    ? publications 
    : publications.filter(pub => pub.category === selectedCategory);

  const featuredPublications = publications.filter(pub => pub.featured);

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'Annual Report': return '#1976D2';
      case 'Research Paper': return '#388E3C';
      case 'Policy Brief': return '#F57C00';
      case 'Community Study': return '#7B1FA2';
      case 'White Paper': return '#5D4037';
      case 'Conference Proceedings': return '#C2185B';
      default: return '#757575';
    }
  };

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Publications & Reports"
          subtitle="A showcase of significant reports and publications produced by PAACK and its members."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              {/* Statistics */}
              <div style={{
                background: 'var(--light-gray)',
                padding: '50px',
                borderRadius: '20px',
                marginBottom: '60px'
              }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  fontSize: '2.2rem', 
                  marginBottom: '30px' 
                }}>
                  Our Research Impact
                </h2>
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
                    }}>
                      {publications.length}+
                    </div>
                    <div style={{ 
                      color: 'var(--dark-gray)', 
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>
                      Publications
                    </div>
                  </div>
                  <div>
                    <div style={{ 
                      fontSize: '3rem', 
                      fontWeight: '700', 
                      color: 'var(--secondary-color)',
                      marginBottom: '10px'
                    }}>
                      25k+
                    </div>
                    <div style={{ 
                      color: 'var(--dark-gray)', 
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>
                      Total Downloads
                    </div>
                  </div>
                  <div>
                    <div style={{ 
                      fontSize: '3rem', 
                      fontWeight: '700', 
                      color: 'var(--secondary-color)',
                      marginBottom: '10px'
                    }}>
                      15+
                    </div>
                    <div style={{ 
                      color: 'var(--dark-gray)', 
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>
                      Contributing Authors
                    </div>
                  </div>
                  <div>
                    <div style={{ 
                      fontSize: '3rem', 
                      fontWeight: '700', 
                      color: 'var(--secondary-color)',
                      marginBottom: '10px'
                    }}>
                      3
                    </div>
                    <div style={{ 
                      color: 'var(--dark-gray)', 
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>
                      Years Publishing
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Publications */}
              <div style={{ marginBottom: '60px' }}>
                <h2 style={{ 
                  color: 'var(--primary-color)', 
                  fontSize: '2.2rem', 
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  Featured Publications
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                  gap: '30px',
                  marginBottom: '40px'
                }}>
                  {featuredPublications.map((publication, index) => (
                    <div key={index} style={{
                      background: 'var(--white-color)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    className="featured-publication-card"
                    >
                      <div style={{
                        background: `linear-gradient(135deg, ${getTypeColor(publication.type)}, ${getTypeColor(publication.type)}CC)`,
                        padding: '30px',
                        color: 'white',
                        position: 'relative'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '20px',
                          right: '20px',
                          fontSize: '2.5rem',
                          opacity: 0.7
                        }}>
                          {publication.thumbnail}
                        </div>
                        <div style={{
                          background: 'rgba(255,255,255,0.2)',
                          padding: '8px 15px',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          display: 'inline-block',
                          marginBottom: '15px'
                        }}>
                          ⭐ Featured
                        </div>
                        <h3 style={{
                          fontSize: '1.5rem',
                          fontWeight: '700',
                          color: 'white',
                          marginBottom: '15px',
                          lineHeight: '1.3',
                          paddingRight: '60px'
                        }}>
                          {publication.title}
                        </h3>
                        <div style={{
                          display: 'flex',
                          gap: '20px',
                          fontSize: '0.9rem',
                          opacity: 0.9,
                          flexWrap: 'wrap'
                        }}>
                          <span>{publication.pages}</span>
                          <span>•</span>
                          <span>{publication.downloads}</span>
                          <span>•</span>
                          <span>{publication.year}</span>
                        </div>
                      </div>
                      <div style={{ padding: '30px' }}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '20px'
                        }}>
                          <span style={{
                            background: getTypeColor(publication.type),
                            color: 'white',
                            padding: '6px 15px',
                            borderRadius: '15px',
                            fontSize: '0.85rem',
                            fontWeight: '600'
                          }}>
                            {publication.type}
                          </span>
                          <div style={{
                            color: 'var(--dark-gray)',
                            fontSize: '0.85rem'
                          }}>
                            {publication.fileSize} • {publication.format}
                          </div>
                        </div>
                        <p style={{
                          color: 'var(--dark-gray)',
                          lineHeight: '1.6',
                          marginBottom: '20px'
                        }}>
                          {publication.description}
                        </p>
                        <div style={{
                          borderTop: '1px solid #f0f0f0',
                          paddingTop: '20px'
                        }}>
                          <div style={{
                            color: 'var(--secondary-color)',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            marginBottom: '5px'
                          }}>
                            {publication.authors.join(', ')}
                          </div>
                          <div style={{
                            color: 'var(--dark-gray)',
                            fontSize: '0.85rem'
                          }}>
                            Published: {publication.publishedDate}
                          </div>
                        </div>
                        <div style={{
                          display: 'flex',
                          gap: '15px',
                          marginTop: '20px'
                        }}>
                          <button style={{
                            background: 'var(--secondary-color)',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '25px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            flex: 1
                          }}>
                            📥 Download
                          </button>
                          <button style={{
                            background: 'transparent',
                            color: 'var(--secondary-color)',
                            border: '2px solid var(--secondary-color)',
                            padding: '10px 20px',
                            borderRadius: '25px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            flex: 1
                          }}>
                            👁️ Preview
                          </button>
                        </div>
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
                  Browse All Publications
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
                      className="category-btn"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Publications List */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '25px',
                marginBottom: '60px'
              }}>
                {filteredPublications.map((publication, index) => (
                  <div key={index} style={{
                    background: 'var(--white-color)',
                    padding: '25px',
                    borderRadius: '15px',
                    border: '2px solid #f0f0f0',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  className="publication-card"
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '15px'
                    }}>
                      <div style={{
                        fontSize: '2rem'
                      }}>
                        {publication.thumbnail}
                      </div>
                      <div style={{
                        textAlign: 'right'
                      }}>
                        <div style={{
                          background: getTypeColor(publication.type),
                          color: 'white',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          marginBottom: '5px'
                        }}>
                          {publication.type}
                        </div>
                        <div style={{
                          color: 'var(--dark-gray)',
                          fontSize: '0.8rem'
                        }}>
                          {publication.year}
                        </div>
                      </div>
                    </div>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      marginBottom: '10px',
                      lineHeight: '1.3'
                    }}>
                      {publication.title}
                    </h3>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.5',
                      fontSize: '0.9rem',
                      marginBottom: '15px'
                    }}>
                      {publication.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '15px',
                      fontSize: '0.8rem',
                      color: 'var(--dark-gray)'
                    }}>
                      <span>{publication.pages}</span>
                      <span>{publication.downloads}</span>
                      <span>{publication.fileSize}</span>
                    </div>
                    <div style={{
                      borderTop: '1px solid #f0f0f0',
                      paddingTop: '15px'
                    }}>
                      <div style={{
                        color: 'var(--secondary-color)',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        marginBottom: '5px'
                      }}>
                        {publication.authors.join(', ')}
                      </div>
                      <div style={{
                        color: 'var(--dark-gray)',
                        fontSize: '0.8rem',
                        marginBottom: '15px'
                      }}>
                        {publication.publishedDate}
                      </div>
                      <div style={{
                        display: 'flex',
                        gap: '10px'
                      }}>
                        <button style={{
                          background: 'var(--secondary-color)',
                          color: 'white',
                          border: 'none',
                          padding: '8px 15px',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          flex: 1
                        }}>
                          Download
                        </button>
                        <button style={{
                          background: 'transparent',
                          color: 'var(--secondary-color)',
                          border: '1px solid var(--secondary-color)',
                          padding: '8px 15px',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          flex: 1
                        }}>
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div style={{
                background: 'linear-gradient(135deg, var(--primary-color), #0a2347)',
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
                  Contribute to Our Research
                </h2>
                <p style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: '30px', 
                  opacity: 0.9,
                  maxWidth: '600px',
                  margin: '0 auto 30px auto'
                }}>
                  Have research, reports, or publications you&apos;d like to share with our community? 
                  We welcome contributions from all members.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn btn-accent">
                    Submit Publication
                  </Link>
                  <Link href="/get-involved/volunteer" className="btn" 
                        style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '2px solid white' }}>
                    Join Research Team
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .featured-publication-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }
        .publication-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          border-color: var(--secondary-color);
        }
        .category-btn:hover {
          background: var(--secondary-color) !important;
          color: white !important;
          border-color: var(--secondary-color) !important;
        }
      `}</style>
    </>
  );
}
