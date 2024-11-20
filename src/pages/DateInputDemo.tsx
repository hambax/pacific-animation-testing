import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { DateInput } from '../components/DateInput/DateInput';
import '../components/DateInput/DateInput.css';

const Container = styled('div')`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const DemoSection = styled('div')`
  margin-bottom: 2rem;
`;

const Title = styled('h1')`
  color: ${props => props.theme.palette.text.primary};
  margin-bottom: 2rem;
`;

const Description = styled('p')`
  color: ${props => props.theme.palette.text.secondary};
  margin-bottom: 1rem;
`;

const DateInputDemo = () => {
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('15-JAN-2024');

  return (
    <Container>
      <Title>Date Input Component Demo</Title>
      
      <DemoSection>
        <Description>
          Basic date input that accepts multiple formats (dd-mm-yy, dd-mm-yyyy, dd-mmm-yyyy)
          and displays in dd-MMM-yyyy format:
        </Description>
        <DateInput
          label="Date"
          value={date1}
          onChange={setDate1}
        />
        <Description style={{ marginTop: '0.5rem' }}>
          Current value: {date1}
        </Description>
      </DemoSection>

      <DemoSection>
        <Description>
          Required date input with initial value:
        </Description>
        <DateInput
          label="Required Date"
          value={date2}
          onChange={setDate2}
          isRequired={true}
        />
        <Description style={{ marginTop: '0.5rem' }}>
          Current value: {date2}
        </Description>
      </DemoSection>
    </Container>
  );
};

export default DateInputDemo;
