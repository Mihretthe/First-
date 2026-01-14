"use client"

import { useEffect, useRef } from "react"

export default function LookingForSection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div ref={contentRef} className="opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl font-bold mb-8">What I'm Looking For</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Software engineering roles focused on building impactful products in structured teams. Long-term goal is to
            grow into a senior engineer contributing to system design, mentorship, and scalable product development.
          </p>
        </div>
      </div>
    </section>
  )
}
