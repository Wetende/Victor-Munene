import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { slug, title, category, description, thumbnail } = project;

  return (
    <Link to={`/project/${slug}`} className="block">
      <m.div
        className="overflow-hidden rounded-2xl bg-[#1a1a1a] group cursor-pointer h-full hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {/* Thumbnail Image */}
        <div className="aspect-video overflow-hidden">
          <img
            src={thumbnail || 'https://via.placeholder.com/800x450'}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content Area */}
        <div className="p-6">
          {/* Title */}
          <h3 className="font-serif font-bold text-lg md:text-xl text-white mb-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-xs md:text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-2">
            {category.map((cat, index) => (
              <span
                key={index}
                className="px-4 py-1.5 border border-cyan-600 text-cyan-500 text-xs font-medium rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </m.div>
    </Link>
  );
};

export default ProjectCard;
