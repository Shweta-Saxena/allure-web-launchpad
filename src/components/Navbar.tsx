
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Services', path: '/services' },
    { text: 'About Us', path: '/about' },
    { text: 'For chauffeurs', path: '/contact' },
  ];

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
              }}
            >
              <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
                O
              </Typography>
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '1.1rem',
              }}
              onClick={() => navigate('/')}
            >
              Oxford Global
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: 'white',
                    fontWeight: 400,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      color: 'primary.light',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
              
              <Button
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  borderRadius: 2,
                  px: 3,
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'primary.light',
                    color: 'primary.light',
                  },
                }}
              >
                Book
              </Button>
              
              <Button
                variant="contained"
                onClick={() => navigate('/onboarding')}
                sx={{
                  background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                  borderRadius: 2,
                  px: 3,
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #5a6fd8 30%, #6a4190 90%)',
                  },
                }}
              >
                Sign Up
              </Button>
              
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                <Box
                  sx={{
                    width: 24,
                    height: 16,
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 60 30\'%3E%3Cclippath id=\'t\'%3E%3Cpath d=\'m30,15h30v15zv15h-30zh-30v-15zv-15h30z\'/%3E%3C/clippath%3E%3Cpath d=\'m0,0v30h60v-30z\' fill=\'%23012169\'/%3E%3Cpath d=\'m0,0 60,30m0-30-60,30\' stroke=\'%23fff\' stroke-width=\'6\'/%3E%3Cpath d=\'m0,0 60,30m0-30-60,30\' clip-path=\'url(%23t)\' stroke=\'%23c8102e\' stroke-width=\'4\'/%3E%3Cpath d=\'m30,0v30m-30-15h60\' stroke=\'%23fff\' stroke-width=\'10\'/%3E%3Cpath d=\'m30,0v30m-30-15h60\' stroke=\'%23c8102e\' stroke-width=\'6\'/%3E%3C/svg%3E")',
                    backgroundSize: 'cover',
                    borderRadius: 0.5,
                  }}
                />
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
