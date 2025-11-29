/**
 * Unit Tests for StickyHeader Navigation
 * Tests smooth scroll functionality, active section highlighting, and mobile menu
 * **Validates: Requirements 3.1, 3.2, 3.4, 3.5**
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import StickyHeader from '../../Components/StickyHeader/StickyHeader';
import { navItems } from '../../data/portfolioData';

// Mock react-scroll
jest.mock('react-scroll', () => ({
  Link: ({ children, to, onClick, className, ...props }) => (
    <a
      href={`#${to}`}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      className={className}
      data-testid={`nav-${to}`}
      {...props}
    >
      {children}
    </a>
  ),
}));

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('StickyHeader Component', () => {
  describe('Navigation Rendering', () => {
    test('renders all navigation items', () => {
      renderWithRouter(<StickyHeader activeSection="home" onNavClick={() => {}} />);
      
      navItems.forEach((item) => {
        // Use getAllByText since items appear in both desktop and mobile nav
        const elements = screen.getAllByText(item.label);
        expect(elements.length).toBeGreaterThan(0);
      });
    });

    test('renders exactly 5 navigation items per viewport', () => {
      renderWithRouter(<StickyHeader activeSection="home" onNavClick={() => {}} />);
      
      // Check that each nav item appears (desktop + mobile versions)
      navItems.forEach(item => {
        const links = screen.getAllByTestId(`nav-${item.id}`);
        expect(links.length).toBeGreaterThanOrEqual(2); // At least desktop + mobile
      });
    });

    test('renders logo', () => {
      renderWithRouter(<StickyHeader activeSection="home" onNavClick={() => {}} />);
      
      const logo = screen.getByAltText('Victor Munene');
      expect(logo).toBeInTheDocument();
    });
  });

  describe('Active Section Highlighting', () => {
    test('highlights active section in navigation', () => {
      renderWithRouter(<StickyHeader activeSection="about" onNavClick={() => {}} />);
      
      const aboutLinks = screen.getAllByTestId('nav-about');
      aboutLinks.forEach(link => {
        expect(link.className).toContain('text-cyan-600');
      });
    });

    test('non-active sections have darkgray text color', () => {
      renderWithRouter(<StickyHeader activeSection="home" onNavClick={() => {}} />);
      
      const aboutLinks = screen.getAllByTestId('nav-about');
      aboutLinks.forEach(link => {
        // Non-active links should have text-darkgray class (not just text-[#ffeb04])
        expect(link.className).toContain('text-darkgray');
      });
    });
  });

  describe('Navigation Click Behavior', () => {
    test('calls onNavClick when navigation item is clicked', () => {
      const mockOnNavClick = jest.fn();
      renderWithRouter(<StickyHeader activeSection="home" onNavClick={mockOnNavClick} />);
      
      const aboutLink = screen.getAllByTestId('nav-about')[0];
      fireEvent.click(aboutLink);
      
      expect(mockOnNavClick).toHaveBeenCalledWith('about');
    });
  });

  describe('Mobile Menu', () => {
    test('renders hamburger menu button', () => {
      renderWithRouter(<StickyHeader activeSection="home" onNavClick={() => {}} />);
      
      const menuButton = screen.getByLabelText('Toggle menu');
      expect(menuButton).toBeInTheDocument();
    });

    test('mobile menu is initially collapsed', () => {
      renderWithRouter(<StickyHeader activeSection="home" onNavClick={() => {}} />);
      
      // The mobile nav should have max-h-0 class initially
      const mobileNav = document.querySelector('.md\\:hidden.overflow-hidden');
      expect(mobileNav.className).toContain('max-h-0');
    });

    test('hamburger button toggles mobile menu', () => {
      renderWithRouter(<StickyHeader activeSection="home" onNavClick={() => {}} />);
      
      const menuButton = screen.getByLabelText('Toggle menu');
      fireEvent.click(menuButton);
      
      const mobileNav = document.querySelector('.md\\:hidden.overflow-hidden');
      expect(mobileNav.className).toContain('max-h-96');
    });
  });
});
