import { Activity, HeartPulse, Lightbulb, Swords, Trophy, Gift } from "lucide-react";

import type { Feature } from "./feature.types";

export const FEATURES: Feature[] = [
  {
    icon: Activity,
    color: "blue",
    title: "Activity Tracking",
    description: "Monitor member activity and stay updated in real-time.",
    image: "/images/features/activity-tracking.webp",
    bullets: ["Last Seen & Online Status", "Activity Score Calculation", "Inactive Alerts"],
  },
  {
    icon: Swords,
    color: "purple",
    title: "War Performance",
    description: "Analyze war statistics and improve your battle strategies.",
    image: "/images/features/war-performance.webp",
    bullets: ["War Win/Loss Tracking", "Attack Usage Analysis", "Missed Attack Detection"],
  },
  {
    icon: Gift,
    color: "green",
    title: "Donation Analytics",
    description: "Track donations and reward your top contributors.",
    image: "/images/features/donation-analytics.webp",
    bullets: ["Donation Leaders", "Donation Received", "Donation Ratio"],
  },
  {
    icon: Trophy,
    color: "orange",
    title: "Member Ranking",
    description: "Rank members based on performance and contribution.",
    image: "/images/features/performance-ranking.webp",
    bullets: ["Performance Ranking", "Trophy & League Tracking", "Custom Leaderboards"],
  },
  {
    icon: HeartPulse,
    color: "red",
    title: "Clan Health Score",
    description: "Get an overall health score for your clan.",
    image: "/images/features/clan-health-score.webp",
    bullets: ["Activity Health Score", "Donation Health Score", "War Performance Score"],
  },
  {
    icon: Lightbulb,
    color: "cyan",
    title: "Actionable Insights",
    description: "Get smart insights and make better decisions.",
    image: "/images/features/action-insights.webp",
    bullets: ["Smart Recommendations", "At-risk Member Alerts", "Growth Opportunities"],
  },
];
