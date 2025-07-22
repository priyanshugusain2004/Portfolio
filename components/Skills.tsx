import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import '../skills.css'; // Ensure this file exists and contains necessary style

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
        {/* Animated carousel for skill categories */}
        <div className="overflow-hidden w-full relative" style={{ height: 240 }}>
          <div
            className="flex animate-scroll-x gap-8 w-max carousel-track"
            onMouseEnter={() => {
              const el = document.querySelector('.carousel-track');
              if (el) el.classList.add('paused');
            }}
            onMouseLeave={() => {
              const el = document.querySelector('.carousel-track');
              if (el) el.classList.remove('paused');
            }}
          >
            {Object.entries(skills).map(([category, items], idx) => {
              return (
                <div
                  key={category}
                  className="carousel-card p-6 border-2 border-cyan-500/40 rounded-2xl bg-gradient-to-br from-gray-900/60 via-cyan-900/30 to-gray-800/60 shadow-xl min-w-[300px] max-w-xs flex-shrink-0 flex flex-col items-center transition-all duration-300"
                  style={{ marginRight: '2rem' }}
                >
                  <h3 className="text-2xl font-extrabold text-cyan-300 mb-4 tracking-wide drop-shadow">{category}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {items.map(skill => (
                      <span key={skill} className="bg-gray-800 text-cyan-100 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
            {/* Duplicate for seamless loop */}
            {Object.entries(skills).map(([category, items], idx) => {
              return (
                <div
                  key={category + '-dup'}
                  className="carousel-card p-6 border-2 border-cyan-500/40 rounded-2xl bg-gradient-to-br from-gray-900/60 via-cyan-900/30 to-gray-800/60 shadow-xl min-w-[300px] max-w-xs flex-shrink-0 flex flex-col items-center transition-all duration-300"
                  style={{ marginRight: '2rem' }}
                >
                  <h3 className="text-2xl font-extrabold text-cyan-300 mb-4 tracking-wide drop-shadow">{category}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {items.map(skill => (
                      <span key={skill + '-dup'} className="bg-gray-800 text-cyan-100 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;