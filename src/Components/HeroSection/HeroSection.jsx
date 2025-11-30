import React from 'react';
import { Container } from 'react-bootstrap';
import { m } from 'framer-motion';
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
      className="relative min-h-screen flex items-center bg-white pt-24"
    >
      <Container>
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <m.div
            className="w-full md:w-1/2"
            {...fadeIn}
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
            <p className="font-serif text-lg text-gray-700 mb-4 max-w-xl">
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

          {/* Right Column - Analytics card */}
          <m.div
            className="w-full md:w-1/2 mt-10 md:mt-0"
            {...fadeIn}
          >
            <div className="relative w-full max-w-md">
              {/* Soft glow behind the card */}
              <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

              {/* Card */}
              <div className="relative rounded-3xl border border-slate-200/60 bg-[#020617] shadow-2xl p-5 md:p-6">
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
                    src="/assets/img/data.png"
                    alt="Data analytics dashboard"
                    className="h-auto w-full object-cover"
                  />
                </div>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-500">
                    Power BI
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500">
                    Tableau
                  </span>
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-500">
                    Data Modeling
                  </span>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
