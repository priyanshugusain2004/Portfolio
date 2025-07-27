import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
// import useTypingEffect from '../hooks/useTypingEffect';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, { threshold: 0.5, triggerOnce: true });
  const aboutTextContent = "A passionate BCA student exploring full-stack development, AI, and networking. Currently focused on learning C#, VR gaming, and Cisco Packet Tracer. I thrive on solving complex problems and turning innovative ideas into tangible technology.";

  return (
    <section id="about" className="py-20 my-16" ref={ref}>
      <div className="max-w-4xl mx-auto p-8 border border-cyan-500/30 rounded-lg bg-gray-900/20 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,255,0.1),_0_0_30px_rgba(0,255,255,0.05)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.2),_0_0_40px_rgba(0,255,255,0.1)]">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed text-center min-h-[144px]">
          {aboutTextContent}
        </p>
      </div>
    </section>
  );
};

export default About;