import Link from "next/link";
import { Copyright, Code2 } from "lucide-react";

export function FooterBottom() {
  return (
    <div className="mt-12 py-8">
      <div className="flex items-center justify-between gap-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Copyright className="h-4 w-4 text-amber-500" />
          <span>
            {new Date().getFullYear()} ClashLens. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Code2 className="h-4 w-4 text-amber-500" />

          <Link
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Built by Mukteswar Tripathy
          </Link>
        </div>

        <p className="max-w-md">
          ClashLens is an independent analytics platform and is not
          affiliated with, endorsed by, or sponsored by Supercell.
        </p>
      </div>
    </div>
  );
}