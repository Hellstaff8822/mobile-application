import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

export const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header__menu">
      <MenuIcon/>
      </a>
      <div className="header__home">Home</div>
      <a href="/" className="header__settings">
        <SettingsIcon/>
      </a>
    </header>
  );
};
