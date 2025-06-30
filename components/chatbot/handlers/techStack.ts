export const handleTechStack = (message: string, kb: any) => {
  const name = kb.personal.name
  const stackSections = kb.techStack.sections

  // Questions about tech stack or tools
  if (
    message.includes("tech stack") ||
    message.includes("technologies") ||
    message.includes("tools") ||
    message.includes("frameworks") ||
    message.includes("languages") ||
    message.includes("skills") ||
    message.includes("stacks") ||
    message.includes("programming") ||
    message.includes("development stack")
  ) {
    let response = `🧠 Here's a summary of ${name}'s tech stack:\n`

    for (const section of stackSections) {
      const sectionSkills = section.list
        .map((skill: any) => `${skill.icon || ""} ${skill.name} (${skill.proficiency})`)
        .join(", ")

      response += `\n• ${section.type}: ${sectionSkills}`
    }

    return response
  }

  // Queries asking for specific levels of skill
  if (
    message.includes("expert in") ||
    message.includes("advanced in") ||
    message.includes("beginner in") ||
    message.includes("intermediate in")
  ) {
    const level = ["expert", "advanced", "intermediate", "beginner"].find(l =>
      message.includes(l)
    )
    if (level) {
      const matched = stackSections
        .flatMap((section: any) =>
          section.list.filter((skill: any) => skill.proficiency.toLowerCase() === level)
        )
        .map((skill: any) => `${skill.icon || ""} ${skill.name}`)

      if (matched.length) {
        return `✅ ${name} is ${level} in: ${matched.join(", ")}`
      }
    }
  }

  return undefined
}
