import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
export const Head = () => {
  return (
    <header className="profile-header">
      <a href="/" className="profile-header__menu">
      <MenuIcon/>
      </a>
      <div className="profile-header__home">Profile</div>
      <a href="/" className="profile-header__settings">
        <SettingsIcon/>
      </a>
    </header>
  )
}
