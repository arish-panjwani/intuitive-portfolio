"use client"

import { motion } from "framer-motion"
import { Heart, Coffee } from "lucide-react"
import portfolioData from "@/data/portfolio.json"

interface FooterProps {
  optimized: boolean
}

export function Footer({ optimized }: FooterProps) {
  return (
    <footer className="py-8 sm:py-12 px-4 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-3 sm:space-y-4"
        >
          <div className="flex justify-center items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold">
            <span>Made with</span>
            {!optimized ? (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 fill-current" />
              </motion.div>
            ) : (
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 fill-current" />
            )}
            <span>and lots of</span>
            {!optimized ? (
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Coffee className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
              </motion.div>
            ) : (
              <Coffee className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
            )}
          </div>
          <p className="text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
