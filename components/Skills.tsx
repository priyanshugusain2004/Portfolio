import React, { useState, useEffect, useRef } from 'react';

// Generate random skill levels between 19 and 69 for each skill
function getRandomLevel() {
  return Math.floor(Math.random() * (69 - 19 + 1)) + 19;
}

const skills = {
  "Programming Languages": [
    { name: "Python", level: getRandomLevel() },
    { name: "C++", level: getRandomLevel() },
    { name: "JavaScript", level: getRandomLevel() },
    { name: "HTML", level: getRandomLevel() },
    { name: "CSS", level: getRandomLevel() }
  ],
  "Technologies & Frameworks": [
    { name: "Full Stack Web Development", level: getRandomLevel() },
    { name: "Node.js", level: getRandomLevel() },
    { name: "Express.js", level: getRandomLevel() },
    { name: "React.js", level: getRandomLevel() },
    { name: "Flask", level: getRandomLevel() },
    { name: "MongoDB", level: getRandomLevel() }
  ],
  "Tools & Platforms": [
    { name: "Git", level: getRandomLevel() },
    { name: "GitHub", level: getRandomLevel() },
    { name: "Cisco Packet Tracer", level: getRandomLevel() },
    { name: "Project Management", level: getRandomLevel() },
    { name: "MS Office", level: getRandomLevel() },
    { name: "Gemini API", level: getRandomLevel() }
  ]
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
                <div className="flex flex-col gap-4">
                  {items.map(skill => (
                    <div key={skill.name} className="w-full">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-cyan-400 text-xs font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
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