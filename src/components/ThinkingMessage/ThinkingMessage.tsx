import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import { primitives } from '../../theme/primitives';

const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
`;

const Container = styled('div')`
  color: ${primitives.colors.brand[300]};
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
`;

const AnimatedChar = styled('span')<{ $delay: number }>`
  animation: ${pulseAnimation} 1s infinite;
  animation-delay: ${props => props.$delay}s;
`;

const ThinkingMessage = () => {
  const text = "thinking...";
  
  return (
    <Container>
      {text.split('').map((char, index) => (
        <AnimatedChar
          key={index}
          $delay={index * 0.1}
        >
          {char}
        </AnimatedChar>
      ))}
    </Container>
  );
};

export default ThinkingMessage;
