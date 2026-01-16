"use client"

import { useRef, useState } from "react"
import Image from "next/image"

const experiences = [
  {
    id: 1,
    company: "A2SV",
    role: "Head of Education",
    description: "Guide students in problem solving and algorithmic thinking for real world projects.",
    logo: "/a2sv.webp",
  },
  {
    id: 2,
    company: "Addis Coder",
    role: "Teaching Assistant",
    description: "Help students learn datastructures and algorithms.",
    logo: "/addiscoder.jpg",
  },
  
  {
    id: 3,
    company: "Eskalate",
    role: "Lead Mobile Developer",
    description: "Code reviews, technical guidance, and mobile architecture",
    logo: "/eskalate.png",
  },
  {
    id: 4,
    company: "Tech Company",
    role: "React Frontend Developer",
    description: "Deliver UIs",
    logo: "/mstech.jpg",
  },
  {
    id: 5,
    company: "GDSC AASTU",
    role: "DSA Mentor",
    description: "Help students learn datastructures and algorithms.",
    logo: "/gdsc.jpg",
  },
  {
    id: 6,
    company: "Shecodes AASTU",
    role: "Led Python Mentor",
    description: "Help students learn Python.",
    logo: "/shecodes.jpg",
  },
]

interface ExperienceCardProps {
  experience: (typeof experiences)[0]
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div onClick={() => setIsFlipped(!isFlipped)} className="h-50 w-48 cursor-pointer p-6 perspective flex-shrink-0">
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-gpu`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front - Logo Side */}
        <div
          className="absolute w-full h-full border border-border rounded-lg shadow-md flex flex-col items-center justify-center p-6 flex-shrink-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={experience.logo || "/placeholder.svg"}
            alt={experience.company}
            width={120}
            height={120}
            className="mb-4 rounded-lg"
          />
          <p className="text-center font-semibold text-sm">{experience.company}</p>
        </div>

        {/* Back - Description Side */}
        <div
          className="absolute w-full h-full text-primary-foreground rounded-lg shadow-md flex flex-col items-center justify-center p-6 flex-shrink-0"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="font-semibold text-sm mb-3 text-center leading-tight">{experience.role}</h3>
          <p className="text-xs text-center leading-relaxed opacity-90">{experience.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>

        {/* Infinite Sliding Container */}
        <div className="relative overflow-hidden">
          <style>{`
            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .experience-track {
              display: flex;
              gap: 1.5rem;
              animation: slide 30s linear infinite;
              width: fit-content;
            }

            .experience-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="experience-track" ref={scrollContainerRef}>
            {[...experiences, ...experiences].map((exp, index) => (
              <ExperienceCard key={`${exp.id}-${index}`} experience={exp} />
            ))}
          </div>
        </div>

        {/* Instructions */}
        <p className="text-center text-muted-foreground text-sm mt-8">Click cards to flip • Hover to pause</p>
      </div>
    </section>
  )
}
