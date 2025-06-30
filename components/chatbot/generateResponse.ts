import { routeMessage } from "./router"

/**
 * Generates a dynamic response based on user input and the portfolio knowledge base.
 * Modular and future-proof.
 */
export const generateResponse = (input: string, kb: any): string => {
  const message = input.toLowerCase().trim()
  return routeMessage(message, kb) || defaultResponse(kb)
}

const defaultResponse = (kb: any): string => {
  const name = kb?.personal?.name || "this person"

  const responses = [
    `🤔 Could you rephrase that? Try asking about ${name}'s skills, projects, or experience!`,
    `📚 I'm trained on ${name}'s portfolio — ask me anything about their jobs, education, or technologies!`,
    `🙋‍♂️ You can ask about ${name}'s part-time work, full-time roles, technical skills, or projects!`
  ]

  return responses[Math.floor(Math.random() * responses.length)]
}
