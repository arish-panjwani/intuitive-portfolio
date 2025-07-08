"use client"

import { motion } from "framer-motion"
import { CourseCard } from "./course-card"

interface CourseCarouselProps {
  courses: Array<{
    name: string
    issuing_organization: string
    issue_date: {
      month: string
      year: string
    }
    expiration_date: {
      month: string | null
      year: string | null
    }
    credential_id: string | null
    credential_url: string | null
    skills: string[]
  }>
  isOptimized: boolean
}

export function CourseCarousel({ courses, isOptimized }: CourseCarouselProps) {
  // Create infinite array for seamless looping
  const createInfiniteArray = (items: any[]) => {
    const repeats = Math.max(3, Math.ceil(15 / items.length)) // Ensure enough items for smooth loop
    return Array(repeats).fill(items).flat()
  }

  const infiniteCourses = createInfiniteArray(courses)

  if (isOptimized) {
    return (
      <div
        className="overflow-x-auto pb-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitScrollbar: { display: "none" },
        }}
      >
        <div className="flex gap-4 sm:gap-6 min-w-max">
          {courses.map((course, index) => (
            <CourseCard key={`${course.name}-${index}`} course={course} index={index} isOptimized={isOptimized} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden ">
      <motion.div
        className="flex gap-4 sm:gap-6"
        animate={{
          x: [0, -2000], // Scroll from right to left
        }}
        transition={{
          duration: 35, // Slower scroll for better readability
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {infiniteCourses.map((course, index) => (
          <CourseCard key={`${course.name}-${index}`} course={course} index={index} isOptimized={isOptimized} />
        ))}
      </motion.div>
    </div>
  )
}
