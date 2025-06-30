"use client"

import { useState, useEffect } from "react"

export function usePortfolioSettings() {
  const [darkMode, setDarkMode] = useState(false)
  const [optimized, setOptimized] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true"
    const isOptimized = localStorage.getItem("optimized") === "true"
    setDarkMode(isDark)
    setOptimized(isOptimized)
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
    document.documentElement.classList.toggle("dark", newDarkMode)
  }

  const toggleOptimized = () => {
    const newOptimized = !optimized
    setOptimized(newOptimized)
    localStorage.setItem("optimized", newOptimized.toString())
  }

  return {
    darkMode,
    optimized,
    toggleDarkMode,
    toggleOptimized,
  }
}
