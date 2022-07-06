import React, { useEffect } from 'react'
import jobListDummy from '../../helper/jobListDummy'
import { LocationOnOutlined, PaidOutlined, WorkOutlineOutlined } from '@mui/icons-material';


const JobCard = () => {

  return (
    <div className='cardContainer flex mx-4'>
      <div className="leftContainer w-1/3">
        {jobListDummy.map((job, index) => (
          <div className="jobWrapper bg-white rounded-md my-4 px-4 py-4" key={index}>
            <div className="jobHeader flex gap-4 items-center">
              <div className="imgWrapper w-20 h-20 flex items-center">
                <img src={job.company_img} alt="jobImg" className='object-cover' />
              </div>
              <div className="textHead">
                <p className='font-medium text-sm'>{job.position}</p>
                <p className='font-normal text-sm text-slate-600'>{job.company}</p>
              </div>
            </div>
            <div className="jobBody">
              <p className='font-light text-slate-600 text-xs'><span className='mr-2'><LocationOnOutlined/></span>{job.location}</p>
              <p className='font-light text-slate-600 text-xs'><span className='mr-2'><PaidOutlined/></span>{job.salary_range}</p>
              <p className='font-light text-slate-600 text-xs'><span className='mr-2'><WorkOutlineOutlined/></span> {job.experience}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rightContainer flex flex-col bg-white items-center ml-4 mt-4 w-2/3 rounded-md">
          <p className='text-lg text-slate-600 font-semibold mt-4'>There is 464 job for you</p>
          <p className='text-sm text-slate-600 font-normal'>Please select job on the left list to see detail</p>
      </div>
    </div>
  )
}

export default JobCard