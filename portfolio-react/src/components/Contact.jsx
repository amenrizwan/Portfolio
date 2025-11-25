import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <p>If you'd like to collaborate, discuss design ideas, or explore web development projects — feel free to reach out.</p>
          <ul className="mt-4 text-sm text-gray-600">
            <li>Email: <strong>amenrizwan1024@gmail.com</strong></li>
            <li>GitHub: <a href="https://github.com/amenrizwan" className="underline">github.com/amenrizwan</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/amen-rizwan-b08b25238" className="underline">linkedin.com/in/amen-rizwan-b08b25238</a></li>
            <li>Phone: <strong>+91 8590401798</strong></li>
          </ul>
        </div>

        
      </div>
    </section>
  )
}