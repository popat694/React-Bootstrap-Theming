// src/components/ThemeSwitcher.js
import React, { useState, useEffect } from 'react';
import './ThemeSwitcher.scss';

const ThemeSwitcher = () => {
  // Default theme presets
  const defaultPresets = [
    {
      name: 'Default',
      colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#343a40',
      },
    },
    {
      name: 'Ocean',
      colors: {
        primary: '#0077c2',
        secondary: '#3f6778',
        success: '#3ea76a',
        danger: '#cc4759',
        warning: '#ffb822',
        info: '#00b8d9',
        light: '#f0f6fa',
        dark: '#1f2937',
      },
    },
    {
      name: 'Forest',
      colors: {
        primary: '#00796b',
        secondary: '#689f38',
        success: '#4caf50',
        danger: '#d32f2f',
        warning: '#ff9800',
        info: '#2196f3',
        light: '#f1f8e9',
        dark: '#212121',
      },
    },
    {
      name: 'Sunset',
      colors: {
        primary: '#f44336',
        secondary: '#673ab7',
        success: '#4caf50',
        danger: '#e91e63',
        warning: '#ff9800',
        info: '#03a9f4',
        light: '#fff9c4',
        dark: '#263238',
      },
    },
    {
      name: 'Gray',
      colors: {
        primary: '#495057',
        secondary: '#ced4da',
        success: '#6c757d',
        danger: '#212529',
        warning: '#343a40',
        info: '#adb5bd',
        light: '#f8f9fa',
        dark: '#212529',
      },
    },
  ];

  // State for theme and selected preset index
  const [theme, setTheme] = useState(defaultPresets[0].colors); // Default to the first preset
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);

  // Initialize dark mode state with default value or value from local storage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  // Apply theme colors and dark mode from local storage on initial load
  useEffect(() => {
    applyTheme(theme);
    document.body.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light');
  }, [theme, isDarkMode]);

  // Save theme to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  // Save dark mode to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Function to apply selected theme
  const applyTheme = (selectedTheme) => {
    Object.keys(selectedTheme).forEach((color) => {
      document.documentElement.style.setProperty(`--${color}-color`, selectedTheme[color]);
    });
  };

  // Handle theme change when user selects a preset
  const handlePresetChange = (index) => {
    setSelectedPresetIndex(index);
    setTheme(defaultPresets[index].colors);
  };

  // Handle custom theme color change
  const handleColorChange = (color, value) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      [color]: value,
    }));
    document.documentElement.style.setProperty(`--${color}-color`, value);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return (
    <div className="theme-switcher">
      <div className="toggle-switch">
        <label>
          <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
          <span className="slider"></span>
        </label>
        <span>{isDarkMode ? 'Dark' : 'Light'} Mode</span>
      </div>
      <div className="presets">
        <h3>Presets</h3>
        <div className="preset-list">
          {defaultPresets.map((preset, index) => (
            <button
              key={index}
              className={`preset-button ${index === selectedPresetIndex ? 'active' : ''}`}
              onClick={() => handlePresetChange(index)}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>
      <div className="color-pickers">
        <h3>Customize Theme</h3>
        {Object.keys(theme).map((color) => (
          <div key={color} className="color-picker">
            <label>{color}</label>
            <input
              type="color"
              value={theme[color]}
              onChange={(e) => handleColorChange(color, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
