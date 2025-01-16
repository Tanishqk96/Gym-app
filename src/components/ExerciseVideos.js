import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exercisevideos, name }) => {
  console.log(exercisevideos);
  return (
    <Box sx={{ marginTop: { lg: '20px', xs: '20px' }, p: '20px'}}>
      <Typography variant="h3" mb="33px">
        Watch <span style={{ color: '#6A1B9A', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        flexDirection={{ lg: 'row' }}
        gap={{ lg: '40px', xs: '20px' }}
      >
        {exercisevideos?.slice(0, 9).map((item,index) => (
          <a
          key={index}
          className ="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target='_blank'
          rel="noreferrer"
          >
           <img src={item.video.thumbnails[0].url} alt={item.name} 
            style={{
              display: 'block', 
              margin: '0 auto', 
              width: '100%', 
            }}
           />
            <Box>
            <Typography sx={{color:'black'}}>
            {item.video.channelName}
            </Typography>
            <Typography sx={{mt:'10px', color:'black'}}>
            Duration: {item.video.lengthText}
            </Typography>
            </Box>
           </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
