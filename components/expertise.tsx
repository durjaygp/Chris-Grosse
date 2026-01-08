"use client"

import { useEffect, useRef, useState } from "react"

export default function Expertise() {
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

  const areas = [
    {
      title: "Healthcare Strategy",
      description: "National market development, provider adoption pathways, and clinical access frameworks",
      icon: "🏥",
    },
    {
      title: "Commercial Leadership",
      description: "Go-to-market strategy, sales operations, and revenue modeling across multi-state organizations",
      icon: "📊",
    },
    {
      title: "Clinical Education",
      description: "Provider training, compounding standards, and confidence-building communication strategies",
      icon: "📚",
    },
    {
      title: "Operations & Systems",
      description: "CRM infrastructure, KPI architecture, team training, and cross-functional alignment",
      icon: "⚙️",
    },
    {
      title: "Policy & Regulatory",
      description: "State regulatory environments, DEA compliance, and responsible therapeutic expansion",
      icon: "📋",
    },
    {
      title: "Storytelling & Content",
      description: "Clinical narratives, digital outreach, and content strategies that drive provider engagement",
      icon: "✍️",
    },
  ]

  return (
    <section
      className="py-20 md:py-32 px-6 md:px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
      ref={ref}
    >
      <div
        className="absolute top-20 left-10 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl -z-10 float-animation"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`mb-12 md:mb-16 ${isVisible ? "fade-in" : "opacity-0"}`}>
          <h2 className="text-slate-900">Core Expertise</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl">
            Areas where I've built systems, expanded access, and led teams to deliver measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {areas.map((area, idx) => (
            <div
              key={idx}
              className={`p-6 md:p-8 bg-white rounded-xl border border-slate-200 hover:border-sky-300 hover-lift group transition-all cursor-pointer relative overflow-hidden ${
                isVisible ? "fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-cyan-50/0 group-hover:from-sky-50 group-hover:to-cyan-50/50 transition-all duration-300 -z-10" />

              <div className="text-4xl mb-4 group-hover:scale-125 group-hover:-rotate-6 transition-all duration-300">
                {area.icon}
              </div>
              <h3 className="text-slate-900 font-semibold mb-3 group-hover:text-sky-600 transition-colors">
                {area.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
