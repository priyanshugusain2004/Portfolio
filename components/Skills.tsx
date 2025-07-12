import React, { useState } from 'react';

const skills = {
  "Programming Languages": ["Python", "C++", "JavaScript", "HTML", "CSS"],
  "Technologies & Frameworks": ["Full Stack Web Development", "Node.js", "Express.js", "React.js", "Flask", "MongoDB"],
  "Tools & Platforms": ["Git", "GitHub", "Cisco Packet Tracer", "Project Management", "MS Office", "Gemini API"]
};

const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 my-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Skillset</h2>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          onMouseLeave={() => setHoveredCategory(null)}
        >
          {Object.entries(skills).map(([category, items]) => {
            const isHovered = hoveredCategory === category;
            const isAnyHovered = hoveredCategory !== null;
            
            const cardClassName = `
              p-6 border rounded-lg bg-gray-900/20 backdrop-blur-sm shadow-lg transition-all duration-300
              ${isHovered 
                ? 'border-cyan-500/60 shadow-cyan-500/10' 
                : isAnyHovered 
                ? 'border-gray-700/50 opacity-60 shadow-[0_0_10px_rgba(107,114,128,0.05)]' 
                : 'border-gray-700/50'
              }
            `;

            return (
              <div 
                key={category} 
                className={cardClassName}
                onMouseEnter={() => setHoveredCategory(category)}
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="bg-gray-800 text-gray-300 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;