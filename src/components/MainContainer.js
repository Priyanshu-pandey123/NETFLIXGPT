

import React, { useEffect } from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

  const MainContainer = () => {
  const movies=useSelector((store)=>store.movies?.addNowPlaying);
  if(!movies) return;
  const movie=movies[0];
   const {original_title,overview,id}=movie



  

  return (
    <div className=''>
      <VideoTitle title={original_title} overview={overview} /> 
      <VideoBackground />
    </div>
  )
}

export default MainContainer
