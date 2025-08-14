'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function Partner() {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    organizationType: '',
    industry: '',
    location: '',
    employeeCount: '',
    partnershipType: '',
    partnershipGoals: [] as string[],
    previousExperience: '',
    proposedContribution: '',
    expectedBenefits: '',
    timeline: '',
    additionalInfo: ''
  });

  const partnershipTypes = [
    {
      name: 'Corporate Partnership',
      value: 'corporate',
      icon: '🏢',
      description: 'For businesses and corporations looking to support community development',
      benefits: [
        'Brand visibility at PAACK events',
        'Access to talented Pakistani professionals',
        'CSR partnership opportunities',
        'Networking with community leaders',
        'Recruitment pipeline access',
        'Marketing collaboration opportunities'
      ],
      examples: ['Event Sponsorship', 'Job Fair Participation', 'Professional Development', 'Scholarship Programs']
    },
    {
      name: 'Educational Partnership',
      value: 'educational',
      icon: '🎓',
      description: 'For universities, research institutions, and educational organizations',
      benefits: [
        'Research collaboration opportunities',
        'Student exchange programs',
        'Academic conference partnerships',
        'Joint research projects',
        'Faculty exchange initiatives',
        'Educational resource sharing'
      ],
      examples: ['Research Collaboration', 'Student Programs', 'Academic Events', 'Knowledge Exchange']
    },
    {
      name: 'Non-Profit Partnership',
      value: 'nonprofit',
      icon: '🤝',
      description: 'For NGOs, community organizations, and social impact initiatives',
      benefits: [
        'Community outreach programs',
        'Joint advocacy initiatives',
        'Resource sharing opportunities',
        'Volunteer program collaboration',
        'Social impact projects',
        'Awareness campaigns'
      ],
      examples: ['Community Service', 'Advocacy Programs', 'Social Initiatives', 'Volunteer Projects']
    },
    {
      name: 'Government Partnership',
      value: 'government',
      icon: '🏛️',
      description: 'For government agencies and public sector organizations',
      benefits: [
        'Policy consultation opportunities',
        'Community liaison services',
        'Cultural exchange programs',
        'Integration support initiatives',
        'Public service collaboration',
        'Diplomatic engagement'
      ],
      examples: ['Policy Advisory', 'Integration Programs', 'Cultural Events', 'Public Services']
    }
  ];

  const partnershipGoalOptions = [
    'Community Development',
    'Professional Networking',
    'Educational Advancement',
    'Research Collaboration',
    'Cultural Exchange',
    'Social Impact',
    'Business Development',
    'Talent Acquisition',
    'Brand Awareness',
    'CSR Initiatives'
  ];

  const currentPartners = [
    {
      name: 'Seoul National University',
      type: 'Educational',
      logo: '🎓',
      description: 'Research collaboration and student support programs',
      partnership: 'Academic Partnership'
    },
    {
      name: 'Samsung Electronics',
      type: 'Corporate',
      logo: '📱',
      description: 'Professional development and recruitment initiatives',
      partnership: 'Corporate Partnership'
    },
    {
      name: 'Korean Ministry of Education',
      type: 'Government',
      logo: '🏛️',
      description: 'Educational policy consultation and student services',
      partnership: 'Government Partnership'
    },
    {
      name: 'Pakistan Embassy Seoul',
      type: 'Diplomatic',
      logo: '🇵🇰',
      description: 'Consular services and community support',
      partnership: 'Diplomatic Partnership'
    },
    {
      name: 'Korea-Pakistan Friendship Association',
      type: 'Non-Profit',
      logo: '🤝',
      description: 'Cultural exchange and community events',
      partnership: 'Non-Profit Partnership'
    },
    {
      name: 'LG Corporation',
      type: 'Corporate',
      logo: '🏢',
      description: 'Innovation projects and professional mentorship',
      partnership: 'Corporate Partnership'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGoalChange = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      partnershipGoals: prev.partnershipGoals.includes(goal)
        ? prev.partnershipGoals.filter(g => g !== goal)
        : [...prev.partnershipGoals, goal]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership application submitted:', formData);
    alert('Thank you for your partnership application! We will review and contact you within 5 business days.');
  };

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Partner With Us"
          subtitle="Join us in empowering the Pakistani community in South Korea through strategic partnerships."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              {/* Partnership Value Proposition */}
              <div style={{ marginBottom: '80px' }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  fontSize: '2.5rem', 
                  marginBottom: '20px' 
                }}>
                  Why Partner With PAACK?
                </h2>
                <p style={{ 
                  textAlign: 'center', 
                  color: 'var(--dark-gray)', 
                  fontSize: '1.2rem', 
                  marginBottom: '50px',
                  maxWidth: '700px',
                  margin: '0 auto 50px auto'
                }}>
                  Partner with us to access a vibrant community of skilled professionals, 
                  contribute to meaningful social impact, and build lasting relationships.
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '30px',
                  marginBottom: '60px'
                }}>
                  <div style={{
                    background: 'var(--white-color)',
                    padding: '40px',
                    borderRadius: '15px',
                    textAlign: 'center',
                    border: '2px solid #f0f0f0',
                    transition: 'all 0.3s ease'
                  }}
                  className="value-card"
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--secondary-color)' }}>
                      500+
                    </div>
                    <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>
                      Active Members
                    </h3>
                    <p style={{ color: 'var(--dark-gray)', lineHeight: '1.6' }}>
                      Access a network of highly skilled Pakistani professionals across various industries
                    </p>
                  </div>
                  <div style={{
                    background: 'var(--white-color)',
                    padding: '40px',
                    borderRadius: '15px',
                    textAlign: 'center',
                    border: '2px solid #f0f0f0',
                    transition: 'all 0.3s ease'
                  }}
                  className="value-card"
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--secondary-color)' }}>
                      50+
                    </div>
                    <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>
                      Partner Organizations
                    </h3>
                    <p style={{ color: 'var(--dark-gray)', lineHeight: '1.6' }}>
                      Join a prestigious network of partner organizations making real impact
                    </p>
                  </div>
                  <div style={{
                    background: 'var(--white-color)',
                    padding: '40px',
                    borderRadius: '15px',
                    textAlign: 'center',
                    border: '2px solid #f0f0f0',
                    transition: 'all 0.3s ease'
                  }}
                  className="value-card"
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--secondary-color)' }}>
                      100+
                    </div>
                    <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>
                      Events Annually
                    </h3>
                    <p style={{ color: 'var(--dark-gray)', lineHeight: '1.6' }}>
                      Participate in diverse events reaching thousands of community members
                    </p>
                  </div>
                </div>
              </div>

              {/* Partnership Types */}
              <div style={{ marginBottom: '80px' }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  fontSize: '2.2rem', 
                  marginBottom: '50px' 
                }}>
                  Partnership Opportunities
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                  gap: '30px'
                }}>
                  {partnershipTypes.map((type, index) => (
                    <div key={index} style={{
                      background: 'var(--white-color)',
                      borderRadius: '20px',
                      padding: '40px',
                      border: '2px solid #f0f0f0',
                      transition: 'all 0.3s ease'
                    }}
                    className="partnership-card"
                    >
                      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '15px' }}>
                          {type.icon}
                        </div>
                        <h3 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1.5rem',
                          fontWeight: '700',
                          marginBottom: '10px'
                        }}>
                          {type.name}
                        </h3>
                        <p style={{
                          color: 'var(--dark-gray)',
                          lineHeight: '1.6'
                        }}>
                          {type.description}
                        </p>
                      </div>
                      
                      <div style={{ marginBottom: '25px' }}>
                        <h4 style={{
                          color: 'var(--secondary-color)',
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          marginBottom: '15px'
                        }}>
                          Partnership Benefits:
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {type.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginBottom: '8px',
                              color: 'var(--dark-gray)',
                              fontSize: '0.9rem'
                            }}>
                              <span style={{ 
                                color: 'var(--secondary-color)', 
                                marginRight: '10px',
                                fontSize: '1rem'
                              }}>
                                ✓
                              </span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div style={{ marginBottom: '25px' }}>
                        <h4 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1rem',
                          fontWeight: '600',
                          marginBottom: '10px'
                        }}>
                          Examples:
                        </h4>
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '8px'
                        }}>
                          {type.examples.map((example, exampleIndex) => (
                            <span key={exampleIndex} style={{
                              background: 'var(--accent-color)',
                              color: 'var(--primary-color)',
                              padding: '4px 10px',
                              borderRadius: '12px',
                              fontSize: '0.8rem',
                              fontWeight: '600'
                            }}>
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => setFormData(prev => ({ ...prev, partnershipType: type.value }))}
                        style={{
                          width: '100%',
                          background: 'var(--secondary-color)',
                          color: 'white',
                          border: 'none',
                          padding: '12px',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        className="select-partnership-btn"
                      >
                        Select This Partnership
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Partners */}
              <div style={{ marginBottom: '80px' }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  fontSize: '2.2rem', 
                  marginBottom: '20px' 
                }}>
                  Our Current Partners
                </h2>
                <p style={{ 
                  textAlign: 'center', 
                  color: 'var(--dark-gray)', 
                  fontSize: '1.1rem', 
                  marginBottom: '40px',
                  maxWidth: '600px',
                  margin: '0 auto 40px auto'
                }}>
                  Join these prestigious organizations in supporting the Pakistani community in Korea.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '25px'
                }}>
                  {currentPartners.map((partner, index) => (
                    <div key={index} style={{
                      background: 'var(--white-color)',
                      padding: '25px',
                      borderRadius: '15px',
                      border: '1px solid #e0e0e0',
                      textAlign: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    className="partner-card"
                    >
                      <div style={{ fontSize: '3rem', marginBottom: '15px' }}>
                        {partner.logo}
                      </div>
                      <h3 style={{
                        color: 'var(--primary-color)',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        marginBottom: '8px'
                      }}>
                        {partner.name}
                      </h3>
                      <div style={{
                        background: 'var(--accent-color)',
                        color: 'var(--primary-color)',
                        padding: '3px 10px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        display: 'inline-block',
                        marginBottom: '10px'
                      }}>
                        {partner.type}
                      </div>
                      <p style={{
                        color: 'var(--dark-gray)',
                        fontSize: '0.9rem',
                        lineHeight: '1.5'
                      }}>
                        {partner.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partnership Application Form */}
              <div style={{
                background: 'var(--light-gray)',
                padding: '60px',
                borderRadius: '20px',
                marginBottom: '60px'
              }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  fontSize: '2.2rem', 
                  marginBottom: '20px' 
                }}>
                  Partnership Application
                </h2>
                <p style={{ 
                  textAlign: 'center', 
                  color: 'var(--dark-gray)', 
                  fontSize: '1.1rem', 
                  marginBottom: '40px',
                  maxWidth: '600px',
                  margin: '0 auto 40px auto'
                }}>
                  Tell us about your organization and how you&apos;d like to partner with PAACK.
                </p>

                <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '25px',
                    marginBottom: '30px'
                  }}>
                    <div>
                      <label style={{
                        display: 'block',
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        marginBottom: '8px'
                      }}>
                        Organization Name *
                      </label>
                      <input
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleInputChange}
                        required
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
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '2px solid #e0e0e0',
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '25px',
                    marginBottom: '30px'
                  }}>
                    <div>
                      <label style={{
                        display: 'block',
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        marginBottom: '8px'
                      }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
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
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '2px solid #e0e0e0',
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '25px',
                    marginBottom: '30px'
                  }}>
                    <div>
                      <label style={{
                        display: 'block',
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        marginBottom: '8px'
                      }}>
                        Organization Type *
                      </label>
                      <select
                        name="organizationType"
                        value={formData.organizationType}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '2px solid #e0e0e0',
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                      >
                        <option value="">Select organization type</option>
                        <option value="corporation">Corporation/Business</option>
                        <option value="university">University/Research Institution</option>
                        <option value="nonprofit">Non-profit Organization</option>
                        <option value="government">Government Agency</option>
                        <option value="embassy">Embassy/Consulate</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{
                        display: 'block',
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        marginBottom: '8px'
                      }}>
                        Industry/Sector
                      </label>
                      <input
                        type="text"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        placeholder="e.g., Technology, Education, Healthcare"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '2px solid #e0e0e0',
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <label style={{
                      display: 'block',
                      color: 'var(--primary-color)',
                      fontWeight: '600',
                      marginBottom: '15px'
                    }}>
                      Partnership Goals (Select all that apply)
                    </label>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '10px'
                    }}>
                      {partnershipGoalOptions.map((goal, index) => (
                        <label key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="checkbox"
                            checked={formData.partnershipGoals.includes(goal)}
                            onChange={() => handleGoalChange(goal)}
                            style={{ marginRight: '8px' }}
                          />
                          <span style={{ color: 'var(--dark-gray)' }}>{goal}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <label style={{
                      display: 'block',
                      color: 'var(--primary-color)',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      What can your organization contribute to this partnership?
                    </label>
                    <textarea
                      name="proposedContribution"
                      value={formData.proposedContribution}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Describe what your organization can offer (resources, expertise, funding, etc.)"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <label style={{
                      display: 'block',
                      color: 'var(--primary-color)',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      What do you hope to achieve through this partnership?
                    </label>
                    <textarea
                      name="expectedBenefits"
                      value={formData.expectedBenefits}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Describe your expected outcomes and benefits from partnering with PAACK"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <button
                      type="submit"
                      style={{
                        background: 'var(--secondary-color)',
                        color: 'white',
                        border: 'none',
                        padding: '15px 40px',
                        borderRadius: '25px',
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      className="submit-btn"
                    >
                      Submit Partnership Application
                    </button>
                  </div>
                </form>
              </div>

              {/* Next Steps */}
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
                  Partnership Process
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '30px',
                  marginTop: '40px'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>1️⃣</div>
                    <h3 style={{ color: 'white', marginBottom: '10px' }}>Application Review</h3>
                    <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>We review your application within 5 business days</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>2️⃣</div>
                    <h3 style={{ color: 'white', marginBottom: '10px' }}>Discovery Meeting</h3>
                    <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>Schedule a meeting to discuss partnership details</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>3️⃣</div>
                    <h3 style={{ color: 'white', marginBottom: '10px' }}>Partnership Agreement</h3>
                    <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>Formalize partnership terms and begin collaboration</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>4️⃣</div>
                    <h3 style={{ color: 'white', marginBottom: '10px' }}>Implementation</h3>
                    <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>Launch partnership activities and track success</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          border-color: var(--secondary-color);
        }
        .partnership-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: var(--secondary-color);
        }
        .partner-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .select-partnership-btn:hover {
          background: #007a56;
          transform: translateY(-2px);
        }
        .submit-btn:hover {
          background: #007a56;
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}
