import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px',xs:'70px'}, ml:{sm:'80px'}}} position="relative" p="20px">
        <Typography color="#FF2625" fontSize="26px" fontWeight="600">
        Peak Performance Studio
        </Typography>
        <Typography sx={{fontSize:{lg:'44px',sm:'40px'}}} fontWeight={750} mt='20px'>Push, Persevere <br/> and Progress.</Typography>
        <Typography lineHeight='40px' fontSize='22px' mb='30px' mt='23px'>Level Up with Targeted Workouts</Typography>
        <Button variant='contained' color='error'  href='#exercises'
        sx={{backgroundColor:'#FF2625', padding:'10px'}}
        >Explore Exercises</Button>
        <Typography sx={{opacity:'0.1',display:{lg:'block', sm:'none'}}}
        color='#FF2625' fontWeight='600' fontSize='250px'
        >Exercise</Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner
