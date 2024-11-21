import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { primitives } from '../../theme/primitives';

interface CardProps {
  children: React.ReactNode;
}

const CardContainer = styled(motion.div)`
  background: ${props => props.theme.palette.mode === 'light' 
    ? primitives.colors.neutral[25]
    : primitives.colors.neutral[900]};
  border: 1px solid ${props => props.theme.palette.mode === 'light'
    ? props.theme.tokens.border.default
    : primitives.colors.neutral[300]};
  border: 1px solid ${props => props.theme.palette.mode === 'dark'
    ? props.theme.tokens.border.default
    : primitives.colors.neutral[400]};
  border-radius: 8px;
  padding: ${props => props.theme.spacing(3)};
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 0;
    margin-bottom: ${props => props.theme.spacing(2)};
    color: ${props => props.theme.palette.text.primary};
  }

  p {
    margin: 0;
    color: ${props => props.theme.palette.text.primary};
    flex: 1;
  }
`;

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </CardContainer>
  );
};

export default Card;
