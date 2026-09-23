import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      // 1. Saved user preference takes priority
      const savedLang = localStorage.getItem('portfolio_lang');
      if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
        return savedLang;
      }
      // 2. Auto-detect browser language
      const browserLang = navigator.language || navigator.userLanguage || 'fr';
      return browserLang.startsWith('fr') ? 'fr' : 'en';
    } catch (e) {
      return 'fr';
    }
  });

  const setLanguage = (lang) => {
    if (lang === 'fr' || lang === 'en') {
      setLanguageState(lang);
      try {
        localStorage.setItem('portfolio_lang', lang);
      } catch (e) {
        console.error('Failed to save language in localStorage', e);
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

