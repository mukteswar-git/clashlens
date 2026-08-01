import {
  BadgeIndianRupee,
  Shield,
  User,
  Users,
  RefreshCw,
  Lock,
  RotateCcw,
  ShieldOff,
} from "lucide-react";

import type { FAQ } from "./faq.types";

export const faqs: FAQ[] = [
  {
    icon: BadgeIndianRupee,
    question: "Is ClashLens free to use?",
    answer:
      "Yes! ClashLens is completely free during the MVP phase. Core analytics will remain free for clan leaders.",
  },
  {
    icon: Shield,
    question: "Where does the data come from?",
    answer:
      "ClashLens retrieves publicly available clan and member data from the official Clash of Clans API provided by Supercell.",
  },
  {
    icon: User,
    question: "Do I need to create an account?",
    answer:
      "No. Simply enter a clan tag and start analyzing. No registration or login is required.",
  },
  {
    icon: Users,
    question: "Can I analyze any clan?",
    answer:
      "Yes. Any public Clash of Clans clan can be analyzed by entering its clan tag.",
  },
  {
    icon: RefreshCw,
    question: "How often is data updated?",
    answer:
      "Data is refreshed each time you analyze a clan, ensuring you always see the latest available information.",
  },
  {
    icon: Lock,
    question: "Is my data safe?",
    answer:
      "ClashLens only accesses publicly available game data through the official API. It never requests your game credentials or password.",
  },
  {
    icon: RotateCcw,
    question: "Why do some metrics change over time?",
    answer:
      "Clan statistics naturally change as members donate, participate in wars, gain trophies, or become inactive.",
  },
  {
    icon: ShieldOff,
    question: "Is ClashLens affiliated with Supercell?",
    answer:
      "No. ClashLens is an independent analytics platform and is not affiliated with, endorsed by, or sponsored by Supercell.",
  },
];
