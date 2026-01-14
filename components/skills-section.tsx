"use client"

import { useEffect, useRef } from "react"

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Dart", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Django", "Django REST Framework", "REST APIs"],
  },
  {
    title: "Mobile",
    skills: ["Flutter", "React Native", "Bloc", "State Management"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS"],
  },
  {
    title: "Concepts",
    skills: ["Data Structures & Algorithms", "Clean Architecture", "System Design"],
  },
  {
    title: "Tools",
    skills: ["Git", "API Integration", "Testing-Oriented Workflows"],
  },
]

export default function SkillsSection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".skill-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("opacity-100", "translate-y-0")
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
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="skill-card opacity-0 translate-y-8 transition-all duration-700 p-6 bg-card border border-border rounded-lg"
            >
              <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-accent/50 text-accent-foreground rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
