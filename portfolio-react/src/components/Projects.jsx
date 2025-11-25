import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'E-Commerce Website for Musical Instruments',
    description:
      'Developed and maintained a full-scale e-commerce website as a freelance Web Developer at Luminarylines. Implemented responsive UI/UX, SEO optimization, backend integrations with PHP & MySQL, and continuous performance improvements.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    live: '#',
    repo: 'https://github.com/amenrizwan',
  },
  {
    title: 'Tourist Spot Explorer',
    description:
      'A travel recommendation platform providing global tourist spot insights. Designed UI components, structured navigation flow, and ensured clean responsive layouts focused on usability.',
    stack: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    live: '#',
    repo: 'https://github.com/amenrizwan',
  },
  {
    title: 'Plant Growth Tracker',
    description:
      'A Java-based desktop application that records, monitors, and analyzes plant growth patterns over time. Built with clean interface logic and structured data handling.',
    stack: ['Java'],
    live: '#',
    repo: 'https://github.com/amenrizwan',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}