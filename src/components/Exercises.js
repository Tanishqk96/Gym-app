import {React} from 'react'
import {  useEffect } from 'react';
import {Box, Typography, Stack} from '@mui/material';
import { exerciseoptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart}) => {
  useEffect(() =>{
    const fetchexercisesData = async () => { 
    let exercisesData = []; 
     if(bodyPart === 'all') { 
     exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseoptions);
      }
     else {
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseoptions);
    }
    setExercises(exercisesData)
      }
    fetchexercisesData();
    },[bodyPart]);

  return (
  <Box id="exercises" 
    sx={{mt: { lg: '110px'}}}
      mt="50px"
    p="20px" 
    >
     <Typography variant="h3" mb="52px" marginLeft="5px" fontWeight='500'> 
     Showing Results 
     </Typography> 
    <Stack direction="row" sx={{ gap: { lg: '11@px', xs: '50px'}}}
     flexWrap="wrap" justifyContent="center"> 
     {exercises.map((exercise,index)=>(
      <ExerciseCard key={index} exercise={exercise}/>
     ))
     }
     </Stack> 
     </Box>
  )
}

export default Exercises;
