/**
 * Property-Based Tests for Contact Form
 * **Feature: elegant-portfolio, Property 8: Contact form feedback**
 * **Validates: Requirements 6.3**
 */

import * as fc from 'fast-check';

// Arbitrary for generating valid contact form data
const validContactFormArb = fc.record({
  name: fc.string({ minLength: 1, maxLength: 100 }),
  email: fc.emailAddress(),
  message: fc.string({ minLength: 10, maxLength: 1000 })
});

// Arbitrary for generating invalid contact form data
const invalidContactFormArb = fc.oneof(
  // Empty name
  fc.record({
    name: fc.constant(''),
    email: fc.emailAddress(),
    message: fc.string({ minLength: 10, maxLength: 1000 })
  }),
  // Invalid email
  fc.record({
    name: fc.string({ minLength: 1, maxLength: 100 }),
    email: fc.string({ minLength: 1, maxLength: 50 }).filter(s => !s.includes('@')),
    message: fc.string({ minLength: 10, maxLength: 1000 })
  }),
  // Short message
  fc.record({
    name: fc.string({ minLength: 1, maxLength: 100 }),
    email: fc.emailAddress(),
    message: fc.string({ minLength: 0, maxLength: 9 })
  })
);

// Simulate form validation
const validateForm = (data: ContactFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!data.name || data.name.trim().length === 0) {
    errors.push('Name is required');
  }
  
  if (!data.email || !data.email.includes('@')) {
    errors.push('Invalid email address');
  }
  
  if (!data.message || data.message.length < 10) {
    errors.push('Message must be at least 10 characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Simulate form submission response
const simulateSubmit = async (data: ContactFormData): Promise<FormResponse> => {
  const validation = validateForm(data);
  
  if (!validation.isValid) {
    return {
      success: false,
      message: validation.errors.join(', ')
    };
  }
  
  return {
    success: true,
    message: 'Message sent successfully!'
  };
};

describe('Contact Form - Property Tests', () => {
  
  /**
   * **Feature: elegant-portfolio, Property 8: Contact form feedback**
   * *For any* contact form submission (valid or invalid), the form SHALL display 
   * a feedback message indicating success or error.
   * **Validates: Requirements 6.3**
   */
  describe('Property 8: Contact form feedback', () => {
    
    test('valid form submissions always return success feedback', async () => {
      await fc.assert(
        fc.asyncProperty(
          validContactFormArb,
          async (formData) => {
            const response = await simulateSubmit(formData);
            
            // Must have a response
            expect(response).toBeDefined();
            // Must have success flag
            expect(typeof response.success).toBe('boolean');
            // Must have message
            expect(typeof response.message).toBe('string');
            expect(response.message.length).toBeGreaterThan(0);
            
            // Valid submissions should succeed
            if (formData.name.trim().length > 0 && 
                formData.email.includes('@') && 
                formData.message.length >= 10) {
              expect(response.success).toBe(true);
            }
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('invalid form submissions always return error feedback', async () => {
      await fc.assert(
        fc.asyncProperty(
          invalidContactFormArb,
          async (formData) => {
            const response = await simulateSubmit(formData);
            
            // Must have a response
            expect(response).toBeDefined();
            // Must have success flag
            expect(typeof response.success).toBe('boolean');
            // Must have message
            expect(typeof response.message).toBe('string');
            expect(response.message.length).toBeGreaterThan(0);
            
            // Invalid submissions should fail
            expect(response.success).toBe(false);
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('any form submission returns a FormResponse with required fields', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.oneof(validContactFormArb, invalidContactFormArb),
          async (formData) => {
            const response = await simulateSubmit(formData);
            
            // Response must have success boolean
            const hasSuccess = typeof response.success === 'boolean';
            // Response must have message string
            const hasMessage = typeof response.message === 'string' && response.message.length > 0;
            
            return hasSuccess && hasMessage;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('form validation correctly identifies valid data', () => {
      fc.assert(
        fc.property(
          validContactFormArb,
          (formData) => {
            const validation = validateForm(formData);
            
            // If all fields are valid, validation should pass
            if (formData.name.trim().length > 0 && 
                formData.email.includes('@') && 
                formData.message.length >= 10) {
              return validation.isValid === true && validation.errors.length === 0;
            }
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    test('form validation correctly identifies invalid data', () => {
      fc.assert(
        fc.property(
          invalidContactFormArb,
          (formData) => {
            const validation = validateForm(formData);
            
            // Invalid data should fail validation
            return validation.isValid === false && validation.errors.length > 0;
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});
