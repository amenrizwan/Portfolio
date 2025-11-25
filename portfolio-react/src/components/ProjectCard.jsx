import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <h3 className="font-bold text-lg">{project.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{project.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">{project.stack.join(' • ')}</div>
        <div className="space-x-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline"
            >
              Live
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
