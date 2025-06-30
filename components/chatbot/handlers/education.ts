export const handleEducation = (message: string, kb: any) => {
  const name = kb.personal.name
  const education = kb.education

  const current = education.find((e: any) => e.status === "current")
  const completed = education.filter((e: any) => e.status === "completed")

  // Current education queries
  if (
    message.includes("current education") ||
    message.includes("studying now") ||
    message.includes("presently studying") ||
    message.includes("currently studying") ||
    message.includes("what is he studying") ||
    message.includes("what is " + name.toLowerCase() + " studying")
  ) {
    if (current) {
      return `📚 ${name} is currently pursuing ${current.degree} at ${current.institution} (${current.period}).`
    }
  }

  // Past education queries
  if (
    message.includes("past education") ||
    message.includes("previously studied") ||
    message.includes("completed degree") ||
    message.includes("graduated") ||
    message.includes("old college") ||
    message.includes("before")
  ) {
    if (completed.length > 0) {
      return completed
        .map(
          (edu) =>
            `🎓 ${name} completed ${edu.degree} at ${edu.institution} (${edu.period}).`
        )
        .join("\n")
    }
  }

  // General education overview
  if (
    message.includes("education") ||
    message.includes("study") ||
    message.includes("degree") ||
    message.includes("college") ||
    message.includes("university") ||
    message.includes("school") ||
    message.includes("academic")
  ) {
    let response = `🎓 Here's ${name}'s educational background:\n`

    if (current) {
      response += `• Currently studying ${current.degree} at ${current.institution} (${current.period})\n`
    }

    if (completed.length > 0) {
      for (const edu of completed) {
        response += `• Completed ${edu.degree} at ${edu.institution} (${edu.period})\n`
      }
    }

    return response.trim()
  }

  return undefined
}
