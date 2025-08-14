'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: 'About Us',
    href: '/about',
    dropdown: [
      { label: 'Our Mission & Vision', href: '/about/mission' },
      { label: 'Our Team', href: '/about/team' },
      { label: 'Our History', href: '/about/history' },
    ],
  },
  {
    label: 'Initiatives',
    href: '/initiatives',
    dropdown: [
      { label: 'Advocacy & Support', href: '/initiatives/advocacy' },
      { label: 'Research & Collaboration', href: '/initiatives/research' },
      { label: 'Career Development', href: '/initiatives/careers' },
      { label: 'Community & Family Support', href: '/initiatives/community' },
    ],
  },
  { label: 'Events', href: '/events' },
  { label: 'Resources', href: '/resources' },
  { label: 'News', href: '/news' },
  {
    label: 'Portal (Members)',
    href: '/portal',
    dropdown: [
      { label: 'Dashboard', href: '/portal/dashboard' },
      { label: 'Member Directory', href: '/portal/directory' },
      { label: 'Collaboration Hub', href: '/portal/collaborate' },
      { label: 'Member Resources', href: '/portal/resources' },
      { label: 'Community Hub', href: '/portal/community' },
    ],
  },
  {
    label: 'Get Involved',
    href: '/get-involved',
    dropdown: [
      { label: 'Become a Member', href: '/get-involved/membership' },
      { label: 'Partner With Us', href: '/get-involved/partner' },
      { label: 'Volunteer', href: '/get-involved/volunteer' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 10 || pathname !== '/');
    };
    updateScrolled();
    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null); // Close dropdowns when menu is toggled
  };

  const handleDropdownClick = (e: React.MouseEvent, label: string) => {
    // Prevent navigation for parent link on mobile if it has a dropdown
    if (window.innerWidth < 992) {
      e.preventDefault();
      setOpenDropdown(openDropdown === label ? null : label);
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="logo" onClick={closeMenu}>
          <svg className="logo-svg" viewBox="0 0 280 45" xmlns="http://www.w3.org/2000/svg">
            {/* Icon: Graduation Cap */}
            <g className="logo-icon">
              <path className="logo-icon-cap" d="M0 15 L22.5 25 L45 15 L22.5 5 Z M5 17 L5 28 C5 28 10 30 22.5 30 C35 30 40 28 40 28 L40 17 L22.5 27 Z"/>
              <path className="logo-icon-tassel" d="M40 17 L40 28 L45 28 L45 17 Z" fill="#006a4e"/>
            </g>
            {/* Text: Pakistan Academic Community Korea */}
            <text className="logo-text" fontSize="14" x="55" y="20">
              <tspan>Pakistan Academic</tspan>
              <tspan x="55" dy="1.2em">Community Korea</tspan>
            </text>
          </svg>
        </Link>

        <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li
                key={item.label}
                className={`${item.dropdown ? 'has-dropdown' : ''} ${
                  openDropdown === item.label ? 'open' : ''
                }`}
              >
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (item.dropdown) handleDropdownClick(e, item.label);
                    else closeMenu();
                  }}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <ul className="dropdown">
                    {item.dropdown.map((dropdownItem) => (
                      <li key={dropdownItem.href}>
                        <Link href={dropdownItem.href} onClick={closeMenu}>
                          {dropdownItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-right">
          <div className="flags">
            <Image src="/flags/pk.svg" alt="Pakistan flag" width={24} height={16} />
            <Image src="/flags/kr.svg" alt="Korea flag" width={24} height={16} />
          </div>
          <button
            className="menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
          >
            &#9776;
          </button>
        </div>
      </div>
    </header>
  );
}
