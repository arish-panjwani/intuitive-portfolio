"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun, Download, Zap, ZapOff } from "lucide-react"
import portfolioData from "@/data/portfolio.json"
import { scrollToTop } from "@/utils/scroll"

interface HeaderProps {
  darkMode: boolean
  optimized: boolean
  toggleDarkMode: () => void
  toggleOptimized: () => void
}

export function Header({ darkMode, optimized, toggleDarkMode, toggleOptimized }: HeaderProps) {
  const handleNameHover = (isHovering: boolean) => {
    const overlay = document.querySelector(".hero-overlay")
    const content = document.querySelector(".hero-content")
    if (overlay && content) {
      overlay.style.opacity = isHovering ? "0" : "1"
      content.style.opacity = isHovering ? "0" : "1"
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <motion.button
          className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer transition-transform"
          whileHover={{ scale: 1.05 }}
          onClick={scrollToTop}
          onHoverStart={() => handleNameHover(true)}
          onHoverEnd={() => handleNameHover(false)}
        >
          <span className="hidden sm:inline">{portfolioData.personal.name}</span>
          <span className="sm:hidden">{portfolioData.personal.name}</span>
        </motion.button>

        <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
          {/* Optimization Toggle */}
          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
            <ZapOff className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
            <Switch
              checked={optimized}
              onCheckedChange={toggleOptimized}
              className="data-[state=checked]:bg-green-500 scale-75 sm:scale-100"
            />
            <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-xs sm:text-sm px-2 sm:px-3"
              asChild
            >
              <a href={portfolioData.personal.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Resume
              </a>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className={`bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-8 h-8 sm:w-10 sm:h-10 ${
                !optimized ? "hover:rotate-180" : ""
              } transition-transform duration-500`}
            >
              {darkMode ? <Sun className="h-3 w-3 sm:h-4 sm:w-4" /> : <Moon className="h-3 w-3 sm:h-4 sm:w-4" />}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
