'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function MemberProfile() {
  const params = useParams();
  const username = params.username as string;

  // Sample profile data - in a real app, this would be fetched based on username
  const profileData = {
    'ahmed-hassan': {
      name: 'Dr. Ahmed Hassan',
      title: 'Professor of Computer Science',
      institution: 'Seoul National University',
      field: 'Computer Science',
      expertise: ['Quantum Computing', 'Machine Learning', 'Algorithms', 'Distributed Systems'],
      location: 'Seoul, South Korea',
      image: '👨‍💻',
      joinedYear: '2023',
      connections: 89,
      email: 'ahmed.hassan@snu.ac.kr',
      linkedin: 'linkedin.com/in/ahmed-hassan-cs',
      bio: 'Dr. Ahmed Hassan is a Professor of Computer Science at Seoul National University with over 15 years of experience in quantum computing and machine learning. He leads the Quantum AI Research Lab and has published extensively in top-tier conferences. He is passionate about advancing quantum algorithms and their applications in solving complex optimization problems.',
      education: [
        {
          degree: 'Ph.D. in Computer Science',
          institution: 'MIT',
          year: '2015',
          focus: 'Quantum Algorithms and Complexity Theory'
        },
        {
          degree: 'M.S. in Computer Science',
          institution: 'Stanford University',
          year: '2010',
          focus: 'Machine Learning'
        },
        {
          degree: 'B.S. in Computer Engineering',
          institution: 'University of Engineering and Technology, Lahore',
          year: '2008',
          focus: 'Computer Systems'
        }
      ],
      publications: [
        {
          title: 'Quantum Machine Learning for Optimization Problems',
          journal: 'Nature Quantum Information',
          year: '2024',
          citations: 127,
          coAuthors: ['Dr. Sarah Kim', 'Dr. James Liu']
        },
        {
          title: 'Distributed Quantum Computing: A Survey',
          journal: 'ACM Computing Surveys',
          year: '2023',
          citations: 89,
          coAuthors: ['Dr. Maria Rodriguez', 'Dr. Chen Wei']
        },
        {
          title: 'Hybrid Classical-Quantum Algorithms for Graph Problems',
          journal: 'IEEE Transactions on Quantum Engineering',
          year: '2023',
          citations: 156,
          coAuthors: ['Dr. Omar Khan']
        }
      ],
      projects: [
        {
          title: 'Quantum-Enhanced Drug Discovery Platform',
          status: 'Active',
          duration: '2024 - Present',
          role: 'Principal Investigator',
          collaborators: ['Samsung Research', 'KAIST'],
          description: 'Developing quantum algorithms for molecular simulation and drug discovery processes.'
        },
        {
          title: 'Distributed Quantum Network Protocol',
          status: 'Completed',
          duration: '2022 - 2023',
          role: 'Co-Principal Investigator',
          collaborators: ['LG Electronics', 'Seoul National University'],
          description: 'Designed secure quantum communication protocols for distributed quantum computing.'
        }
      ],
      achievements: [
        'Outstanding Young Researcher Award - Korean Computer Society (2024)',
        'Best Paper Award - International Conference on Quantum Computing (2023)',
        'Google Research Scholar Award (2022)',
        'IEEE Outstanding Contribution Award (2021)'
      ],
      languages: ['English', 'Korean', 'Urdu', 'Punjabi'],
      skills: [
        'Quantum Computing', 'Machine Learning', 'Python', 'Qiskit', 'TensorFlow',
        'Distributed Systems', 'Algorithm Design', 'Research Methodology'
      ]
    }
  };

  const profile = profileData[username as keyof typeof profileData];

  if (!profile) {
    return (
      <>
        <Header />
        <main>
          <PageHero 
            title="Profile Not Found"
            subtitle="The requested member profile could not be found."
          />
          <div style={{ padding: '100px 0', textAlign: 'center' }}>
            <div className="container">
              <p>The member profile for &ldquo;{username}&rdquo; does not exist.</p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <FadeInSection>
          <section style={{ padding: '50px 0 100px 0' }}>
            <div className="container">
              {/* Profile Header */}
              <div style={{
                background: 'linear-gradient(135deg, var(--primary-color), #0a2347)',
                borderRadius: '25px',
                padding: '50px',
                marginBottom: '50px',
                color: 'white'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '40px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ fontSize: '8rem' }}>
                    {profile.image}
                  </div>
                  <div style={{ flex: 1, minWidth: '300px' }}>
                    <h1 style={{
                      color: 'white',
                      fontSize: '2.5rem',
                      marginBottom: '15px',
                      fontWeight: '700'
                    }}>
                      {profile.name}
                    </h1>
                    <div style={{
                      fontSize: '1.3rem',
                      marginBottom: '10px',
                      opacity: 0.9
                    }}>
                      {profile.title}
                    </div>
                    <div style={{
                      fontSize: '1.1rem',
                      marginBottom: '15px',
                      opacity: 0.8
                    }}>
                      📍 {profile.institution}, {profile.location}
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      marginBottom: '20px',
                      opacity: 0.8
                    }}>
                      🎓 {profile.field} • 🤝 {profile.connections} connections • Member since {profile.joinedYear}
                    </div>
                    <div style={{
                      display: 'flex',
                      gap: '15px',
                      flexWrap: 'wrap'
                    }}>
                      <button style={{
                        background: 'var(--secondary-color)',
                        color: 'white',
                        border: 'none',
                        padding: '12px 25px',
                        borderRadius: '25px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}>
                        Connect
                      </button>
                      <button style={{
                        background: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        border: '2px solid white',
                        padding: '12px 25px',
                        borderRadius: '25px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}>
                        Message
                      </button>
                      <button style={{
                        background: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        border: '1px solid rgba(255,255,255,0.3)',
                        padding: '12px 25px',
                        borderRadius: '25px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}>
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 350px',
                gap: '40px'
              }}>
                {/* Main Content */}
                <div>
                  {/* About Section */}
                  <div style={{
                    background: 'var(--white-color)',
                    borderRadius: '20px',
                    padding: '40px',
                    marginBottom: '30px',
                    border: '1px solid #e0e0e0'
                  }}>
                    <h2 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.8rem',
                      marginBottom: '20px',
                      fontWeight: '700'
                    }}>
                      About
                    </h2>
                    <p style={{
                      color: 'var(--dark-gray)',
                      lineHeight: '1.7',
                      fontSize: '1rem'
                    }}>
                      {profile.bio}
                    </p>
                  </div>

                  {/* Publications */}
                  <div style={{
                    background: 'var(--white-color)',
                    borderRadius: '20px',
                    padding: '40px',
                    marginBottom: '30px',
                    border: '1px solid #e0e0e0'
                  }}>
                    <h2 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.8rem',
                      marginBottom: '25px',
                      fontWeight: '700'
                    }}>
                      Recent Publications
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      {profile.publications.map((pub, index) => (
                        <div key={index} style={{
                          padding: '20px',
                          border: '1px solid #f0f0f0',
                          borderRadius: '15px',
                          transition: 'all 0.3s ease'
                        }}
                        className="publication-item"
                        >
                          <h3 style={{
                            color: 'var(--primary-color)',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            marginBottom: '8px'
                          }}>
                            {pub.title}
                          </h3>
                          <div style={{
                            color: 'var(--secondary-color)',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginBottom: '8px'
                          }}>
                            {pub.journal} • {pub.year}
                          </div>
                          <div style={{
                            color: 'var(--dark-gray)',
                            fontSize: '0.9rem',
                            marginBottom: '5px'
                          }}>
                            Co-authors: {pub.coAuthors.join(', ')}
                          </div>
                          <div style={{
                            color: 'var(--dark-gray)',
                            fontSize: '0.8rem'
                          }}>
                            📊 {pub.citations} citations
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Current Projects */}
                  <div style={{
                    background: 'var(--white-color)',
                    borderRadius: '20px',
                    padding: '40px',
                    marginBottom: '30px',
                    border: '1px solid #e0e0e0'
                  }}>
                    <h2 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.8rem',
                      marginBottom: '25px',
                      fontWeight: '700'
                    }}>
                      Current Projects
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                      {profile.projects.map((project, index) => (
                        <div key={index} style={{
                          padding: '25px',
                          border: '1px solid #f0f0f0',
                          borderRadius: '15px'
                        }}>
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '10px'
                          }}>
                            <h3 style={{
                              color: 'var(--primary-color)',
                              fontSize: '1.2rem',
                              fontWeight: '600'
                            }}>
                              {project.title}
                            </h3>
                            <span style={{
                              background: project.status === 'Active' ? 'var(--secondary-color)' : 'var(--dark-gray)',
                              color: 'white',
                              padding: '4px 12px',
                              borderRadius: '12px',
                              fontSize: '0.8rem',
                              fontWeight: '600'
                            }}>
                              {project.status}
                            </span>
                          </div>
                          <div style={{
                            color: 'var(--dark-gray)',
                            fontSize: '0.9rem',
                            marginBottom: '8px'
                          }}>
                            {project.duration} • {project.role}
                          </div>
                          <div style={{
                            color: 'var(--dark-gray)',
                            fontSize: '0.9rem',
                            marginBottom: '10px'
                          }}>
                            Collaborators: {project.collaborators.join(', ')}
                          </div>
                          <p style={{
                            color: 'var(--dark-gray)',
                            lineHeight: '1.6',
                            fontSize: '0.9rem'
                          }}>
                            {project.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div>
                  {/* Contact Information */}
                  <div style={{
                    background: 'var(--white-color)',
                    borderRadius: '20px',
                    padding: '30px',
                    marginBottom: '25px',
                    border: '1px solid #e0e0e0'
                  }}>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.3rem',
                      marginBottom: '20px',
                      fontWeight: '700'
                    }}>
                      Contact Information
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ color: 'var(--dark-gray)', fontSize: '0.9rem' }}>
                        📧 {profile.email}
                      </div>
                      <div style={{ color: 'var(--dark-gray)', fontSize: '0.9rem' }}>
                        💼 {profile.linkedin}
                      </div>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div style={{
                    background: 'var(--white-color)',
                    borderRadius: '20px',
                    padding: '30px',
                    marginBottom: '25px',
                    border: '1px solid #e0e0e0'
                  }}>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.3rem',
                      marginBottom: '20px',
                      fontWeight: '700'
                    }}>
                      Expertise
                    </h3>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      {profile.expertise.map((skill, index) => (
                        <span key={index} style={{
                          background: 'var(--accent-color)',
                          color: 'var(--primary-color)',
                          padding: '6px 12px',
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          fontWeight: '600'
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div style={{
                    background: 'var(--white-color)',
                    borderRadius: '20px',
                    padding: '30px',
                    marginBottom: '25px',
                    border: '1px solid #e0e0e0'
                  }}>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.3rem',
                      marginBottom: '20px',
                      fontWeight: '700'
                    }}>
                      Education
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      {profile.education.map((edu, index) => (
                        <div key={index}>
                          <div style={{
                            color: 'var(--primary-color)',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginBottom: '3px'
                          }}>
                            {edu.degree}
                          </div>
                          <div style={{
                            color: 'var(--dark-gray)',
                            fontSize: '0.8rem',
                            marginBottom: '2px'
                          }}>
                            {edu.institution} • {edu.year}
                          </div>
                          <div style={{
                            color: 'var(--dark-gray)',
                            fontSize: '0.8rem',
                            fontStyle: 'italic'
                          }}>
                            {edu.focus}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div style={{
                    background: 'var(--white-color)',
                    borderRadius: '20px',
                    padding: '30px',
                    border: '1px solid #e0e0e0'
                  }}>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.3rem',
                      marginBottom: '20px',
                      fontWeight: '700'
                    }}>
                      Languages
                    </h3>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      {profile.languages.map((language, index) => (
                        <span key={index} style={{
                          background: 'var(--light-gray)',
                          color: 'var(--primary-color)',
                          padding: '4px 10px',
                          borderRadius: '10px',
                          fontSize: '0.8rem',
                          fontWeight: '600'
                        }}>
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .publication-item:hover {
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transform: translateY(-2px);
        }
        @media (max-width: 1024px) {
          .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
