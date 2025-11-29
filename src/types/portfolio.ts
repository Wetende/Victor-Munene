/**
 * Portfolio TypeScript Interfaces
 * Defines all data models for the elegant portfolio
 */

// Navigation
export interface NavItem {
  id: string;
  label: string;
}

// Social Links
export type SocialPlatform = 'linkedin' | 'github' | 'twitter';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  icon: string;
}

// Hero Section
export interface HeroData {
  name: string;
  title: string;
  tagline: string; // Max 15 words
  socialLinks: SocialLink[];
  backgroundImage?: string;
}

// About Section
export interface AboutData {
  bio: string; // Max 100 words
  yearsExperience: number;
  specializations: string[];
  photo?: string;
}

// Skills
export type SkillCategory = 'BI Tools' | 'Data Skills' | 'Platforms';

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillGroup {
  category: SkillCategory;
  items: Skill[];
}


// Visualizations for Case Studies
export type VisualizationType = 'chart' | 'graph' | 'dashboard' | 'image';

export interface Visualization {
  type: VisualizationType;
  src: string;
  alt: string;
  caption?: string;
}

// Case Study
export interface CaseStudy {
  background: string[]; // 2-3 paragraphs
  methods: {
    approach: string;
    tools: string[];
  };
  results: {
    description: string;
    visualizations: Visualization[]; // 2-4 items
  };
  recommendations: string[];
}

// Project
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string[];
  description: string; // One-line description
  thumbnail: string;
  caseStudy: CaseStudy;
}

// Contact Form
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormResponse {
  success: boolean;
  message: string;
}

// Contact Section
export interface ContactData {
  email: string;
  linkedInUrl: string;
  ctaText: string;
}

// Footer
export interface FooterData {
  copyright: string;
  tagline: string;
  socialLinks: SocialLink[];
}

// Utility type for word count validation
export const countWords = (text: string): number => {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
};

// Validation helpers
export const isValidTagline = (tagline: string): boolean => {
  return countWords(tagline) < 15;
};

export const isValidBio = (bio: string): boolean => {
  return countWords(bio) < 100;
};

export const isValidBackgroundParagraphs = (paragraphs: string[]): boolean => {
  return paragraphs.length >= 2 && paragraphs.length <= 3;
};

export const isValidVisualizationCount = (visualizations: Visualization[]): boolean => {
  return visualizations.length >= 2 && visualizations.length <= 4;
};
