'use client'


import { experience } from '@/data/experience'


export default function Timeline() {
  return (
    <section className="py-20 px-6 bg-gray-900 bg-opacity-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experience.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>
              <div className="pb-8">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-blue-400">{item.company}</p>
                <p className="text-gray-400 text-sm">{item.period}</p>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



