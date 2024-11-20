import { useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark';

export const useThemeMode = () => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    // Check for saved theme preference in localStorage
    const savedMode = localStorage.getItem('themeMode') as ThemeMode;
    if (savedMode) {
      return savedMode;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return {
    mode,
    toggleTheme,
  };
};
