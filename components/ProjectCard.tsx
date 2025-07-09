import React from 'react';
import { CodeIcon } from './icons/CodeIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  isHovered: boolean;
  isFaded: boolean;
  onMouseEnter: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, githubUrl, liveUrl, isHovered, isFaded, onMouseEnter }) => {
  
  const cardClassName = `
    flex flex-col p-6 border rounded-lg bg-gray-900/30 backdrop-blur-sm shadow-lg transition-all duration-300
    ${isHovered
      ? 'border-green-500/50 shadow-green-500/10 -translate-y-1'
      : isFaded
      ? 'border-gray-800/50 opacity-60 shadow-[0_0_10px_rgba(107,114,128,0.05)]'
      : 'border-gray-700/50'
    }
  `;

  return (
    <div 
      className={cardClassName}
      onMouseEnter={onMouseEnter}
    >
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-green-400 mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="bg-gray-800 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-800">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-300">
            <CodeIcon className="w-5 h-5" />
            <span className="text-sm">Source</span>
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-300">
            <ExternalLinkIcon className="w-5 h-5" />
            <span className="text-sm">Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;