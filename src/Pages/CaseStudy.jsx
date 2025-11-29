import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { m } from 'framer-motion';
import { projectsData, footerData, socialLinks } from '../data/portfolioData';
import { Footer } from '../Components/Footers/Footer';
import SocialIcons from '../Components/SocialIcon/SocialIcons';

const CaseStudy = (props) => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const { title, category, caseStudy } = project;
  const { background, methods, results, recommendations } = caseStudy;

  const socialIconsData = socialLinks.map(link => ({
    link: link.url,
    icon: link.icon
  }));

  return (
    <div style={props.style}>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-4">
        <Container>
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-serif font-medium text-darkgray hover:text-cyan-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </Link>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gray-50">
        <Container>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {category.map((cat, index) => (
                <span
                  key={index}
                  className="px-4 py-1 bg-cyan-600 text-white text-sm font-semibold rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-darkgray">
              {title}
            </h1>
          </m.div>
        </Container>
      </section>

      {/* Background Section */}
      <section className="py-16 bg-white">
        <Container>
          <Row className="justify-center">
            <Col lg={8}>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-serif font-bold text-2xl text-darkgray mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-cyan-600 text-white rounded-full text-sm font-bold">1</span>
                  Background
                </h2>
                <div className="space-y-4">
                  {background.map((paragraph, index) => (
                    <p key={index} className="font-serif text-lg text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </m.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Methods Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <Row className="justify-center">
            <Col lg={8}>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-serif font-bold text-2xl text-darkgray mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-cyan-600 text-white rounded-full text-sm font-bold">2</span>
                  Methods
                </h2>
                <p className="font-serif text-lg text-gray-600 leading-relaxed mb-6">
                  {methods.approach}
                </p>
                <div className="flex flex-wrap gap-2">
                  {methods.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white border border-gray-200 text-darkgray text-sm font-medium rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </m.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <Container>
          <Row className="justify-center">
            <Col lg={10}>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-serif font-bold text-2xl text-darkgray mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-cyan-600 text-white rounded-full text-sm font-bold">3</span>
                  Results
                </h2>
                <p className="font-serif text-lg text-gray-600 leading-relaxed mb-8">
                  {results.description}
                </p>
                
                {/* Visualizations Grid */}
                <Row className="g-4">
                  {results.visualizations.map((viz, index) => (
                    <Col key={index} md={6}>
                      <m.div
                        className="rounded-lg overflow-hidden shadow-lg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <img
                          src={viz.src || 'https://via.placeholder.com/800x600'}
                          alt={viz.alt}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                        {viz.caption && (
                          <div className="p-4 bg-gray-50">
                            <p className="font-serif text-sm text-gray-600">{viz.caption}</p>
                          </div>
                        )}
                      </m.div>
                    </Col>
                  ))}
                </Row>
              </m.div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Recommendations Section */}
      <section className="py-16 bg-cyan-50">
        <Container>
          <Row className="justify-center">
            <Col lg={8}>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-serif font-bold text-2xl text-darkgray mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-darkgray text-white rounded-full text-sm font-bold">4</span>
                  Business Recommendations
                </h2>
                <ul className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-darkgray flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-serif text-lg text-darkgray">{rec}</span>
                    </li>
                  ))}
                </ul>
              </m.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Back to Portfolio CTA */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-darkgray text-white font-serif font-semibold uppercase tracking-wider hover:bg-cyan-600 hover:text-white transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </Link>
          </div>
        </Container>
      </section>

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

export default CaseStudy;
