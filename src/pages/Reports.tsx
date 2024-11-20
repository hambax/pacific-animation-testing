import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '../components/Card/Card';
import CardGrid from '../components/Card/CardGrid';

const PageContainer = styled('div')`
  padding: ${props => props.theme.spacing(3)};
`;

const Reports = () => {
  return (
    <PageContainer>
      <Typography variant="h1" gutterBottom>
        Reports
      </Typography>
      <CardGrid>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Payroll Reports
          </Typography>
          <p>Generate and view payroll analytics</p>
        </Card>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Employee Reports
          </Typography>
          <p>Access employee statistics and data</p>
        </Card>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Financial Reports
          </Typography>
          <p>View financial summaries and trends</p>
        </Card>
      </CardGrid>
    </PageContainer>
  );
};

export default Reports;
