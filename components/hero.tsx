"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-8 bg-gradient-to-br from-sky-50 via-white to-cyan-50 overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl float-animation opacity-60" />
      <div
        className="absolute bottom-10 right-5 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl float-animation opacity-40"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className={`space-y-8 ${isVisible ? "fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full border border-sky-200 glow-animated">
                  Healthcare Strategy & Sales Leadership
                </span>
              </div>

              <h1 className="text-slate-900 leading-tight">
                Go-to-market and operating systems for <span className="text-shimmer">safe, compliant adoption</span>
              </h1>

              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                I build and scale healthcare infrastructure that enables clinical teams to adopt new therapies safely
                and confidently across complex regulatory environments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#about"
                className="px-8 py-4 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-semibold rounded-lg hover-lift shadow-lg btn-glow group transition-all"
              >
                <span className="relative z-10 group-hover:text-white">Learn About Me</span>
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 border-2 border-sky-600 text-sky-600 font-semibold rounded-lg hover:bg-sky-50 hover-scale-sm transition-all duration-300"
              >
                Let's Connect
              </Link>
            </div>
          </div>

          <div
            className={`relative h-96 md:h-full min-h-96 ${isVisible ? "slide-in-right" : "opacity-0"}`}
            style={{
              animationDelay: "0.3s",
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-200/30 to-cyan-200/30 rounded-2xl blur-2xl -z-10 glow-animated" />
            <Image
              src="/images/chris-20smaller-20headshot.jpg"
              alt="Chris Grosse"
              fill
              className="object-cover rounded-2xl shadow-2xl hover:shadow-3xl hover-scale-lg transition-all duration-500"
              priority
            />

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl float-animation" />
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-sky-400/10 rounded-full blur-xl float-animation"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
