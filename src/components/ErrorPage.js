import React from 'react';
import { Box, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const primary = blue[500]; // #f44336

const linkStyle = {
  textDecoration: "none"
}

 const ErrorPage=()=> {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
     
      <Link style={linkStyle} to="/Add">
      <Button variant="contained">Back Home
      </Button>
      </Link>  
    </Box>
  );
}
export default ErrorPage;