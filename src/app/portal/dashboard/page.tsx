'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function Dashboard() {
  const recentActivity = [
    {
      type: 'message',
      icon: '💬',
      title: 'New message from Dr. Sarah Ahmed',
      description: 'Research collaboration proposal for AI in healthcare',
      time: '2 hours ago',
      link: '/portal/community/messages'
    },
    {
      type: 'event',
      icon: '📅',
      title: 'Upcoming: Monthly Networking Event',
      description: 'Virtual networking session - "Innovation in Tech"',
      time: 'Tomorrow, 7:00 PM KST',
      link: '/events'
    },
    {
      type: 'forum',
      icon: '💡',
      title: 'New post in Research Discussions',
      description: 'Dr. Ahmed Hassan posted about quantum computing applications',
      time: '5 hours ago',
      link: '/portal/community/forums'
    },
    {
      type: 'job',
      icon: '💼',
      title: 'New job posting: Senior Data Scientist',
      description: 'Samsung Research - Seoul, requires ML expertise',
      time: '1 day ago',
      link: '/portal/community/jobs'
    }
  ];

  const quickStats = [
    { label: 'Messages', count: 12, icon: '💬', link: '/portal/community/messages' },
    { label: 'Connections', count: 45, icon: '🤝', link: '/portal/directory' },
    { label: 'Events', count: 3, icon: '📅', link: '/events' },
    { label: 'Projects', count: 2, icon: '🔬', link: '/portal/collaborate/project-board' }
  ];

  const upcomingEvents = [
    {
      title: 'Monthly Networking Event',
      date: 'Aug 16, 2025',
      time: '7:00 PM KST',
      type: 'Virtual',
      attendees: 23
    },
    {
      title: 'Research Symposium',
      date: 'Aug 22, 2025',
      time: '2:00 PM KST',
      type: 'Hybrid',
      attendees: 67
    },
    {
      title: 'Career Development Workshop',
      date: 'Aug 28, 2025',
      time: '6:30 PM KST',
      type: 'In-person',
      attendees: 31
    }
  ];

  const suggestedConnections = [
    {
      name: 'Dr. Maria Rodriguez',
      title: 'Chemical Engineer',
      institution: 'KAIST',
      expertise: 'Sustainable Chemistry',
      image: '👩‍🔬',
      mutualConnections: 5
    },
    {
      name: 'Dr. James Kim',
      title: 'Computer Scientist',
      institution: 'Samsung Research',
      expertise: 'Machine Learning',
      image: '👨‍💻',
      mutualConnections: 8
    },
    {
      name: 'Dr. Fatima Al-Zahra',
      title: 'Biomedical Researcher',
      institution: 'Seoul National University',
      expertise: 'Gene Therapy',
      image: '👩‍⚕️',
      mutualConnections: 3
    }
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Dashboard"
          subtitle="Welcome back! Here's what's happening in your PAACK community."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              {/* Quick Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '25px',
                marginBottom: '50px'
              }}>
                {quickStats.map((stat, index) => (
                  <div key={index} style={{
                    background: 'var(--white-color)',
                    padding: '30px',
                    borderRadius: '15px',
                    border: '2px solid #f0f0f0',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  className="stat-card"
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
                      {stat.icon}
                    </div>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: 'var(--primary-color)',
                      marginBottom: '5px'
                    }}>
                      {stat.count}
                    </div>
                    <div style={{
                      color: 'var(--dark-gray)',
                      fontWeight: '600'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '40px'
              }}>
                {/* Recent Activity */}
                <div>
                  <h2 style={{
                    color: 'var(--primary-color)',
                    fontSize: '1.8rem',
                    marginBottom: '25px',
                    fontWeight: '700'
                  }}>
                    Recent Activity
                  </h2>
                  <div style={{
                    background: 'var(--white-color)',
                    borderRadius: '15px',
                    border: '1px solid #e0e0e0',
                    overflow: 'hidden'
                  }}>
                    {recentActivity.map((activity, index) => (
                      <div key={index} style={{
                        padding: '20px',
                        borderBottom: index < recentActivity.length - 1 ? '1px solid #f0f0f0' : 'none',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      className="activity-item"
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                          <div style={{ fontSize: '1.5rem' }}>
                            {activity.icon}
                          </div>
                          <div style={{ flex: 1 }}>
                            <h3 style={{
                              color: 'var(--primary-color)',
                              fontSize: '1rem',
                              fontWeight: '600',
                              marginBottom: '5px'
                            }}>
                              {activity.title}
                            </h3>
                            <p style={{
                              color: 'var(--dark-gray)',
                              fontSize: '0.9rem',
                              marginBottom: '8px',
                              lineHeight: '1.4'
                            }}>
                              {activity.description}
                            </p>
                            <div style={{
                              color: 'var(--secondary-color)',
                              fontSize: '0.8rem',
                              fontWeight: '600'
                            }}>
                              {activity.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events */}
                <div>
                  <h2 style={{
                    color: 'var(--primary-color)',
                    fontSize: '1.8rem',
                    marginBottom: '25px',
                    fontWeight: '700'
                  }}>
                    Upcoming Events
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {upcomingEvents.map((event, index) => (
                      <div key={index} style={{
                        background: 'var(--white-color)',
                        padding: '20px',
                        borderRadius: '15px',
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      className="event-card"
                      >
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '10px'
                        }}>
                          <h3 style={{
                            color: 'var(--primary-color)',
                            fontSize: '1.1rem',
                            fontWeight: '600'
                          }}>
                            {event.title}
                          </h3>
                          <span style={{
                            background: 'var(--accent-color)',
                            color: 'var(--primary-color)',
                            padding: '3px 8px',
                            borderRadius: '10px',
                            fontSize: '0.7rem',
                            fontWeight: '600'
                          }}>
                            {event.type}
                          </span>
                        </div>
                        <div style={{
                          color: 'var(--dark-gray)',
                          fontSize: '0.9rem',
                          marginBottom: '8px'
                        }}>
                          📅 {event.date} at {event.time}
                        </div>
                        <div style={{
                          color: 'var(--secondary-color)',
                          fontSize: '0.8rem',
                          fontWeight: '600'
                        }}>
                          👥 {event.attendees} attending
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Suggested Connections */}
              <div style={{ marginTop: '50px' }}>
                <h2 style={{
                  color: 'var(--primary-color)',
                  fontSize: '1.8rem',
                  marginBottom: '25px',
                  fontWeight: '700'
                }}>
                  Suggested Connections
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '25px'
                }}>
                  {suggestedConnections.map((person, index) => (
                    <div key={index} style={{
                      background: 'var(--white-color)',
                      padding: '25px',
                      borderRadius: '15px',
                      border: '1px solid #e0e0e0',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    className="connection-card"
                    >
                      <div style={{ fontSize: '4rem', marginBottom: '15px' }}>
                        {person.image}
                      </div>
                      <h3 style={{
                        color: 'var(--primary-color)',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        marginBottom: '5px'
                      }}>
                        {person.name}
                      </h3>
                      <div style={{
                        color: 'var(--secondary-color)',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '5px'
                      }}>
                        {person.title}
                      </div>
                      <div style={{
                        color: 'var(--dark-gray)',
                        fontSize: '0.9rem',
                        marginBottom: '10px'
                      }}>
                        {person.institution} • {person.expertise}
                      </div>
                      <div style={{
                        color: 'var(--dark-gray)',
                        fontSize: '0.8rem',
                        marginBottom: '15px'
                      }}>
                        {person.mutualConnections} mutual connections
                      </div>
                      <button style={{
                        background: 'var(--secondary-color)',
                        color: 'white',
                        border: 'none',
                        padding: '8px 20px',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      className="connect-btn"
                      >
                        Connect
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          border-color: var(--secondary-color);
        }
        .activity-item:hover {
          background: var(--light-gray);
        }
        .event-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .connection-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        .connect-btn:hover {
          background: #007a56;
        }
      `}</style>
    </>
  );
}
