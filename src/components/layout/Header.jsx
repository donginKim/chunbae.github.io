import React, { useState, useEffect } from 'react';
import {content} from '../../constants/headerContent';
import { useLanguage } from '../../context/LanguageContext';
import useScrollPosition from "../../hooks/useScrollPosition";

const Header = () => {
  const { language } = useLanguage();
  const scrollPosition = useScrollPosition();
  const headerHeight = window.innerHeight; // 화면 높이

  return (
    <nav className={`fixed top-0 w-full bg-white shadow-sm z-50 transition-opacity duration-300 ${
      scrollPosition > headerHeight * 0.8 ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">
            {content[language].title}
          </span>
          <div className="space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">
                {content[language].about}
            </a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900">
                {content[language].experience}
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">
                {content[language].skills}
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
                {content[language].contact}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;