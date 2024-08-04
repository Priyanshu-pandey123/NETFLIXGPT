
import React, { useEffect } from 'react'
import useTrailerVideo from '../hooks/useTrailerVideo'
import { useSelector } from 'react-redux';



const VideoBackground = ({id}) => {

 useTrailerVideo();
 const  trailerData=useSelector((store)=>store.movies ?. addTrailerVideo);
 if(!trailerData) return;
 console.log(trailerData.key,"tariler Data");

  return (
    <div className='w-screen h-screen'>



   <iframe 
   className='w-screen aspect-video'
   src={"https://www.youtube.com/embed/"+trailerData.key+"?&autoplay=1&mute=1"}
  allow="accelerometer; 
   encrypted-media; gyroscope; picture-in-picture; " 
   referrerpolicy="strict-origin-when-cross-origin" >
   </iframe>








      {/* <iframe
     
      className='w-screen h-screen aspect-video'
       
          allow="accelerometer; &autoPlay=1;
          clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    </div>
  )
}

export default VideoBackground
