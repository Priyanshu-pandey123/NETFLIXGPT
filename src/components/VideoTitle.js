
import React from 'react'



const VideoTitle = ({title,overview}) => {
    

  return (
    <div  className='mt-[20%]  pl-[10%] absolute text-white w-screen aspect-video '>
 
    <h1 className='text-5xl font-bold  m-2'>{title}</h1>
    <p  className='w-1/4 p-2 m-2 font-bold text-lg pr-30'>{overview}</p>
    <diV>
    <button className='p-8  py-4 m-2 bg-white rounded-lg text-black text-xl font-bold hover:bg-gray-400'>Play</button>
    <button className='p-8  py-4 m-2 bg-gray-400 rounded-lg text-xl font-bold text-white hover:bg-white hover:text-black'>Show</button>
    </diV>







    </div>
  )
}

export default VideoTitle
