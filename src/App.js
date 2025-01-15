import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import './App.css';
import Exercises from './components/Exercises';

const App = () => {
  return (
    <Box width="1200px"  sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
        <Route path='/exercises' element={<Exercises/>} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
