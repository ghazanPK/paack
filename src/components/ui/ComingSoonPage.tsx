import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';

interface ComingSoonPageProps {
  title: string;
  subtitle?: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ title, subtitle }) => {
  return (
    <>
      <Header />
      <main>
        <PageHero 
          title={title}
          subtitle={subtitle || "This page is currently under development."}
        />
        
        <section style={{ padding: '100px 0', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--primary-color)' }}>
              Coming Soon
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--dark-gray)', maxWidth: '600px', margin: '0 auto' }}>
              We&apos;re working hard to bring you this content. Please check back soon for updates.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ComingSoonPage;
