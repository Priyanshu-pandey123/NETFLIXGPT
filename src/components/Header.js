import React from 'react'
import { LOGO } from '../utils/constant'

const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-transparent to-black h-18 w-full'>
      <img src={LOGO}  className='h-20 w-25'
      alt="not found"/>
    </div>
  )
}

export default Header
