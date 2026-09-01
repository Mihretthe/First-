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
  {
    id: 7,
    company: "Macrovian Technology",
    role: "Full Stack Engineer",
    description: "Develop Scalable and Reliable Software",
    logo: "/final.webp"
  }
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
          {/* <p className="text-center font-semibold text-sm">{experience.company}</p> */}
        </div>

        {/* Back - Description Side */}
        <div
          className="absolute w-full h-full rounded-lg shadow-md flex flex-col items-center justify-center p-6 flex-shrink-0 border border-cyan-500/50 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="font-semibold text-sm mb-3 text-center leading-tight text-cyan-600">{experience.role}</h3>
          {/* <p className="text-xs text-center leading-relaxed opacity-90 text-foreground/80">{experience.description}</p> */}
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
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-3">04 / The timeline</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
        </div>

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
        <p className="text-center text-muted-foreground font-mono text-xs mt-8">Click cards to flip / hover to pause</p>
      </div>
    </section>
  )
}
