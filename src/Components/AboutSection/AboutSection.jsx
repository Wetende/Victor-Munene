import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { m } from 'framer-motion';
import { aboutData } from '../../data/portfolioData';
import { fadeIn, fadeInLeft } from '../../Functions/GlobalAnimations';

const AboutSection = () => {
  const { bio, yearsExperience, specializations, backgroundImage } = aboutData;

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 bg-gray-50"
    >
      <Container>
        <Row className="items-center">
          {/* Left Column - Bio */}
          <Col lg={6} className="mb-12 lg:mb-0">
            <m.div {...fadeIn}>
              <p className="font-serif text-sm uppercase tracking-widest text-cyan-600 mb-4">
                About Me
              </p>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-darkgray mb-6 leading-tight">
                Turning Data Into
                <br />
                <span className="text-cyan-600">Business Value</span>
              </h2>
              <p className="font-serif text-lg text-gray-600 leading-relaxed mb-8">
                {bio}
              </p>
              <div className="flex flex-wrap gap-3">
                {specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white text-darkgray text-sm font-medium rounded-full shadow-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </m.div>
          </Col>

          {/* Right Column - Image */}
          <Col lg={6}>
            <m.div
              className="flex items-center justify-center lg:justify-end"
              {...{ ...fadeInLeft, transition: { delay: 0.3, duration: 0.5 } }}
            >
              <div className="relative w-full max-w-md">
                <img
                  src={backgroundImage}
                  alt="About"
                  className="w-full h-auto object-cover rounded-lg shadow-2xl"
                />
                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                  <span className="font-serif text-5xl md:text-6xl font-bold text-cyan-600 leading-none block">
                    {yearsExperience}+
                  </span>
                  <p className="font-serif text-sm text-gray-600 mt-2">
                    Years of Experience
                  </p>
                </div>
              </div>
            </m.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
