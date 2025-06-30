import { handlePersonal } from "./handlers/personal"
import { handleEducation } from "./handlers/education"
import { handleExperience } from "./handlers/experience"
import { handleProjects } from "./handlers/projects"
import { handleTechStack } from "./handlers/techStack"

/**
 * Centralized routing logic that tries all topic handlers in order.
 */
export const routeMessage = (message: string, kb: any): string | undefined => {
  return (
    handlePersonal(message, kb) ||
    handleEducation(message, kb) ||
    handleExperience(message, kb) ||
    handleProjects(message, kb) ||
    handleTechStack(message, kb)
  )
}
