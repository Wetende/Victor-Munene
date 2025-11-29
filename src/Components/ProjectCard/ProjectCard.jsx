import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { slug, title, category, description, thumbnail } = project;

  return (
    <m.div
      className="relative overflow-hidden rounded-lg group cursor-default"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Thumbnail Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={thumbnail || 'https://via.placeholder.com/800x800'}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Overlay - Always Visible */}
      <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6">
        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {category.map((cat, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-serif font-bold text-xl text-white mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Read More Link - Only this navigates */}
        <Link
          to={`/project/${slug}`}
          className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          Read More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </m.div>
  );
};

export default ProjectCard;
