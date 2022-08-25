import Image from 'next/image'
import React from 'react'
import { experience } from '../../utils/constants'

const Experience = () => {
  return (
    <div className="w-[100%] shadow-md p-5 mt-10 bg-white rounded-md">
        <h1 className='text-lg font-semibold mb-4'>Experience</h1>
        {
            experience.map((exp) => (
                <div key={exp.id} className="flex space-x-3 mb-4">
                    <div className='w-[10%]'>
                        <Image 
                            src={exp.logo}
                            height="40px"
                            width="40px"
                            alt={exp.companyName}
                        />
                    </div>
                    <div className="w-[90%]">
                        <div className='flex flex-col'>
                            <span className='text-sm font-bold'>{exp.companyName}</span>
                            <span className='text-sm'>1 year</span>
                        </div>
                        <div className="mt-4 flex flex-col border-b-[1px] border-b- pb-2">
                            <span className='font-bold'>{exp.jobTilte}</span>
                            <span className="text-sm">{exp.empType}</span>
                            <span className="text-sm text-darkOverlay">{exp.duration}</span>
                            <span className="text-sm mt-4">{exp.description}</span>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Experience