import {easeOut, motion} from 'motion/react'

export default function SkillsBadge({skill}) {
   
  return (
    <motion.div 
    whileHover={{scale:1.2,transition:{duration:0.1}}}
    transition={{duration:0.5,ease:easeOut}}
    className=' border flex  gap-1.5 items-center p-2 rounded-lg ' >
      <div className='w-[20px] h-[20px]'>
        <img src={skill.icon} alt="" />
      </div>
      <p>{skill.name}</p>
    </motion.div>
    
  )
}
