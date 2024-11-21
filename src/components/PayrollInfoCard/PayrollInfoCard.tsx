import React from 'react';
import { styled } from '@mui/material/styles';
import { primitives } from '../../theme/primitives';

interface PayrollInfoCardProps {
  title: string;
  variable: string;
  explanation: string;
}

const CardContainer = styled('div')`
  background: ${primitives.colors.neutral[900]};
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled('h3')`
  color: ${primitives.colors.semantic.purple[300]};
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 8px 0;
`;

const Variable = styled('div')`
  color: ${primitives.colors.brand[300]};
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 12px 0;
`;

const Explanation = styled('p')`
  color: ${primitives.colors.base.white};
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.5;
  margin: 0;
`;

const PayrollInfoCard: React.FC<PayrollInfoCardProps> = ({
  title,
  variable,
  explanation
}) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Variable>{variable}</Variable>
      <Explanation>{explanation}</Explanation>
    </CardContainer>
  );
};

export default PayrollInfoCard;
