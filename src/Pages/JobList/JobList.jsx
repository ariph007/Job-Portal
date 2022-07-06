import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Search from '../../Components/Search/Search';
import JobCard from '../../Components/JobCard/JobCard';

const JobList = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <div className='xl:max-w-[1024px] lg:max-w-[820px] md:max-w-[650px] w-5/6 m-auto mt-2' data-aos="fade-up">
            <Navbar active='job' />
            <div className='bg-gray-200 h-full'>
            <Search/>
            <JobCard/>
            </div>
        </div>
    )
}

export default JobList