'use client'


import Image from 'next/image'


interface Skill {
  id: string
  title: string
  icon: string
  description: string
}


interface SkillCardProps {
  skill: Skill
}


export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="p-6 bg-gray-800 rounded-lg hover:shadow-lg transition transform hover:scale-105">
      <div className="mb-4">
        <Image
          src={skill.icon}
          alt={skill.title}
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
      <p className="text-gray-300 text-sm">{skill.description}</p>
    </div>
  )
}



