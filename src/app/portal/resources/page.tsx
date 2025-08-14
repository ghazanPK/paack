'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function ResearchResources() {
  const [activeCategory, setActiveCategory] = useState('publications');
  const [searchTerm, setSearchTerm] = useState('');

  const publications = [
    {
      id: 1,
      title: 'Quantum Computing Applications in Healthcare',
      authors: ['Dr. Ahmed Hassan', 'Dr. Sarah Ahmed', 'Dr. Chen Wei'],
      journal: 'Nature Quantum Information',
      year: '2024',
      abstract: 'This paper explores the revolutionary potential of quantum computing in healthcare diagnostics and drug discovery...',
      citations: 127,
      downloads: 2431,
      type: 'Research Paper',
      field: 'Quantum Computing',
      openAccess: true
    },
    {
      id: 2,
      title: 'Sustainable Energy Solutions for Developing Nations',
      authors: ['Dr. Omar Khan', 'Dr. Maria Rodriguez'],
      journal: 'Renewable Energy Journal',
      year: '2024',
      abstract: 'An comprehensive analysis of renewable energy implementation strategies in developing countries...',
      citations: 89,
      downloads: 1847,
      type: 'Review Paper',
      field: 'Energy Systems',
      openAccess: true
    },
    {
      id: 3,
      title: 'AI-Driven Environmental Monitoring Systems',
      authors: ['Dr. Fatima Al-Zahra', 'Dr. Rajesh Patel'],
      journal: 'Environmental Science & Technology',
      year: '2023',
      abstract: 'Development of intelligent systems for real-time environmental data collection and analysis...',
      citations: 156,
      downloads: 3204,
      type: 'Research Paper',
      field: 'Environmental Science',
      openAccess: false
    }
  ];

  const fundingOpportunities = [
    {
      id: 1,
      title: 'Pakistan Research Foundation Early Career Grant',
      organization: 'Pakistan Research Foundation',
      amount: '$25,000 - $50,000',
      deadline: 'March 15, 2025',
      duration: '2 years',
      eligibility: 'PhD holders within 5 years of graduation',
      focus: 'All STEM fields',
      status: 'Open',
      description: 'Supporting early career researchers to establish independent research programs in Pakistan.'
    },
    {
      id: 2,
      title: 'Islamic Development Bank Science & Technology Grant',
      organization: 'Islamic Development Bank',
      amount: '$100,000 - $500,000',
      deadline: 'February 28, 2025',
      duration: '3 years',
      eligibility: 'Researchers from OIC member countries',
      focus: 'Technology Transfer & Innovation',
      status: 'Open',
      description: 'Promoting scientific research and technology transfer in Islamic countries.'
    },
    {
      id: 3,
      title: 'COMSTECH Research Excellence Award',
      organization: 'COMSTECH',
      amount: '$75,000',
      deadline: 'January 30, 2025',
      duration: '18 months',
      eligibility: 'Scientists from OIC countries',
      focus: 'Natural Sciences & Engineering',
      status: 'Closing Soon',
      description: 'Recognizing and supporting outstanding research contributions in science and technology.'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'International Conference on Pakistani Innovation',
      date: 'April 15-17, 2025',
      location: 'Islamabad, Pakistan',
      type: 'Conference',
      registrationFee: 'Free for PAACK members',
      deadline: 'March 1, 2025',
      description: 'Annual gathering of Pakistani researchers and innovators worldwide.',
      topics: ['AI & Machine Learning', 'Biotechnology', 'Renewable Energy', 'Space Technology']
    },
    {
      id: 2,
      title: 'Young Researchers Symposium',
      date: 'February 20-21, 2025',
      location: 'Virtual Event',
      type: 'Symposium',
      registrationFee: 'Free',
      deadline: 'February 10, 2025',
      description: 'Platform for young Pakistani researchers to present their work and network.',
      topics: ['Medical Sciences', 'Engineering', 'Computer Science', 'Environmental Studies']
    },
    {
      id: 3,
      title: 'PAACK Research Collaboration Workshop',
      date: 'March 8-9, 2025',
      location: 'Lahore, Pakistan',
      type: 'Workshop',
      registrationFee: '$50',
      deadline: 'February 25, 2025',
      description: 'Hands-on workshop on building international research collaborations.',
      topics: ['Grant Writing', 'Partnership Development', 'Research Methodology', 'Publication Strategies']
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'Research Methodology Toolkit',
      type: 'Guide',
      description: 'Comprehensive guide covering quantitative and qualitative research methods.',
      downloadSize: '2.5 MB',
      lastUpdated: 'December 2024',
      category: 'Methodology'
    },
    {
      id: 2,
      title: 'Grant Writing Masterclass',
      type: 'Video Series',
      description: '10-part video series on writing successful research proposals.',
      duration: '4.5 hours',
      lastUpdated: 'November 2024',
      category: 'Funding'
    },
    {
      id: 3,
      title: 'Publication Guidelines for International Journals',
      type: 'Document',
      description: 'Best practices for publishing in high-impact international journals.',
      downloadSize: '1.8 MB',
      lastUpdated: 'January 2025',
      category: 'Publishing'
    },
    {
      id: 4,
      title: 'Data Analysis Software Licenses',
      type: 'Software Access',
      description: 'Discounted access to SPSS, MATLAB, and other research software.',
      validity: 'Annual',
      lastUpdated: 'October 2024',
      category: 'Tools'
    }
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Research & Resources"
          subtitle="Access cutting-edge research, funding opportunities, and professional development resources."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              {/* Search Bar */}
              <div style={{
                background: 'var(--white-color)',
                borderRadius: '20px',
                padding: '30px',
                marginBottom: '50px',
                border: '1px solid #e0e0e0'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ flex: 1, minWidth: '300px' }}>
                    <input
                      type="text"
                      placeholder="Search publications, funding, events, or resources..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        border: '2px solid #f0f0f0',
                        borderRadius: '15px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                    />
                  </div>
                  <button style={{
                    background: 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    padding: '15px 30px',
                    borderRadius: '15px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}>
                    🔍 Search
                  </button>
                </div>
              </div>

              {/* Category Navigation */}
              <div style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '40px',
                borderBottom: '2px solid #f0f0f0',
                overflowX: 'auto'
              }}>
                {[
                  { key: 'publications', label: '📚 Publications', icon: '📚' },
                  { key: 'funding', label: '💰 Funding', icon: '💰' },
                  { key: 'events', label: '📅 Events', icon: '📅' },
                  { key: 'resources', label: '🛠️ Resources', icon: '🛠️' }
                ].map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setActiveCategory(category.key)}
                    style={{
                      background: activeCategory === category.key ? 'var(--primary-color)' : 'transparent',
                      color: activeCategory === category.key ? 'white' : 'var(--dark-gray)',
                      border: 'none',
                      padding: '15px 25px',
                      borderRadius: '15px 15px 0 0',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      marginBottom: '-2px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Publications Tab */}
              {activeCategory === 'publications' && (
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '30px'
                  }}>
                    <h2 style={{
                      color: 'var(--primary-color)',
                      fontSize: '2rem',
                      fontWeight: '700'
                    }}>
                      Latest Publications
                    </h2>
                    <button style={{
                      background: 'var(--secondary-color)',
                      color: 'white',
                      border: 'none',
                      padding: '12px 25px',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}>
                      Submit Publication
                    </button>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '25px'
                  }}>
                    {publications.map((pub) => (
                      <div key={pub.id} style={{
                        background: 'var(--white-color)',
                        borderRadius: '20px',
                        padding: '30px',
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease'
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
                            display: 'flex',
                            gap: '10px'
                          }}>
                            <span style={{
                              background: pub.openAccess ? '#10b981' : '#f59e0b',
                              color: 'white',
                              padding: '4px 10px',
                              borderRadius: '10px',
                              fontSize: '0.7rem',
                              fontWeight: '600'
                            }}>
                              {pub.openAccess ? 'Open Access' : 'Subscription'}
                            </span>
                            <span style={{
                              background: 'var(--accent-color)',
                              color: 'var(--primary-color)',
                              padding: '4px 10px',
                              borderRadius: '10px',
                              fontSize: '0.7rem',
                              fontWeight: '600'
                            }}>
                              {pub.type}
                            </span>
                          </div>
                          <span style={{
                            color: 'var(--dark-gray)',
                            fontSize: '0.9rem'
                          }}>
                            {pub.field}
                          </span>
                        </div>

                        <h3 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1.4rem',
                          fontWeight: '700',
                          marginBottom: '10px'
                        }}>
                          {pub.title}
                        </h3>

                        <div style={{
                          color: 'var(--secondary-color)',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          marginBottom: '8px'
                        }}>
                          {pub.authors.join(', ')}
                        </div>

                        <div style={{
                          color: 'var(--dark-gray)',
                          fontSize: '0.9rem',
                          marginBottom: '15px'
                        }}>
                          {pub.journal} • {pub.year}
                        </div>

                        <p style={{
                          color: 'var(--dark-gray)',
                          lineHeight: '1.6',
                          marginBottom: '20px'
                        }}>
                          {pub.abstract}
                        </p>

                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '15px 0',
                          borderTop: '1px solid #f0f0f0'
                        }}>
                          <div style={{
                            display: 'flex',
                            gap: '20px',
                            fontSize: '0.8rem',
                            color: 'var(--dark-gray)'
                          }}>
                            <span>📊 {pub.citations} citations</span>
                            <span>⬇️ {pub.downloads} downloads</span>
                          </div>
                          <div style={{
                            display: 'flex',
                            gap: '10px'
                          }}>
                            <button style={{
                              background: 'var(--primary-color)',
                              color: 'white',
                              border: 'none',
                              padding: '8px 15px',
                              borderRadius: '8px',
                              fontSize: '0.8rem',
                              fontWeight: '600',
                              cursor: 'pointer'
                            }}>
                              Read Full Paper
                            </button>
                            <button style={{
                              background: 'transparent',
                              color: 'var(--primary-color)',
                              border: '1px solid var(--primary-color)',
                              padding: '8px 15px',
                              borderRadius: '8px',
                              fontSize: '0.8rem',
                              fontWeight: '600',
                              cursor: 'pointer'
                            }}>
                              Cite
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Funding Tab */}
              {activeCategory === 'funding' && (
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '30px'
                  }}>
                    <h2 style={{
                      color: 'var(--primary-color)',
                      fontSize: '2rem',
                      fontWeight: '700'
                    }}>
                      Funding Opportunities
                    </h2>
                    <button style={{
                      background: 'var(--secondary-color)',
                      color: 'white',
                      border: 'none',
                      padding: '12px 25px',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}>
                      Submit Opportunity
                    </button>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '30px'
                  }}>
                    {fundingOpportunities.map((funding) => (
                      <div key={funding.id} style={{
                        background: 'var(--white-color)',
                        borderRadius: '20px',
                        padding: '30px',
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease'
                      }}
                      className="funding-card"
                      >
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '15px'
                        }}>
                          <span style={{
                            background: funding.status === 'Open' ? '#10b981' : '#ef4444',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '0.8rem',
                            fontWeight: '600'
                          }}>
                            {funding.status}
                          </span>
                          <span style={{
                            color: 'var(--secondary-color)',
                            fontSize: '1.1rem',
                            fontWeight: '700'
                          }}>
                            {funding.amount}
                          </span>
                        </div>

                        <h3 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1.3rem',
                          fontWeight: '700',
                          marginBottom: '10px'
                        }}>
                          {funding.title}
                        </h3>

                        <div style={{
                          color: 'var(--dark-gray)',
                          fontSize: '0.9rem',
                          marginBottom: '15px'
                        }}>
                          {funding.organization}
                        </div>

                        <p style={{
                          color: 'var(--dark-gray)',
                          lineHeight: '1.6',
                          marginBottom: '20px'
                        }}>
                          {funding.description}
                        </p>

                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '15px',
                          marginBottom: '20px',
                          fontSize: '0.8rem',
                          color: 'var(--dark-gray)'
                        }}>
                          <div>
                            <strong>Deadline:</strong> {funding.deadline}
                          </div>
                          <div>
                            <strong>Duration:</strong> {funding.duration}
                          </div>
                          <div>
                            <strong>Focus:</strong> {funding.focus}
                          </div>
                          <div>
                            <strong>Eligibility:</strong> {funding.eligibility}
                          </div>
                        </div>

                        <div style={{
                          display: 'flex',
                          gap: '10px'
                        }}>
                          <button style={{
                            background: 'var(--primary-color)',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '10px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            flex: 1
                          }}>
                            Apply Now
                          </button>
                          <button style={{
                            background: 'transparent',
                            color: 'var(--primary-color)',
                            border: '2px solid var(--primary-color)',
                            padding: '10px 20px',
                            borderRadius: '10px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                          }}>
                            Learn More
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Events Tab */}
              {activeCategory === 'events' && (
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '30px'
                  }}>
                    <h2 style={{
                      color: 'var(--primary-color)',
                      fontSize: '2rem',
                      fontWeight: '700'
                    }}>
                      Upcoming Events
                    </h2>
                    <button style={{
                      background: 'var(--secondary-color)',
                      color: 'white',
                      border: 'none',
                      padding: '12px 25px',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}>
                      Submit Event
                    </button>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '25px'
                  }}>
                    {events.map((event) => (
                      <div key={event.id} style={{
                        background: 'var(--white-color)',
                        borderRadius: '20px',
                        padding: '30px',
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease'
                      }}
                      className="event-card"
                      >
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '15px'
                        }}>
                          <span style={{
                            background: 'var(--accent-color)',
                            color: 'var(--primary-color)',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '0.8rem',
                            fontWeight: '600'
                          }}>
                            {event.type}
                          </span>
                          <div style={{
                            textAlign: 'right'
                          }}>
                            <div style={{
                              color: 'var(--secondary-color)',
                              fontSize: '1rem',
                              fontWeight: '700'
                            }}>
                              {event.date}
                            </div>
                            <div style={{
                              color: 'var(--dark-gray)',
                              fontSize: '0.8rem'
                            }}>
                              📍 {event.location}
                            </div>
                          </div>
                        </div>

                        <h3 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1.4rem',
                          fontWeight: '700',
                          marginBottom: '15px'
                        }}>
                          {event.title}
                        </h3>

                        <p style={{
                          color: 'var(--dark-gray)',
                          lineHeight: '1.6',
                          marginBottom: '20px'
                        }}>
                          {event.description}
                        </p>

                        <div style={{
                          marginBottom: '20px'
                        }}>
                          <div style={{
                            color: 'var(--primary-color)',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginBottom: '10px'
                          }}>
                            Topics:
                          </div>
                          <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px'
                          }}>
                            {event.topics.map((topic, index) => (
                              <span key={index} style={{
                                background: 'var(--light-gray)',
                                color: 'var(--primary-color)',
                                padding: '4px 10px',
                                borderRadius: '10px',
                                fontSize: '0.7rem',
                                fontWeight: '600'
                              }}>
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '15px 0',
                          borderTop: '1px solid #f0f0f0'
                        }}>
                          <div style={{
                            fontSize: '0.8rem',
                            color: 'var(--dark-gray)'
                          }}>
                            <div><strong>Registration Fee:</strong> {event.registrationFee}</div>
                            <div><strong>Registration Deadline:</strong> {event.deadline}</div>
                          </div>
                          <div style={{
                            display: 'flex',
                            gap: '10px'
                          }}>
                            <button style={{
                              background: 'var(--primary-color)',
                              color: 'white',
                              border: 'none',
                              padding: '10px 20px',
                              borderRadius: '10px',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              cursor: 'pointer'
                            }}>
                              Register Now
                            </button>
                            <button style={{
                              background: 'transparent',
                              color: 'var(--primary-color)',
                              border: '2px solid var(--primary-color)',
                              padding: '10px 20px',
                              borderRadius: '10px',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              cursor: 'pointer'
                            }}>
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Resources Tab */}
              {activeCategory === 'resources' && (
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '30px'
                  }}>
                    <h2 style={{
                      color: 'var(--primary-color)',
                      fontSize: '2rem',
                      fontWeight: '700'
                    }}>
                      Professional Resources
                    </h2>
                    <button style={{
                      background: 'var(--secondary-color)',
                      color: 'white',
                      border: 'none',
                      padding: '12px 25px',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}>
                      Contribute Resource
                    </button>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '30px'
                  }}>
                    {resources.map((resource) => (
                      <div key={resource.id} style={{
                        background: 'var(--white-color)',
                        borderRadius: '20px',
                        padding: '25px',
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease'
                      }}
                      className="resource-card"
                      >
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '15px'
                        }}>
                          <span style={{
                            background: 'var(--accent-color)',
                            color: 'var(--primary-color)',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '0.8rem',
                            fontWeight: '600'
                          }}>
                            {resource.type}
                          </span>
                          <span style={{
                            background: 'var(--light-gray)',
                            color: 'var(--primary-color)',
                            padding: '4px 10px',
                            borderRadius: '10px',
                            fontSize: '0.7rem',
                            fontWeight: '600'
                          }}>
                            {resource.category}
                          </span>
                        </div>

                        <h3 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1.2rem',
                          fontWeight: '700',
                          marginBottom: '12px'
                        }}>
                          {resource.title}
                        </h3>

                        <p style={{
                          color: 'var(--dark-gray)',
                          lineHeight: '1.6',
                          marginBottom: '20px'
                        }}>
                          {resource.description}
                        </p>

                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '20px',
                          fontSize: '0.8rem',
                          color: 'var(--dark-gray)'
                        }}>
                          <div>
                            {resource.downloadSize && <span>📁 {resource.downloadSize}</span>}
                            {resource.duration && <span>⏱️ {resource.duration}</span>}
                            {resource.validity && <span>📅 {resource.validity}</span>}
                          </div>
                          <div>
                            Updated: {resource.lastUpdated}
                          </div>
                        </div>

                        <button style={{
                          background: 'var(--primary-color)',
                          color: 'white',
                          border: 'none',
                          padding: '12px 20px',
                          borderRadius: '10px',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          width: '100%'
                        }}>
                          Access Resource
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .publication-card:hover,
        .funding-card:hover,
        .event-card:hover,
        .resource-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transform: translateY(-3px);
        }
        input:focus {
          border-color: var(--primary-color) !important;
        }
        @media (max-width: 768px) {
          .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
