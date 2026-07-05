import type { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  color: "blue" | "purple" | "green" | "orange" | "red" | "cyan";
  title: string;
  description: string;
  image: string;
  bullets: string[];
}
