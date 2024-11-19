import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '../components/Card/Card';
import CardGrid from '../components/Card/CardGrid';

const PageContainer = styled('div')`
  padding: ${props => props.theme.spacing(3)};
`;

const Settings = () => {
  return (
    <PageContainer>
      <Typography variant="h1" gutterBottom>
        Settings
      </Typography>
      <CardGrid>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Account Settings
          </Typography>
          <p>Manage your account preferences</p>
        </Card>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Notifications
          </Typography>
          <p>Configure notification settings</p>
        </Card>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Security
          </Typography>
          <p>Update security settings</p>
        </Card>
      </CardGrid>
    </PageContainer>
  );
};

export default Settings;
