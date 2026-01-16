"use client"

import { useState } from "react"
import Image from "next/image"

interface SkillCardProps {
  name: string
  description: string
  logoUrl: string
  logoAlt: string
}


const skills = [
  {
    name: "Python",
    description: "Backend development and data structures",
    logoUrl: "/python.png",
    logoAlt: "Python logo",
  },
  {
    name: "React",
    description: "Frontend development and state management",
    logoUrl: "/react.png",
    logoAlt: "React logo",
  },
  {
    name: "Django",
    description: "Web framework for robust backend APIs",
    logoUrl: "/django.png",
    logoAlt: "Django logo",
  },
  {
    name: "Flutter",
    description: "Cross-platform mobile development",
    logoUrl: "/flutter.png",
    logoAlt: "Flutter logo",
  },
  {
    name: "HTML",
    description: "Markup Language",
    logoUrl: "/html.png",
    logoAlt: "HTML logo",
  },
  {
    name: "CSS",
    description: "Styling Webpages",
    logoUrl: "/css.png",
    logoAlt: "CSS logo",
  },
  {
    name: "Data Structures and Algorithms",
    description: "Problem Solving",
    logoUrl: "/dsa.png",
    logoAlt: "DSA logo",
  },
  {
    name: "BLoc State Management",
    description: "State Management in Flutter",
    logoUrl: "/bloc.png",
    logoAlt: "BLoc logo",
  },
  {
    name: "Dart",
    description: "Mobile App Development",
    logoUrl: "/dart.png",
    logoAlt: "Dart logo",
  },
    {
    name: "C++",
    description: "Data Structures",
    logoUrl: "/cplusplus.png",
    logoAlt: "C++ logo",
  },
  {
    name: "JavaScript",
    description: "Frontend development",
    logoUrl: "/javascript.png",
    logoAlt: "JavaScript logo",
  },
  {
    name: "React Native",
    description: "Mobile App Development",
    logoUrl: "/react_native.png",
    logoAlt: "React Native logo",
  },
  {
    name: "REST API",
    description: "Backend development",
    logoUrl: "/restapi.png",
    logoAlt: "REST API logo",
  },
  {
    name: "My SQL",
    description: "Database",
    logoUrl: "/mysql.png",
    logoAlt: "MYSQL logo",
  },
  {
    name: "Postgresql",
    description: "Database",
    logoUrl: "/postgresql.png",
    logoAlt: "Postgresql logo",
  },
  {
    name: "Postman Testing",
    description: "Testing",
    logoUrl: "/postman.png",
    logoAlt: "Postman logo",
  },
]

function SkillCard({ name, description, logoUrl, logoAlt }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full aspect-square flex items-center justify-center cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-32 h-40 rounded-lg overflow-hidden  flex-shrink-0">
        <Image
          src={logoUrl || "/placeholder.svg"}
          alt={logoAlt}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay on Hover */}
        <div
          className={`absolute inset-0 bg-primary/90 flex flex-col items-center justify-center p-6 rounded-lg transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-xl font-semibold text-primary-foreground text-center mb-3">{name}</h3>
          {/* <p className="text-sm text-primary-foreground/90 text-center leading-relaxed">{description}</p> */}
        </div>
      </div>
    </div>
  )
}


export default function SkillsSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              description={skill.description}
              logoUrl={skill.logoUrl}
              logoAlt={skill.logoAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
