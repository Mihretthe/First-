"use client"

import { useEffect, useRef } from "react"

const workStylePoints = [
  "Ask clarifying questions before implementation",
  "Methodical thinker with ability to iterate fast",
  "Break down complex problems and prioritize effectively",
  "Calm under pressure; reliable team lead",
]

export default function WorkStyleSection() {
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
    <section className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <div ref={contentRef} className="opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl font-bold mb-8">How I Work</h2>
          <div className="space-y-4">
            {workStylePoints.map((point, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-primary font-bold text-lg flex-shrink-0">→</span>
                <p className="text-lg text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
