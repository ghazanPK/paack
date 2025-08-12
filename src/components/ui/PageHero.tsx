import React from 'react';
import Link from 'next/link';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  isHomePage?: boolean;
  buttonText?: string;
  buttonLink?: string;
  buttonStyle?: 'primary' | 'accent';
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  isHomePage = false, 
  buttonText, 
  buttonLink, 
  buttonStyle = 'accent' 
}) => {
  return (
    <section id="hero" className={isHomePage ? 'hero-full' : 'hero-partial'}>
      <div className="container">
        <div className="hero-content">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
          {buttonText && buttonLink && (
            <Link href={buttonLink} className={`btn ${buttonStyle === 'accent' ? 'btn-accent' : ''}`}>
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
