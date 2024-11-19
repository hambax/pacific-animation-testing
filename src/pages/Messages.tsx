import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '../components/Card/Card';
import CardGrid from '../components/Card/CardGrid';

const PageContainer = styled('div')`
  padding: ${props => props.theme.spacing(3)};
`;

const Messages = () => {
  return (
    <PageContainer>
      <Typography variant="h1" gutterBottom>
        Messages
      </Typography>
      <CardGrid>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Inbox
          </Typography>
          <p>View and manage your messages</p>
        </Card>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Sent
          </Typography>
          <p>Track sent messages</p>
        </Card>
        <Card>
          <Typography variant="h3" component="h2" gutterBottom>
            Drafts
          </Typography>
          <p>Access your message drafts</p>
        </Card>
      </CardGrid>
    </PageContainer>
  );
};

export default Messages;
