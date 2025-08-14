'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function CollaborationHub() {
  const [activeTab, setActiveTab] = useState('projects');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Diagnostics',
      description: 'Developing machine learning algorithms for early disease detection using medical imaging data.',
      leader: 'Dr. Sarah Ahmed',
      skillsNeeded: ['Machine Learning', 'Medical Imaging', 'Python', 'TensorFlow'],
      participants: 8,
      status: 'Active',
      category: 'Healthcare',
      duration: '6 months',
      commitment: '10-15 hours/week'
    },
    {
      id: 2,
      title: 'Sustainable Energy Solutions',
      description: 'Research collaboration on renewable energy systems and smart grid optimization.',
      leader: 'Dr. Omar Khan',
      skillsNeeded: ['Electrical Engineering', 'Energy Systems', 'MATLAB', 'Power Electronics'],
      participants: 12,
      status: 'Active',
      category: 'Energy',
      duration: '12 months',
      commitment: '15-20 hours/week'
    },
    {
      id: 3,
      title: 'Quantum Computing Applications',
      description: 'Exploring quantum algorithms for optimization problems in logistics and finance.',
      leader: 'Dr. Ahmed Hassan',
      skillsNeeded: ['Quantum Computing', 'Algorithms', 'Python', 'Qiskit'],
      participants: 6,
      status: 'Planning',
      category: 'Technology',
      duration: '8 months',
      commitment: '8-12 hours/week'
    },
    {
      id: 4,
      title: 'Environmental Monitoring Network',
      description: 'Building IoT-based systems for real-time environmental data collection and analysis.',
      leader: 'Dr. Maria Rodriguez',
      skillsNeeded: ['IoT', 'Environmental Science', 'Data Analysis', 'Sensor Networks'],
      participants: 10,
      status: 'Active',
      category: 'Environment',
      duration: '10 months',
      commitment: '12-18 hours/week'
    }
  ];

  const experts = [
    {
      id: 1,
      name: 'Dr. Fatima Al-Zahra',
      expertise: 'Gene Therapy & Biotechnology',
      institution: 'King Abdullah University',
      image: '👩‍⚕️',
      skills: ['Gene Therapy', 'Biotechnology', 'Molecular Biology', 'CRISPR'],
      availability: 'Available',
      responseTime: '< 24 hours',
      rating: 4.9,
      consultations: 47
    },
    {
      id: 2,
      name: 'Dr. Chen Wei',
      expertise: 'Artificial Intelligence & Robotics',
      institution: 'Tsinghua University',
      image: '👨‍💻',
      skills: ['AI', 'Robotics', 'Computer Vision', 'Deep Learning'],
      availability: 'Limited',
      responseTime: '< 48 hours',
      rating: 4.8,
      consultations: 62
    },
    {
      id: 3,
      name: 'Dr. Amara Okafor',
      expertise: 'Materials Science & Nanotechnology',
      institution: 'University of Lagos',
      image: '👩‍🔬',
      skills: ['Materials Science', 'Nanotechnology', 'Polymer Chemistry', 'Surface Engineering'],
      availability: 'Available',
      responseTime: '< 12 hours',
      rating: 4.7,
      consultations: 35
    },
    {
      id: 4,
      name: 'Dr. Rajesh Patel',
      expertise: 'Data Science & Analytics',
      institution: 'Indian Institute of Technology',
      image: '👨‍💼',
      skills: ['Data Science', 'Machine Learning', 'Statistical Analysis', 'Big Data'],
      availability: 'Available',
      responseTime: '< 6 hours',
      rating: 4.9,
      consultations: 89
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredExperts = experts.filter(expert =>
    expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expert.expertise.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Collaboration Hub"
          subtitle="Connect, collaborate, and contribute to meaningful projects with fellow Pakistani professionals worldwide."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              {/* Search and Filter Bar */}
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
                      placeholder="Search projects, experts, or skills..."
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

              {/* Tab Navigation */}
              <div style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '40px',
                borderBottom: '2px solid #f0f0f0'
              }}>
                <button
                  onClick={() => setActiveTab('projects')}
                  style={{
                    background: activeTab === 'projects' ? 'var(--primary-color)' : 'transparent',
                    color: activeTab === 'projects' ? 'white' : 'var(--dark-gray)',
                    border: 'none',
                    padding: '15px 30px',
                    borderRadius: '15px 15px 0 0',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginBottom: '-2px'
                  }}
                >
                  🚀 Active Projects
                </button>
                <button
                  onClick={() => setActiveTab('experts')}
                  style={{
                    background: activeTab === 'experts' ? 'var(--primary-color)' : 'transparent',
                    color: activeTab === 'experts' ? 'white' : 'var(--dark-gray)',
                    border: 'none',
                    padding: '15px 30px',
                    borderRadius: '15px 15px 0 0',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginBottom: '-2px'
                  }}
                >
                  👨‍🏫 Find Expert
                </button>
                <button
                  onClick={() => setActiveTab('project-board')}
                  style={{
                    background: activeTab === 'project-board' ? 'var(--primary-color)' : 'transparent',
                    color: activeTab === 'project-board' ? 'white' : 'var(--dark-gray)',
                    border: 'none',
                    padding: '15px 30px',
                    borderRadius: '15px 15px 0 0',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginBottom: '-2px'
                  }}
                >
                  📋 Project Board
                </button>
              </div>

              {/* Projects Tab */}
              {activeTab === 'projects' && (
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
                      Active Collaboration Projects
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
                      + Start New Project
                    </button>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '30px'
                  }}>
                    {filteredProjects.map((project) => (
                      <div key={project.id} style={{
                        background: 'var(--white-color)',
                        borderRadius: '20px',
                        padding: '30px',
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease'
                      }}
                      className="project-card"
                      >
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '15px'
                        }}>
                          <span style={{
                            background: project.status === 'Active' ? 'var(--secondary-color)' : 'var(--primary-color)',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '0.8rem',
                            fontWeight: '600'
                          }}>
                            {project.status}
                          </span>
                          <span style={{
                            color: 'var(--dark-gray)',
                            fontSize: '0.9rem'
                          }}>
                            {project.category}
                          </span>
                        </div>

                        <h3 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1.3rem',
                          fontWeight: '700',
                          marginBottom: '12px'
                        }}>
                          {project.title}
                        </h3>

                        <p style={{
                          color: 'var(--dark-gray)',
                          lineHeight: '1.6',
                          marginBottom: '20px'
                        }}>
                          {project.description}
                        </p>

                        <div style={{
                          marginBottom: '15px'
                        }}>
                          <div style={{
                            color: 'var(--dark-gray)',
                            fontSize: '0.9rem',
                            marginBottom: '8px'
                          }}>
                            <strong>Project Leader:</strong> {project.leader}
                          </div>
                          <div style={{
                            color: 'var(--dark-gray)',
                            fontSize: '0.9rem',
                            marginBottom: '8px'
                          }}>
                            <strong>Duration:</strong> {project.duration} • <strong>Commitment:</strong> {project.commitment}
                          </div>
                          <div style={{
                            color: 'var(--dark-gray)',
                            fontSize: '0.9rem',
                            marginBottom: '15px'
                          }}>
                            👥 {project.participants} members
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
                            Skills Needed:
                          </div>
                          <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '6px'
                          }}>
                            {project.skillsNeeded.map((skill, index) => (
                              <span key={index} style={{
                                background: 'var(--accent-color)',
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
                            Join Project
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

              {/* Experts Tab */}
              {activeTab === 'experts' && (
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
                      Find an Expert
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
                      Become an Expert
                    </button>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '30px'
                  }}>
                    {filteredExperts.map((expert) => (
                      <div key={expert.id} style={{
                        background: 'var(--white-color)',
                        borderRadius: '20px',
                        padding: '25px',
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease'
                      }}
                      className="expert-card"
                      >
                        <div style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '15px',
                          marginBottom: '15px'
                        }}>
                          <div style={{ fontSize: '3rem' }}>
                            {expert.image}
                          </div>
                          <div style={{ flex: 1 }}>
                            <h3 style={{
                              color: 'var(--primary-color)',
                              fontSize: '1.1rem',
                              fontWeight: '700',
                              marginBottom: '5px'
                            }}>
                              {expert.name}
                            </h3>
                            <div style={{
                              color: 'var(--secondary-color)',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              marginBottom: '3px'
                            }}>
                              {expert.expertise}
                            </div>
                            <div style={{
                              color: 'var(--dark-gray)',
                              fontSize: '0.8rem'
                            }}>
                              {expert.institution}
                            </div>
                          </div>
                          <span style={{
                            background: expert.availability === 'Available' ? '#10b981' : '#f59e0b',
                            color: 'white',
                            padding: '3px 8px',
                            borderRadius: '8px',
                            fontSize: '0.7rem',
                            fontWeight: '600'
                          }}>
                            {expert.availability}
                          </span>
                        </div>

                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '5px',
                          marginBottom: '15px'
                        }}>
                          {expert.skills.map((skill, index) => (
                            <span key={index} style={{
                              background: 'var(--light-gray)',
                              color: 'var(--primary-color)',
                              padding: '3px 8px',
                              borderRadius: '8px',
                              fontSize: '0.7rem',
                              fontWeight: '600'
                            }}>
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '15px',
                          padding: '10px 0',
                          borderTop: '1px solid #f0f0f0',
                          borderBottom: '1px solid #f0f0f0'
                        }}>
                          <div style={{
                            color: 'var(--dark-gray)',
                            fontSize: '0.8rem'
                          }}>
                            ⭐ {expert.rating}/5.0 ({expert.consultations} consultations)
                          </div>
                          <div style={{
                            color: 'var(--dark-gray)',
                            fontSize: '0.8rem'
                          }}>
                            ⏱️ {expert.responseTime}
                          </div>
                        </div>

                        <div style={{
                          display: 'flex',
                          gap: '8px'
                        }}>
                          <button style={{
                            background: 'var(--primary-color)',
                            color: 'white',
                            border: 'none',
                            padding: '8px 15px',
                            borderRadius: '8px',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            flex: 1
                          }}>
                            Consult
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
                            Message
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Board Tab */}
              {activeTab === 'project-board' && (
                <div>
                  <h2 style={{
                    color: 'var(--primary-color)',
                    fontSize: '2rem',
                    fontWeight: '700',
                    marginBottom: '30px'
                  }}>
                    Project Management Board
                  </h2>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                  }}>
                    {/* Planning Column */}
                    <div style={{
                      background: 'var(--white-color)',
                      borderRadius: '15px',
                      padding: '25px',
                      border: '1px solid #e0e0e0'
                    }}>
                      <h3 style={{
                        color: 'var(--primary-color)',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        marginBottom: '20px',
                        textAlign: 'center'
                      }}>
                        📋 Planning
                      </h3>
                      <div style={{
                        background: '#f8f9fa',
                        borderRadius: '10px',
                        padding: '15px',
                        marginBottom: '15px'
                      }}>
                        <h4 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1rem',
                          fontWeight: '600',
                          marginBottom: '8px'
                        }}>
                          Quantum Computing Project
                        </h4>
                        <p style={{
                          color: 'var(--dark-gray)',
                          fontSize: '0.8rem',
                          marginBottom: '8px'
                        }}>
                          Initial research and team formation
                        </p>
                        <div style={{ fontSize: '0.7rem', color: 'var(--dark-gray)' }}>
                          Due: Jan 15, 2025
                        </div>
                      </div>
                    </div>

                    {/* In Progress Column */}
                    <div style={{
                      background: 'var(--white-color)',
                      borderRadius: '15px',
                      padding: '25px',
                      border: '1px solid #e0e0e0'
                    }}>
                      <h3 style={{
                        color: 'var(--secondary-color)',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        marginBottom: '20px',
                        textAlign: 'center'
                      }}>
                        🚧 In Progress
                      </h3>
                      <div style={{
                        background: '#fff3cd',
                        borderRadius: '10px',
                        padding: '15px',
                        marginBottom: '15px'
                      }}>
                        <h4 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1rem',
                          fontWeight: '600',
                          marginBottom: '8px'
                        }}>
                          AI Healthcare Diagnostics
                        </h4>
                        <p style={{
                          color: 'var(--dark-gray)',
                          fontSize: '0.8rem',
                          marginBottom: '8px'
                        }}>
                          Data collection and model training
                        </p>
                        <div style={{
                          background: '#f59e0b',
                          width: '60%',
                          height: '4px',
                          borderRadius: '2px',
                          marginBottom: '5px'
                        }}></div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--dark-gray)' }}>
                          60% Complete
                        </div>
                      </div>
                    </div>

                    {/* Completed Column */}
                    <div style={{
                      background: 'var(--white-color)',
                      borderRadius: '15px',
                      padding: '25px',
                      border: '1px solid #e0e0e0'
                    }}>
                      <h3 style={{
                        color: '#10b981',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        marginBottom: '20px',
                        textAlign: 'center'
                      }}>
                        ✅ Completed
                      </h3>
                      <div style={{
                        background: '#d1fae5',
                        borderRadius: '10px',
                        padding: '15px',
                        marginBottom: '15px'
                      }}>
                        <h4 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1rem',
                          fontWeight: '600',
                          marginBottom: '8px'
                        }}>
                          Environmental Monitoring
                        </h4>
                        <p style={{
                          color: 'var(--dark-gray)',
                          fontSize: '0.8rem',
                          marginBottom: '8px'
                        }}>
                          Sensor network deployment
                        </p>
                        <div style={{ fontSize: '0.7rem', color: '#10b981' }}>
                          Completed: Dec 20, 2024
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .project-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transform: translateY(-5px);
        }
        .expert-card:hover {
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
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
