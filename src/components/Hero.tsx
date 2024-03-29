import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';

type HeroProps = {
  explore: () => void;
};

function Hero({explore}:HeroProps) {
  return (
    <Stack position="relative" minHeight="100vh" display="flex" alignItems="center" justifyContent="center" sx={{ marginBottom: 0, bgcolor:"black" }}>
      <Image src="/hero.jpg" alt="hero" width={1510} height={800} style={{ width: '100%', height: '100vh', objectFit: 'cover', opacity:"50%", filter:"blur(2px)" }} />
      <Typography
        className='year'
        variant="h2"
        component="div"
        sx={{
          fontWeight: 'bold',
          position: 'absolute',
          color: 'white',
          textAlign: 'center',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: { xs: '24px', sm: '36px', md: '48px', lg: '60px' },
        }}
      >
        LOREM 2024
      </Typography>
      <Typography
        component="div"
        sx={{
          position: 'absolute',
          color: 'white',
          textAlign: 'center',
          top: '57%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize:{xs:"15px", sm:"20px", md:"25px"},
          mt: { xs: '15px', md: '15px' }, // Add margin-top for responsive design
        }}
      >
        {/* 27th and 28th January, VSSUT, Burla */}
        Lorem ipsum dolor sit amet.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          width:"100px",
          position: 'absolute',
          top: '65%', 
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'orange',
          color: 'black',
          fontWeight: 'bold',
          border: "2px solid black",
          mt: { xs: '30px', md: '30px' }, 
        }}
        onClick={explore}
      >
        EXPLORE
      </Button>
    </Stack>
  );
}

export default Hero;
