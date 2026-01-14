"use client"

import { useEffect, useRef } from "react"

const experiences = [
  {
    role: "Mentor – Data Structures & Algorithms",
    organization: "A2SV",
    description: "Guided students in problem solving and algorithmic thinking",
  },
  {
    role: "Team Lead – Final Year Capstone Project",
    description: "Led architecture decisions and team collaboration",
  },
  {
    role: "Lead Mobile Developer – Eskalate (Internship)",
    description: "Code reviews, technical guidance, and mobile architecture",
  },
  {
    role: "React Frontend Developer",
    description: "E-commerce systems and confidential product development",
  },
]

export default function ExperienceSection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".experience-item")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("opacity-100", "translate-x-0")
              }, index * 100)
            })
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
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div ref={contentRef} className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-item opacity-0 -translate-x-8 transition-all duration-700 pl-6 border-l-2 border-primary/30 hover:border-primary/60 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
              {exp.organization && <p className="text-sm text-primary font-medium mb-2">{exp.organization}</p>}
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
