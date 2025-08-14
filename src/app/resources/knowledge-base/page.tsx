'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function KnowledgeBase() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Immigration & Visa', 'Healthcare', 'Housing', 'Banking & Finance', 'Education', 'Cultural Integration', 'Employment'];

  const articles = [
    {
      title: 'Complete Guide to Korean Health Insurance',
      category: 'Healthcare',
      difficulty: 'Beginner',
      readTime: '15 min read',
      views: '2.5k views',
      description: 'Everything you need to know about registering for and using the Korean health insurance system. Covers eligibility, registration process, benefits, and how to claim.',
      tags: ['Health Insurance', 'Registration', 'Claims', 'Benefits'],
      author: 'Dr. Ahmed Hassan',
      date: 'Dec 2024',
      featured: true
    },
    {
      title: 'Visa Extension Process 2025',
      category: 'Immigration & Visa',
      difficulty: 'Intermediate',
      readTime: '12 min read',
      views: '1.8k views',
      description: 'Step-by-step guide for extending your visa in Korea with updated requirements for 2025. Includes required documents, fees, and timeline.',
      tags: ['Visa Extension', 'Immigration', 'Documents', 'Process'],
      author: 'Sarah Khan',
      date: 'Jan 2025',
      featured: true
    },
    {
      title: 'Finding Family Housing in Seoul',
      category: 'Housing',
      difficulty: 'Beginner',
      readTime: '20 min read',
      views: '3.2k views',
      description: 'Comprehensive guide to finding and securing housing for families in Korea. Covers different housing types, deposit systems, and family-friendly areas.',
      tags: ['Housing', 'Family', 'Seoul', 'Rental', 'Deposit'],
      author: 'Muhammad Ali',
      date: 'Nov 2024',
      featured: true
    },
    {
      title: 'Opening a Korean Bank Account',
      category: 'Banking & Finance',
      difficulty: 'Beginner',
      readTime: '8 min read',
      views: '1.5k views',
      description: 'A simple guide to opening your first bank account in Korea. Covers required documents, bank selection, and basic banking services.',
      tags: ['Banking', 'Account Opening', 'Finance', 'Documents'],
      author: 'Fatima Sheikh',
      date: 'Dec 2024',
      featured: false
    },
    {
      title: 'Understanding Korean Work Culture',
      category: 'Employment',
      difficulty: 'Intermediate',
      readTime: '18 min read',
      views: '2.1k views',
      description: 'Navigate the complexities of Korean workplace culture. Learn about hierarchy, communication styles, and professional etiquette.',
      tags: ['Work Culture', 'Employment', 'Professional', 'Etiquette'],
      author: 'Dr. Imran Ahmed',
      date: 'Oct 2024',
      featured: false
    },
    {
      title: 'Korean Language Learning Resources',
      category: 'Cultural Integration',
      difficulty: 'Beginner',
      readTime: '10 min read',
      views: '2.8k views',
      description: 'Best resources and strategies for learning Korean language. From apps to classes, find what works best for your learning style.',
      tags: ['Language Learning', 'Korean', 'Apps', 'Classes'],
      author: 'Ayesha Rahman',
      date: 'Sep 2024',
      featured: false
    },
    {
      title: 'Children\'s Education System in Korea',
      category: 'Education',
      difficulty: 'Intermediate',
      readTime: '25 min read',
      views: '1.9k views',
      description: 'Complete overview of the Korean education system for foreign families. Covers enrollment processes, international schools, and academic expectations.',
      tags: ['Education', 'Children', 'Schools', 'International', 'Enrollment'],
      author: 'Zain Malik',
      date: 'Aug 2024',
      featured: false
    },
    {
      title: 'Tax Obligations for Foreign Residents',
      category: 'Banking & Finance',
      difficulty: 'Advanced',
      readTime: '22 min read',
      views: '900 views',
      description: 'Understanding your tax obligations as a foreign resident in Korea. Covers income tax, deductions, and filing requirements.',
      tags: ['Taxes', 'Finance', 'Residents', 'Filing', 'Deductions'],
      author: 'Usman Tariq',
      date: 'Jul 2024',
      featured: false
    },
    {
      title: 'Emergency Services and Healthcare Access',
      category: 'Healthcare',
      difficulty: 'Beginner',
      readTime: '12 min read',
      views: '1.6k views',
      description: 'Know what to do in medical emergencies. Covers emergency numbers, hospital navigation, and communication tips for healthcare.',
      tags: ['Emergency', 'Healthcare', 'Hospitals', 'Communication'],
      author: 'Dr. Nadia Hussain',
      date: 'Jun 2024',
      featured: false
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(article => article.featured);

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner': return '#4CAF50';
      case 'Intermediate': return '#FF9800';
      case 'Advanced': return '#F44336';
      default: return '#757575';
    }
  };

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Knowledge Base"
          subtitle="A comprehensive library of articles and guides on practical topics for living in Korea."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              {/* Search and Stats */}
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
                  Find the Information You Need
                </h2>
                <p style={{ 
                  color: 'var(--dark-gray)', 
                  fontSize: '1.1rem', 
                  marginBottom: '30px',
                  maxWidth: '600px',
                  margin: '0 auto 30px auto'
                }}>
                  Search through our collection of {articles.length} articles covering everything 
                  from visa processes to daily life in Korea.
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
                      {articles.length}+
                    </div>
                    <div style={{ color: 'var(--dark-gray)', fontWeight: '600' }}>
                      Articles
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
                      50k+
                    </div>
                    <div style={{ color: 'var(--dark-gray)', fontWeight: '600' }}>
                      Total Views
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Articles */}
              <div style={{ marginBottom: '60px' }}>
                <h2 style={{ 
                  color: 'var(--primary-color)', 
                  fontSize: '2.2rem', 
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  Featured Articles
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '30px',
                  marginBottom: '40px'
                }}>
                  {featuredArticles.map((article, index) => (
                    <div key={index} style={{
                      background: 'var(--white-color)',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    className="featured-article-card"
                    >
                      <div style={{
                        background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                        padding: '30px',
                        color: 'white'
                      }}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '15px'
                        }}>
                          <span style={{
                            background: 'rgba(255,255,255,0.2)',
                            padding: '5px 12px',
                            borderRadius: '15px',
                            fontSize: '0.85rem',
                            fontWeight: '600'
                          }}>
                            {article.category}
                          </span>
                          <span style={{
                            fontSize: '0.9rem',
                            opacity: 0.9
                          }}>
                            ⭐ Featured
                          </span>
                        </div>
                        <h3 style={{
                          fontSize: '1.4rem',
                          fontWeight: '700',
                          color: 'white',
                          marginBottom: '10px',
                          lineHeight: '1.3'
                        }}>
                          {article.title}
                        </h3>
                        <div style={{
                          display: 'flex',
                          gap: '15px',
                          fontSize: '0.85rem',
                          opacity: 0.9
                        }}>
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <span>{article.views}</span>
                        </div>
                      </div>
                      <div style={{ padding: '25px' }}>
                        <p style={{
                          color: 'var(--dark-gray)',
                          lineHeight: '1.6',
                          marginBottom: '15px'
                        }}>
                          {article.description}
                        </p>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <div style={{
                            color: 'var(--secondary-color)',
                            fontWeight: '600',
                            fontSize: '0.9rem'
                          }}>
                            By {article.author}
                          </div>
                          <div style={{
                            background: getDifficultyColor(article.difficulty),
                            color: 'white',
                            padding: '4px 10px',
                            borderRadius: '12px',
                            fontSize: '0.8rem',
                            fontWeight: '600'
                          }}>
                            {article.difficulty}
                          </div>
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
                  Browse All Articles
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

              {/* Articles Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '25px',
                marginBottom: '60px'
              }}>
                {filteredArticles.map((article, index) => (
                  <div key={index} style={{
                    background: 'var(--white-color)',
                    padding: '25px',
                    borderRadius: '15px',
                    border: '1px solid #e0e0e0',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    height: 'fit-content'
                  }}
                  className="article-card"
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '15px'
                    }}>
                      <span style={{
                        background: 'var(--accent-color)',
                        color: 'var(--primary-color)',
                        padding: '5px 12px',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>
                        {article.category}
                      </span>
                      <span style={{
                        background: getDifficultyColor(article.difficulty),
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '10px',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        {article.difficulty}
                      </span>
                    </div>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginBottom: '10px',
                      lineHeight: '1.3'
                    }}>
                      {article.title}
                    </h3>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.5',
                      fontSize: '0.95rem',
                      marginBottom: '15px'
                    }}>
                      {article.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '15px'
                    }}>
                      {article.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} style={{
                          background: '#f5f5f5',
                          color: 'var(--dark-gray)',
                          padding: '3px 8px',
                          borderRadius: '8px',
                          fontSize: '0.75rem'
                        }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '15px',
                      borderTop: '1px solid #f0f0f0',
                      fontSize: '0.85rem',
                      color: 'var(--dark-gray)'
                    }}>
                      <div>
                        <div style={{ fontWeight: '600', color: 'var(--secondary-color)' }}>
                          {article.author}
                        </div>
                        <div>{article.date}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div>{article.readTime}</div>
                        <div>{article.views}</div>
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
                  Can&apos;t Find What You Need?
                </h2>
                <p style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: '30px', 
                  opacity: 0.9,
                  maxWidth: '600px',
                  margin: '0 auto 30px auto'
                }}>
                  Request a new guide or article topic. Our community experts are always 
                  ready to help with specific questions and create helpful content.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn btn-accent">
                    Request Article
                  </Link>
                  <Link href="/get-involved/volunteer" className="btn" 
                        style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '2px solid white' }}>
                    Contribute Content
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .featured-article-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }
        .article-card:hover {
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
