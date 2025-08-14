'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    location: '',
    occupation: '',
    university: '',
    yearsInKorea: '',
    volunteerAreas: [] as string[],
    skills: [] as string[],
    availability: [] as string[],
    hoursPerWeek: '',
    previousExperience: '',
    motivation: '',
    languages: [] as string[],
    preferredRole: '',
    startDate: '',
    additionalInfo: ''
  });

  const volunteerAreas = [
    {
      name: 'Event Organization',
      icon: '🎪',
      description: 'Help organize community events, workshops, and networking sessions',
      tasks: ['Event planning', 'Venue coordination', 'Guest management', 'Setup and breakdown'],
      timeCommitment: 'Flexible, event-based',
      skills: ['Organization', 'Communication', 'Time management']
    },
    {
      name: 'Mentorship Program',
      icon: '👥',
      description: 'Guide new arrivals and fresh graduates in their Korean journey',
      tasks: ['One-on-one mentoring', 'Career guidance', 'Cultural orientation', 'Language practice'],
      timeCommitment: '2-4 hours per week',
      skills: ['Empathy', 'Communication', 'Experience in Korea']
    },
    {
      name: 'Social Media & Marketing',
      icon: '📱',
      description: 'Create content and manage our online presence',
      tasks: ['Content creation', 'Social media management', 'Photography', 'Graphic design'],
      timeCommitment: '3-5 hours per week',
      skills: ['Digital marketing', 'Creative skills', 'Social media knowledge']
    },
    {
      name: 'Translation & Documentation',
      icon: '📝',
      description: 'Translate documents and create helpful resources',
      tasks: ['Translation work', 'Document creation', 'Resource development', 'Website content'],
      timeCommitment: '2-3 hours per week',
      skills: ['Bilingual proficiency', 'Writing skills', 'Attention to detail']
    },
    {
      name: 'Research & Advocacy',
      icon: '🔍',
      description: 'Research community issues and support advocacy initiatives',
      tasks: ['Data collection', 'Report writing', 'Policy research', 'Survey development'],
      timeCommitment: '4-6 hours per week',
      skills: ['Research skills', 'Analytical thinking', 'Report writing']
    },
    {
      name: 'Fresh Graduate Support',
      icon: '🎓',
      description: 'Help fresh graduates with career transition and life challenges',
      tasks: ['Career transition support', 'Job search guidance', 'Interview preparation', 'Professional networking'],
      timeCommitment: '3-4 hours per week',
      skills: ['Professional experience', 'Career knowledge', 'Mentoring skills']
    },
    {
      name: 'Professional Development',
      icon: '💼',
      description: 'Support career development and job search activities',
      tasks: ['Resume reviews', 'Interview preparation', 'Networking facilitation', 'Workshop delivery'],
      timeCommitment: '2-4 hours per week',
      skills: ['Professional experience', 'Career knowledge', 'Training ability']
    },
    {
      name: 'Community Outreach',
      icon: '🤝',
      description: 'Connect with local Korean communities and organizations',
      tasks: ['Relationship building', 'Cultural exchange', 'Partnership development', 'Community events'],
      timeCommitment: 'Flexible',
      skills: ['Interpersonal skills', 'Cultural sensitivity', 'Networking']
    }
  ];

  const skillOptions = [
    'Event Planning', 'Public Speaking', 'Teaching/Training', 'Writing', 'Translation',
    'Graphic Design', 'Photography', 'Video Editing', 'Social Media', 'Web Development',
    'Data Analysis', 'Research', 'Project Management', 'Leadership', 'Mentoring',
    'Customer Service', 'Marketing', 'Legal Knowledge', 'Medical Knowledge', 'Engineering',
    'Finance', 'Art/Creative', 'Music', 'Sports', 'Cooking', 'Other'
  ];

  const currentVolunteers = [
    {
      name: 'Ayesha Khan',
      role: 'Event Coordinator',
      image: '👩‍💼',
      quote: 'Volunteering with PAACK has been incredibly rewarding. I love helping organize events that bring our community together.',
      area: 'Event Organization',
      duration: '2 years'
    },
    {
      name: 'Ahmed Ali',
      role: 'Career Mentor',
      image: '👨‍🎓',
      quote: 'Being a mentor allows me to give back to the community that supported me when I first arrived in Korea.',
      area: 'Mentorship Program',
      duration: '1.5 years'
    },
    {
      name: 'Fatima Sheikh',
      role: 'Content Creator',
      image: '👩‍🎨',
      quote: 'Creating content for PAACK helps me use my creative skills while supporting our community\'s visibility.',
      area: 'Social Media & Marketing',
      duration: '1 year'
    },
    {
      name: 'Omar Hassan',
      role: 'Research Coordinator',
      image: '👨‍🔬',
      quote: 'Research work with PAACK gives me the opportunity to contribute to evidence-based community advocacy.',
      area: 'Research & Advocacy',
      duration: '2.5 years'
    }
  ];

  const impactStats = [
    { number: '150+', label: 'Active Volunteers', icon: '🙋‍♀️' },
    { number: '2,000+', label: 'Hours Volunteered Monthly', icon: '⏰' },
    { number: '500+', label: 'Community Members Helped', icon: '🤝' },
    { number: '50+', label: 'Events Organized Annually', icon: '🎉' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMultiSelectChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).includes(value)
        ? (prev[field] as string[]).filter((item: string) => item !== value)
        : [...(prev[field] as string[]), value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer application submitted:', formData);
    alert('Thank you for your volunteer application! We will contact you within 3 business days to discuss next steps.');
  };

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Volunteer With Us"
          subtitle="Make a difference in the Pakistani community in South Korea through meaningful volunteer work."
        />

        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              {/* Impact Statistics */}
              <div style={{ marginBottom: '80px', textAlign: 'center' }}>
                <h2 style={{ 
                  color: 'var(--primary-color)', 
                  fontSize: '2.5rem', 
                  marginBottom: '20px' 
                }}>
                  Our Volunteer Impact
                </h2>
                <p style={{ 
                  color: 'var(--dark-gray)', 
                  fontSize: '1.2rem', 
                  marginBottom: '50px',
                  maxWidth: '600px',
                  margin: '0 auto 50px auto'
                }}>
                  Join our passionate community of volunteers making real impact.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '30px'
                }}>
                  {impactStats.map((stat, index) => (
                    <div key={index} style={{
                      background: 'var(--white-color)',
                      padding: '40px 20px',
                      borderRadius: '15px',
                      textAlign: 'center',
                      border: '2px solid #f0f0f0',
                      transition: 'all 0.3s ease'
                    }}
                    className="impact-card"
                    >
                      <div style={{ fontSize: '3rem', marginBottom: '15px' }}>
                        {stat.icon}
                      </div>
                      <div style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: '700', 
                        color: 'var(--secondary-color)',
                        marginBottom: '10px'
                      }}>
                        {stat.number}
                      </div>
                      <h3 style={{ color: 'var(--primary-color)', fontSize: '1.1rem' }}>
                        {stat.label}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volunteer Areas */}
              <div style={{ marginBottom: '80px' }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  fontSize: '2.2rem', 
                  marginBottom: '50px' 
                }}>
                  Volunteer Opportunities
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                  gap: '30px'
                }}>
                  {volunteerAreas.map((area, index) => (
                    <div key={index} style={{
                      background: 'var(--white-color)',
                      borderRadius: '20px',
                      padding: '30px',
                      border: '2px solid #f0f0f0',
                      transition: 'all 0.3s ease'
                    }}
                    className="volunteer-card"
                    >
                      <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '15px' }}>
                          {area.icon}
                        </div>
                        <h3 style={{
                          color: 'var(--primary-color)',
                          fontSize: '1.5rem',
                          fontWeight: '700',
                          marginBottom: '10px'
                        }}>
                          {area.name}
                        </h3>
                        <p style={{
                          color: 'var(--dark-gray)',
                          lineHeight: '1.6'
                        }}>
                          {area.description}
                        </p>
                      </div>
                      
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{
                          color: 'var(--secondary-color)',
                          fontSize: '1rem',
                          fontWeight: '600',
                          marginBottom: '10px'
                        }}>
                          Typical Tasks:
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {area.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginBottom: '5px',
                              color: 'var(--dark-gray)',
                              fontSize: '0.9rem'
                            }}>
                              <span style={{ 
                                color: 'var(--secondary-color)', 
                                marginRight: '8px'
                              }}>
                                •
                              </span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div style={{ marginBottom: '20px' }}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginBottom: '10px'
                        }}>
                          <span style={{
                            color: 'var(--primary-color)',
                            fontWeight: '600',
                            fontSize: '0.9rem'
                          }}>
                            Time Commitment:
                          </span>
                          <span style={{
                            color: 'var(--secondary-color)',
                            fontWeight: '600',
                            fontSize: '0.9rem'
                          }}>
                            {area.timeCommitment}
                          </span>
                        </div>
                        <div>
                          <span style={{
                            color: 'var(--primary-color)',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            marginBottom: '5px',
                            display: 'block'
                          }}>
                            Helpful Skills:
                          </span>
                          <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '5px'
                          }}>
                            {area.skills.map((skill, skillIndex) => (
                              <span key={skillIndex} style={{
                                background: 'var(--accent-color)',
                                color: 'var(--primary-color)',
                                padding: '2px 8px',
                                borderRadius: '10px',
                                fontSize: '0.8rem',
                                fontWeight: '600'
                              }}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setFormData(prev => ({ 
                          ...prev, 
                          volunteerAreas: prev.volunteerAreas.includes(area.name)
                            ? prev.volunteerAreas.filter(a => a !== area.name)
                            : [...prev.volunteerAreas, area.name]
                        }))}
                        style={{
                          width: '100%',
                          background: formData.volunteerAreas.includes(area.name) 
                            ? 'var(--secondary-color)' 
                            : 'transparent',
                          color: formData.volunteerAreas.includes(area.name) 
                            ? 'white' 
                            : 'var(--secondary-color)',
                          border: '2px solid var(--secondary-color)',
                          padding: '12px',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        className="select-area-btn"
                      >
                        {formData.volunteerAreas.includes(area.name) ? 'Selected ✓' : 'Select This Area'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volunteer Testimonials */}
              <div style={{ marginBottom: '80px' }}>
                <h2 style={{ 
                  textAlign: 'center', 
                  color: 'var(--primary-color)', 
                  fontSize: '2.2rem', 
                  marginBottom: '20px' 
                }}>
                  Hear From Our Volunteers
                </h2>
                <p style={{ 
                  textAlign: 'center', 
                  color: 'var(--dark-gray)', 
                  fontSize: '1.1rem', 
                  marginBottom: '40px',
                  maxWidth: '600px',
                  margin: '0 auto 40px auto'
                }}>
                  Discover what motivates our dedicated volunteers and the impact they&apos;re making.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '25px'
                }}>
                  {currentVolunteers.map((volunteer, index) => (
                    <div key={index} style={{
                      background: 'var(--white-color)',
                      padding: '30px',
                      borderRadius: '15px',
                      border: '1px solid #e0e0e0',
                      textAlign: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    className="testimonial-card"
                    >
                      <div style={{ fontSize: '4rem', marginBottom: '15px' }}>
                        {volunteer.image}
                      </div>
                      <h3 style={{
                        color: 'var(--primary-color)',
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        marginBottom: '5px'
                      }}>
                        {volunteer.name}
                      </h3>
                      <div style={{
                        color: 'var(--secondary-color)',
                        fontWeight: '600',
                        marginBottom: '15px'
                      }}>
                        {volunteer.role}
                      </div>
                      <p style={{
                        color: 'var(--dark-gray)',
                        fontStyle: 'italic',
                        lineHeight: '1.6',
                        marginBottom: '15px'
                      }}>
                        &ldquo;{volunteer.quote}&rdquo;
                      </p>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.9rem'
                      }}>
                        <span style={{
                          background: 'var(--accent-color)',
                          color: 'var(--primary-color)',
                          padding: '3px 8px',
                          borderRadius: '10px',
                          fontSize: '0.8rem',
                          fontWeight: '600'
                        }}>
                          {volunteer.area}
                        </span>
                        <span style={{
                          color: 'var(--dark-gray)',
                          fontSize: '0.9rem'
                        }}>
                          {volunteer.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volunteer Application Form */}
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
                  Volunteer Application
                </h2>
                <p style={{ 
                  textAlign: 'center', 
                  color: 'var(--dark-gray)', 
                  fontSize: '1.1rem', 
                  marginBottom: '40px',
                  maxWidth: '600px',
                  margin: '0 auto 40px auto'
                }}>
                  Ready to make a difference? Tell us about yourself and how you&apos;d like to contribute.
                </p>

                <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto' }}>
                  {/* Personal Information */}
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

                  {/* Skills Section */}
                  <div style={{ marginBottom: '30px' }}>
                    <label style={{
                      display: 'block',
                      color: 'var(--primary-color)',
                      fontWeight: '600',
                      marginBottom: '15px'
                    }}>
                      Your Skills (Select all that apply)
                    </label>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                      gap: '10px'
                    }}>
                      {skillOptions.map((skill, index) => (
                        <label key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="checkbox"
                            checked={formData.skills.includes(skill)}
                            onChange={() => handleMultiSelectChange('skills', skill)}
                            style={{ marginRight: '8px' }}
                          />
                          <span style={{ color: 'var(--dark-gray)', fontSize: '0.9rem' }}>{skill}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Availability Section */}
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
                        How many hours per week can you volunteer? *
                      </label>
                      <select
                        name="hoursPerWeek"
                        value={formData.hoursPerWeek}
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
                        <option value="">Select hours per week</option>
                        <option value="1-2">1-2 hours</option>
                        <option value="3-5">3-5 hours</option>
                        <option value="6-10">6-10 hours</option>
                        <option value="11-15">11-15 hours</option>
                        <option value="16+">16+ hours</option>
                      </select>
                    </div>
                    <div>
                      <label style={{
                        display: 'block',
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        marginBottom: '8px'
                      }}>
                        When can you start?
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
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

                  {/* Motivation Section */}
                  <div style={{ marginBottom: '30px' }}>
                    <label style={{
                      display: 'block',
                      color: 'var(--primary-color)',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      Why do you want to volunteer with PAACK? *
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Tell us what motivates you to volunteer and how you hope to contribute"
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
                      Submit Volunteer Application
                    </button>
                  </div>
                </form>
              </div>

              {/* Getting Started Guide */}
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
                  Getting Started as a Volunteer
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
                    <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>We review your application and match you with opportunities</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>2️⃣</div>
                    <h3 style={{ color: 'white', marginBottom: '10px' }}>Orientation Session</h3>
                    <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>Attend our volunteer orientation and training</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>3️⃣</div>
                    <h3 style={{ color: 'white', marginBottom: '10px' }}>Team Assignment</h3>
                    <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>Get assigned to your volunteer team and projects</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>4️⃣</div>
                    <h3 style={{ color: 'white', marginBottom: '10px' }}>Start Making Impact</h3>
                    <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>Begin your volunteer journey and make a difference</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />

      <style jsx>{`
        .impact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          border-color: var(--secondary-color);
        }
        .volunteer-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: var(--secondary-color);
        }
        .testimonial-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .select-area-btn:hover {
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
