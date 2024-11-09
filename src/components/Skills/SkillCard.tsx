import React from 'react'
import Image from 'next/image'

interface SkillCardProps {
    skill: {
        id: number;
        title: string;
        image: string;
        percent: string;

    }
}

const SkillCard: React.FC<SkillCardProps> = ({skill}) => {
  return (
    <div className='p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900'>
        <Image src={skill.image} alt={skill.title} width={80} height={80} className='object-cover mx-auto'/>
        <h1 className='mt-4 text-lg font-semibold text-white'>{skill.title}</h1>
    </div>
  )
}

export default SkillCard