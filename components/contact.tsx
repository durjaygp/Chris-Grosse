"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-8 bg-gradient-to-b from-white to-slate-50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`mb-12 text-center ${isVisible ? "fade-in" : "opacity-0"}`}>
          <h2 className="text-slate-900 mb-4">Let's Connect</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Open to director and head-of-growth roles in healthcare, pharmacy, and clinical services. Let's discuss how
            we can work together.
          </p>
        </div>

        {/* Form Container */}
        <div
          className={`bg-white rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12 ${isVisible ? "fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          {submitted ? (
            <div className="text-center py-12 animate-scale-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h3>
              <p className="text-slate-600">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-slate-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg bg-white"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-slate-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg bg-white"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-slate-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg bg-white"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="border-slate-200 focus:border-purple-500 focus:ring-purple-500 rounded-lg resize-none bg-white"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:-translate-y-0.5 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          )}
        </div>

        {/* Contact Info Cards */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 ${isVisible ? "fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          {/* Email Card */}
          <div className="p-6 bg-white rounded-xl border border-slate-200 hover-lift group cursor-pointer">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
            <a
              href="mailto:cgrosse66@gmail.com"
              className="text-purple-600 hover:text-purple-700 text-sm transition-colors"
            >
              cgrosse66@gmail.com
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 bg-white rounded-xl border border-slate-200 hover-lift group cursor-pointer">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-pink-100 group-hover:bg-pink-200 transition-colors mb-4">
              <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.419-.103.249-.129.597-.129.945v5.441h-3.554s.047-8.828 0-9.744h3.554v1.379c-.009.015-.021.029-.031.042h.031v-.042c.43-.664 1.195-1.612 2.905-1.612 2.124 0 3.715 1.387 3.715 4.365v5.612zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.969-1.715 1.197 0 1.910.759 1.938 1.715 0 .953-.74 1.715-1.992 1.715zm1.581 11.597H3.635V8.711h3.283v11.741zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-900 mb-1">LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/sales-operations-development"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 text-sm transition-colors"
            >
              Connect with me
            </a>
          </div>

          {/* Newsletter Card */}
          <div className="p-6 bg-white rounded-xl border border-slate-200 hover-lift group cursor-pointer">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-900 mb-1">Newsletter</h4>
            <a
              href="https://chris-newsletter-27fa7e.beehiiv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 text-sm transition-colors"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
