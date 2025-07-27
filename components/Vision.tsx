import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
// import useTypingEffect from '../hooks/useTypingEffect';

const Vision: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, { threshold: 0.5, triggerOnce: true });
  const visionTextContent = "I aspire to build immersive VR games that redefine interactive learning and entertainment.";

  return (
    <section id="vision" className="py-20 my-16" ref={ref}>
      <div className="max-w-4xl mx-auto p-8 border border-green-500/30 rounded-lg bg-gray-900/20 backdrop-blur-sm shadow-[0_0_15px_rgba(52,211,153,0.1),_0_0_30px_rgba(52,211,153,0.05)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(52,211,153,0.2),_0_0_40px_rgba(52,211,153,0.1)]">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Future Vision</h2>
        <p className="text-lg text-gray-300 leading-relaxed text-center min-h-[84px]">
           {visionTextContent}
        </p>
      </div>
    </section>
  );
};

export default Vision;