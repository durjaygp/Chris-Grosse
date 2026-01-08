"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 py-16 md:py-20 px-6 md:px-8 border-t border-slate-800"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid md:grid-cols-4 gap-8 md:gap-12 mb-12 pb-12 border-b border-slate-800 ${isVisible ? "fade-in" : "opacity-0"}`}
        >
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity mb-4 block">
              CG
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Healthcare strategy leader specializing in go-to-market execution and provider adoption.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <nav className="space-y-2">
              {["Home", "About", "Portfolio", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-slate-400 hover:text-purple-400 transition-colors block py-1"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-2">
              <Link
                href="mailto:cgrosse66@gmail.com"
                className="text-sm text-slate-400 hover:text-purple-400 transition-colors block py-1"
              >
                Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/sales-operations-development"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-purple-400 transition-colors block py-1"
              >
                LinkedIn
              </Link>
              <Link
                href="https://chris-newsletter-27fa7e.beehiiv.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-purple-400 transition-colors block py-1"
              >
                Newsletter
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-white mb-4">Ready to Talk?</h4>
            <Link
              href="#contact"
              className="inline-flex px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div
          className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isVisible ? "fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          <p className="text-sm text-slate-500">© {currentYear} Chris Grosse. All rights reserved.</p>
          <p className="text-sm text-slate-500">Designed & built with modern principles</p>
        </div>
      </div>
    </footer>
  )
}
