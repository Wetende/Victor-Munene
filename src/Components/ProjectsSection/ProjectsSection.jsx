import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { m } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projectsData } from '../../data/portfolioData';
import { fadeIn } from '../../Functions/GlobalAnimations';

const ProjectsSection = () => {
  // Display max 6 projects
  const displayedProjects = projectsData.slice(0, 6);

  return (
    <section id="work" className="py-24 md:py-32 bg-gray-50">
      <Container>
        {/* Section Header */}
        <m.div className="text-center mb-16" {...fadeIn}>
          <p className="font-serif text-sm uppercase tracking-widest text-cyan-600 mb-4">
            Portfolio
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-darkgray mb-4">
            Featured Projects
          </h2>
          <p className="font-serif text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of data analytics and business intelligence projects
            showcasing real-world business impact.
          </p>
        </m.div>

        {/* Projects Grid */}
        <Row className="g-4">
          {displayedProjects.map((project, index) => (
            <Col key={project.id} md={6} lg={4}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;
