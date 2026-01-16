"use client"

import { useEffect, useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { ProjectImageSlider } from "./project_image_slider"

const projects = [
  {
    title: "AI-Powered Health Tracking System for Autistic Children",
    tech: ["Flutter", "Django", "AI", "Clean Architecture"],
    description: [
      "Built to help parents and caregivers track behavioral progress and identify patterns",
      "Capstone project (team of 5)",
      "Role: Team Lead, Mobile & Backend Development, AI Integration",
      "Applied clean architecture and Bloc state management",
      "Contributed to backend development and system design",
      "Currently rebuilding as a solo project based on feedback",
    ],
    images: ["/homepage.png", "/log.png","/community.png", "/analytics.png","login.png", "/sidebar.png", "add_child.png" ],
    link: "#",
    github: "#",
    cover: "contain"
  },
  {
    title: "AI Blog Generator (YouTube-to-Blog)",
    tech: ["Django", "AI Integration", "HTML", "CSS"],
    description: [
      "Converts long YouTube videos into concise blog summaries in seconds",
      "Solo project built end-to-end",
      "Implemented AI summarization and server-side rendering",
      "Learned to handle evolving AI documentation and dependencies",
      "UI/UX identified as future improvement",
    ],
    images: ["/home.jpg", "/pastelink.jpg", "/generating.jpg", "/bloglist.jpg","/blogdetail.jpg","/login.jpg","/signup.jpg"],
    link: "https://ai-blog-generator-7ohz.onrender.com/",
    github: "https://github.com/Mihretthe/AI-Blog-Generator",
    cover: "cover"
  },
  {
    title: "Campus Sync",
    tech: ["Django", "Hackathon"],
    description: [
      "Campus-wide event management platform for creating, searching, and RSVPing to student events",
      "Hackathon team project with defined backend ownership",
      "Designed and implemented REST APIs for events, search, and RSVP workflows",
      "Handled authentication, data modeling, and backend business logic",
      "Learned rapid backend development and collaboration under hackathon deadlines",

    ],
    images: ["/campussync.jpg"],
    link: "https://campussync.vercel.app/",
    github: "https://github.com/GDSC-Hackaton/Django-Backend",
    cover: "cover"
  },
]

export default function ProjectsSection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".project-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("opacity-100", "translate-y-0")
              }, index * 150)
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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div ref={contentRef} className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card opacity-0 translate-y-8 transition-all duration-700 border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 duration-300 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Content on the left */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {project.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground flex gap-3">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all hover:scale-105 transform text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:bg-accent/50 rounded-lg transition-all hover:scale-105 transform text-sm font-medium"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="relative h-64 md:h-auto bg-gradient-to-br from-primary/10 to-primary/5 border-t md:border-t-0 md:border-l border-border m-4 md:m-6 rounded-lg overflow-hidden">
                  <ProjectImageSlider images={project.images} alt={project.title} cover={project.cover} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
