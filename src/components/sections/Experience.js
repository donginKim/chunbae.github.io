import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../constants/experienceContent';
import { ChevronDown, ChevronUp } from 'lucide-react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Experience = () => {
  const { language } = useLanguage();
  const [openCompany, setOpenCompany] = useState(null);
  const [showGuide, setShowGuide] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('none');
  const lastScrollY = useRef(0);
  const sectionRef = useRef(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.2 });
  
    useEffect(() => {
        const updateScrollDirection = () => {
          const currentScrollY = window.scrollY;
          const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
          lastScrollY.current = currentScrollY;
          setScrollDirection(direction);
        };
    
        window.addEventListener('scroll', updateScrollDirection);
        return () => window.removeEventListener('scroll', updateScrollDirection);
      }, []);
  
      useEffect(() => {
        if (isIntersecting && scrollDirection === 'down') {
          const hasSeenGuide = sessionStorage.getItem('experienceGuide');
          
          if (!hasSeenGuide) {
            setShowGuide(true);
            sessionStorage.setItem('experienceGuide', 'seen');
            
            const hideGuide = setTimeout(() => {
              setShowGuide(false);
            }, 3000);
    
            return () => {
              clearTimeout(hideGuide);
              setShowGuide(false);
            };
          }
        }
      }, [isIntersecting, scrollDirection]);
    

  const toggleCompany = (companyName) => {
    setOpenCompany(openCompany === companyName ? null : companyName);
  };

  const ProjectCard = ({ project }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-8">
      <h4 className="text-xl font-bold text-emerald-900 mb-2">{project.title}</h4>
      <div className="text-gray-700 mb-4 paperlogy-medium">
        <h5 className="font-semibold mb-2">{content[language].sections.overview}</h5>
        <p className="text-sm mb-4">{project.overview}</p>
        
        <h5 className="font-semibold mb-2">{content[language].sections.responsibilities}</h5>
        <ul className="list-disc list-inside space-y-2">
          {project.responsibilities.map((responsibility, index) => (
            <li key={index} className="text-sm ml-4">{responsibility}</li>
          ))}
        </ul>

        <div className="mt-4">
          <h5 className="font-semibold mb-2">{content[language].sections.tech}</h5>
          <div className="flex flex-wrap gap-2">
            {project.techStack.split(', ').map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="experience" className="relative min-h-screen py-20 bg-gray-50">

      <div className={`
        fixed left-1/2 transform -translate-x-1/2 bg-emerald-900 text-white 
        px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-500
        ${showGuide ? 'top-32 opacity-100' : 'top-24 opacity-0 pointer-events-none'}
      `}>
        <p className="text-sm paperlogy-medium">
          {content[language].guide}
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl paperlogy-extrabold mb-12 text-gray-900">
          {content[language].title}<span className="text-emerald-900">.</span>
        </h2>
        
        <div className="space-y-16">
          {content[language].companies.map((company, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-emerald-500">
              <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-0"></div>
              
              <div 
                className="mb-8 cursor-pointer group"
                onClick={() => toggleCompany(company.name)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                      {company.name}<span className="text-emerald-900">.</span>
                    </h3>
                    <div className="text-emerald-700 font-semibold mt-1">{company.role}</div>
                    <div className="text-gray-600">{company.period}</div>
                  </div>
                  {openCompany === company.name ? 
                    <ChevronUp className="w-6 h-6 text-emerald-700" /> : 
                    <ChevronDown className="w-6 h-6 text-emerald-700" />
                  }
                </div>
              </div>

              <div className={`space-y-6 transition-all duration-300 overflow-hidden ${
                openCompany === company.name ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {company.projects.map((project, projectIndex) => (
                  <ProjectCard key={projectIndex} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Experience */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {content[language].education.title}<span className="text-emerald-900">.</span>
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {content[language].education.activities.map((activity, index) => (
              <li key={index} className="ml-4">{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;