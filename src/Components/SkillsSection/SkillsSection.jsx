import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { m } from 'framer-motion';
import { skillsData } from '../../data/portfolioData';
import { fadeIn } from '../../Functions/GlobalAnimations';

const SkillBar = ({ name, level, delay = 0 }) => (
  <m.div
    className="mb-6"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
  >
    <div className="flex justify-between mb-2">
      <span className="font-serif font-medium text-darkgray">{name}</span>
      <span className="font-serif text-gray-500">{level}%</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <m.div
        className="h-full bg-cyan-600 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      />
    </div>
  </m.div>
);

const SkillsSection = () => {
  // Flatten skills and take max 6
  const allSkills = skillsData.flatMap(group => 
    group.items.map(skill => ({ ...skill, category: group.category }))
  ).slice(0, 6);

  return (
    <section id="skills" className="py-24 md:py-32 bg-cyan-50">
      <Container>
        <Row className="items-center">
          {/* Left Column - Header */}
          <Col lg={5} className="mb-12 lg:mb-0">
            <m.div {...fadeIn}>
              <p className="font-serif text-sm uppercase tracking-widest text-darkgray/70 mb-4">
                Expertise
              </p>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-darkgray mb-6 leading-tight">
                Technical Skills &
                <br />
                Competencies
              </h2>
              <p className="font-serif text-lg text-darkgray/80 leading-relaxed">
                Providing high-quality data analytics and business intelligence
                solutions including Power BI, Tableau, and enterprise platforms.
              </p>
            </m.div>
          </Col>

          {/* Right Column - Skills */}
          <Col lg={{ span: 6, offset: 1 }}>
            <div>
              {allSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;
