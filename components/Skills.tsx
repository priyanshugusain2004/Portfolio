import React, { useState } from 'react';
import { useEffect, useRef } from 'react';

const skills = {
  "Programming Languages": ["Python", "C++", "JavaScript", "HTML", "CSS"],
  "Technologies & Frameworks": ["Full Stack Web Development", "Node.js", "Express.js", "React.js", "Flask", "MongoDB"],
  "Tools & Platforms": ["Git", "GitHub", "Cisco Packet Tracer", "Project Management", "MS Office", "Gemini API"]
};

const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const credlyRef = useRef<HTMLDivElement>(null);
  const [badgeViews, setBadgeViews] = useState<number>(0);

  useEffect(() => {
    // Inject Credly script only once
    if (!document.getElementById('credly-embed-script')) {
      const script = document.createElement('script');
      script.id = 'credly-embed-script';
      script.type = 'text/javascript';
      script.async = true;
      script.src = '//cdn.credly.com/assets/utilities/embed.js';
      document.body.appendChild(script);
    }
    // Track badge views in localStorage
    const views = Number(localStorage.getItem('credlyBadgeViews') || '0') + 1;
    localStorage.setItem('credlyBadgeViews', views.toString());
    setBadgeViews(views);
  }, []);

  return (
    <section id="skills" className="py-20 my-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Skillset</h2>
        {/* Credly Badge Embed - styled for professional look */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-br from-gray-900/70 via-cyan-900/40 to-gray-800/70 border-2 border-cyan-400 rounded-2xl shadow-2xl p-8 flex flex-col items-center transition-all duration-300 hover:shadow-cyan-400/30" style={{ minWidth: 320, maxWidth: 400 }}>
            <span className="text-base text-cyan-300 mb-4 font-bold tracking-wide uppercase">Verified Credential</span>
            <div
              ref={credlyRef}
              data-iframe-width="300"
              data-iframe-height="400"
              data-share-badge-id="b4bd3cf3-f050-4b3c-90a2-1d3fbbdb066b"
              data-share-badge-host="https://www.credly.com"
              className="rounded-xl overflow-hidden border border-cyan-300 shadow-lg"
            ></div>
            <span className="text-xs text-gray-400 mt-2">Badge views: {badgeViews}</span>
          </div>
        </div>
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