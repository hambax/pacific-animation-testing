import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '../components/Card/Card';
import CardGrid from '../components/Card/CardGrid';

const PageContainer = styled('div')`
  padding: ${props => props.theme.spacing(4)};
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

const PageTitle = styled(Typography)`
  margin-bottom: ${props => props.theme.spacing(4)};
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  color: ${props => props.theme.palette.text.primary};
  letter-spacing: -0.02em;
`;

const Home = () => {
  return (
    <PageContainer>
      <PageTitle variant="h1">
        Home
      </PageTitle>
      <CardGrid>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Recent Activity
          </Typography>
          <p>View your latest activities</p>
        </Card>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Quick Actions
          </Typography>
          <p>Access frequently used features</p>
        </Card>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Notifications
          </Typography>
          <p>View important updates</p>
        </Card>
      </CardGrid>
    </PageContainer>
  );
};

export default Home;
