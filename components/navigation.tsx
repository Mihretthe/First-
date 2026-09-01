"use client"
import { useState, useEffect } from "react"
import ThemeToggle from "./theme-toggle"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isSticky
          ? "bg-background/85 border-b border-border"
          : "bg-background/70 border-b border-border/60"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-mono font-bold text-sm tracking-[0.18em] hover:text-primary transition-colors"
        >
          MIHRETTHE
        </button>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${
                activeSection === link.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed left-0 top-16 bottom-0 w-64 bg-background border-r border-border shadow-lg animate-fade-in">
          <div className="p-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                  activeSection === link.id
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
