'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function Team() {
  const cabinetMembers = [
    {
      id: 1,
      name: 'Dr. Zeeshan Ur Rehman',
      position: 'President',
      affiliation: 'Chungnam National University (CNU)',
      emoji: '👨‍💼',
      bio: 'Leading PAACK with vision and dedication to unite the Pakistani academic community in Korea.',
      expertise: ['Leadership', 'Academic Affairs', 'Community Development']
    },
    {
      id: 2,
      name: 'Dr. Muhammad Yaqub',
      position: 'General Secretary',
      affiliation: 'Korea Institute of Technology (KIT)',
      emoji: '📋',
      bio: 'Coordinating organizational activities and ensuring smooth operations of PAACK initiatives.',
      expertise: ['Administration', 'Research Coordination', 'Strategic Planning']
    },
    {
      id: 3,
      name: 'Dr. Mamoon Ur Rashid',
      position: 'Information Secretary',
      affiliation: 'University of Ulsan (UOU)',
      emoji: '💻',
      bio: 'Overseeing digital communications, website management, and information dissemination.',
      expertise: ['Digital Media', 'Information Systems', 'Communications']
    },
    {
      id: 4,
      name: 'Dr. Sajid Iqbal',
      position: 'Vice President - Center',
      affiliation: 'Korea Advanced Institute of Science and Technology (KAIST)',
      emoji: '🏛️',
      bio: 'Leading PAACK initiatives in the central region of Korea.',
      expertise: ['Regional Coordination', 'STEM Programs', 'Academic Excellence']
    },
    {
      id: 5,
      name: 'Dr. Babar Usman',
      position: 'Vice President - South',
      affiliation: 'Pusan National University (PNU)',
      emoji: '🌊',
      bio: 'Coordinating southern regional activities and member support in the southern regions.',
      expertise: ['Regional Management', 'Research Collaboration', 'Community Outreach']
    },
    {
      id: 6,
      name: 'Dr. Ghazanfar Ali',
      position: 'Vice President - North',
      affiliation: 'Korea Institute of Science and Technology (KIST)',
      emoji: '🔬',
      bio: 'Managing PAACK activities in the northern regions and metropolitan areas.',
      expertise: ['Scientific Research', 'Innovation Programs', 'Technology Transfer']
    }
  ];

  interface TeamMember {
    id: number;
    name: string;
    position: string;
    affiliation: string;
    emoji: string;
    bio: string;
    expertise: string[];
  }

  const TeamMemberCard = ({ member }: { member: TeamMember }) => (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      padding: '30px',
      border: '1px solid #e0e0e0',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
    }}
    className="team-card"
    >
      <div style={{ fontSize: '4rem', marginBottom: '20px' }}>{member.emoji}</div>
      <h3 style={{
        color: 'var(--primary-color)',
        fontSize: '1.4rem',
        fontWeight: '700',
        marginBottom: '10px'
      }}>{member.name}</h3>
      <div style={{
        background: 'var(--secondary-color)',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '12px',
        fontSize: '0.9rem',
        fontWeight: '600',
        marginBottom: '10px',
        display: 'inline-block'
      }}>
        {member.position}
      </div>
      <p style={{
        color: 'var(--primary-color)',
        fontSize: '0.9rem',
        fontWeight: '600',
        marginBottom: '15px'
      }}>{member.affiliation}</p>
      <p style={{
        color: 'var(--dark-gray)',
        fontSize: '0.9rem',
        lineHeight: '1.5',
        marginBottom: '20px'
      }}>{member.bio}</p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        justifyContent: 'center'
      }}>
        {member.expertise.map((skill: string, index: number) => (
          <span key={index} style={{
            background: 'var(--accent-color)',
            color: 'var(--primary-color)',
            padding: '4px 10px',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: '500'
          }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Our Team"
          subtitle="Meet the dedicated leaders driving PAACK's mission in South Korea"
        />
        
        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              {/* Breadcrumb */}
              <div style={{
                marginBottom: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'var(--dark-gray)',
                fontSize: '0.9rem'
              }}>
                <Link href="/about" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>About</Link>
                <span>›</span>
                <span>Our Team</span>
              </div>

              {/* Official Reference */}
              <div style={{
                background: 'var(--light-gray)',
                borderRadius: '15px',
                padding: '30px',
                marginBottom: '60px',
                textAlign: 'center'
              }}>
                <h3 style={{
                  color: 'var(--primary-color)',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '10px'
                }}>Official Team Structure</h3>
                <p style={{
                  color: 'var(--dark-gray)',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>Reference: PAACK/3S/2025.07.22</p>
              </div>

              {/* Tab Navigation - Removed since we only have cabinet members */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '60px'
              }}>
                <div style={{
                  padding: '15px 30px',
                  borderRadius: '15px',
                  background: 'var(--primary-color)',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: '600',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                }}>
                  Cabinet Members
                </div>
              </div>

              {/* Team Content */}
              <div>
                <h2 style={{
                  color: 'var(--primary-color)',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  textAlign: 'center',
                  marginBottom: '50px'
                }}>PAACK Cabinet Members</h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '30px',
                  marginBottom: '60px'
                }}>
                  {cabinetMembers.map(member => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>

              {/* Join Our Team Section */}
              <div style={{
                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                borderRadius: '25px',
                padding: '60px',
                textAlign: 'center',
                color: 'white'
              }}>
                <h2 style={{
                  fontSize: '2.2rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  color: 'white'
                }}>Want to Contribute?</h2>
                <p style={{
                  fontSize: '1.2rem',
                  marginBottom: '30px',
                  opacity: 0.9
                }}>
                  PAACK is always looking for dedicated individuals to join our mission
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                  flexWrap: 'wrap'
                }}>
                  <Link href="/get-involved/volunteer" style={{
                    background: 'white',
                    color: 'var(--primary-color)',
                    padding: '15px 30px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '700',
                    display: 'inline-block',
                    transition: 'all 0.3s ease'
                  }}
                  className="cta-button"
                  >
                    Volunteer with Us
                  </Link>
                  <Link href="/contact" style={{
                    background: 'transparent',
                    color: 'white',
                    padding: '15px 30px',
                    borderRadius: '12px',
                    border: '2px solid white',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '700',
                    display: 'inline-block',
                    transition: 'all 0.3s ease'
                  }}
                  className="cta-button-outline"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        .cta-button-outline:hover {
          background: white;
          color: var(--primary-color);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}
