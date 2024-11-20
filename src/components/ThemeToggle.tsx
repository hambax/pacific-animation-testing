import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../theme/ThemeProvider';
import { primitives } from '../theme/primitives';

const ToggleContainer = styled('div')`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1100;
`;

const ThemeToggle: React.FC = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <ToggleContainer>
      <IconButton 
        onClick={toggleTheme}
        color="inherit"
        aria-label="toggle theme"
        sx={{
          backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
          '&:hover': {
            backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.12)',
          }
        }}
      >
        {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;