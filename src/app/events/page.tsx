import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';

export default function Events() {
  return (
    <>
      <Header />
      <PageHero 
        title="Events"
        subtitle="Join our events to network, learn, and grow with the community."
      />
      <main>

        <section id="events-content">
          <div className="container">
            <h2>Upcoming Events</h2>
            <div className="upcoming-event-card">
              <div className="event-details">
                <span className="event-tag">HAPPENING SOON</span>
                <h3>
                  One-Day Conference on Doctors&apos; Social and Academic Challenges
                </h3>
                <ul>
                  <li><strong>Date:</strong> August 15, 2025</li>
                  <li><strong>Time:</strong> 4:00 PM - 7:00 PM (KST)</li>
                  <li><strong>Venue:</strong> Changwon University, Main Auditorium</li>
                </ul>
                <p>
                  Join us for this landmark conference bringing together Pakistani medical professionals, 
                  researchers, and academic leaders in Korea. We&apos;ll address critical challenges, 
                  share success stories, and build collaborative solutions for our community&apos;s advancement.
                </p>
              </div>
              <div className="event-cta">
                <Link href="#" className="btn btn-accent">
                  Register Now - Free
                </Link>
              </div>
            </div>

            <div className="event-stats">
              <div className="stat-card">
                <span className="stat-number">15+</span>
                <span className="stat-label">Events Hosted</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">500+</span>
                <span className="stat-label">Attendees</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">25+</span>
                <span className="stat-label">Expert Speakers</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">8</span>
                <span className="stat-label">Universities</span>
              </div>
            </div>

            <h2>Past Events</h2>
            <div className="past-events-grid">
              <div className="past-event-card">
                <h3>PAACK Inaugural Meeting</h3>
                <p className="date">March 15, 2025</p>
                <p>
                  The founding meeting that established PAACK as the premier organization 
                  for Pakistani professionals in Korea. Over 150 founding members joined 
                  to shape our community&apos;s future.
                </p>
              </div>
              <div className="past-event-card">
                <h3>Career Development Workshop</h3>
                <p className="date">May 20, 2025</p>
                <p>
                  A comprehensive workshop on navigating the Korean job market and 
                  advancing professional careers. Featured panels from industry leaders 
                  and successful Pakistani professionals.
                </p>
              </div>
              <div className="past-event-card">
                <h3>Research Collaboration Summit</h3>
                <p className="date">June 8, 2025</p>
                <p>
                  Connecting Pakistani researchers across Korean universities to foster 
                  interdisciplinary collaboration and joint research initiatives.
                </p>
              </div>
              <div className="past-event-card">
                <h3>Student Mentorship Launch</h3>
                <p className="date">April 12, 2025</p>
                <p>
                  Official launch of our mentorship program connecting senior Pakistani 
                  professionals with students for academic and career guidance.
                </p>
              </div>
              <div className="past-event-card">
                <h3>Cultural Integration Workshop</h3>
                <p className="date">July 3, 2025</p>
                <p>
                  A workshop focused on navigating Korean workplace culture, language 
                  barriers, and building meaningful professional relationships.
                </p>
              </div>
              <div className="past-event-card">
                <h3>Medical Professionals Roundtable</h3>
                <p className="date">May 30, 2025</p>
                <p>
                  Exclusive roundtable discussion for Pakistani medical professionals 
                  addressing licensing, specialization, and career advancement in Korea.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
