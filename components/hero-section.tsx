"use client"

import { useEffect, useRef } from "react"
import { Download, ArrowRight } from "lucide-react"

export default function HeroSection() {
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

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    const element = document.createElement("a")
    element.setAttribute("href", "/Mihret-Tekalgn.pdf")
    element.setAttribute("download", "Mihret-Tekalgn_Resume.pdf")
    element.style.display = "none"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-b from-primary/5 via-transparent to-transparent">
      <div ref={contentRef} className="max-w-6xl w-full opacity-0 translate-y-8 transition-all duration-1000">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-in fade-in slide-in-from-left-4 duration-1000 delay-100">
                ✨ Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-balance leading-tight">Mihret Tekalgn</h1>

            <p className="text-xl md:text-2xl bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent font-semibold mb-6">
              Software Engineer | Backend & Mobile
            </p>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-balance max-w-2xl">
              Full-stack software engineer focused on building real-world, scalable products with strong foundations in
              data structures, clean architecture, and system design.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={scrollToProjects}
                className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all hover:scale-105 transform flex items-center gap-2 shadow-lg hover:shadow-xl duration-300"
              >
                View Projects
                <ArrowRight size={18} />
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-3 border border-primary/30 text-foreground font-medium rounded-lg hover:bg-primary/5 transition-all hover:scale-105 transform hover:border-primary duration-300"
              >
                Hire Me
              </button>
              <button
                onClick={downloadResume}
                className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-accent/50 transition-all hover:scale-105 transform flex items-center gap-2 duration-300"
              >
                <Download size={18} />
                Resume
              </button>
            </div>
          </div>

          <div className="flex justify-center animate-in fade-in slide-in-from-right-4 duration-1000 delay-200">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-3xl animate-pulse" />
              <img
                src="/image_1.png"
                alt="Animated character working on computer"
                className="relative rounded-2xl w-full h-auto hover:scale-105 transition-transform duration-300 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
