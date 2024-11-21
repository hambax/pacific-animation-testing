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
  max-width: 100%;
  overflow-x: hidden;
`;

const PageTitle = styled(Typography)`
  margin-bottom: ${props => props.theme.spacing(4)};
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  color: ${props => props.theme.palette.text.primary};
  letter-spacing: -0.02em;
`;

const GridWrapper = styled('div')`
  width: 100%;
  max-width: 100%;
`;

const Home = () => {
  return (
    <PageContainer>
      <PageTitle variant="h1">
        Home
      </PageTitle>
      <GridWrapper>
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
      </GridWrapper>
    </PageContainer>
  );
};

export default Home;
