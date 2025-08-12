import React from 'react';
import Image from 'next/image';
import SimpleHeader from '@/components/layout/SimpleHeader';
import Button from '@/components/ui/Button';

export default function ModularHome() {
  return (
    <>
      <SimpleHeader />
      
      <main className="pt-20">
        {/* Hero Section */
        <section 
          className="h-screen flex items-center justify-center text-white bg-gradient-to-r from-[var(--primary-color)]/80 to-[var(--primary-color)]/80 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 44, 84, 0.8), rgba(13, 44, 84, 0.8)), url('/images/hero-background.jpeg')`
          }}
        >'react';
import Image from 'next/image';
import SimpleHeader from '@/components/layout/SimpleHeader';
import Button from '@/components/ui/Button';

export default function ModularHome() {
  return (
    <>
      <SimpleHeader />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="h-screen flex items-center justify-center text-white bg-gradient-to-r from-[var(--primary-color)]/80 to-[var(--primary-color)]/80 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 44, 84, 0.8), rgba(13, 44, 84, 0.8)), url('https://images.unsplash.com/photo-1526050469386-cc2ff3e4694d?q=80&w=2070&auto=format&fit=crop')`
          }}
        >
          <div className="text-center max-w-4xl px-5">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Connecting Minds, <br />Empowering Futures
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              The premier organization for the Pakistani academic and professional community in South Korea.
            </p>
            <Button variant="accent" href="/get-involved">
              Become a Member
            </Button>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-6xl px-5">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-color)] mb-5">
                  Our Mission
                </h2>
                <p className="text-lg mb-4">
                  The mission of the Pakistani Academic Community Korea (PAACK) is to build 
                  a vibrant and supportive network for Pakistani doctors, researchers, and 
                  students in South Korea.
                </p>
                <p className="text-lg mb-8">
                  Through collaboration, resource sharing, and advocacy, we aim to enhance 
                  the professional success and social well-being of our members.
                </p>
                <Button href="/about">Learn More About Us</Button>
              </div>
              
              <div className="flex-1">
                <Image
                  src="/images/about-image.jpeg"
                  alt="PAACK Community and Mission"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-24 bg-[var(--light-gray)]">
          <div className="container mx-auto max-w-6xl px-5">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-color)] text-center mb-16">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4">
                  Career Development
                </h3>
                <p className="text-gray-600">
                  Providing resources, mentorship, and opportunities to navigate the Korean job market.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4">
                  Research & Collaboration
                </h3>
                <p className="text-gray-600">
                  Fostering networks to connect researchers and promote academic collaboration.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4">
                  Community & Support
                </h3>
                <p className="text-gray-600">
                  Offering support on visa, employment, and social challenges faced by our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section className="py-24 text-center">
          <div className="container mx-auto max-w-6xl px-5">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-color)] mb-6">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Become a member of PAACK to access exclusive resources and connect with 
              Pakistani professionals in Korea.
            </p>
            <Button href="/get-involved">Sign Up for Membership</Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--primary-color)] text-white py-12">
        <div className="container mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">PAACK</h3>
              <p className="text-gray-300 mb-4">
                Connecting minds, empowering futures for the Pakistani academic and 
                professional community in South Korea.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/events" className="hover:text-white">Events</a></li>
                <li><a href="/news" className="hover:text-white">News</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/get-involved" className="hover:text-white">Membership</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center border-t border-white border-opacity-20 pt-8">
            <p className="text-gray-400">&copy; 2025 PAACK. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
