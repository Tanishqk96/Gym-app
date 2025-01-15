import React from 'react'
import {Box, Typography, Stack, Button} from '@mui/material';
import {Link} from 'react-router-dom';
const ExerciseCard = ({exercise}) => {
  return (
    <Link className="exercise-card " to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl}/>
    <Stack direction="row">
    <Typography sx={{ml:'22px', textTransform:'capitalize',fontSize:'18px',fontWeight: 600,color:'black',textOverflow: 'ellipsis', overflow: 'hidden',lineHeight:'1.5'}}>{exercise.name}</Typography>
    </Stack>
    </Link>
  )
}

export default ExerciseCard
