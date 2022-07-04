import React, { useEffect } from 'react'
import EmployHero from '../../Components/EmployeHero/EmployHero'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'
import Partner from '../../Components/Partner/Partner'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Explorer from '../../Components/Explorer/Explorer'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <div className='xl:max-w-[1024px] lg:max-w-[820px] md:max-w-[650px] w-5/6 m-auto mt-2' data-aos="fade-up">
        <Navbar/>
        <Hero/>
        <Partner/>
        <EmployHero/>
        <Explorer/>
        <Footer/>
    </div>
  )
}

export default Home