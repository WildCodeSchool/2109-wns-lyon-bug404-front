import * as React from 'react';
import Typography from '@mui/material/Typography';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';

interface TitleProps {
  children?: React.ReactNode;
}

export default function Title(props: TitleProps) {
  return (
      
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
        <h1>Home</h1>
        <span><NotificationsNoneIcon></NotificationsNoneIcon></span>
        <span> <Avatar alt="Remy Sharp" src=".././assets/proflie-image" /></span>
    </Typography>
  );
}