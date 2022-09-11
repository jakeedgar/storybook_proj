import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface INavBarProps {
  login?: string
}

export default function NavBar(props: INavBarProps) {
  const { login } = props
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Big Site for Big Sites
          </Typography>
          <Button color="inherit">{login}</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
