import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { m } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';
import { Link as ScrollLink } from 'react-scroll';
import SocialIcons from '../SocialIcon/SocialIcons';
import { heroData } from '../../data/portfolioData';
import { fadeIn } from '../../Functions/GlobalAnimations';

const HeroSection = () => {
  const { name, title, tagline, socialLinks } = heroData;

  const socialIconsData = socialLinks.map(link => ({
    link: link.url,
    icon: link.icon
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white pt-24 overflow-hidden"
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Content */}
          <Col lg={6} className="mb-12 lg:mb-0">
            <m.div
              {...fadeIn}
            >
            <p className="font-serif text-sm uppercase tracking-widest text-gray-600 mb-4">
              Hello, I am
            </p>
            <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-darkgray mb-4 leading-tight">
              {name}
            </h1>
            <h2 className="font-serif font-semibold text-2xl md:text-3xl text-cyan-600 mb-6 min-h-[40px]">
              <Typed
                strings={[title, 'BI Specialist', 'Data Storyteller']}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </h2>
            <p className="font-serif text-lg text-gray-700 mb-8 max-w-xl">
              {tagline}
            </p>
            <p className="font-serif text-base md:text-lg text-gray-600 mb-8 max-w-xl">
              With over 5 years of experience in BI and analytics, I design dashboards, data
              models, and reporting workflows that turn noisy datasets into clear, actionable
              stories for decision‑makers.
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
          </Col>

          {/* Right Column - Analytics card */}
          <Col lg={6}>
            <m.div
              className="flex items-center justify-center lg:justify-end"
              {...fadeIn}
            >
            <div className="relative w-full max-w-md z-10">
              {/* Soft glow behind the card */}
              <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />

              {/* Card */}
              <div className="relative rounded-3xl border border-slate-200/60 bg-[#020617] shadow-2xl p-5 md:p-6 transform hover:scale-105 transition-transform duration-500">
                {/* Card top bar */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    analytics_dashboard.png
                  </span>
                </div>

                {/* Analytics image */}
                <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-black">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/data.png`}
                    alt="Data analytics dashboard"
                    className="h-auto w-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-500 border border-cyan-500/20">
                    Power BI
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500 border border-emerald-500/20">
                    Tableau
                  </span>
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-500 border border-indigo-500/20">
                    Data Modeling
                  </span>
                </div>
              </div>
            </div>
            </m.div>
          </Col>
        </Row>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
           <span className="text-xs font-serif tracking-widest text-gray-400 uppercase">Scroll</span>
           <ScrollLink
              to="work"
              smooth={true}
              duration={800}
              className="cursor-pointer animate-bounce"
           >
             <i className="feather-arrow-down text-2xl text-cyan-600"></i>
           </ScrollLink>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
