import React from 'react'

const Footer = () => {
  return (
    <div className='flex md:flex-row flex-col flex-wrap justify-between mt-8'>
      <div className="jobSeeker">
          <p className='text-slate-800 font-semibold text-medium mb-4'>Job Seeker</p>
          <ul>
            <li className='cursor-pointer text-slate-600 text-sm font-normal mb-2'>Job by speciality</li>
            <li className='cursor-pointer text-slate-600 text-sm font-normal mb-2'>Job by company name</li>
            <li className='cursor-pointer text-slate-600 text-sm font-normal mb-2'>Career Resource</li>
            <li className='cursor-pointer text-slate-600 text-sm font-normal mb-2'>Testimoni</li>
          </ul>
      </div>
      <div className="company mt-4 md:mt-0">
        <p className='text-slate-800 font-semibold text-medium mb-4'>Company</p>
        <ul>
          <li className='cursor-pointer text-slate-600 text-sm font-normal mb-2'>Job Advertisement</li>
          <li className='cursor-pointer text-slate-600 text-sm font-normal mb-2'>Talent Search</li>
          <li className='cursor-pointer text-slate-600 text-sm font-normal mb-2'>Ads with Us</li>
          <li className='cursor-pointer text-slate-600 text-sm font-normal mb-2'>Company Profile</li>
        </ul>
      </div>
      <div className="about mt-4 md:mt-0">
        <p className='text-slate-800 font-semibold text-medium mb-4'>About JobFinder</p>
        <ul>
          <li className='cursor-pointer text-slate-600 text-sm font-normal mb-2'>About Us</li>
          <li className='cursor-pointer text-slate-600 text-sm font-normal mb-2'>Career with Us</li>
          <li className='cursor-pointer text-slate-600 text-sm font-normal mb-2'>International Partner</li>
        </ul>
      </div>
      <div className="contact mt-4 md:mt-0">
        <p className='text-slate-800 font-semibold text-medium mb-4'>Contact</p>
        <ul>
          <li className='cursor-pointer text-slate-600 text-sm font-normal mb-2'>Contact Us</li>
          <li className='cursor-pointer text-slate-600 text-sm font-normal mb-2'>FAQ</li>
          <li className='cursor-pointer text-slate-600 text-sm font-normal mb-2'>Feedback</li>
          <li className='cursor-pointer text-slate-600 text-sm font-normal mb-2'>Social Media</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer