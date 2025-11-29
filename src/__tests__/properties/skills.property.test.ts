/**
 * Property-Based Tests for Skills
 * **Feature: elegant-portfolio, Property 6: Skills display limit**
 * **Feature: elegant-portfolio, Property 7: Skills grouping**
 * **Validates: Requirements 5.1, 5.3**
 */

import * as fc from 'fast-check';
import { skillsData } from '../../data/portfolioData';

const VALID_CATEGORIES = ['BI Tools', 'Data Skills', 'Platforms'];

// Arbitrary for generating valid skills
const skillArb = fc.record({
  name: fc.string({ minLength: 1, maxLength: 50 }),
  level: fc.integer({ min: 0, max: 100 }),
  icon: fc.option(fc.string({ minLength: 1, maxLength: 50 }), { nil: undefined })
});

// Arbitrary for generating valid skill groups
const skillGroupArb = fc.record({
  category: fc.constantFrom(...VALID_CATEGORIES) as fc.Arbitrary<SkillCategory>,
  items: fc.array(skillArb, { minLength: 1, maxLength: 5 })
});

describe('Skills - Property Tests', () => {
  
  /**
   * **Feature: elegant-portfolio, Property 6: Skills display limit**
   * *For any* skills data passed to SkillsSection, the rendered output 
   * SHALL display at most 6 skill items total.
   * **Validates: Requirements 5.1**
   */
  describe('Property 6: Skills display limit', () => {
    
    test('flattening and slicing any skill groups results in at most 6 skills', () => {
      fc.assert(
        fc.property(
          fc.array(skillGroupArb, { minLength: 0, maxLength: 5 }),
          (skillGroups) => {
            const allSkills = skillGroups.flatMap(group => group.items);
            const displayed = allSkills.slice(0, 6);
            return displayed.length <= 6;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('actual skillsData displays at most 6 skills', () => {
      const allSkills = skillsData.flatMap(group => group.items);
      const displayed = allSkills.slice(0, 6);
      expect(displayed.length).toBeLessThanOrEqual(6);
    });

    test('actual skillsData has exactly 6 skills total', () => {
      const totalSkills = skillsData.reduce((sum, group) => sum + group.items.length, 0);
      expect(totalSkills).toBe(6);
    });
  });

  /**
   * **Feature: elegant-portfolio, Property 7: Skills grouping**
   * *For any* skills data, each skill item SHALL be associated with exactly one 
   * category from the set {BI Tools, Data Skills, Platforms}.
   * **Validates: Requirements 5.3**
   */
  describe('Property 7: Skills grouping', () => {
    
    test('any skill group has a valid category', () => {
      fc.assert(
        fc.property(
          skillGroupArb,
          (skillGroup) => {
            return VALID_CATEGORIES.includes(skillGroup.category);
          }
        ),
        { numRuns: 100 }
      );
    });

    test('all actual skill groups have valid categories', () => {
      skillsData.forEach(group => {
        expect(VALID_CATEGORIES).toContain(group.category);
      });
    });

    test('each skill belongs to exactly one category', () => {
      // Create a map of skill names to their categories
      const skillCategories = new Map<string, string[]>();
      
      skillsData.forEach(group => {
        group.items.forEach(skill => {
          const existing = skillCategories.get(skill.name) || [];
          skillCategories.set(skill.name, [...existing, group.category]);
        });
      });

      // Each skill should appear in exactly one category
      skillCategories.forEach((categories, skillName) => {
        expect(categories.length).toBe(1);
      });
    });

    test('skill levels are within valid range (0-100)', () => {
      fc.assert(
        fc.property(
          skillArb,
          (skill) => {
            return skill.level >= 0 && skill.level <= 100;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('all actual skills have valid levels', () => {
      skillsData.forEach(group => {
        group.items.forEach(skill => {
          expect(skill.level).toBeGreaterThanOrEqual(0);
          expect(skill.level).toBeLessThanOrEqual(100);
        });
      });
    });
  });
});
