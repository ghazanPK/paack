import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';

export default function GetInvolved() {
  return (
    <>
      <Header />
      <PageHero 
        title="Get Involved"
        subtitle="Join us in our mission to empower the Pakistani community in South Korea."
      />
      <main>

        <section id="get-involved-content">
          <div className="container">
            <div className="get-involved-grid">
              <div className="get-involved-card">
                <div className="icon">👥</div>
                <h3>Become a Member</h3>
                <p>
                  Join our growing community to access exclusive resources,
                  networking opportunities, and support.
                </p>
                <Link href="#" className="btn">
                  Join Now
                </Link>
              </div>
              <div className="get-involved-card">
                <div className="icon">🤝</div>
                <h3>Partner With Us</h3>
                <p>
                  Collaborate with PAACK to create meaningful impact. We welcome
                  partnerships with organizations and businesses.
                </p>
                <Link href="#" className="btn">
                  Partner
                </Link>
              </div>
              <div className="get-involved-card">
                <div className="icon">🙋‍♀️</div>
                <h3>Volunteer</h3>
                <p>
                  Contribute your time and skills to help build and strengthen
                  our community. Make a difference.
                </p>
                <Link href="#" className="btn">
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
