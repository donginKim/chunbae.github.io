import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import useCountUp from '../../hooks/useCountUp';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { content } from '../../constants/aboutContent';

import '../../styles/about.css';

const About = () => {
    const { language } = useLanguage();
    const sectionRef = useRef(null);
    const [shouldStartCounting, setShouldStartCounting] = useState(false);
    const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.5 });

    const calculateYears = () => {
        const startDate = new Date('2017-10-01');
        const currentDate = new Date();
        const diffTime = Math.abs(currentDate - startDate);
        const years = diffTime / (1000 * 60 * 60 * 24 * 365.25);
        return Number(years.toFixed(1));
    };

    useEffect(() => {
        if (isIntersecting && !shouldStartCounting) {
        setShouldStartCounting(true);
        }
    }, [isIntersecting]);

    const years = useCountUp(shouldStartCounting ? calculateYears() : 0);
    
    return (
        <section 
            ref={sectionRef}
            id="about" 
            className="relative min-h-screen flex items-center py-20 bg-white"
        >
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl paperlogy-extrabold mb-8 text-gray-900">
                    {content[language].greeting.split('!')[0]}<span className='text-emerald-900'>!</span><br/>
                    {content[language].name.split('.')[0]}<span className='text-emerald-900'>.</span>
                </h2>
                <div className="prose prose-lg text-gray-600 paperlogy-medium">
                    <p className="mb-6 text-2xl md:text-3xl text-gray-700"> 
                        <span className="year inline-block min-w-[3ch] text-center paperlogy-bold text-emerald-900">
                            {shouldStartCounting ? years : '0.0'}
                        </span>
                        {content[language].intro}
                    </p>
                    <p className="mb-4">
                        {content[language].experience}
                    </p>
                    <p className="mb-4">
                        {content[language].philosophy}
                    </p>
                    <p>
                        {content[language].current}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;