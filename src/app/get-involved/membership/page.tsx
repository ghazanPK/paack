'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function Membership() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentLocation: '',
    profession: '',
    organization: '',
    educationLevel: '',
    fieldOfStudy: '',
    membershipType: 'regular',
    interests: [] as string[],
    howDidYouHear: '',
    motivation: ''
  });

  const membershipTypes = [
    {
      name: 'Regular Membership',
      value: 'regular',
      price: 'Free',
      duration: 'Annual',
      description: 'Perfect for Pakistani professionals and academics living in Korea',
      features: [
        'Access to member directory',
        'Monthly newsletters',
        'Community events invitation',
        'Basic support services',
        'Online forums access',
        'Resource library access'
      ],
      recommended: true
    },
    {
      name: 'Fresh Graduate Membership',
      value: 'graduate',
      price: 'Free',
      duration: 'Annual',
      description: 'Designed for Pakistani fresh graduates starting their careers in Korea',
      features: [
        'All regular membership benefits',
        'Career transition support',
        'Job search assistance',
        'Resume review services',
        'Interview preparation',
        'Networking with industry professionals',
        'Mentorship program access'
      ],
      recommended: false
    },
    {
      name: 'Family Membership',
      value: 'family',
      price: 'Free',
      duration: 'Annual',
      description: 'Comprehensive support for Pakistani families living in Korea',
      features: [
        'All regular membership benefits',
        'Family-oriented events',
        'Children&apos;s education support',
        'Spouse integration programs',
        'Cultural activities for kids',
        'Family counseling services'
      ],
      recommended: false
    }
  ];

  const interestOptions = [
    'Professional Networking',
    'Research Collaboration',
    'Career Development',
    'Cultural Events',
    'Community Service',
    'Education Support',
    'Healthcare Navigation',
    'Immigration Assistance',
    'Business Development',
    'Social Activities'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Membership application submitted:', formData);
    alert('Thank you for your membership application! We will review and contact you soon.');
  };

  const memberBenefits = [
    {
      icon: '🌐',
      title: 'Global Network',
      description: 'Connect with 500+ Pakistani professionals across Korea'
    },
    {
      icon: '🎯',
      title: 'Career Advancement',
      description: 'Access exclusive job opportunities and career guidance'
    },
    {
      icon: '🛡️',
      title: 'Support Services',
      description: 'Get help with visas, healthcare, and daily life challenges'
    },
    {
      icon: '📚',
      title: 'Knowledge Sharing',
      description: 'Access research opportunities and educational resources'
    },
    {
      icon: '🎉',
      title: 'Cultural Connection',
      description: 'Participate in cultural events and community celebrations'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Support',
      description: 'Special programs for spouses and children integration'
    }
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Become a Member"
          subtitle="Join our thriving community of Pakistani professionals and academics in Korea."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              {/* Member Benefits */}
              <div style={{ marginBottom: '80px' }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  fontSize: '2.5rem', 
                  marginBottom: '20px' 
                }}>
                  Why Join PAACK?
                </h2>
                <p style={{ 
                  textAlign: 'center', 
                  color: 'var(--dark-gray)', 
                  fontSize: '1.2rem', 
                  marginBottom: '50px',
                  maxWidth: '700px',
                  margin: '0 auto 50px auto'
                }}>
                  As a PAACK member, you&apos;ll be part of a supportive community that understands 
                  your unique challenges and celebrates your successes.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '30px',
                  marginBottom: '40px'
                }}>
                  {memberBenefits.map((benefit, index) => (
                    <div key={index} style={{
                      background: 'var(--white-color)',
                      padding: '30px',
                      borderRadius: '15px',
                      textAlign: 'center',
                      border: '2px solid #f0f0f0',
                      transition: 'all 0.3s ease'
                    }}
                    className="benefit-card"
                    >
                      <div style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        {benefit.icon}
                      </div>
                      <h3 style={{
                        color: 'var(--primary-color)',
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        marginBottom: '15px'
                      }}>
                        {benefit.title}
                      </h3>
                      <p style={{
                        color: 'var(--dark-gray)',
                        lineHeight: '1.6'
                      }}>
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Membership Types */}
              <div style={{ marginBottom: '80px' }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  fontSize: '2.2rem', 
                  marginBottom: '50px' 
                }}>
                  Choose Your Membership Type
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '30px'
                }}>
                  {membershipTypes.map((type, index) => (
                    <div key={index} style={{
                      background: 'var(--white-color)',
                      borderRadius: '20px',
                      padding: '40px',
                      border: type.recommended ? '3px solid var(--secondary-color)' : '2px solid #f0f0f0',
                      position: 'relative',
                      transition: 'all 0.3s ease'
                    }}
                    className="membership-card"
                    >
                      {type.recommended && (
                        <div style={{
                          position: 'absolute',
                          top: '-15px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'var(--secondary-color)',
                          color: 'white',
                          padding: '8px 20px',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          fontWeight: '600'
                        }}>
                          Most Popular
                        </div>
                      )}
                      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <h3 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1.5rem',
                          fontWeight: '700',
                          marginBottom: '10px'
                        }}>
                          {type.name}
                        </h3>
                        <div style={{
                          fontSize: '2.5rem',
                          fontWeight: '700',
                          color: 'var(--secondary-color)',
                          marginBottom: '5px'
                        }}>
                          {type.price}
                        </div>
                        <div style={{
                          color: 'var(--dark-gray)',
                          fontSize: '0.9rem'
                        }}>
                          {type.duration}
                        </div>
                      </div>
                      <p style={{
                        color: 'var(--dark-gray)',
                        lineHeight: '1.6',
                        marginBottom: '25px',
                        textAlign: 'center'
                      }}>
                        {type.description}
                      </p>
                      <div style={{ marginBottom: '30px' }}>
                        <h4 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          marginBottom: '15px'
                        }}>
                          What&apos;s Included:
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {type.features.map((feature, featureIndex) => (
                            <li key={featureIndex} style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginBottom: '10px',
                              color: 'var(--dark-gray)'
                            }}>
                              <span style={{ 
                                color: 'var(--secondary-color)', 
                                marginRight: '10px',
                                fontSize: '1.2rem'
                              }}>
                                ✓
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={() => setFormData(prev => ({ ...prev, membershipType: type.value }))}
                        style={{
                          width: '100%',
                          background: type.recommended ? 'var(--secondary-color)' : 'var(--primary-color)',
                          color: 'white',
                          border: 'none',
                          padding: '15px',
                          borderRadius: '10px',
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        className="select-membership-btn"
                      >
                        Select This Plan
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Membership Application Form */}
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
                  Membership Application
                </h2>
                <p style={{ 
                  textAlign: 'center', 
                  color: 'var(--dark-gray)', 
                  fontSize: '1.1rem', 
                  marginBottom: '40px',
                  maxWidth: '600px',
                  margin: '0 auto 40px auto'
                }}>
                  Fill out the form below to start your membership application. 
                  All information will be kept confidential and secure.
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
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
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
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
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
                        Current Location in Korea *
                      </label>
                      <select
                        name="currentLocation"
                        value={formData.currentLocation}
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
                        <option value="">Select your city</option>
                        <option value="Seoul">Seoul</option>
                        <option value="Busan">Busan</option>
                        <option value="Incheon">Incheon</option>
                        <option value="Daegu">Daegu</option>
                        <option value="Daejeon">Daejeon</option>
                        <option value="Gwangju">Gwangju</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{
                        display: 'block',
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        marginBottom: '8px'
                      }}>
                        Profession/Occupation *
                      </label>
                      <input
                        type="text"
                        name="profession"
                        value={formData.profession}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., Research Professor, Fresh Graduate, Engineer"
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
                      marginBottom: '8px'
                    }}>
                      Organization/Institution
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="e.g., Seoul National University, Samsung, etc."
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <label style={{
                      display: 'block',
                      color: 'var(--primary-color)',
                      fontWeight: '600',
                      marginBottom: '15px'
                    }}>
                      Areas of Interest (Select all that apply)
                    </label>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '10px'
                    }}>
                      {interestOptions.map((interest, index) => (
                        <label key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestChange(interest)}
                            style={{ marginRight: '8px' }}
                          />
                          <span style={{ color: 'var(--dark-gray)' }}>{interest}</span>
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
                      Why do you want to join PAACK?
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your motivation to join our community..."
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
                      Submit Application
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
                  What Happens Next?
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '30px',
                  marginTop: '40px'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>1️⃣</div>
                    <h3 style={{ color: 'white', marginBottom: '10px' }}>Application Review</h3>
                    <p style={{ opacity: 0.9 }}>We review your application within 48 hours</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>2️⃣</div>
                    <h3 style={{ color: 'white', marginBottom: '10px' }}>Welcome Package</h3>
                    <p style={{ opacity: 0.9 }}>Receive your member welcome email and resources</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>3️⃣</div>
                    <h3 style={{ color: 'white', marginBottom: '10px' }}>Community Access</h3>
                    <p style={{ opacity: 0.9 }}>Get access to member portal and upcoming events</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          border-color: var(--secondary-color);
        }
        .membership-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .select-membership-btn:hover {
          opacity: 0.9;
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
