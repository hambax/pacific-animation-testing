import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '../components/Card/Card';
import CardGrid from '../components/Card/CardGrid';

const PageContainer = styled('div')`
  padding: ${props => props.theme.spacing(3)};
`;

const Payroll = () => {
  return (
    <PageContainer>
      <Typography variant="h1" gutterBottom>
        Payroll
      </Typography>
      <CardGrid>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Payroll Processing
          </Typography>
          <p>Process and manage payroll runs</p>
        </Card>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Employee Payments
          </Typography>
          <p>View and manage employee compensation</p>
        </Card>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Tax Management
          </Typography>
          <p>Handle payroll tax calculations</p>
        </Card>
      </CardGrid>
    </PageContainer>
  );
};

export default Payroll;
