import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {
  HomeOutlined,
  MessageOutlined,
  PaymentOutlined,
  PeopleOutlined,
  BusinessOutlined,
  AssessmentOutlined,
  SettingsOutlined
} from '@mui/icons-material';

const NavContainer = styled(motion.nav)`
  width: 52px;
  height: 100vh;
  background-color: #3D3F43;
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

const NavItem = styled(motion.div)`
  color: white;
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:hover .hover-bg {
    opacity: 1;
  }
`;

const HoverBg = styled('div')`
  position: absolute;
  left: 8px; right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  background-color: #000000;
  border-radius: 4px;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 0;
`;

const IconWrapper = styled('div')`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 4px;
  margin-left: 10px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Label = styled('span')`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: white;
  margin-left: 8px;
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
  white-space: nowrap;
`;

const Logo = styled('div')`
  width: 24px;
  height: 24px;
  background-color: #00D7E0;
  border-radius: 50%;
  margin: 0 auto 16px;
  margin-left: 14px;
`;

const ProfileCircle = styled('div')`
  width: 36px;
  height: 36px;
  background-color: #8B5CF6;
  border-radius: 50%;
  position: absolute;
  left: 8px;
  bottom: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  z-index: 1;
`;

const menuItems = [
  { icon: <HomeOutlined />, label: 'Home' },
  { icon: <MessageOutlined />, label: 'Messages' },
  { icon: <PaymentOutlined />, label: 'Payroll' },
  { icon: <PeopleOutlined />, label: 'People' },
  { icon: <BusinessOutlined />, label: 'Companies' },
  { icon: <AssessmentOutlined />, label: 'Reports' },
  { icon: <SettingsOutlined />, label: 'Settings' }
];

const LeftNavMenu: React.FC = () => {
  return (
    <NavContainer
      initial={{ x: -52 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Logo />
      {menuItems.map((item) => (
        <NavItem
          key={item.label}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <HoverBg className="hover-bg" />
          <IconWrapper>
            {item.icon}
            <Label className="nav-label">{item.label}</Label>
          </IconWrapper>
        </NavItem>
      ))}
      <ProfileCircle>AB</ProfileCircle>
    </NavContainer>
  );
};

export default LeftNavMenu;
