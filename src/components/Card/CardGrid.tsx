import React from 'react';
import { styled } from '@mui/material/styles';

interface CardGridProps {
  children: React.ReactNode;
}

const GridContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
  gap: 16px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

const CardGrid: React.FC<CardGridProps> = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};

export default CardGrid;
