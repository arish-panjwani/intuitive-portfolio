"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import portfolioData from "@/data/portfolio.json"
import { generateResponse } from "./generateResponse"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

interface ChatbotProps {
  darkMode: boolean
}

export function Chatbot({ darkMode }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [copiedLinkId, setCopiedLinkId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const knowledgeBase = {
    personal: portfolioData.personal,
    about: portfolioData.about,
    education: portfolioData.education,
    experience: portfolioData.experience,
    projects: portfolioData.projects,
    techStack: portfolioData.techStack,
  }

  const userName = portfolioData.personal.name

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `Hi! I'm ${userName}'s AI assistant. Ask me anything about their background, skills, projects or experience! 🚀`,
      isBot: true,
      timestamp: new Date(),
    },
  ])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue, knowledgeBase),
        isBot: true,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSendMessage()
  }

  const handleCopyLink = async (text: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedLinkId(messageId)
      setTimeout(() => setCopiedLinkId(null), 2000)
    } catch (err) {
      alert("❌ Failed to copy link")
    }
  }

  return (
    <>
      <motion.div className="fixed bottom-6 right-6 z-50" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}>
        <Button onClick={() => setIsOpen(!isOpen)} className={`w-14 h-14 rounded-full shadow-lg ${isOpen ? "bg-red-500 hover:bg-red-600" : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"} text-white`} size="icon">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div key="chat" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <MessageCircle className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 100, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 100, scale: 0.8 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="fixed bottom-24 right-6 z-40 w-80 sm:w-96">
            <Card className="shadow-2xl border-0 bg-white dark:bg-gray-800">
              <CardHeader className="pb-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  Ask about {userName}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-80 overflow-y-auto p-4 space-y-3">
                  {messages.map((message) => (
                    <motion.div key={message.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                      <div className={`max-w-[80%] p-3 rounded-lg ${message.isBot ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200" : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"}`}>
                        <div className="flex items-start gap-2">
                          {message.isBot ? <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" /> : <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                          <div className="flex flex-col gap-1">
                            <p className="text-sm leading-relaxed break-all">{message.text}</p>

                            {message.isBot && /https?:\/\/\S+/gi.test(message.text) && (
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="mt-1 text-xs"
                                  onClick={() => {
                                    const match = message.text.match(/https?:\/\/\S+/gi)
                                    if (match) handleCopyLink(match[0], message.id)
                                  }}
                                >
                                  {copiedLinkId === message.id ? "Copied ✅" : "Copy Link"}
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                      <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Bot className="h-4 w-4" />
                          <div className="flex gap-1">
                            <motion.div className="w-2 h-2 bg-gray-400 rounded-full" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }} />
                            <motion.div className="w-2 h-2 bg-gray-400 rounded-full" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }} />
                            <motion.div className="w-2 h-2 bg-gray-400 rounded-full" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={`Ask me about ${userName}...`}
                      className="flex-1 text-sm"
                      disabled={isTyping}
                    />
                    <Button onClick={handleSendMessage} disabled={!inputValue.trim() || isTyping} size="icon" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
