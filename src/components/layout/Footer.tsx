import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <h4>PAACK</h4>
            <p>
              Connecting minds, empowering futures for the Pakistani academic
              and professional community in South Korea.
            </p>
            <div className="social-links">
              <Link href="#" title="Facebook" className="social-link facebook">
                <span className="social-icon">f</span>
              </Link>
              <Link href="#" title="LinkedIn" className="social-link linkedin">
                <span className="social-icon">in</span>
              </Link>
              <Link href="#" title="YouTube" className="social-link youtube">
                <span className="social-icon">▶</span>
              </Link>
              <Link href="#" title="TikTok" className="social-link tiktok">
                <span className="social-icon">T</span>
              </Link>
              <Link href="#" title="Instagram" className="social-link instagram">
                <span className="social-icon">◉</span>
              </Link>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/initiatives">Initiatives</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Involved</h4>
            <ul>
              <li>
                <Link href="/get-involved/membership">Membership</Link>
              </li>
              <li>
                <Link href="/get-involved/partner">Partner With Us</Link>
              </li>
              <li>
                <Link href="/get-involved/volunteer">Volunteer</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Portal</h4>
            <ul>
              <li>
                <Link href="/portal/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/portal/directory">Member Directory</Link>
              </li>
              <li>
                <Link href="/portal/collaborate">Collaboration Hub</Link>
              </li>
              <li>
                <Link href="/portal/resources">Member Resources</Link>
              </li>
              <li>
                <Link href="/portal/community">Community Hub</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 PAACK. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;