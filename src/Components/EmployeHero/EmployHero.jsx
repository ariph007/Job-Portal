import React from 'react'
import Buttons from '../Buttons/Buttons'
import student from '../../assets/img/student.jpg'
import { GoLocation } from "react-icons/go";
const EmployHero = () => {
    return (
        <div className='flex flex-col md:flex-row mt-10 justify-between gap-10'>
            <div className="employeImg lg:w-7/12 relative content-center items-center align-middle flex">
                <img src={student} alt="Employee" className='rounded-xl' />
                <div className=' w-[200px] h-[200px] bg-white rounded-xl -bottom-12 shadow-lg left-2 hidden md:hidden lg:block absolute'>
                    <div className='flex mt-4 flex-col items-center'>
                        <img src={student} className='w-12 h-12 object-cover rounded-full' alt="Employee" />
                        <p className='text-sm text-slate-700 font-semibold mb-2'>Nurul Kuswandari</p>
                        <p className='text-sm text-slate-600 font-medium'>Fullstack Developer</p>
                        <p className='text-sm text-slate-600 font-medium flex mb-4'> <span><GoLocation/></span> Jakarta, Indonesia</p>
                        <Buttons type='signup' text='Hire'/>
                    </div>
                </div>
            </div>
            <div className="employeInfo lg:w-5/12 flex flex-col justify-center items-start  m-auto">
                <p className='text-lg font-medium text-blue-600 mb-4 bg-blue-200 w-fit px-4 rounded-xl'>For Employee</p>
                <p className='text-3xl font-semibold text-slate-800'>Get your dreaming job information</p>
                <p className='text-slate-600 font-medium mb-4 mt-4'>Here you can access all information for your dreaming job,internship, fulltime, freelance, fresh job information, easy to apply base your skill and you are ready to get your first job</p>
                <Buttons type='find' text='Find Now'/>
            </div>
        </div>
    )
}

export default EmployHero