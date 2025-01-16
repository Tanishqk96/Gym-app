import React, { useEffect, useState } from 'react'
import ExerciseVideos from '../components/ExerciseVideos'
import Detail from '../components/Detail'
import { useParams } from 'react-router-dom'
import {exerciseoptions, fetchData, youtubeOptions} from  '../utils/fetchData' 

const ExerciseDetail = () =>{
  const [exerciseDetail, setExerciseDetail] = useState({});
  const {id} = useParams();
  const [exercisevideos, setExerciseVideos] =useState([]);
  
  useEffect(()=>{
    const fetchExerciseData = async () =>{
    const exerciseDbUrl ='https://exercisedb.p.rapidapi.com'
    const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com'
       const exerciseData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseoptions);
       setExerciseDetail(exerciseData);
       const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseData.name}`,
        youtubeOptions
      );
        setExerciseVideos(exerciseVideoData.contents);
    }
    fetchExerciseData();
  },[id])
  return  (
    <div>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exercisevideos={exercisevideos} name={exerciseDetail.name}/>
    </div>
  )
}

export default ExerciseDetail
