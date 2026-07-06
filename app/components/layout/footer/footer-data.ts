import {
  LayoutGrid,
  CircleHelp,
  Search,
  FolderGit2,
  Shield,
  FileText,
  TriangleAlert,
} from "lucide-react";
import { FooterLink } from "./types";

export const productLinks: FooterLink[] = [
  {
    label: "Features",
    href: "#features",
    icon: LayoutGrid,
  },
  {
    label: "FAQ",
    href: "#faq",
    icon: CircleHelp,
  },
  {
    label: "Analyze Clan",
    href: "#home",
    icon: Search,
  },
];

export const resourceLinks: FooterLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/mukteswar-git/clashlens",
    icon: FolderGit2,
  },
];

export const legalLinks: FooterLink[] = [
  {
    label: "Privacy Policy",
    href: "/privacy",
    icon: Shield,
  },
  {
    label: "Terms of Service",
    href: "/terms",
    icon: FileText,
  },
  {
    label: "Disclaimer",
    href: "/disclaimer",
    icon: TriangleAlert,
  },
];
