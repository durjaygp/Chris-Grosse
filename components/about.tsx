"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function About() {
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
    <section id="about" className="py-20 md:py-32 px-6 md:px-8 bg-white relative overflow-hidden" ref={ref}>
      <div
        className="absolute top-40 right-10 w-96 h-96 bg-sky-100/10 rounded-full blur-3xl -z-10 float-animation"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start relative z-10">
        <div
          className={`relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden ${isVisible ? "fade-in" : "opacity-0"}`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-200/30 to-cyan-200/30 z-10 glow-animated" />
          <Image
            src="/images/headshot-20black-20and-20white.jpg"
            alt="Chris Grosse"
            fill
            className="object-cover hover-scale-lg transition-transform duration-700"
          />
        </div>

        <div
          className={`space-y-6 flex flex-col justify-start ${isVisible ? "fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="text-slate-900">About Me</h2>

          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              I'm a healthcare strategy and market development leader based in the Greater Boston area. For over five
              years, I've built and scaled commercial and operational systems at the intersection of pharmacy, clinical
              education, and national healthcare strategy.
            </p>

            <p>
              My work focuses on enabling safe, high-quality adoption of specialty and personalized therapies across
              complex regulatory environments. I partner with providers, pharmacists, and operations teams to build the
              systems, workflows, and education that support sustainable growth and clinical confidence.
            </p>

            <p>
              Currently, I serve as National Sales Director at Hillstone Pharmacy, where I've built national
              go-to-market and operating infrastructure across 30+ licensed states. I specialize in translating complex
              healthcare policy, regulatory requirements, and clinical standards into clear, actionable guidance for
              teams and providers.
            </p>

            <p>
              Outside of work, I'm deeply interested in AI for organizational leadership, health coaching, and modern
              frameworks for healthcare transformation.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="#portfolio"
              className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 group transition-all hover-scale-sm"
            >
              View My Work
              <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
