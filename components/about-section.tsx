"use client"

import { useEffect, useRef } from "react"

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)

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

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(".fade-in-element")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-balance leading-tight mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/40 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content - 2 cols on desktop */}
          <div className="lg:col-span-2 space-y-8">
            {/* First paragraph - main intro */}
            <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 delay-100">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                I build <span className="font-semibold text-primary">software that solves real problems</span> and
                scales beyond demos. My background in{" "}
                <span className="font-semibold text-primary">
                  data structures, backend systems, and mobile development
                </span>{" "}
                allows me to design clean, maintainable solutions end-to-end.
              </p>
            </div>

            {/* Core values section */}
            <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 delay-200">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Core Values</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1 bg-primary/40 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Simplicity & Reliability</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      I design systems that are maintainable, intuitive, and built to last.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-primary/40 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Thoughtful Architecture</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Every decision I make is grounded in strong foundations and best practices.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-primary/40 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Continuous Growth</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      I'm continuously improving across system design, cloud infrastructure, and deployment strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Approach section */}
            <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 delay-300">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">How I Work</h3>
              <p className="text-foreground leading-relaxed">
                I'm a methodical thinker with the ability to iterate fast. I break down complex problems, prioritize
                effectively, and stay calm under pressure. Whether leading a team or contributing individually, I focus
                on delivering reliable, scalable solutions.
              </p>
            </div>
          </div>

          {/* Sidebar - 1 col on desktop */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stats card */}
            <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 delay-200">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 backdrop-blur-sm">
                <div className="space-y-4">
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">3+</p>
                    <p className="text-sm text-muted-foreground">Years in Software Development</p>
                  </div>
                  <div className="h-px bg-primary/20"></div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">2+</p>
                    <p className="text-sm text-muted-foreground">Technologies Mastered</p>
                  </div>
                  <div className="h-px bg-primary/20"></div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">∞</p>
                    <p className="text-sm text-muted-foreground">Impact Through Code</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialties card */}
            <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 delay-300">
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors duration-300">
                <h4 className="font-semibold text-foreground mb-4">Specialties</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">Backend Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">Mobile Development</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">Web Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">System Design and Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">Team Leadership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
