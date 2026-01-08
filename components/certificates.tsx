"use client"

import { useState, useEffect, useRef } from "react"

interface Certificate {
  id: string
  title: string
  issuer: string
  year: string
  description: string
  image: string
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "Board Certification",
    issuer: "Healthcare Leadership Institute",
    year: "2023",
    description: "Advanced healthcare strategy and operations management",
    image: "/healthcare-board-certification.jpg",
  },
  {
    id: "2",
    title: "Digital Health Innovation",
    issuer: "Stanford Center for Digital Health",
    year: "2023",
    description: "Healthcare technology and digital transformation strategy",
    image: "/digital-health-innovation.jpg",
  },
  {
    id: "3",
    title: "Market Access Excellence",
    issuer: "Healthcare Commercial Academy",
    year: "2022",
    description: "Market access, payer strategy, and commercial excellence",
    image: "/market-access-healthcare.jpg",
  },
  {
    id: "4",
    title: "Regulatory Compliance",
    issuer: "FDA & Healthcare Compliance Board",
    year: "2022",
    description: "Healthcare regulatory framework and compliance mastery",
    image: "/healthcare-regulatory-compliance.jpg",
  },
]

export default function Certificates() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<string[]>([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger card animations
          certificates.forEach((cert, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, cert.id])
            }, index * 100)
          })
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
    <section ref={sectionRef} className="w-full py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Professional development and industry recognition in healthcare strategy and operations
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className={`transition-all duration-700 ${
                visibleCards.includes(cert.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="group h-full rounded-xl overflow-hidden bg-white border border-sky-100 hover:border-sky-300 shadow-md hover:shadow-xl transition-all duration-500">
                {/* Certificate Image */}
                <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-sky-100 to-cyan-100">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-3 group-hover:bg-sky-200 transition-colors">
                    {cert.year}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm font-medium text-cyan-600 mb-3">{cert.issuer}</p>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{cert.description}</p>

                  {/* Learn More Link */}
                  <a
                    href="#"
                    className="inline-flex items-center text-sky-600 font-medium text-sm hover:text-sky-700 group/link transition-colors"
                  >
                    View Certificate
                    <svg
                      className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
