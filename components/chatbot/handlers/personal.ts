export const handlePersonal = (message: string, kb: any) => {
  const { name, email, location, github, linkedin, portfolio, resumeUrl } = kb.personal || {}
  const intro = kb.about?.intro
  const lower = message.toLowerCase()

  // Who is this about
  if (
    lower.includes("who is this portfolio about") ||
    lower.includes("whose portfolio") ||
    lower.includes("who is he") ||
    lower.includes("who are you") ||
    lower.includes("your name") ||
    lower.includes("what is your name") ||
    lower.includes("introduce")
  ) {
    return `👋 My name is **${name}** — I'm here to help you learn about my work, skills, and experience!`
  }

  // Tell me about yourself / Intro
  if (
    lower.includes("tell me about you") ||
    lower.includes("about yourself") ||
    lower.includes("quick intro") ||
    lower.includes("summary") ||
    lower.includes("background") ||
    lower.includes("about you")
  ) {
    if (intro) {
      return `🤖 Here's a quick intro: ${intro}`
    } else {
      return `🧠 I’d love to introduce myself, but no intro is defined in the portfolio data!`
    }
  }

  // Where is he from?
  if (
    lower.includes("where is he from") ||
    lower.includes("where does he live") ||
    lower.includes("location") ||
    lower.includes("based in") ||
    lower.includes("where are you from") ||
    lower.includes("where are you based")
  ) {
    return `📍 ${name} is based in **${location}**.`
  }

  // Email
  if (lower.includes("email") || lower.includes("contact email")) {
    return `📫 You can reach ${name} at **${email}**.`
  }

  // GitHub
  if (lower.includes("github")) {
    return `💻 GitHub Profile: ${github}`
  }

  // LinkedIn
  if (lower.includes("linkedin")) {
    return `🔗 LinkedIn: ${linkedin}`
  }

  // Resume
  if (lower.includes("resume") || lower.includes("cv")) {
    return `📄 Resume: ${resumeUrl}`
  }

  // Portfolio
  if (lower.includes("portfolio") && !lower.includes("who")) {
    return `🌐 Portfolio: ${portfolio}`
  }

  return undefined
}
