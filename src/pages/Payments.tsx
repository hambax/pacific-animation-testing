import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '../components/Card/Card';
import CardGrid from '../components/Card/CardGrid';

const PageContainer = styled('div')`
  padding: ${props => props.theme.spacing(3)};
`;

const Title = styled('h1')`
  color: ${props => props.theme.palette.text.primary};
  margin-bottom: ${props => props.theme.spacing(4)};
  font-size: 2rem;
`;

const Payments = () => {
  return (
    <PageContainer>
      <Title>Payments</Title>
      <CardGrid>
        <Card>
          <h3>Recent Transactions</h3>
          <p>View your payment history</p>
        </Card>
        <Card>
          <h3>Scheduled Payments</h3>
          <p>Manage upcoming payments</p>
        </Card>
        <Card>
          <h3>Payment Settings</h3>
          <p>Configure payment preferences</p>
        </Card>
      </CardGrid>
    </PageContainer>
  );
};

export default Payments;
