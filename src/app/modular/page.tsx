import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';

export default function ModularHome() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Connecting Minds, Empowering Futures."
          subtitle="The premier organization for the Pakistani academic and professional community in South Korea."
          isHomePage={false}
          buttonText="Become a Member"
          buttonLink="/get-involved"
          buttonStyle="accent"
        />

        {/* Mission Section */}
        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                  Our Mission
                </h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                  The mission of the Pakistani Academic Community Korea (PAACK) is to build a vibrant and supportive network for Pakistani doctors, researchers, and students in South Korea.
                </p>
                <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                  Through collaboration, resource sharing, and advocacy, we aim to enhance the professional success and social well-being of our members.
                </p>
                <Link href="/about" className="btn">Learn More About Us</Link>
              </div>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <Image
                  src="/images/about-image.jpeg"
                  alt="PAACK Community and Mission"
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section style={{ padding: '4rem 0', textAlign: 'center', backgroundColor: 'var(--light-gray)' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '1rem' }}>
              Join Our Community
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#666', maxWidth: '700px', margin: '0 auto 1.5rem' }}>
              Become a member of PAACK to access exclusive resources and connect with Pakistani professionals in Korea.
            </p>
            <Link href="/get-involved" className="btn">Sign Up for Membership</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
