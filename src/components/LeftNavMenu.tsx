import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  MessageOutlined,
  PaymentOutlined,
  PeopleOutlined,
  BusinessOutlined,
  AssessmentOutlined,
  SettingsOutlined,
  CalendarMonth
} from '@mui/icons-material';
import { primitives } from '../theme/primitives';

const NavContainer = styled(motion.nav)`
  width: 52px;
  height: 100vh;
  background-color: ${primitives.colors.neutral[800]};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 16px;
  padding-bottom: 16px;
  gap: 4px;
  position: fixed;
  left: 0;
  top: 0;
  transition: width 0.3s ease;
  overflow: hidden;
  z-index: 1000;

  &:hover {
    width: 240px;

    .nav-label {
      opacity: 1;
      transform: translateX(0);
    }

    .hover-bg {
      width: auto;
      right: 4px;
    }
  }
`;

const NavButton = styled(motion.div)<{ isactive: string }>`
  color: ${primitives.colors.base.white};
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  margin: 0 4px;

  &:hover {
    background-color: ${primitives.colors.neutral[900]};
  }

  background-color: ${props => props.isactive === 'true' ? primitives.colors.neutral[900] : 'transparent'};
`;

const NavIcon = styled('div')`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 0px;
  margin-left: 10px;

  svg {
    width: 24px;
    height: 24px;
    color: ${primitives.colors.base.white};
  }
`;

const NavLabel = styled('span')`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: ${primitives.colors.base.white};
  margin-left: 8px;
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
  white-space: nowrap;
`;

const LogoCircle = styled('div')`
  width: 24px;
  height: 24px;
  background-color: ${primitives.colors.brand[400]};
  border-radius: 50%;
  margin: 0 auto 16px;
  margin-left: 14px;
`;

const NavItems = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const ProfileCircle = styled(motion.div)`
  width: 36px;
  height: 36px;
  background-color: ${primitives.colors.semantic.purple[400]};
  color: ${primitives.colors.base.white};
  border-radius: 50%;
  position: absolute;
  left: 8px;
  bottom: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  z-index: 1;
  cursor: pointer;
`;

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, isActive }) => {
  const navigate = useNavigate();

  return (
    <NavButton
      onClick={() => navigate(to)}
      isactive={isActive.toString()}
      whileTap={{ 
        scale: 0.95,
        transition: { 
          type: "spring",
          stiffness: 400,
          damping: 15
        }
      }}
    >
      <NavIcon>{icon}</NavIcon>
      <NavLabel className="nav-label">{label}</NavLabel>
    </NavButton>
  );
};

const LeftNavMenu: React.FC = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: <HomeOutlined />, label: 'Home', to: '/' },
    { icon: <MessageOutlined />, label: 'Messages', to: '/messages' },
    { icon: <PaymentOutlined />, label: 'Payroll', to: '/payroll' },
    { icon: <PeopleOutlined />, label: 'People', to: '/people' },
    { icon: <BusinessOutlined />, label: 'Companies', to: '/companies' },
    { icon: <AssessmentOutlined />, label: 'Reports', to: '/reports' },
    { icon: <SettingsOutlined />, label: 'Settings', to: '/settings' },
    { icon: <CalendarMonth />, label: 'Date Demo', to: '/date-input-demo' }
  ];

  return (
    <NavContainer>
      <LogoCircle />
      <NavItems>
        {menuItems.map((item) => (
          <NavItem
            key={item.to}
            icon={item.icon}
            label={item.label}
            to={item.to}
            isActive={location.pathname === item.to}
          />
        ))}
      </NavItems>
      <ProfileCircle>AB</ProfileCircle>
    </NavContainer>
  );
};

export default LeftNavMenu;
