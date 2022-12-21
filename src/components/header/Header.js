import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DesktopMacRoundedIcon from '@mui/icons-material/DesktopMacRounded';
import { Link, Outlet } from 'react-router-dom';


const pages = ['Add', 'Display', 'Blogs'];
const Header = ()=> {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const HeaderStyle = {
    textDecoration:"none",
    color:"white",
  }
  const mobileHeaderStyle = {
    textDecoration:"none",
    color:"black",
  }

  return (
    <>
   <AppBar position="fixed" sx={{backgroundColor:'#F87171'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopMacRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/Add"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'poppins',
              fontWeight: 400,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Mini Project
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                  <Link
                  style={mobileHeaderStyle} 
                  to={`${page}`}>
                {page}
                </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <DesktopMacRoundedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'inherit',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          Mini Project
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button 
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#fff', display: 'flex' }}
                
              >
               <Link 
                style={HeaderStyle}
               to={`${page}`}>
                {page}
                </Link>
              </Button>
            ))}
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
    <Outlet />
    </>
  );
}


export default Header;