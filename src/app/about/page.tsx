import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FadeInSection from '@/components/ui/FadeInSection';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="About PAACK"
          subtitle="The premier organization for the Pakistani academic and professional community in South Korea."
        />
        
        <FadeInSection>
          <section style={{ padding: '100px 0' }}>
            <div className="container">
              <div className="about-grid" style={{ display: 'flex', alignItems: 'center', gap: '80px' }}>
                <div className="about-text" style={{ flex: 1 }}>
                  <h2>Our Story</h2>
                  <p>
                    The Pakistani Academic Community Korea (PAACK) was founded with
                    the vision of creating a thriving network that bridges cultures
                    and facilitates professional growth. We serve as a vital
                    platform for collaboration, advocacy, and community building.
                  </p>
                  <p>
                    Our organization addresses the unique challenges faced by the
                    Pakistani diaspora in Korea while celebrating our shared
                    heritage and contributing to Korean society.
                  </p>
                </div>
                <div className="about-image" style={{ flex: 1 }}>
                  <div style={{ width: '100%', height: '320px', background: 'linear-gradient(135deg, var(--secondary-color), var(--primary-color))', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌟</div>
                      <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>Our Vision</h3>
                      <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>A Thriving Community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}
