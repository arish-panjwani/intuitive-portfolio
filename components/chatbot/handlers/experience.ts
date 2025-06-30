export const handleExperience = (message: string, kb: any) => {
  const name = kb.personal.name
  const jobs = kb.experience

  const lowerMsg = message.toLowerCase()

  // Match by employment type
  if (lowerMsg.includes("part-time") || lowerMsg.includes("part time")) {
    const partTime = jobs.filter((j) => j.type?.toLowerCase().includes("part"))
    if (partTime.length > 0) {
      return `🕒 ${name}'s Part-time Roles:\n${partTime
        .map((j) => `• ${j.title} at ${j.company} (${j.period})`)
        .join("\n")}`
    }
  }

  if (lowerMsg.includes("full-time") || lowerMsg.includes("full time")) {
    const fullTime = jobs.filter((j) => j.type?.toLowerCase().includes("full"))
    if (fullTime.length > 0) {
      return `💼 ${name}'s Full-time Roles:\n${fullTime
        .map((j) => `• ${j.title} at ${j.company} (${j.period})`)
        .join("\n")}`
    }
  }

  if (lowerMsg.includes("intern")) {
    const internships = jobs.filter((j) =>
      j.title.toLowerCase().includes("intern")
    )
    if (internships.length > 0) {
      return `🎓 Internship(s) held by ${name}:\n${internships
        .map((j) => `• ${j.title} at ${j.company} (${j.period})`)
        .join("\n")}`
    }
  }

  if (lowerMsg.includes("seasonal")) {
    const seasonal = jobs.filter((j) => j.type?.toLowerCase().includes("seasonal"))
    if (seasonal.length > 0) {
      return `🌦️ ${name}'s Seasonal Roles:\n${seasonal
        .map((j) => `• ${j.title} at ${j.company} (${j.period})`)
        .join("\n")}`
    }
  }

  // Match by location
  const locationMatch = jobs.find((j) =>
    lowerMsg.includes(j.location.toLowerCase())
  )
  if (locationMatch) {
    return `📍 ${name}'s role in ${locationMatch.location}:\n${locationMatch.title} at ${locationMatch.company} (${locationMatch.period})\n${locationMatch.achievements
      .map((a) => `• ${a}`)
      .join("\n")}`
  }

  // Match by title or company
  const titleMatch = jobs.find((j) =>
    lowerMsg.includes(j.title.toLowerCase()) ||
    lowerMsg.includes(j.company.toLowerCase())
  )
  if (titleMatch) {
    return `🧑‍💻 ${titleMatch.title} at ${titleMatch.company} (${titleMatch.period})\n${titleMatch.achievements
      .map((a) => `• ${a}`)
      .join("\n")}`
  }

  // General work experience queries
  const expKeywords = [
    "experience", "work", "job", "career", "employment",
    "roles", "responsibilities", "companies", "professional"
  ]
  const matched = expKeywords.some((kw) => lowerMsg.includes(kw))

  if (matched) {
    return `🗂️ Here's an overview of ${name}'s experience:\n${jobs
      .map((j) => `• ${j.title} at ${j.company} (${j.period})`)
      .join("\n")}`
  }

  return undefined
}
