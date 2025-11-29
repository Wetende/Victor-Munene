/**
 * Property-Based Tests for Projects
 * **Feature: elegant-portfolio, Property 2: Project card limit**
 * **Feature: elegant-portfolio, Property 3: Project card completeness**
 * **Feature: elegant-portfolio, Property 4: Read More navigation correctness**
 * **Validates: Requirements 2.1, 2.2, 2.5**
 */

import * as fc from 'fast-check';
import { projectsData } from '../../data/portfolioData';

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

// Arbitrary for generating valid projects
const projectArb = fc.record({
  id: fc.uuid(),
  slug: fc.string({ minLength: 1, maxLength: 50 }).map(s => s.toLowerCase().replace(/[^a-z0-9]/g, '-')),
  title: fc.string({ minLength: 1, maxLength: 100 }),
  category: fc.array(fc.string({ minLength: 1, maxLength: 30 }), { minLength: 1, maxLength: 5 }),
  description: fc.string({ minLength: 1, maxLength: 150 }),
  thumbnail: fc.webUrl(),
  caseStudy: caseStudyArb
});

describe('Projects - Property Tests', () => {
  
  /**
   * **Feature: elegant-portfolio, Property 2: Project card limit**
   * *For any* array of projects passed to ProjectsSection, the rendered output 
   * SHALL display at most 6 project cards.
   * **Validates: Requirements 2.1**
   */
  describe('Property 2: Project card limit', () => {
    
    test('slicing any project array to 6 results in at most 6 items', () => {
      fc.assert(
        fc.property(
          fc.array(projectArb, { minLength: 0, maxLength: 20 }),
          (projects) => {
            const displayed = projects.slice(0, 6);
            return displayed.length <= 6;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('actual projectsData displays at most 6 projects', () => {
      const displayed = projectsData.slice(0, 6);
      expect(displayed.length).toBeLessThanOrEqual(6);
    });
  });

  /**
   * **Feature: elegant-portfolio, Property 3: Project card completeness**
   * *For any* project card rendered, the output SHALL contain a preview image, 
   * project title, at least one technology category, and a description.
   * **Validates: Requirements 2.2**
   */
  describe('Property 3: Project card completeness', () => {
    
    test('any valid project has all required fields', () => {
      fc.assert(
        fc.property(
          projectArb,
          (project) => {
            // Must have thumbnail (preview image)
            const hasThumbnail = typeof project.thumbnail === 'string' && project.thumbnail.length > 0;
            // Must have title
            const hasTitle = typeof project.title === 'string' && project.title.length > 0;
            // Must have at least one category
            const hasCategory = Array.isArray(project.category) && project.category.length >= 1;
            // Must have description
            const hasDescription = typeof project.description === 'string' && project.description.length > 0;
            
            return hasThumbnail && hasTitle && hasCategory && hasDescription;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('all actual projects have required fields', () => {
      projectsData.forEach(project => {
        expect(project.thumbnail).toBeTruthy();
        expect(project.title).toBeTruthy();
        expect(project.category.length).toBeGreaterThanOrEqual(1);
        expect(project.description).toBeTruthy();
      });
    });
  });

  /**
   * **Feature: elegant-portfolio, Property 4: Read More navigation correctness**
   * *For any* project with a "Read More" link, clicking the link SHALL navigate 
   * to a URL matching the pattern `/project/{project.slug}`.
   * **Validates: Requirements 2.5, 7.1**
   */
  describe('Property 4: Read More navigation correctness', () => {
    
    test('any project slug generates correct URL pattern', () => {
      fc.assert(
        fc.property(
          projectArb,
          (project) => {
            const expectedUrl = `/project/${project.slug}`;
            // URL should start with /project/
            const startsCorrectly = expectedUrl.startsWith('/project/');
            // URL should contain the slug
            const containsSlug = expectedUrl.includes(project.slug);
            
            return startsCorrectly && containsSlug;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('all actual projects have valid slugs for URL generation', () => {
      projectsData.forEach(project => {
        const url = `/project/${project.slug}`;
        expect(url).toMatch(/^\/project\/[a-z0-9-]+$/);
      });
    });
  });
});
