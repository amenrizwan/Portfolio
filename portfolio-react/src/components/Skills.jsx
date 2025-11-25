import React from 'react'

const skills = [
  // Design & UX
  { name: 'Figma', level: 'Advanced' },
  { name: 'Adobe Illustrator', level: 'Advanced' },
  { name: 'Adobe Photoshop', level: 'Advanced' },
  { name: 'Adobe Premiere Pro', level: 'Intermediate' },
  { name: 'Sketch', level: 'Intermediate' },

  // Programming
  { name: 'HTML', level: 'Advanced' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'Java', level: 'Intermediate' },

  // Frameworks & Backend
  { name: 'Node.js', level: 'Beginner' },
  { name: 'Express.js', level: 'Beginner' },
  { name: 'PHP', level: 'Intermediate' },

  // Databases
  { name: 'MySQL', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },

  // OS
  { name: 'Linux', level: 'Intermediate' },
  { name: 'Windows', level: 'Advanced' },
]

export default function Skills() {
  return (
    <section id="skills" className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((s) => (
          <div key={s.name} className="card text-center">
            <div className="font-semibold">{s.name}</div>
            <div className="text-sm text-gray-500">{s.level}</div>
          </div>
        ))}
      </div>
    </section>
  )
}