'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('');
  const [selectedInstitution, setSelectedInstitution] = useState('');

  const members = [
    {
      id: 1,
      name: 'Dr. Ahmed Hassan',
      username: 'ahmed-hassan',
      title: 'Professor of Computer Science',
      institution: 'Seoul National University',
      field: 'Computer Science',
      expertise: ['Quantum Computing', 'Machine Learning', 'Algorithms'],
      location: 'Seoul',
      image: '👨‍💻',
      joinedYear: '2023',
      connections: 89,
      publications: 45,
      projects: 7
    },
    {
      id: 2,
      name: 'Dr. Sarah Ahmed',
      username: 'sarah-ahmed',
      title: 'Senior Research Scientist',
      institution: 'Samsung Research',
      field: 'Biomedical Engineering',
      expertise: ['AI in Healthcare', 'Medical Imaging', 'Biosensors'],
      location: 'Suwon',
      image: '👩‍⚕️',
      joinedYear: '2022',
      connections: 67,
      publications: 32,
      projects: 5
    },
    {
      id: 3,
      name: 'Dr. Maria Rodriguez',
      username: 'maria-rodriguez',
      title: 'Associate Professor',
      institution: 'KAIST',
      field: 'Chemical Engineering',
      expertise: ['Sustainable Chemistry', 'Catalysis', 'Green Technology'],
      location: 'Daejeon',
      image: '👩‍🔬',
      joinedYear: '2021',
      connections: 54,
      publications: 38,
      projects: 4
    },
    {
      id: 4,
      name: 'Dr. Omar Khan',
      username: 'omar-khan',
      title: 'Principal Engineer',
      institution: 'LG Electronics',
      field: 'Electrical Engineering',
      expertise: ['5G Technology', 'IoT Systems', 'Wireless Communications'],
      location: 'Seoul',
      image: '👨‍🔧',
      joinedYear: '2024',
      connections: 42,
      publications: 28,
      projects: 6
    },
    {
      id: 5,
      name: 'Dr. Fatima Al-Zahra',
      username: 'fatima-alzahra',
      title: 'Research Fellow',
      institution: 'Seoul National University',
      field: 'Biology',
      expertise: ['Gene Therapy', 'Molecular Biology', 'CRISPR Technology'],
      location: 'Seoul',
      image: '👩‍⚕️',
      joinedYear: '2023',
      connections: 73,
      publications: 29,
      projects: 3
    },
    {
      id: 6,
      name: 'Dr. James Kim',
      username: 'james-kim',
      title: 'Lead Data Scientist',
      institution: 'Naver Corporation',
      field: 'Data Science',
      expertise: ['Natural Language Processing', 'Deep Learning', 'Big Data Analytics'],
      location: 'Bundang',
      image: '👨‍💻',
      joinedYear: '2022',
      connections: 95,
      publications: 22,
      projects: 8
    },
    {
      id: 7,
      name: 'Dr. Ayesha Malik',
      username: 'ayesha-malik',
      title: 'Assistant Professor',
      institution: 'Hanyang University',
      field: 'Materials Science',
      expertise: ['Nanomaterials', 'Battery Technology', 'Energy Storage'],
      location: 'Seoul',
      image: '👩‍🔬',
      joinedYear: '2021',
      connections: 61,
      publications: 35,
      projects: 4
    },
    {
      id: 8,
      name: 'Dr. Zain Ali',
      username: 'zain-ali',
      title: 'Senior Software Engineer',
      institution: 'Kakao Corporation',
      field: 'Software Engineering',
      expertise: ['Mobile Development', 'Cloud Computing', 'DevOps'],
      location: 'Jeju',
      image: '👨‍💻',
      joinedYear: '2024',
      connections: 38,
      publications: 15,
      projects: 9
    },
    {
      id: 9,
      name: 'Dr. Nida Sheikh',
      username: 'nida-sheikh',
      title: 'Research Scientist',
      institution: 'Korea Institute of Science and Technology',
      field: 'Environmental Science',
      expertise: ['Climate Change', 'Environmental Monitoring', 'Sustainability'],
      location: 'Seoul',
      image: '👩‍🌾',
      joinedYear: '2023',
      connections: 52,
      publications: 31,
      projects: 5
    },
    {
      id: 10,
      name: 'Dr. Hassan Shah',
      username: 'hassan-shah',
      title: 'Postdoctoral Researcher',
      institution: 'Pohang University of Science and Technology',
      field: 'Physics',
      expertise: ['Quantum Physics', 'Nanotechnology', 'Optical Engineering'],
      location: 'Pohang',
      image: '👨‍🔬',
      joinedYear: '2022',
      connections: 47,
      publications: 26,
      projects: 3
    },
    {
      id: 11,
      name: 'Dr. Khadija Rahman',
      username: 'khadija-rahman',
      title: 'Financial Analyst',
      institution: 'Korea Development Bank',
      field: 'Economics',
      expertise: ['Financial Modeling', 'Risk Analysis', 'Investment Strategy'],
      location: 'Seoul',
      image: '👩‍💼',
      joinedYear: '2024',
      connections: 34,
      publications: 18,
      projects: 2
    },
    {
      id: 12,
      name: 'Dr. Usman Tariq',
      username: 'usman-tariq',
      title: 'Mechanical Engineer',
      institution: 'Hyundai Motor Company',
      field: 'Mechanical Engineering',
      expertise: ['Automotive Design', 'Manufacturing', 'Robotics'],
      location: 'Ulsan',
      image: '👨‍🔧',
      joinedYear: '2023',
      connections: 56,
      publications: 24,
      projects: 6
    }
  ];

  const fields = [...new Set(members.map(member => member.field))];
  const institutions = [...new Set(members.map(member => member.institution))];

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         member.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesField = !selectedField || member.field === selectedField;
    const matchesInstitution = !selectedInstitution || member.institution === selectedInstitution;
    
    return matchesSearch && matchesField && matchesInstitution;
  });

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Member Directory"
          subtitle="Connect with talented Pakistani professionals and researchers across Korea."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              {/* Search and Filters */}
              <div style={{
                background: 'var(--light-gray)',
                padding: '40px',
                borderRadius: '20px',
                marginBottom: '50px'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px',
                  alignItems: 'end'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      color: 'var(--primary-color)',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      Search Members
                    </label>
                    <input
                      type="text"
                      placeholder="Search by name, expertise, or title..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      color: 'var(--primary-color)',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      Field of Study
                    </label>
                    <select
                      value={selectedField}
                      onChange={(e) => setSelectedField(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                    >
                      <option value="">All Fields</option>
                      {fields.map(field => (
                        <option key={field} value={field}>{field}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      color: 'var(--primary-color)',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      Institution
                    </label>
                    <select
                      value={selectedInstitution}
                      onChange={(e) => setSelectedInstitution(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                    >
                      <option value="">All Institutions</option>
                      {institutions.map(institution => (
                        <option key={institution} value={institution}>{institution}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedField('');
                        setSelectedInstitution('');
                      }}
                      style={{
                        background: 'var(--secondary-color)',
                        color: 'white',
                        border: 'none',
                        padding: '12px 20px',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        width: '100%'
                      }}
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div style={{
                marginBottom: '30px',
                color: 'var(--dark-gray)',
                fontSize: '1.1rem'
              }}>
                Showing {filteredMembers.length} of {members.length} members
              </div>

              {/* Member Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '30px'
              }}>
                {filteredMembers.map((member) => (
                  <div key={member.id} style={{
                    background: 'var(--white-color)',
                    borderRadius: '20px',
                    padding: '30px',
                    border: '2px solid #f0f0f0',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  className="member-card"
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                      <div style={{ fontSize: '4rem' }}>
                        {member.image}
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1.3rem',
                          fontWeight: '700',
                          marginBottom: '5px'
                        }}>
                          {member.name}
                        </h3>
                        <div style={{
                          color: 'var(--secondary-color)',
                          fontSize: '1rem',
                          fontWeight: '600',
                          marginBottom: '8px'
                        }}>
                          {member.title}
                        </div>
                        <div style={{
                          color: 'var(--dark-gray)',
                          fontSize: '0.9rem',
                          marginBottom: '12px'
                        }}>
                          📍 {member.institution}, {member.location}
                        </div>
                        <div style={{
                          color: 'var(--dark-gray)',
                          fontSize: '0.9rem',
                          marginBottom: '15px'
                        }}>
                          🎓 {member.field}
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                          <div style={{
                            color: 'var(--primary-color)',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginBottom: '8px'
                          }}>
                            Expertise:
                          </div>
                          <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '5px'
                          }}>
                            {member.expertise.map((skill, index) => (
                              <span key={index} style={{
                                background: 'var(--accent-color)',
                                color: 'var(--primary-color)',
                                padding: '3px 8px',
                                borderRadius: '10px',
                                fontSize: '0.8rem',
                                fontWeight: '600'
                              }}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          fontSize: '0.8rem',
                          color: 'var(--dark-gray)',
                          marginBottom: '15px'
                        }}>
                          <span>🤝 {member.connections} connections</span>
                          <span>📄 {member.publications} publications</span>
                          <span>🔬 {member.projects} projects</span>
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
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            flex: 1
                          }}>
                            Connect
                          </button>
                          <button style={{
                            background: 'transparent',
                            color: 'var(--primary-color)',
                            border: '2px solid var(--primary-color)',
                            padding: '8px 15px',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            flex: 1
                          }}>
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredMembers.length === 0 && (
                <div style={{
                  textAlign: 'center',
                  padding: '60px',
                  color: 'var(--dark-gray)'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🔍</div>
                  <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>
                    No members found
                  </h3>
                  <p>Try adjusting your search criteria or clearing filters.</p>
                </div>
              )}
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .member-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: var(--secondary-color);
        }
      `}</style>
    </>
  );
}
