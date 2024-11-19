import React from 'react';
import { styled } from '@mui/material/styles';

interface CardGridProps {
  children: React.ReactNode;
}

const GridContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin: -8px; // Compensate for card margins
  width: calc(100% + 16px); // Compensate for negative margins
`;

const CardGrid: React.FC<CardGridProps> = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};

export default CardGrid;
