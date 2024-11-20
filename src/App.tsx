import React from 'react';
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

const AppContainer = styled('div')`
  min-height: 100vh;
  background: ${props => props.theme.palette.background.default};
  display: flex;
`;

const MainContent = styled('main')`
  flex: 1;
  margin-left: 52px;
  min-height: 100vh;
  box-sizing: border-box;
  background: ${props => props.theme.palette.background.default};
`;

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContainer>
          <LeftNavMenu />
          <ThemeToggle />
          <MainContent>
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
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
