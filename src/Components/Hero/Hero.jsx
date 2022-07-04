import React from 'react'
import heroImg from '../../assets/img/heroImg.jpg'
import Buttons from '../Buttons/Buttons'

const Hero = () => {
    return (
        <div className='flex md:flex-row flex-col mt-5 gap-10'>
            <div className="textHero flex flex-col justify-center content-center">
                <p className='text-slate-800 font-bold text-5xl mb-4'>
                    Find your dream job with
                    <span className='text-blue-600 font-bold text-5xl pl-2'>
                        JobFinder.
                    </span>
                </p>
                <p className='text-slate-500 font-normal mb-4'>Get the most exciting jobs from all around the world and grow your career fast with other</p>
            <Buttons type='find'/>
            </div>
            <div className="imgHero">
                <img className='rounded-xl' src={heroImg} alt="Hero Img" />
            </div>
        </div>
    )
}

export default Hero