import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';

export default function News() {
  const newsItems = [
    {
      title: "PAACK Announces One-Day Conference",
      date: "July 30, 2025",
      excerpt: "We're excited to announce our upcoming conference focusing on the social and academic challenges faced by Pakistani doctors in Korea. This landmark event will bring together leading professionals to discuss innovative solutions.",
      category: "Events",
      readTime: "3 min read"
    },
    {
      title: "New Partnership with Korean Medical Association",
      date: "July 15, 2025",
      excerpt: "PAACK has formed a strategic partnership to better support Pakistani medical professionals working in Korea. This collaboration opens new opportunities for professional development and recognition.",
      category: "Partnership",
      readTime: "2 min read"
    },
    {
      title: "Career Development Workshop Success",
      date: "June 10, 2025",
      excerpt: "Our recent career development workshop was attended by over 100 Pakistani professionals, focusing on career advancement strategies. Participants gained valuable insights into the Korean professional landscape.",
      category: "Community",
      readTime: "4 min read"
    },
    {
      title: "Research Collaboration Initiative Launched",
      date: "June 5, 2025",
      excerpt: "PAACK launches a new initiative to connect Pakistani researchers in Korea with international research networks, fostering academic excellence and innovation.",
      category: "Research",
      readTime: "3 min read"
    },
    {
      title: "Student Mentorship Program Expansion",
      date: "May 28, 2025",
      excerpt: "Our mentorship program now serves over 200 Pakistani students across Korean universities, providing academic guidance and cultural support for academic success.",
      category: "Education",
      readTime: "2 min read"
    },
    {
      title: "PAACK Community Reaches 1000 Members",
      date: "May 15, 2025",
      excerpt: "We're proud to announce that PAACK has grown to over 1000 active members, representing the largest Pakistani academic community organization in South Korea.",
      category: "Milestone",
      readTime: "1 min read"
    }
  ];

  return (
    <>
      <Header />
      <PageHero 
        title="News & Updates"
        subtitle="Stay informed with the latest news and announcements from PAACK."
      />
      <main>

        <section id="news-content">
          <div className="container">
            <div className="news-grid">
              {newsItems.map((item, index) => (
                <article key={index} className="news-card">
                  <div className="news-card-header">
                    <span className="news-card-category">{item.category}</span>
                    <div className="news-card-meta">
                      <span className="news-card-date">{item.date}</span>
                      <span className="news-card-read-time">• {item.readTime}</span>
                    </div>
                  </div>
                  <div className="news-card-body">
                    <h2>{item.title}</h2>
                    <p>{item.excerpt}</p>
                    <div className="news-card-footer">
                      <button className="read-more-btn">Read More →</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="newsletter-signup">
              <h2>Stay Connected with PAACK</h2>
              <p>
                Join our newsletter community and never miss important updates, exclusive events, 
                and opportunities from the Pakistani Academic Community in Korea. 
                Get insights delivered directly to your inbox!
              </p>
              <form>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  required
                />
                <button type="submit" className="btn btn-accent">Subscribe Now</button>
              </form>
              <div className="newsletter-stats">
                <span>Join 1000+ members already subscribed</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
