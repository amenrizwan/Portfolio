import React from 'react'


export default function Header() {
return (
<header className="bg-white border-b">
<div className="container flex items-center justify-between h-16">
<a href="#" className="font-bold text-xl">K Amen Rizwan</a>
<nav className="space-x-6">
<a href="#projects" className="hover:underline">Projects</a>
<a href="#experience" className="hover:underline">Experience</a>
<a href="#contact" className="hover:underline">Contact</a>
</nav>
</div>
</header>
)
}