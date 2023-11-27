import Sun_light from '../Assets/Sun_light-mode.svg';
import Sun_dark from '../Assets/Sun_dark-mode.svg';
import Moon_light from '../Assets/Moon_light-mode.svg';
import Moon_dark from '../Assets/Moon_dark-mode.svg';

import React from 'react';
import { ThemeContext } from '../layouts/home.layout';
import './toggler.css'; // Link to your CSS file

export default function Toggler() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const leftIcon = theme === 'dark' ? Sun_dark : Sun_light;

  const rightIcon = theme === 'dark' ? Moon_dark : Moon_light;

  return (
    <label className={`switch`}>
      <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
      <span className="slider">
        <img src={leftIcon} alt="" />
        <img src={rightIcon} alt="" />
      </span>
    </label>
  );
}
