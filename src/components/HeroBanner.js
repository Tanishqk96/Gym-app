import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px',xs:'70px'}, ml:{sm:'80px'}}} position="relative" p="20px">
        <Typography color="#6A1B9A" fontSize="26px" fontWeight="600">
        PEAK PERFORMANCE STUDIO
        </Typography>
        <Typography sx={{fontSize:{lg:'44px',sm:'40px'}}} fontWeight={750} mt='20px'>Push, Persevere <br/> and Progress.</Typography>
        <Typography lineHeight='40px' fontSize='22px' mb='30px' mt='23px'>Level Up with Targeted Workouts</Typography>
        <Button variant='contained'   href='#exercises'
        sx={{backgroundColor:'#6A1B9A', padding:'10px', scrollBehavior:'smooth', fontWeight:'600'}}
        >Explore Exercises</Button>
        <Typography sx={{opacity:'0.2',display:{lg:'block', sm:'none'}}}
        color='#6A1B9A' fontWeight='600' fontSize='250px'
        >Exercise</Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner
