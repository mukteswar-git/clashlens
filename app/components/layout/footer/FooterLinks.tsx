import Link from "next/link";

import type { FooterLink } from "./types";

type FooterLinksProps = {
  title: string;
  links: FooterLink[];
};

export function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h3 className="text-lg font-bold uppercase tracking-wide">{title}</h3>

      <ul className="mt-8 space-y-5">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.label}>
              <Link
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
