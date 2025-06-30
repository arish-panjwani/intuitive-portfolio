export const SUBTITLE_WORDS = ["Code", "→", "Build", "→", "Break", "→", "Fix", "→", "Repeat"]

export const HERO_ANIMATIONS = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}

export const SECTION_ANIMATIONS = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
}
