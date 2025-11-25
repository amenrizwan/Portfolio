import React from 'react'

export default function Hero() {
  return (
    <section className="my-12 card">
      <div className="md:flex md:items-center">
        <div className="md:flex-1">
          <h1 className="text-3xl md:text-4xl font-extrabold">Hi - I'm Amen Rizwan</h1>
          <p className="mt-4 text-lg">
            A creative and user-focused Computer Science Engineering student with strong experience in
            UI/UX design, frontend & backend web development, and freelance project execution. I
            specialize in transforming user insights into intuitive, functional, and visually appealing
            digital experiences.
          </p>

          <div className="mt-6">
            <a href="#projects" className="inline-block px-5 py-2 rounded-lg border">View My Work</a>
            <a href="#contact" className="ml-3 inline-block px-5 py-2 rounded-lg bg-blue-600 text-white">Contact Me</a>
          </div>
        </div>

        <div className="md:w-48 md:ml-8 mt-6 md:mt-0">
          <img
            src="/photo.jpg"
            alt="Amen Rizwan"
            className="w-48 h-48 rounded-xl object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  )
}