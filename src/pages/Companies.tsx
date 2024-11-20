import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '../components/Card/Card';
import CardGrid from '../components/Card/CardGrid';

const PageContainer = styled('div')`
  padding: ${props => props.theme.spacing(3)};
`;

const Companies = () => {
  return (
    <PageContainer>
      <Typography variant="h1" gutterBottom>
        Companies
      </Typography>
      <CardGrid>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Company Management
          </Typography>
          <p>View and manage company profiles</p>
        </Card>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Departments
          </Typography>
          <p>Manage organizational structure</p>
        </Card>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Locations
          </Typography>
          <p>Track company locations and branches</p>
        </Card>
      </CardGrid>
    </PageContainer>
  );
};

export default Companies;
