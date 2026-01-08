"use client"

import { useState, useEffect, useRef } from "react"

export default function FeaturedVideo() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured <span className="gradient-text">Insight</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Watch my latest insights on healthcare market dynamics and go-to-market strategy
          </p>
        </div>

        {/* Video Container */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-sky-100 hover:border-sky-300"
          >
            {/* Thumbnail */}
            <div className="relative w-full bg-gradient-to-br from-sky-600 to-cyan-600 overflow-hidden pt-[56.25%]">
              <img
                src="/healthcare-market-strategy-video.jpg"
                alt="Featured video on healthcare market strategy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-sky-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-6 md:p-8 bg-white group-hover:bg-sky-50 transition-colors duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                Go-to-Market Strategy in Healthcare
              </h3>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                Exploring the intersection of market access, clinical adoption, and sustainable growth in the healthcare
                ecosystem
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
