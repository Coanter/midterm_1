import React from 'react';
import './UserPanel.css'; 
import enTranslations from '../../translations/en.json';
import ruTranslations from '../../translations/ru.json';

const UserPanel = ({
  theme,
  language,
  likes,
  toggleTheme,
  toggleLanguage,
  handleLike,
}) => {
    const translations = language === 'en' ? enTranslations : ruTranslations;

  return (
    <div className={`user-panel ${theme}`}> {}
      <h2>{translations.greeting}</h2>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>
        {translations.like} {likes > 0 ? '❤️' : ''}
      </button>
      <button onClick={toggleTheme}>{translations.toggleTheme}</button>
      <button onClick={toggleLanguage}>{translations.toggleLanguage}</button>

    </div>
  );
};

export default UserPanel;