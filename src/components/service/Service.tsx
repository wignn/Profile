import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import {servicesData} from '@/app/Data/data'
import ServiceCard from './ServiceCard'


const Service = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]' id='services'>
    <SectionHeading>Services</SectionHeading>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] max-w-6xl mx-auto  mt-20">
  {servicesData.map((data) => (
    <div key={data.id}>
      <ServiceCard service={data} />
    </div>
  ))}
</div>

    </div>
  )
}

export default Service
