"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200"
          : "bg-white/50 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity">
          CG
        </Link>

        <div className="hidden md:flex gap-1 items-center">
          {["Home", "About", "Portfolio", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 hover:text-sky-600 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-sky-50"
            >
              {item}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="ml-4 px-5 py-2 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-medium rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 btn-glow"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 animate-fade-in-down">
          <div className="px-6 py-4 space-y-2">
            {["Home", "About", "Portfolio", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-sm font-medium text-slate-600 hover:text-sky-600 py-2 transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {item}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="block px-4 py-2 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-medium rounded-lg text-center mt-2"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
