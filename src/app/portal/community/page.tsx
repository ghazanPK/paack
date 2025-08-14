'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function CommunityHub() {
  const [activeTab, setActiveTab] = useState('forums');

  const forumTopics = [
    {
      id: 1,
      title: 'Research Collaboration Opportunities',
      description: 'Discuss potential research partnerships and joint projects.',
      posts: 127,
      lastActivity: '2 hours ago',
      category: 'Research',
      pinned: true,
      lastPost: {
        author: 'Dr. Ahmed Hassan',
        preview: 'Looking for collaborators on quantum computing applications...'
      }
    },
    {
      id: 2,
      title: 'Career Development & Job Opportunities',
      description: 'Share job openings, career advice, and professional guidance.',
      posts: 89,
      lastActivity: '5 hours ago',
      category: 'Career',
      pinned: false,
      lastPost: {
        author: 'Dr. Sarah Ahmed',
        preview: 'Exciting postdoc opportunity at MIT in AI healthcare...'
      }
    },
    {
      id: 3,
      title: 'Funding & Grant Opportunities',
      description: 'Discuss funding sources, grant applications, and success stories.',
      posts: 156,
      lastActivity: '1 day ago',
      category: 'Funding',
      pinned: true,
      lastPost: {
        author: 'Dr. Omar Khan',
        preview: 'Just received confirmation for the NSF grant application...'
      }
    },
    {
      id: 4,
      title: 'Publications & Academic Writing',
      description: 'Share publication updates, writing tips, and peer review requests.',
      posts: 203,
      lastActivity: '3 hours ago',
      category: 'Academic',
      pinned: false,
      lastPost: {
        author: 'Dr. Fatima Al-Zahra',
        preview: 'Need feedback on my manuscript before journal submission...'
      }
    },
    {
      id: 5,
      title: 'Technology & Innovation Trends',
      description: 'Discuss emerging technologies and innovation in various fields.',
      posts: 78,
      lastActivity: '6 hours ago',
      category: 'Technology',
      pinned: false,
      lastPost: {
        author: 'Dr. Chen Wei',
        preview: 'The latest developments in quantum machine learning are...'
      }
    }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior Data Scientist',
      company: 'Google Research',
      location: 'Mountain View, CA',
      type: 'Full-time',
      experience: '5+ years',
      posted: '2 days ago',
      salary: '$150,000 - $200,000',
      description: 'Leading AI research initiatives in healthcare applications.',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Healthcare AI'],
      postedBy: 'Dr. Rajesh Patel'
    },
    {
      id: 2,
      title: 'Postdoctoral Research Fellow',
      company: 'MIT CSAIL',
      location: 'Cambridge, MA',
      type: 'Research',
      experience: 'PhD required',
      posted: '1 week ago',
      salary: '$65,000 - $75,000',
      description: 'Research position in quantum computing and cryptography.',
      skills: ['Quantum Computing', 'Cryptography', 'Mathematics', 'Research'],
      postedBy: 'Dr. Ahmed Hassan'
    },
    {
      id: 3,
      title: 'Biomedical Engineer',
      company: 'Johnson & Johnson',
      location: 'New Brunswick, NJ',
      type: 'Full-time',
      experience: '3+ years',
      posted: '5 days ago',
      salary: '$90,000 - $120,000',
      description: 'Developing next-generation medical devices and diagnostics.',
      skills: ['Biomedical Engineering', 'Medical Devices', 'FDA Regulations', 'Design'],
      postedBy: 'Dr. Sarah Ahmed'
    }
  ];

  const mentorshipPairs = [
    {
      id: 1,
      mentor: {
        name: 'Dr. Ahmed Hassan',
        field: 'Computer Science',
        experience: '15+ years',
        image: '👨‍💻',
        specializations: ['Quantum Computing', 'AI', 'Academia']
      },
      mentees: 3,
      available: true,
      rating: 4.9,
      sessions: 47
    },
    {
      id: 2,
      mentor: {
        name: 'Dr. Maria Rodriguez',
        field: 'Environmental Engineering',
        experience: '12+ years',
        image: '👩‍🔬',
        specializations: ['Sustainability', 'Research Management', 'Industry Transition']
      },
      mentees: 2,
      available: true,
      rating: 4.8,
      sessions: 32
    },
    {
      id: 3,
      mentor: {
        name: 'Dr. Omar Khan',
        field: 'Electrical Engineering',
        experience: '18+ years',
        image: '👨‍🔧',
        specializations: ['Entrepreneurship', 'Technology Transfer', 'Leadership']
      },
      mentees: 4,
      available: false,
      rating: 4.9,
      sessions: 63
    }
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Community Hub"
          subtitle="Connect, collaborate, and grow with fellow Pakistani professionals in science and technology."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              {/* Tab Navigation */}
              <div style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '40px',
                borderBottom: '2px solid #f0f0f0',
                overflowX: 'auto'
              }}>
                {[
                  { key: 'forums', label: '💬 Discussion Forums', icon: '💬' },
                  { key: 'jobs', label: '💼 Job Board', icon: '💼' },
                  { key: 'mentorship', label: '🤝 Mentorship', icon: '🤝' }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    style={{
                      background: activeTab === tab.key ? 'var(--primary-color)' : 'transparent',
                      color: activeTab === tab.key ? 'white' : 'var(--dark-gray)',
                      border: 'none',
                      padding: '15px 30px',
                      borderRadius: '15px 15px 0 0',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      marginBottom: '-2px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Forums Tab */}
              {activeTab === 'forums' && (
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
                      Discussion Forums
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
                      + New Topic
                    </button>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                  }}>
                    {forumTopics.map((topic) => (
                      <div key={topic.id} style={{
                        background: 'var(--white-color)',
                        borderRadius: '15px',
                        padding: '25px',
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease'
                      }}
                      className="forum-card"
                      >
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '15px'
                        }}>
                          <div style={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center'
                          }}>
                            {topic.pinned && (
                              <span style={{
                                background: 'var(--secondary-color)',
                                color: 'white',
                                padding: '3px 8px',
                                borderRadius: '8px',
                                fontSize: '0.7rem',
                                fontWeight: '600'
                              }}>
                                📌 Pinned
                              </span>
                            )}
                            <span style={{
                              background: 'var(--accent-color)',
                              color: 'var(--primary-color)',
                              padding: '3px 8px',
                              borderRadius: '8px',
                              fontSize: '0.7rem',
                              fontWeight: '600'
                            }}>
                              {topic.category}
                            </span>
                          </div>
                          <div style={{
                            fontSize: '0.8rem',
                            color: 'var(--dark-gray)'
                          }}>
                            Last activity: {topic.lastActivity}
                          </div>
                        </div>

                        <h3 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1.3rem',
                          fontWeight: '700',
                          marginBottom: '8px'
                        }}>
                          {topic.title}
                        </h3>

                        <p style={{
                          color: 'var(--dark-gray)',
                          lineHeight: '1.6',
                          marginBottom: '15px'
                        }}>
                          {topic.description}
                        </p>

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
                            💬 {topic.posts} posts
                          </div>
                          <div style={{
                            fontSize: '0.8rem',
                            color: 'var(--dark-gray)'
                          }}>
                            Last post by <strong>{topic.lastPost.author}</strong>
                            <div style={{ fontSize: '0.7rem', marginTop: '2px' }}>
                              &ldquo;{topic.lastPost.preview}&rdquo;
                            </div>
                          </div>
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
                            Join Discussion
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Jobs Tab */}
              {activeTab === 'jobs' && (
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
                      Job Opportunities
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
                      + Post Job
                    </button>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '25px'
                  }}>
                    {jobListings.map((job) => (
                      <div key={job.id} style={{
                        background: 'var(--white-color)',
                        borderRadius: '20px',
                        padding: '30px',
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease'
                      }}
                      className="job-card"
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
                              background: job.type === 'Full-time' ? 'var(--secondary-color)' : 'var(--primary-color)',
                              color: 'white',
                              padding: '4px 10px',
                              borderRadius: '10px',
                              fontSize: '0.7rem',
                              fontWeight: '600'
                            }}>
                              {job.type}
                            </span>
                            <span style={{
                              background: 'var(--accent-color)',
                              color: 'var(--primary-color)',
                              padding: '4px 10px',
                              borderRadius: '10px',
                              fontSize: '0.7rem',
                              fontWeight: '600'
                            }}>
                              {job.experience}
                            </span>
                          </div>
                          <div style={{
                            fontSize: '0.8rem',
                            color: 'var(--dark-gray)',
                            textAlign: 'right'
                          }}>
                            Posted {job.posted}
                            <div style={{ fontSize: '0.7rem', marginTop: '2px' }}>
                              by {job.postedBy}
                            </div>
                          </div>
                        </div>

                        <h3 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1.4rem',
                          fontWeight: '700',
                          marginBottom: '8px'
                        }}>
                          {job.title}
                        </h3>

                        <div style={{
                          color: 'var(--secondary-color)',
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          marginBottom: '5px'
                        }}>
                          {job.company}
                        </div>

                        <div style={{
                          color: 'var(--dark-gray)',
                          fontSize: '0.9rem',
                          marginBottom: '15px'
                        }}>
                          📍 {job.location} • 💰 {job.salary}
                        </div>

                        <p style={{
                          color: 'var(--dark-gray)',
                          lineHeight: '1.6',
                          marginBottom: '20px'
                        }}>
                          {job.description}
                        </p>

                        <div style={{
                          marginBottom: '20px'
                        }}>
                          <div style={{
                            color: 'var(--primary-color)',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginBottom: '8px'
                          }}>
                            Required Skills:
                          </div>
                          <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '6px'
                          }}>
                            {job.skills.map((skill, index) => (
                              <span key={index} style={{
                                background: 'var(--light-gray)',
                                color: 'var(--primary-color)',
                                padding: '4px 8px',
                                borderRadius: '8px',
                                fontSize: '0.7rem',
                                fontWeight: '600'
                              }}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div style={{
                          display: 'flex',
                          gap: '15px'
                        }}>
                          <button style={{
                            background: 'var(--primary-color)',
                            color: 'white',
                            border: 'none',
                            padding: '12px 25px',
                            borderRadius: '10px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                          }}>
                            Apply Now
                          </button>
                          <button style={{
                            background: 'transparent',
                            color: 'var(--primary-color)',
                            border: '2px solid var(--primary-color)',
                            padding: '12px 25px',
                            borderRadius: '10px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                          }}>
                            Save Job
                          </button>
                          <button style={{
                            background: 'var(--light-gray)',
                            color: 'var(--primary-color)',
                            border: 'none',
                            padding: '12px 25px',
                            borderRadius: '10px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                          }}>
                            Share
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mentorship Tab */}
              {activeTab === 'mentorship' && (
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
                      Mentorship Program
                    </h2>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button style={{
                        background: 'var(--secondary-color)',
                        color: 'white',
                        border: 'none',
                        padding: '12px 20px',
                        borderRadius: '10px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}>
                        Become a Mentor
                      </button>
                      <button style={{
                        background: 'var(--primary-color)',
                        color: 'white',
                        border: 'none',
                        padding: '12px 20px',
                        borderRadius: '10px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}>
                        Find a Mentor
                      </button>
                    </div>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '30px'
                  }}>
                    {mentorshipPairs.map((pair) => (
                      <div key={pair.id} style={{
                        background: 'var(--white-color)',
                        borderRadius: '20px',
                        padding: '30px',
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease'
                      }}
                      className="mentor-card"
                      >
                        <div style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '20px',
                          marginBottom: '20px'
                        }}>
                          <div style={{ fontSize: '4rem' }}>
                            {pair.mentor.image}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              marginBottom: '10px'
                            }}>
                              <h3 style={{
                                color: 'var(--primary-color)',
                                fontSize: '1.3rem',
                                fontWeight: '700'
                              }}>
                                {pair.mentor.name}
                              </h3>
                              <span style={{
                                background: pair.available ? '#10b981' : '#f59e0b',
                                color: 'white',
                                padding: '3px 8px',
                                borderRadius: '8px',
                                fontSize: '0.7rem',
                                fontWeight: '600'
                              }}>
                                {pair.available ? 'Available' : 'Full'}
                              </span>
                            </div>
                            <div style={{
                              color: 'var(--secondary-color)',
                              fontSize: '1rem',
                              fontWeight: '600',
                              marginBottom: '5px'
                            }}>
                              {pair.mentor.field}
                            </div>
                            <div style={{
                              color: 'var(--dark-gray)',
                              fontSize: '0.9rem',
                              marginBottom: '15px'
                            }}>
                              {pair.mentor.experience} experience
                            </div>
                          </div>
                        </div>

                        <div style={{
                          marginBottom: '20px'
                        }}>
                          <div style={{
                            color: 'var(--primary-color)',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginBottom: '8px'
                          }}>
                            Specializations:
                          </div>
                          <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '6px'
                          }}>
                            {pair.mentor.specializations.map((spec, index) => (
                              <span key={index} style={{
                                background: 'var(--accent-color)',
                                color: 'var(--primary-color)',
                                padding: '4px 8px',
                                borderRadius: '8px',
                                fontSize: '0.7rem',
                                fontWeight: '600'
                              }}>
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '20px',
                          padding: '15px 0',
                          borderTop: '1px solid #f0f0f0',
                          borderBottom: '1px solid #f0f0f0'
                        }}>
                          <div style={{
                            fontSize: '0.8rem',
                            color: 'var(--dark-gray)'
                          }}>
                            ⭐ {pair.rating}/5.0 • 👥 {pair.mentees} mentees
                          </div>
                          <div style={{
                            fontSize: '0.8rem',
                            color: 'var(--dark-gray)'
                          }}>
                            📅 {pair.sessions} sessions completed
                          </div>
                        </div>

                        <div style={{
                          display: 'flex',
                          gap: '10px'
                        }}>
                          <button
                            disabled={!pair.available}
                            style={{
                              background: pair.available ? 'var(--primary-color)' : '#ccc',
                              color: 'white',
                              border: 'none',
                              padding: '10px 20px',
                              borderRadius: '10px',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              cursor: pair.available ? 'pointer' : 'not-allowed',
                              flex: 1
                            }}
                          >
                            {pair.available ? 'Request Mentorship' : 'Currently Full'}
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
                            View Profile
                          </button>
                        </div>
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
        .forum-card:hover,
        .job-card:hover,
        .mentor-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transform: translateY(-3px);
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
