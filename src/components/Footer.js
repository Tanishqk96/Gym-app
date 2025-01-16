import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0',
        position: 'fixed',
        bottom: '0',
        height:'100px'
      }}
    >
      <Typography variant="h7" textTransform='capitalize'>
        Made with ❤️ by Tanishq
      </Typography>
    </Box>
  );
};

export default Footer;
