import Fuse from "fuse.js"

/**
 * Returns the best-matching project from the user's query.
 * Uses fuzzy matching on both title and tech stack fields.
 */
export const getProjectMatch = (query: string, projects: any[]) => {
  const fuse = new Fuse(projects, {
    keys: ["title", "tech"],
    threshold: 0.3,
  })
  return fuse.search(query)[0]?.item
}

/**
 * Returns all tech skills that match the user's query.
 * Useful for dynamic responses to questions about tools, languages, etc.
 */
export const getSkillMatch = (query: string, techStack: any) => {
  const allSkills = techStack.sections.flatMap((s: any) => s.list)
  const fuse = new Fuse(allSkills, {
    keys: ["name"],
    threshold: 0.3,
  })
  return fuse.search(query).map((res) => res.item.name)
}
