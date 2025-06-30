"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react"
import portfolioData from "@/data/portfolio.json"
import { SECTION_ANIMATIONS } from "@/constants/animations"

export function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto">
        <motion.div {...SECTION_ANIMATIONS} className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect!
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
            Ready to build something amazing together? Drop me a line! ✨
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <Card className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-lg">
              <CardContent className="space-y-4 sm:space-y-6">
                <motion.div className="flex items-center gap-3 sm:gap-4" whileHover={{ scale: 1.05 }}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-gray-800 dark:text-gray-200">Email</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 break-all">
                      {portfolioData.personal.email}
                    </p>
                  </div>
                </motion.div>

                <motion.div className="flex items-center gap-3 sm:gap-4" whileHover={{ scale: 1.05 }}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-gray-800 dark:text-gray-200">Location</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                      {portfolioData.personal.location} 🇨🇦
                    </p>
                  </div>
                </motion.div>

                <div className="pt-2 sm:pt-4">
                  <h3 className="font-semibold text-sm sm:text-base text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
                    Connect with me
                  </h3>
                  <div className="flex gap-3 sm:gap-4">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 w-8 h-8 sm:w-10 sm:h-10"
                        asChild
                      >
                        <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 w-8 h-8 sm:w-10 sm:h-10"
                        asChild
                      >
                        <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 w-8 h-8 sm:w-10 sm:h-10"
                        asChild
                      >
                        <a href={`mailto:${portfolioData.personal.email}`}>
                          <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-0 shadow-lg">
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input
                      placeholder="Your Name"
                      className="bg-gray-50 dark:bg-gray-700 border-0 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      className="bg-gray-50 dark:bg-gray-700 border-0 focus:ring-2 focus:ring-blue-500 resize-none text-sm sm:text-base"
                    />
                  </motion.div>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg text-sm sm:text-base py-2 sm:py-3"
                    size="lg"
                  >
                    <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
