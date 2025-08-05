"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Coffee, Star, Check, ThumbsUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import portfolioData from "@/data/portfolio.json"
import { trackClick } from "@/utils/trackClick" // ✅ GA tracker

interface FooterProps {
  optimized: boolean
}

export function Footer({ optimized }: FooterProps) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [submittedRating, setSubmittedRating] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [showFeedbackSection, setShowFeedbackSection] = useState(true)

  const handleStarClick = (starIndex: number) => {
    if (isSubmitted) return
    setRating(starIndex)
  }

  const handleStarHover = (starIndex: number) => {
    if (isSubmitted) return
    setHoveredRating(starIndex)
  }

  const handleSubmitFeedback = async () => {
    if (rating === 0 || isSubmitted || isSubmitting) return
    setIsSubmitting(true)

    try {
      // ✅ Send rating directly to GA
      trackClick(
        `Portfolio Rating: ${rating}`, // label
        "submit_rating",               // action
        "Feedback",                     // category
        rating                          // value
      )

      // Simulate small delay (to mimic API feel)
      await new Promise(resolve => setTimeout(resolve, 800))

      setSubmittedRating(rating)
      setIsSubmitted(true)
      setShowThanks(true)

      // Hide feedback section after 5 seconds
      setTimeout(() => {
        setShowFeedbackSection(false)
      }, 4000)

    } catch (error) {
      console.error('Error tracking feedback:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const displayRating = isSubmitted ? submittedRating : (hoveredRating || rating)

  return (
    <footer className="py-8 sm:py-12 px-4 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6"
        >
          {/* Feedback Section */}
          <AnimatePresence>
            {showFeedbackSection && (
              <motion.div
                initial={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 sm:mb-8 overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-3 sm:gap-4"
                >
                  <p className="text-sm sm:text-base text-gray-300">
                    {isSubmitted ? "Thanks for your feedback! 🙏" : "Did you like the website?"}
                  </p>
                  
                  <div className="flex items-center gap-2 sm:gap-3">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((starIndex) => (
                        <motion.button
                          key={starIndex}
                          className={`p-1 transition-all duration-200 ${
                            isSubmitted ? 'cursor-default' : 'cursor-pointer hover:scale-110'
                          }`}
                          onClick={() => handleStarClick(starIndex)}
                          onMouseEnter={() => handleStarHover(starIndex)}
                          onMouseLeave={() => setHoveredRating(0)}
                          whileHover={!isSubmitted && !optimized ? { scale: 1.2 } : {}}
                          whileTap={!isSubmitted && !optimized ? { scale: 0.9 } : {}}
                          disabled={isSubmitted}
                        >
                          <Star
                            className={`h-5 w-5 sm:h-6 sm:w-6 transition-all duration-200 ${
                              starIndex <= displayRating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-500 hover:text-yellow-300'
                            }`}
                          />
                        </motion.button>
                      ))}
                    </div>

                    {/* Submit Button */}
                    <AnimatePresence mode="wait">
                      {!isSubmitted ? (
                        <motion.div
                          key="submit"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className={`bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 ${
                              rating === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:border-green-500'
                            }`}
                            onClick={handleSubmitFeedback}
                            disabled={rating === 0 || isSubmitting}
                          >
                            {isSubmitting ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="h-4 w-4 border-2 border-gray-400 border-t-transparent rounded-full"
                              />
                            ) : (
                              <Check className="h-4 w-4" />
                            )}
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="thanks"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 15 }}
                          >
                            <ThumbsUp className="h-4 w-4 text-white" />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Thanks Animation */}
                  <AnimatePresence>
                    {showThanks && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="text-green-400 text-sm font-medium"
                      >
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          Your feedback helps me improve! ✨
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Original Footer Content */}
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
