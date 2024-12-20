import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="bg-neutral-200 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900 hover:underline font-bold text-2xl  text-red-600">Home</Link>
      <Link href="/about" className="mr-5 hover:text-gray-900 hover:underline font-bold text-2xl  text-red-600">About</Link>
      <Link href="/blog" className="mr-5 hover:text-gray-900 hover:underline font-bold text-2xl  text-red-600">Blogs</Link>
      <Link href="/contact" className="mr-5 hover:text-gray-900 hover:underline font-bold text-2xl  text-red-600">Contact</Link>
    </nav>
  </div>
</header>
  )
}

export default Navbar
