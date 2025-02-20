import React, { useState } from 'react';
import UserPanel from './UserPanel.jsx';
import { LikesContext } from '../../context/LikesContext.jsx';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import { LanguageContext } from '../../context/LanguageContext.jsx';


const UserPanelContainer = () => {
  const [likes, setLikes] = useState(0);
  const [theme, setTheme] = useState('light'); 
  const [language, setLanguage] = useState('en'); 

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };



  return (
    <LikesContext.Provider value={likes}>
      <ThemeContext.Provider value={theme}>
        <LanguageContext.Provider value={language}>
          
            <UserPanel
              likes={likes}
              theme={theme}
              language={language}
              handleLike={handleLike}
              toggleTheme={toggleTheme}
              toggleLanguage={toggleLanguage}
            />
          
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </LikesContext.Provider>
  );
};

export default UserPanelContainer;