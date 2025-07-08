"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, ShieldCheck,Github, Linkedin, Rocket, GraduationCap, Briefcase } from "lucide-react"
import portfolioData from "@/data/portfolio.json"
import { scrollToSection } from "@/utils/scroll"
import { SUBTITLE_WORDS } from "@/constants/animations"
import { trackClick } from "@/utils/trackClick"

interface HeroSectionProps {
  optimized: boolean
}

export function HeroSection({ optimized }: HeroSectionProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Personal Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/arish-hero-bg.jpeg)",
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/80 hero-overlay transition-opacity duration-500" />
      </div>

      {/* Animated background elements */}
      <motion.div className="absolute inset-0 opacity-20 dark:opacity-10 z-10" style={{ y }}>
        <div className="absolute top-20 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute top-40 right-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute bottom-20 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl" />
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-20 hero-content transition-opacity duration-500">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {portfolioData.personal.tagline}
            </span>
            <br />
            <span className="text-gray-900 dark:text-gray-100">{portfolioData.personal.subtagline}</span>
          </motion.h1>

          {/* Animated subtitle */}
          {!optimized ? (
            <motion.div
              className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 font-mono flex flex-wrap justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {SUBTITLE_WORDS.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + index * 0.2,
                    ease: "easeOut",
                  }}
                  className={word === "→" ? "text-blue-500" : ""}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          ) : (
            <motion.p
              className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {portfolioData.personal.subtitle}
            </motion.p>
          )}

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto px-2 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {portfolioData.personal.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2"
              onClick={() => {
                scrollToSection("projects");
                trackClick("Projects Button", "navigate_projects", "Navigation");
                }
              }
            >
              <Rocket className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2" />
              <span className="hidden xs:inline">View Projects</span>
              <span className="xs:hidden">Projects</span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2"
              onClick={() => {
              scrollToSection("education");
              trackClick("Education Button", "navigate_education", "Navigation");
              }}
            >
              <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2" />
              Education
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2"
              onClick={() => {
              scrollToSection("experience");
              trackClick("Experience Button", "navigate_experience", "Navigation");
              }}
            >
              <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2" />
              Experience
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2"
              onClick={() => {
                scrollToSection("courses");
                trackClick("Certificates", "navigate_certificates", "Social");
              }}
            >
              <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2" />
              Certificates
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Section */}
        <motion.div
          className="flex justify-center gap-3 sm:gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              asChild
            >
              <a 
              href={portfolioData.personal.github} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackClick("Footer GitHub Icon", "click_github_footer", "Social")}
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </a>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              asChild
            >
              <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
               onClick={() => trackClick("Footer LinkedIn Icon", "click_linkedin_footer", "Social")}
               >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </a>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              asChild
            >
              <a 
              href={`mailto:${portfolioData.personal.email}`}
              onClick={() => trackClick("Footer Email Icon", "click_email_footer", "Social")}
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
