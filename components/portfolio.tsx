"use client"

import { useEffect, useRef, useState } from "react"

export default function Portfolio() {
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

  const work = [
    {
      title: "National Sales Infrastructure",
      company: "Hillstone Pharmacy",
      impact: "30+ licensed states",
      metrics: "Built GTM operating system from scratch",
      details:
        "Designed sales organization including talent strategy, training frameworks, KPI dashboards, and provider activation pathways that accelerated adoption across peptides, GLP-1s, and BHRT.",
    },
    {
      title: "Multi-State Provider Networks",
      company: "Johnson Compounding",
      impact: "$7.8M net prescription lift",
      metrics: "2,500+ clinicians across 25 markets",
      details:
        "Expanded provider networks and developed clinical education programs and workflow integration strategies that improved provider understanding of compounding safety standards.",
    },
    {
      title: "Therapeutic Category Expansion",
      company: "Multiple Organizations",
      impact: "20-30% YoY growth",
      metrics: "$600K revenue in first two quarters",
      details:
        "Launched new therapeutic categories (GLP-1s, peptides, BHRT, metabolic health) with provider education frameworks and direct-to-patient telemedicine programs.",
    },
    {
      title: "Commercial Leadership",
      company: "Ruby Wines",
      impact: "68% sales increase",
      metrics: "$1.6M → $2.7M revenue",
      details:
        "Managed 145-account territory with 20%+ YoY growth. Won Sales Leader of the Year (2016) and established best practices for account management.",
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 md:px-8 bg-white relative overflow-hidden" ref={ref}>
      <div
        className="absolute bottom-40 right-20 w-80 h-80 bg-sky-100/10 rounded-full blur-3xl -z-10 float-animation"
        style={{ animationDelay: "3s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`mb-12 md:mb-16 ${isVisible ? "fade-in" : "opacity-0"}`}>
          <h2 className="text-slate-900">Selected Work</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl">
            Projects where I've built systems, expanded access, and led teams to deliver measurable impact.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {work.map((item, idx) => (
            <div
              key={idx}
              className={`group p-8 md:p-10 bg-gradient-to-br from-slate-50/50 to-white rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-2xl hover-lift relative overflow-hidden ${
                isVisible ? "fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-cyan-50/0 group-hover:from-sky-50/50 group-hover:to-cyan-50/50 transition-all duration-300 -z-10" />

              <div className="grid md:grid-cols-4 gap-6 md:gap-8 relative z-10">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-sky-600 group-hover:text-sky-700 transition-colors">
                    {item.company}
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold gradient-text mb-1">{item.impact}</p>
                  <p className="text-sm text-slate-600">{item.metrics}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-slate-600 leading-relaxed">{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
