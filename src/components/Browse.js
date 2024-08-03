import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'

const Browse = () => {
   const user=useSelector((store)=>store.user);

  return (
    <div>
        <Header/>  
      <h1 className='bg-red-500 text-cyan-300 text-5xl'>{user?.displayName}</h1>
      <h1 className='bg-red-500 text-cyan-300 text-5xl' >Browse</h1>
      <h1 >Browse</h1>
    </div>
  )
}

export default Browse
