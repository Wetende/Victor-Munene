import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Container, Navbar } from 'react-bootstrap';
import { navItems, socialLinks } from '../../data/portfolioData';

const StickyHeader = ({ activeSection, onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    if (onNavClick) onNavClick(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <span className="font-serif font-bold text-2xl text-darkgray">
              Victor
            </span>
          </ScrollLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => handleNavClick(item.id)}
                className={`cursor-pointer font-medium text-sm uppercase tracking-wider transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-cyan-600'
                    : 'text-darkgray hover:text-cyan-600'
                }`}
              >
                {item.label}
              </ScrollLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-darkgray transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-darkgray transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-darkgray transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => handleNavClick(item.id)}
                className={`cursor-pointer font-medium text-sm uppercase tracking-wider transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-cyan-600'
                    : 'text-darkgray hover:text-cyan-600'
                }`}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default StickyHeader;
