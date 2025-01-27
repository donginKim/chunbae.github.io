import React from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-32 right-8 flex flex-col gap-2 z-50">
      <button 
        onClick={() => setLanguage('ko')}
        className={`px-4 py-2 rounded-lg ${
          language === 'ko' ? 
          'bg-emerald-900 text-white' : 
          'bg-gray-200 text-gray-600'
        } transition-colors`}
      >
        KOR
      </button>
      <button 
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-lg ${
          language === 'en' ? 
          'bg-emerald-900 text-white' : 
          'bg-gray-200 text-gray-600'
        } transition-colors`}
      >
        ENG
      </button>
    </div>
  );
};

export default LanguageSwitch;

