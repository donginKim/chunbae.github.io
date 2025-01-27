import React, { useState, useEffect } from 'react';
import { Github, Mail } from 'lucide-react';
import { content } from '../../constants/heroContent';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/fonts.css'

const Hero = () => {
    const { language } = useLanguage();
    const roles = content[language].roles;
    const [currentRole, setCurrentRole] = useState(roles[0]);
    const [isChanging, setIsChanging] = useState(false);
  
    useEffect(() => {
      let currentIndex = 0;
      
      const intervalId = setInterval(() => {
        setIsChanging(true);
        setTimeout(() => {
          currentIndex = (currentIndex + 1) % roles.length;
          setCurrentRole(roles[currentIndex]);
          setIsChanging(false);
        }, 500);
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, [roles]);

    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-emerald-950 to-emerald-900 text-white">    
          <div className="text-center p-4">
            <span className='text-base md:text-lg paperlogy-medium'>
              {content[language].subtitle}
            </span>
            <h1 className="text-5xl md:text-7xl paperlogy-extrabold animate-fade-in">
              {content[language].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 paperlogy-medium mt-6">
              <span 
                className={`inline-block min-w-[100px] transition-opacity duration-500 ${
                  isChanging ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {currentRole}
              </span>
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <a href="https://github.com/donginKim" target="_blank" rel="noopener noreferrer" 
                 className="transform hover:scale-110 transition-transform">
                <Github className="w-8 h-8" />
              </a>
              <a href="mailto:steve9989@gmail.com"
                 className="transform hover:scale-110 transition-transform">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="absolute bottom-20 left-0 right-0 mx-auto text-center animate-bounce paperlogy-regular">
            <p className="text-sm text-gray-400 mb-2">{content[language].scrollText}</p>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto">
              <div className="w-1 h-2 bg-gray-400 rounded-full mx-auto mt-2"></div>
            </div>
          </div>
        </section>
      );
    };
    
    export default Hero;