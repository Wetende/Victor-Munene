import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element, Events, scrollSpy } from 'react-scroll';

// Components
import StickyHeader from '../Components/StickyHeader/StickyHeader';
import HeroSection from '../Components/HeroSection/HeroSection';
import AboutSection from '../Components/AboutSection/AboutSection';
import ProjectsSection from '../Components/ProjectsSection/ProjectsSection';
import SkillsSection from '../Components/SkillsSection/SkillsSection';
import ContactSection from '../Components/ContactSection/ContactSection';
import { Footer } from '../Components/Footers/Footer';
import SocialIcons from '../Components/SocialIcon/SocialIcons';
import ScrollToTopButton from '../Components/ScrollToTop';

// Data
import { footerData, socialLinks } from '../data/portfolioData';

const HomeNew = (props) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Initialize scroll spy
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    // Handle scroll to update active section
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  const socialIconsData = socialLinks.map(link => ({
    link: link.url,
    icon: link.icon
  }));

  return (
    <div style={props.style}>
      {/* Sticky Header */}
      <StickyHeader
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Hero Section */}
      <Element name="home">
        <HeroSection />
      </Element>

      {/* About Section */}
      <Element name="about">
        <AboutSection />
      </Element>

      {/* Projects Section */}
      <Element name="work">
        <ProjectsSection />
      </Element>

      {/* Skills Section */}
      <Element name="skills">
        <SkillsSection />
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <ContactSection />
      </Element>

      {/* Footer */}
      <Footer className="bg-gray-50 py-12" theme="light">
        <Container>
          <Row>
            <Col lg={4} className="justify-start md:justify-center md:mb-5 flex items-center">
              <span className="font-serif font-semibold text-sm uppercase text-darkgray">
                {footerData.tagline}
              </span>
            </Col>
            <Col lg={4} className="text-center md:mb-5">
              <SocialIcons theme="social-icon-style-12" iconColor="dark" size="md" data={socialIconsData} />
            </Col>
            <Col lg={4} className="text-right justify-end md:justify-center md:text-center flex items-center">
              <p className="font-serif font-semibold text-sm uppercase text-darkgray leading-[30px]">
                {footerData.copyright}
              </p>
            </Col>
          </Row>
        </Container>
      </Footer>
    </div>
  );
};

export default HomeNew;
