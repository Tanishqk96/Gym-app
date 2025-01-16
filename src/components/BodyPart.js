import React from 'react'
import Icon from '../assets/icons/gym.png';
import { Stack, Typography } from '@mui/material';
const BodyPart = ({ item, setBodyPart , selectedBodyPart}) => {
  return (
 <Stack type='button'
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{
            borderTop: item===selectedBodyPart ? '4px solid  #6A1B9A':'',
            backgroundColor:'#fff',
            borderBottomLeftRadius:"20px",
            width:'270px',
            height:'280px',
            cursor:'pointer',
            gap:'47px'
        }}
        onClick={()=>{
            setBodyPart(item);
            window.scrollTo({top:1800,left:100,behavior:'smooth' })
        }}
 >
    <img src={Icon} alt='dumbell' style={{height:'40px', width:'40px'}}></img>
    <Typography fontSize='24px' color='#3A1212' textTransform='capitalize' fontWeight='400'>{item}</Typography>
 </Stack>
  )
}

export default BodyPart
