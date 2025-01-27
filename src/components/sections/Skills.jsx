import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../constants/skillsContent';

const TagCloud = ({ tags }) => {
  const getTagSize = (index) => {
    const sizes = ['text-xs', 'text-sm', 'text-base', 'text-lg'];
    return sizes[Math.min(Math.floor(index / 3), sizes.length - 1)];
  };

  const getTagColor = (index) => {
    const colors = [
      'text-emerald-600', 
      'text-emerald-700', 
      'text-emerald-800', 
      'text-emerald-900'
    ];
    return colors[Math.min(Math.floor(index / 3), colors.length - 1)];
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 p-4">
      {tags.map((tag, index) => (
        <span 
          key={tag} 
          className={`
            ${getTagSize(index)} 
            ${getTagColor(index)} 
            bg-emerald-50 
            px-2 
            py-1 
            rounded-full 
            transition 
            hover:scale-105 
            hover:bg-emerald-100
            cursor-default
          `}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

const ProgressBar = ({ level, skillName, isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setProgress(level);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, level]);

  return (
    <div 
      className="w-full bg-gray-200 rounded-full h-2.5" 
      role="progressbar" 
      aria-valuenow={progress} 
      aria-valuemin="0" 
      aria-valuemax="100"
      aria-label={`${skillName} skill level`}
    >
      <div 
        className="bg-emerald-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

const Skills = () => {
  const { language } = useLanguage();
  const skillsData = content[language].categories;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing after becoming visible
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1 // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const processCategory = (category) => {
    const topSkills = category.items.slice(0, 3);
    const tagCloudSkills = category.items.slice(3).map(item => item.name);
    
    return { topSkills, tagCloudSkills };
  };

  return (
    <section 
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl paperlogy-extrabold mb-12 text-gray-900">
          {content[language].title}<span className="text-emerald-900">.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {Object.entries(skillsData).map(([key, category]) => {
            const { topSkills, tagCloudSkills } = processCategory(category);
            
            return (
              <div key={key} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-6 capitalize">{category.title}</h3>
                <div className="space-y-4">
                  {topSkills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.experience}</span>
                      </div>
                      <ProgressBar 
                        level={skill.level} 
                        skillName={skill.name} 
                        isVisible={isVisible}
                      />
                    </div>
                  ))}
                </div>
                {tagCloudSkills.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm text-gray-600 text-center mb-2">More Skills</h4>
                    <TagCloud tags={tagCloudSkills} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;