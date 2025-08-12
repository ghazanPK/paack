import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';

export default function Contact() {
  return (
    <>
      <Header />
      <PageHero 
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions or inquiries."
      />
      <main>

        <section id="contact-content">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Get in Touch</h2>
                <p>
                  We&apos;d love to hear from you! Whether you have questions about membership, 
                  want to collaborate, or need support, we&apos;re here to help.
                </p>
                <ul>
                  <li>
                    <span className="icon">📧</span>
                    <div>
                      <h3>Email</h3>
                      <p>pkacadmia@gmail.com</p>
                    </div>
                  </li>
                  <li>
                    <span className="icon">📍</span>
                    <div>
                      <h3>Location</h3>
                      <p>South Korea</p>
                    </div>
                  </li>
                  <li>
                    <span className="icon">⏰</span>
                    <div>
                      <h3>Response Time</h3>
                      <p>Within 24-48 hours</p>
                    </div>
                  </li>
                  <li>
                    <span className="icon">💼</span>
                    <div>
                      <h3>Connect</h3>
                      <p>Follow us on LinkedIn</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="contact-form">
                <h2>Send a Message</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Enter your full name"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="Enter your email address"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
