"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b border-light-gray transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-charcoal hover:text-soft-teal transition-colors">
          CG
        </Link>

        <div className="hidden md:flex gap-8">
          <Link
            href="#home"
            className="text-sm text-muted-gray hover:text-charcoal transition-colors duration-300 border-b-2 border-transparent hover:border-soft-teal pb-1"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-sm text-muted-gray hover:text-charcoal transition-colors duration-300 border-b-2 border-transparent hover:border-soft-teal pb-1"
          >
            About
          </Link>
          <Link
            href="#portfolio"
            className="text-sm text-muted-gray hover:text-charcoal transition-colors duration-300 border-b-2 border-transparent hover:border-soft-teal pb-1"
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            className="text-sm text-muted-gray hover:text-charcoal transition-colors duration-300 border-b-2 border-transparent hover:border-soft-teal pb-1"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-charcoal">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
