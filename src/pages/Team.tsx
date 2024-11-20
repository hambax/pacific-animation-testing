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

const Team = () => {
  return (
    <PageContainer>
      <Title>Team</Title>
      <CardGrid>
        <Card>
          <h3>Team Members</h3>
          <p>View and manage your team</p>
        </Card>
        <Card>
          <h3>Departments</h3>
          <p>Organize team structure</p>
        </Card>
        <Card>
          <h3>Permissions</h3>
          <p>Manage access levels</p>
        </Card>
      </CardGrid>
    </PageContainer>
  );
};

export default Team;
