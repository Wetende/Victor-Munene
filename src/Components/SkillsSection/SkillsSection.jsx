import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { m } from 'framer-motion';
import { skillsData } from '../../data/portfolioData';

const SkillCard = ({ icon, title, description, delay = 0 }) => (
  <m.div
    className="h-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
  >
    <div className="h-full p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-cyan-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group cursor-default">
      <div className="text-cyan-600 text-4xl lg:text-5xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 inline-block">
        <i className={icon}></i>
      </div>
      <h3 className="font-serif font-semibold text-darkgray text-lg mb-2 group-hover:text-cyan-600 transition-colors">
        {title}
      </h3>
      <p className="font-serif text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  </m.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-gray-50">
      <Container>
        {/* Section Header */}
        <m.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-darkgray mb-2">
            My <span className="text-cyan-600">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-600 mx-auto mt-4 rounded-full"></div>
        </m.div>

        {/* Skills Grid - 3 cards per row, 2 rows */}
        <Row className="g-4 justify-content-center">
          {skillsData.map((skill, index) => (
            <Col key={skill.title} xs={6} md={4}>
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                delay={index * 0.1}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;
