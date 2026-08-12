import React from 'react'

export default function SkillsBadge({skill}) {
    console.log("Skills Reciviced",skill.icon);
    // const Icon=skill.icon
    // console.log(icon);
  return (
    <div className=' border flex  gap-1.5 items-center p-2 rounded-lg' >
      <div className='w-[20px] h-[20px]'>
        <img src={skill.icon} alt="" />
      </div>
      <p>{skill.name}</p>
    </div>
    
  )
}
