// utils/trackClick.ts
import { event } from "@/lib/gtag"

export const trackClick = (
  label: string,
  action: string,
  category: string = "Engagement",
  value?: number
) => {
  console.info("[GA TRACK]", { action, category, label, value });
  event({ action, category, label, value })
}