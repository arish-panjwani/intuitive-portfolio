import { getProjectMatch } from "../utils/fuseUtils"

export const handleProjects = (message: string, kb: any) => {
  const name = kb.personal.name
  const projects = kb.projects

  // General project queries
  if (
    message.includes("project") ||
    message.includes("projects") ||
    message.includes("portfolio") ||
    message.includes("built") ||
    message.includes("created") ||
    message.includes("apps") ||
    message.includes("applications") ||
    message.includes("tools")
  ) {
    const featured = projects.filter((p: any) => p.featured).slice(0, 3)
    const projectList = featured.map((p: any) => `• ${p.title}`).join("\n")
    return `🧪 Here are some of ${name}'s featured projects:\n${projectList}\n\nCheck out more on GitHub: ${kb.personal.github}`
  }

  // Specific project by fuzzy match
  const match = getProjectMatch(message, projects)
  if (match) {
    return `💡 ${match.title}:\n${match.description}\n🔧 Built with: ${match.tech.join(", ")}${
      match.github ? `\n🔗 GitHub: ${match.github}` : ""
    }`
  }

  return undefined
}
