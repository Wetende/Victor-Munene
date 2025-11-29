import React from 'react';
import { Container } from 'react-bootstrap';
import { m } from 'framer-motion';
import SocialIcons from '../SocialIcon/SocialIcons';
import { heroData } from '../../data/portfolioData';
import { fadeIn } from '../../Functions/GlobalAnimations';

const HeroSection = () => {
  const { name, title, tagline, socialLinks, backgroundImage } = heroData;

  const socialIconsData = socialLinks.map(link => ({
    link: link.url,
    icon: link.icon
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white pt-24"
    >
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <m.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-serif text-sm uppercase tracking-widest text-gray-600 mb-4">
              Hello, I am
            </p>
            <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-darkgray mb-4 leading-tight">
              {name}
            </h1>
            <h2 className="font-serif font-semibold text-2xl md:text-3xl text-cyan-600 mb-6">
              {title}
            </h2>
            <p className="font-serif text-lg text-gray-700 mb-8 max-w-lg">
              {tagline}
            </p>
            
            <div className="flex items-center gap-6">
              <SocialIcons
                theme="social-icon-style-12"
                className="justify-start"
                size="md"
                iconColor="dark"
                data={socialIconsData}
              />
            </div>
          </m.div>

          {/* Right Column - Image */}
          <m.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src={backgroundImage}
                alt={name}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </m.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
