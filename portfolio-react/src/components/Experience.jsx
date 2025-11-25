import React from 'react'

const experiences = [
  {
    role: 'B.Tech — Computer Science Engineering',
    company: 'Jain (Deemed-to-be) University, Bengaluru',
    period: '2022 – 2026',
    details:
      'Developing strong foundations in computer science with practical exposure to UI/UX design, full-stack web development, and software engineering. Gained hands-on experience through academic projects and freelance work, focusing on transforming user insights into functional interfaces.',
  },
  {
    role: 'Class XII — Computer Science',
    company: 'The Greenhills Public School, Wayanad',
    period: '2017 – 2019',
    details:
      'Completed senior secondary education with 73.4%, building early interest in problem-solving, technology, and design principles.',
  },
  {
    role: 'Class X',
    company: 'The Greenhills Public School, Wayanad',
    period: '2016 – 2017',
    details:
      'Scored 100% in Class X, laying a strong academic foundation and developing discipline and analytical thinking.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="space-y-4">
        {experiences.map((e, i) => (
          <div key={i} className="card">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-semibold">{e.role}</div>
                <div className="text-sm text-gray-500">{e.company}</div>
              </div>
              <div className="text-sm text-gray-500">{e.period}</div>
            </div>
            <p className="mt-2 text-sm text-gray-600">{e.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}