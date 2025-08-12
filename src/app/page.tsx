import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FadeInSection from '@/components/ui/FadeInSection';
import PageHero from '@/components/ui/PageHero';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Connecting Minds, Empowering Futures."
          subtitle="The premier organization for the Pakistani academic and professional community in South Korea."
          isHomePage={true}
          buttonText="Become a Member"
          buttonLink="/get-involved"
          buttonStyle="accent"
        />

        <FadeInSection>
          <section id="mission">
            <div className="container">
              <div className="mission-text">
                <h2>Our Mission</h2>
                <p>
                  The mission of the Pakistani Academic Community Korea (PAACK)
                  is to build a vibrant and supportive network for Pakistani
                  doctors, researchers, and students in South Korea. We are
                  dedicated to empowering our community by addressing critical
                  social and academic challenges.
                </p>
                <p>
                  Through collaboration, resource sharing, and advocacy, we aim
                  to enhance the professional success and social well-being of
                  our members, enabling them to thrive in Korea.
                </p>
                <Link href="/about" className="btn">
                  Learn More About Us
                </Link>
              </div>
              <div className="mission-image">
                <Image
                  src="/images/mission-image.jpeg"
                  alt="A diverse group of professionals collaborating"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="pillars">
            <div className="container">
              <h2>What We Do</h2>
              <div className="pillars-grid">
                <div className="pillar-card">
                  <div className="icon">&#128188;</div>
                  <h3>Career Development</h3>
                  <p>
                    Providing resources, mentorship, and opportunities to
                    navigate the Korean job market and advance your career.
                  </p>
                </div>
                <div className="pillar-card">
                  <div className="icon">&#128279;</div>
                  <h3>Research & Collaboration</h3>
                  <p>
                    Fostering a network to connect researchers, share projects,
                    and promote academic collaboration across various fields.
                  </p>
                </div>
                <div className="pillar-card">
                  <div className="icon">&#128101;</div>
                  <h3>Community & Support</h3>
                  <p>
                    Offering support on visa, employment, family integration,
                    and other social challenges faced by the diaspora.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="event">
            <div className="container">
              <div className="event-container">
                <div className="event-details">
                  <span className="event-tag">HAPPENING SOON!</span>
                  <h2>Upcoming Event</h2>
                  <h3>
                    One-Day Conference on Doctors’ Social and Academic Challenges
                  </h3>
                  <ul>
                    <li>
                      <strong>Date:</strong> August 15, 2025
                    </li>
                    <li>
                      <strong>Time:</strong> 4:00 PM - 7:00 PM
                    </li>
                    <li>
                      <strong>Venue:</strong> Changwon University
                    </li>
                  </ul>
                </div>
                <div className="event-cta">
                  <Link href="/events" className="btn btn-accent">
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="join" style={{ backgroundColor: 'var(--light-gray)', textAlign: 'center' }}>
            <div className="container">
              <h2>Join Our Thriving Community</h2>
              <p style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                Become a member of PAACK to access exclusive resources, connect
                with peers and mentors, and contribute to a growing network of
                Pakistani professionals in Korea.
              </p>
              <Link href="/get-involved" className="btn">
                Sign Up for Membership
              </Link>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}
