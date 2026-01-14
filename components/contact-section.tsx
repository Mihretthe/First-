"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"

const contactLinks = [
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/Mihretthe",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/mihretthe",
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:mihretekalgn@gmail.com",
  },
]

export default function ContactSection() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 3000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div ref={contentRef} className="opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 duration-300"
                >
                  <Send size={18} />
                  {isSubmitting ? "Sending..." : "Hire Me"}
                </button>

                {submitStatus === "success" && (
                  <p className="text-green-600 dark:text-green-400 text-sm text-center animate-in fade-in">
                    ✓ Message sent! I'll get back to you soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 dark:text-red-400 text-sm text-center animate-in fade-in">
                    ✗ Error sending message. Please try again.
                  </p>
                )}
              </form>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
              <div className="space-y-4">
                {contactLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group hover:scale-105 transform"
                    >
                      <Icon size={24} className="flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <p className="font-medium">{link.label}</p>
                        <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                          {link.label === "GitHub" && "github.com/Mihretthe"}
                          {link.label === "LinkedIn" && "linkedin.com/in/mihretthe"}
                          {link.label === "Email" && "mihretekalgn@gmail.com"}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-border text-center text-muted-foreground text-sm">
            <p>© 2025 Mihret Tekalgn. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
