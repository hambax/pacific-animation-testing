import React, { useState } from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import LeftNavMenu from './components/LeftNavMenu';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Payroll from './pages/Payroll';
import People from './pages/People';
import Companies from './pages/Companies';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import DateInputDemo from './pages/DateInputDemo';
import { RightAssistantPanel } from './components/RightAssistantPanel/RightAssistantPanel';

const AppContainer = styled('div')`
  min-height: 100vh;
  background: ${props => props.theme.palette.background.default};
  display: flex;
`;

const MainContent = styled('main')<{ $panelWidth: number }>`
  flex: 1;
  margin-left: 52px;
  margin-right: ${props => props.$panelWidth}px;
  min-height: 100vh;
  box-sizing: border-box;
  background: ${props => props.theme.palette.background.default};
  transition: margin-right 0.1s ease;
`;

const App = () => {
  const [panelWidth, setPanelWidth] = useState(340);
  const [messages] = useState([
    { 
      type: 'text' as const,
      content: 'Can you show me information about employee salary?',
      sender: 'human' as const 
    },
    {
      type: 'thinking' as const
    },
    { 
      type: 'text' as const,
      content: 'Here is the salary information for the employee:',
      sender: 'ai' as const 
    },
    {
      type: 'payroll-card' as const,
      title: 'Salary',
      variable: '$100,000.00 per year',
      explanation: 'The amount before tax that the employee is paid for ordinary hours as per their employment agreement.'
    },
    { 
      type: 'text' as const,
      content: 'How can I create a new component?',
      sender: 'human' as const 
    },
    { 
      type: 'text' as const,
      content: 'I can help you create a new React component. First, let\'s decide what functionality you need and then we can structure it accordingly.',
      sender: 'ai' as const 
    },
    { 
      type: 'text' as const,
      content: 'I want to make a date input component',
      sender: 'human' as const 
    },
    { 
      type: 'text' as const,
      content: 'Great choice! Let\'s create a date input component using React Aria for accessibility. We\'ll need to handle date formatting and validation...',
      sender: 'ai' as const 
    }
  ]);

  return (
    <ThemeProvider>
      <Router>
        <AppContainer>
          <LeftNavMenu />
          <ThemeToggle />
          <MainContent $panelWidth={panelWidth}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/payroll" element={<Payroll />} />
              <Route path="/people" element={<People />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/date-input-demo" element={<DateInputDemo />} />
            </Routes>
          </MainContent>
          <RightAssistantPanel 
            messages={messages}
            onWidthChange={setPanelWidth}
          />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
