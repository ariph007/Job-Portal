import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'
import Partner from '../../Components/Partner/Partner'

const Home = () => {
  return (
    <div className='xl:max-w-[1024px] lg:max-w-[820px] md:max-w-[650px] w-5/6 m-auto mt-2'>
        <Navbar/>
        <Hero/>
        <Partner/>
    </div>
  )
}

export default Home