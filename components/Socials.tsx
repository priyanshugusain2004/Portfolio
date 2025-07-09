
import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { EmailIcon } from './icons/EmailIcon';

const Socials: React.FC = () => {
  const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/priyanshugusain2004' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://www.linkedin.com/in/priyanshu-gusain-978839257' },
    { name: 'Email', icon: EmailIcon, url: 'mailto:priyanshugusain1@gmail.com' },
  ];

  return (
    <div className="flex justify-center items-center gap-6 md:gap-8">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Link to my ${link.name}`}
          className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        >
          <link.icon className="h-8 w-8" />
        </a>
      ))}
    </div>
  );
};

export default Socials;
