
import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect';
import { ArrowDownIcon } from './icons/ArrowDownIcon';

const Hero: React.FC = () => {
  const titles = ['Visionary Coder', 'Tech Explorer'];
  const typedText = useTypingEffect(titles, { typeSpeed: 150, deleteSpeed: 100, delay: 2000, loop: true });

  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center p-4 relative">
      <div className="z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Hi, I'm Priyanshu Gusain
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl mt-4 text-cyan-400 font-light min-h-[2.5rem]">
          {typedText}
          <span className="animate-[pulse_1s_ease-in-out_infinite] text-cyan-400">|</span>
        </p>
      </div>
      <a href="#about" aria-label="Scroll down" className="absolute bottom-10 animate-bounce">
         <ArrowDownIcon className="h-8 w-8 text-gray-500 hover:text-cyan-400 transition-colors duration-300" />
      </a>
    </section>
  );
};

export default Hero;
