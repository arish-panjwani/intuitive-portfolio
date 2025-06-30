export const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
