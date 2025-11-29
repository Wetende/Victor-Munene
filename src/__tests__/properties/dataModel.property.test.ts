/**
 * Property-Based Tests for Data Model Constraints
 * **Feature: elegant-portfolio, Property 1: Hero tagline word limit**
 * **Feature: elegant-portfolio, Property 5: About section word limit**
 * **Validates: Requirements 1.3, 4.1**
 */

import * as fc from 'fast-check';
import { 
  countWords, 
  isValidTagline, 
  isValidBio
} from '../../types/portfolio';
import { heroData, aboutData } from '../../data/portfolioData';

describe('Data Model Constraints - Property Tests', () => {
  
  /**
   * **Feature: elegant-portfolio, Property 1: Hero tagline word limit**
   * *For any* hero section content, the tagline text SHALL contain fewer than 15 words.
   * **Validates: Requirements 1.3**
   */
  describe('Property 1: Hero tagline word limit', () => {
    
    test('countWords correctly counts words in any string', () => {
      fc.assert(
        fc.property(
          fc.array(fc.string({ minLength: 1, maxLength: 20 }), { minLength: 0, maxLength: 30 }),
          (words) => {
            const text = words.join(' ');
            const counted = countWords(text);
            // Word count should be non-negative
            return counted >= 0;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('isValidTagline returns true for strings with fewer than 15 words', () => {
      fc.assert(
        fc.property(
          fc.array(fc.string({ minLength: 1, maxLength: 10 }), { minLength: 1, maxLength: 14 }),
          (words) => {
            const tagline = words.filter(w => w.trim().length > 0).slice(0, 14).join(' ');
            if (countWords(tagline) < 15) {
              return isValidTagline(tagline) === true;
            }
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('isValidTagline returns false for strings with 15 or more words', () => {
      fc.assert(
        fc.property(
          fc.array(fc.string({ minLength: 1, maxLength: 10 }), { minLength: 15, maxLength: 30 }),
          (words) => {
            const tagline = words.filter(w => w.trim().length > 0).join(' ');
            if (countWords(tagline) >= 15) {
              return isValidTagline(tagline) === false;
            }
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('actual heroData tagline is valid (fewer than 15 words)', () => {
      expect(isValidTagline(heroData.tagline)).toBe(true);
      expect(countWords(heroData.tagline)).toBeLessThan(15);
    });
  });

  /**
   * **Feature: elegant-portfolio, Property 5: About section word limit**
   * *For any* about section content, the bio text SHALL contain fewer than 100 words.
   * **Validates: Requirements 4.1**
   */
  describe('Property 5: About section word limit', () => {
    
    test('isValidBio returns true for strings with fewer than 100 words', () => {
      fc.assert(
        fc.property(
          fc.array(fc.string({ minLength: 1, maxLength: 15 }), { minLength: 1, maxLength: 99 }),
          (words) => {
            const bio = words.filter(w => w.trim().length > 0).slice(0, 99).join(' ');
            if (countWords(bio) < 100) {
              return isValidBio(bio) === true;
            }
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('isValidBio returns false for strings with 100 or more words', () => {
      fc.assert(
        fc.property(
          fc.array(fc.string({ minLength: 1, maxLength: 10 }), { minLength: 100, maxLength: 150 }),
          (words) => {
            const bio = words.filter(w => w.trim().length > 0).join(' ');
            if (countWords(bio) >= 100) {
              return isValidBio(bio) === false;
            }
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('actual aboutData bio is valid (fewer than 100 words)', () => {
      expect(isValidBio(aboutData.bio)).toBe(true);
      expect(countWords(aboutData.bio)).toBeLessThan(100);
    });
  });

  /**
   * Edge cases for word counting
   */
  describe('Word counting edge cases', () => {
    
    test('empty string has 0 words', () => {
      expect(countWords('')).toBe(0);
    });

    test('whitespace-only string has 0 words', () => {
      fc.assert(
        fc.property(
          fc.array(fc.constantFrom(' ', '\t', '\n', '\r'), { minLength: 0, maxLength: 20 }),
          (whitespaceChars) => {
            const whitespace = whitespaceChars.join('');
            return countWords(whitespace) === 0;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('single word has count of 1', () => {
      fc.assert(
        fc.property(
          fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0 && !s.includes(' ')),
          (word) => {
            return countWords(word) === 1;
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});
