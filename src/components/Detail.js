import React from 'react';
import { Typography, Stack} from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
 const extraDetail =[
    {
        icon:BodyPartImage,
        name:bodyPart
    },
    {
        icon:TargetImage,
        name:target,
    },
    {
        icon:EquipmentImage,
        name:equipment,
    }
 ]
  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: 'row' },
        p: '20px',
        alignItems: 'center',
      }}
    >
      <img src={gifUrl} alt={name} className='detail-image' loading='lazy' />
      <Stack sx={{gap:{lg:'35px', xs:'20px'}}}>
        <Typography variant='h3' ml='20px'>
        {name}
        </Typography>
      
        <Typography variant='h6'
        sx={{
            ml:'20px',
            whiteSpace: 'normal', 
            wordWrap: 'break-word', 
            maxWidth: '400px',
            lineHeight: '1.6',
          }}
        >
        Stay strong and energized with regular exercises. The <span style={{fontWeight:'900',textDecoration:'underline'}}>{name}</span> bup is an excellent choice for targeting your <span style={{fontWeight:'900',textDecoration:'underline'}}>{target}</span> , helping you enhance your core strength, uplift your mood, and boost your energy levels.
        </Typography>
          {extraDetail.map((item,index)=>(
            <Stack key={index} alignItems='center' direction='row' gap='24px' ml='20px'>
                <button style={{borderRadius:'15%', background:'none', width:'80px', height:'80px'}}>
                    <img src={item.icon} style={{width:'60px', height:'60px'}} alt='item.name'/>
                </button>
                <Typography variant='h6' textTransform='capitalize'>
                    {item.name}
                </Typography>
            </Stack>
          ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
