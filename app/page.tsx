"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { pageview } from "@/lib/gtag"
import portfolioData from "@/data/portfolio.json"
import { usePortfolioSettings } from "@/hooks/use-portfolio-settings"
import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/layout/footer"
import { TechStackSection } from "@/components/tech-stack/tech-stack-section"
import { ProjectsSection } from "@/components/projects/projects-section"
import { Chatbot } from "@/components/chatbot/chatbot"
import { EducationTimeline } from "@/components/timeline/education-timeline"
import { ExperienceTimeline } from "@/components/timeline/experience-timeline"
import { motion } from "framer-motion"
import { SECTION_ANIMATIONS } from "@/constants/animations"
import { CoursesSection } from "@/components/courses/courses-section"

export default function Portfolio() {
  const { darkMode, optimized, toggleDarkMode, toggleOptimized } = usePortfolioSettings()

  useEffect(() => {
    if (!optimized) {
      return () => window.removeEventListener("mousemove", () => {})
    }
  }, [optimized])

  const pathname = usePathname()

  useEffect(() => {
  pageview(pathname)
  }, [pathname])

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
        {/* Header */}
        <Header
          darkMode={darkMode}
          optimized={optimized}
          toggleDarkMode={toggleDarkMode}
          toggleOptimized={toggleOptimized}
        />

        {/* Hero Section */}
        <HeroSection optimized={optimized} />

        {/* About Section */}
        <AboutSection darkMode={darkMode} optimized={optimized} />

        {/* Education Section */}
        <section id="education" className="py-12 sm:py-16 md:py-20 px-4">
          <div className="container mx-auto">
            <motion.div {...SECTION_ANIMATIONS} className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
                My academic journey in technology and data science
              </p>
            </motion.div>

            <EducationTimeline education={portfolioData.education} isOptimized={optimized} />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <motion.div {...SECTION_ANIMATIONS} className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Work Experience
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
                My professional journey in software development and beyond
              </p>
            </motion.div>

            <ExperienceTimeline experience={portfolioData.experience} isOptimized={optimized} />
          </div>
        </section>

        {/* Projects Section */}
        <ProjectsSection projects={portfolioData.projects} />

        {/* Courses Section */}
        <CoursesSection courses={portfolioData.courses} isOptimized={optimized} />
        
        {/* Tech Stack Section */}
        <TechStackSection techStack={portfolioData.techStack} isOptimized={optimized} />

        {/* Contact Section */}
        {/* <ContactSection />  */}

        {/* Footer */}
        <Footer optimized={optimized} />

        {/* Chatbot */}
        {!optimized && <Chatbot darkMode={darkMode} />}
      </div>
    </div>
  )
}
