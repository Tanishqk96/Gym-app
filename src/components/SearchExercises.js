import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseoptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const BodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseoptions);
      setBodyParts(['all', ...BodyPartsData]); // Add 'all' to the bodyParts list
    }
    fetchExerciseData();
  }, []);

  const HandleSearch = async () => {
    if (search) {
      console.log("Searching for:", search);
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseoptions);
     // console.log("Fetched Exercises Data:", exercisesData);
      const searchedExercises = exercisesData.filter((exercise) =>
        exercise.name?.toLowerCase().includes(search)
        || exercise.target?.toLowerCase().includes(search)
        || exercise.equipment?.toLowerCase().includes(search)
        || exercise.bodyPart?.toLowerCase().includes(search)
      );
      console.log(searchedExercises);
      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={900} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Elevate Your Fitness <br /> Game Beyond Imagination
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          placeholder="Search Exercises"
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
        />
        <Button
          className="search-btn"
          sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }}
          onClick={HandleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        {/* Pass 'bodyPart' (the selected body part) and 'setBodyPart' to HorizontalScrollbar */}
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  );
};  
export default SearchExercises;
