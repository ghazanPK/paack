import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

export default function MissionSection() {
  return (
    <section className="py-24 fade-in-section">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--primary-color)] mb-5 text-center lg:text-left">
              Our Mission
            </h2>
            <p className="text-lg mb-4 max-w-2xl">
              The mission of the Pakistani Academic Community Korea (PAACK) is to build 
              a vibrant and supportive network for Pakistani doctors, researchers, and 
              students in South Korea. We are dedicated to empowering our community by 
              addressing critical social and academic challenges.
            </p>
            <p className="text-lg mb-10 max-w-2xl">
              Through collaboration, resource sharing, and advocacy, we aim to enhance 
              the professional success and social well-being of our members, enabling 
              them to thrive in Korea.
            </p>
            <Button href="/about">Learn More About Us</Button>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative overflow-hidden rounded-lg group">
              <Image
                src="/images/community-image.jpeg"
                alt="PAACK community and mission"
                width={600}
                height={400}
                className="
                  w-full h-auto shadow-[0_15px_30px_rgba(0,0,0,0.1)] 
                  transition-transform duration-300 group-hover:scale-105
                "
              />
              <div className="
                absolute inset-0 border-4 border-[var(--secondary-color)] 
                -top-5 -left-5 rounded-lg -z-10 transition-transform 
                duration-300 group-hover:translate-x-2 group-hover:translate-y-2
              " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
