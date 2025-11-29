/**
 * Property-Based Tests for Case Studies
 * **Feature: elegant-portfolio, Property 9: Case study section completeness**
 * **Feature: elegant-portfolio, Property 10: Background paragraph count**
 * **Feature: elegant-portfolio, Property 11: Results visualization count**
 * **Validates: Requirements 7.2, 7.3, 7.5**
 */

import * as fc from 'fast-check';
import { projectsData } from '../../data/portfolioData';
import { isValidBackgroundParagraphs, isValidVisualizationCount } from '../../types/portfolio';

// Arbitrary for generating valid visualizations
const visualizationArb = fc.record({
  type: fc.constantFrom('chart', 'graph', 'dashboard', 'image') as fc.Arbitrary<'chart' | 'graph' | 'dashboard' | 'image'>,
  src: fc.webUrl(),
  alt: fc.string({ minLength: 1, maxLength: 100 }),
  caption: fc.option(fc.string({ minLength: 1, maxLength: 200 }), { nil: undefined })
});

// Arbitrary for generating valid case studies
const caseStudyArb = fc.record({
  background: fc.array(fc.string({ minLength: 10, maxLength: 500 }), { minLength: 2, maxLength: 3 }),
  methods: fc.record({
    approach: fc.string({ minLength: 10, maxLength: 500 }),
    tools: fc.array(fc.string({ minLength: 1, maxLength: 50 }), { minLength: 1, maxLength: 10 })
  }),
  results: fc.record({
    description: fc.string({ minLength: 10, maxLength: 500 }),
    visualizations: fc.array(visualizationArb, { minLength: 2, maxLength: 4 })
  }),
  recommendations: fc.array(fc.string({ minLength: 10, maxLength: 200 }), { minLength: 1, maxLength: 5 })
});

describe('Case Study - Property Tests', () => {
  
  /**
   * **Feature: elegant-portfolio, Property 9: Case study section completeness**
   * *For any* case study page, the rendered output SHALL contain all four sections: 
   * Background, Methods, Results, and Recommendations.
   * **Validates: Requirements 7.2**
   */
  describe('Property 9: Case study section completeness', () => {
    
    test('any valid case study has all four required sections', () => {
      fc.assert(
        fc.property(
          caseStudyArb,
          (caseStudy) => {
            // Must have background section
            const hasBackground = Array.isArray(caseStudy.background) && caseStudy.background.length > 0;
            // Must have methods section
            const hasMethods = caseStudy.methods && 
              typeof caseStudy.methods.approach === 'string' && 
              Array.isArray(caseStudy.methods.tools);
            // Must have results section
            const hasResults = caseStudy.results && 
              typeof caseStudy.results.description === 'string' && 
              Array.isArray(caseStudy.results.visualizations);
            // Must have recommendations section
            const hasRecommendations = Array.isArray(caseStudy.recommendations) && 
              caseStudy.recommendations.length > 0;
            
            return hasBackground && hasMethods && hasResults && hasRecommendations;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('all actual project case studies have all four sections', () => {
      projectsData.forEach(project => {
        const { caseStudy } = project;
        
        expect(caseStudy.background).toBeDefined();
        expect(caseStudy.background.length).toBeGreaterThan(0);
        
        expect(caseStudy.methods).toBeDefined();
        expect(caseStudy.methods.approach).toBeTruthy();
        expect(caseStudy.methods.tools.length).toBeGreaterThan(0);
        
        expect(caseStudy.results).toBeDefined();
        expect(caseStudy.results.description).toBeTruthy();
        expect(caseStudy.results.visualizations.length).toBeGreaterThan(0);
        
        expect(caseStudy.recommendations).toBeDefined();
        expect(caseStudy.recommendations.length).toBeGreaterThan(0);
      });
    });
  });

  /**
   * **Feature: elegant-portfolio, Property 10: Background paragraph count**
   * *For any* case study background section, the content SHALL contain 
   * between 2 and 3 paragraphs (inclusive).
   * **Validates: Requirements 7.3**
   */
  describe('Property 10: Background paragraph count', () => {
    
    test('isValidBackgroundParagraphs returns true for 2-3 paragraphs', () => {
      fc.assert(
        fc.property(
          fc.array(fc.string({ minLength: 10, maxLength: 500 }), { minLength: 2, maxLength: 3 }),
          (paragraphs) => {
            return isValidBackgroundParagraphs(paragraphs) === true;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('isValidBackgroundParagraphs returns false for less than 2 paragraphs', () => {
      fc.assert(
        fc.property(
          fc.array(fc.string({ minLength: 10, maxLength: 500 }), { minLength: 0, maxLength: 1 }),
          (paragraphs) => {
            return isValidBackgroundParagraphs(paragraphs) === false;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('isValidBackgroundParagraphs returns false for more than 3 paragraphs', () => {
      fc.assert(
        fc.property(
          fc.array(fc.string({ minLength: 10, maxLength: 500 }), { minLength: 4, maxLength: 10 }),
          (paragraphs) => {
            return isValidBackgroundParagraphs(paragraphs) === false;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('all actual case studies have 2-3 background paragraphs', () => {
      projectsData.forEach(project => {
        const paragraphCount = project.caseStudy.background.length;
        expect(paragraphCount).toBeGreaterThanOrEqual(2);
        expect(paragraphCount).toBeLessThanOrEqual(3);
        expect(isValidBackgroundParagraphs(project.caseStudy.background)).toBe(true);
      });
    });
  });

  /**
   * **Feature: elegant-portfolio, Property 11: Results visualization count**
   * *For any* case study results section, the content SHALL contain 
   * between 2 and 4 visualizations (inclusive).
   * **Validates: Requirements 7.5**
   */
  describe('Property 11: Results visualization count', () => {
    
    test('isValidVisualizationCount returns true for 2-4 visualizations', () => {
      fc.assert(
        fc.property(
          fc.array(visualizationArb, { minLength: 2, maxLength: 4 }),
          (visualizations) => {
            return isValidVisualizationCount(visualizations) === true;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('isValidVisualizationCount returns false for less than 2 visualizations', () => {
      fc.assert(
        fc.property(
          fc.array(visualizationArb, { minLength: 0, maxLength: 1 }),
          (visualizations) => {
            return isValidVisualizationCount(visualizations) === false;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('isValidVisualizationCount returns false for more than 4 visualizations', () => {
      fc.assert(
        fc.property(
          fc.array(visualizationArb, { minLength: 5, maxLength: 10 }),
          (visualizations) => {
            return isValidVisualizationCount(visualizations) === false;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('all actual case studies have 2-4 visualizations', () => {
      projectsData.forEach(project => {
        const vizCount = project.caseStudy.results.visualizations.length;
        expect(vizCount).toBeGreaterThanOrEqual(2);
        expect(vizCount).toBeLessThanOrEqual(4);
        expect(isValidVisualizationCount(project.caseStudy.results.visualizations)).toBe(true);
      });
    });
  });
});
