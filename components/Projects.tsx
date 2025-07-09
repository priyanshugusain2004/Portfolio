import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData, inProgressProjectsData } from '../data/projects';

const Projects: React.FC = () => {
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null);
  const [hoveredInProgressIndex, setHoveredInProgressIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 my-16">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects Showcase</h2>
      <div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        onMouseLeave={() => setHoveredProjectIndex(null)}
      >
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project}
            isHovered={hoveredProjectIndex === index}
            isFaded={hoveredProjectIndex !== null && hoveredProjectIndex !== index}
            onMouseEnter={() => setHoveredProjectIndex(index)}
          />
        ))}
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Currently Building</h3>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          onMouseLeave={() => setHoveredInProgressIndex(null)}
        >
            {inProgressProjectsData.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project} 
                isHovered={hoveredInProgressIndex === index}
                isFaded={hoveredInProgressIndex !== null && hoveredInProgressIndex !== index}
                onMouseEnter={() => setHoveredInProgressIndex(index)}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;