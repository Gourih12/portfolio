'use client'


export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-opacity-90 backdrop-blur-md bg-gray-900 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Gouri
        </div>
        <ul className="flex gap-8">
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}



