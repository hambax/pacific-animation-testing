import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '../components/Card/Card';
import CardGrid from '../components/Card/CardGrid';

const PageContainer = styled('div')`
  padding: ${props => props.theme.spacing(3)};
`;

const People = () => {
  return (
    <PageContainer>
      <Typography variant="h1" gutterBottom>
        People
      </Typography>
      <CardGrid>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Employee Directory
          </Typography>
          <p>View and manage employee information</p>
        </Card>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Onboarding
          </Typography>
          <p>Manage employee onboarding process</p>
        </Card>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Performance
          </Typography>
          <p>Track employee performance and reviews</p>
        </Card>
      </CardGrid>
    </PageContainer>
  );
};

export default People;
