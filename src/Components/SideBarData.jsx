import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';

export const SideBarData = [
  {
    title: "Home",
    path: "/home",
    icon: <HomeOutlinedIcon />,
    cName: 'nav-text'
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <AssessmentOutlinedIcon />,
    cName: 'nav-text'
  },
  {
    title: "Products",
    path: "/products",
    icon: <ShoppingBagOutlinedIcon />,
    cName: 'nav-text'
  },
  {
    title: "Team",
    path: "/team",
    icon: <GroupOutlinedIcon />,
    cName: 'nav-text'
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <MessageOutlinedIcon />,
    cName: 'nav-text'
  },
  {
    title: "About",
    path: "/about",
    icon: <HelpCenterOutlinedIcon />,
    cName: 'nav-text'
  }
];