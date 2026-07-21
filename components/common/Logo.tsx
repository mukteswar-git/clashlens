import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  width?: number;
  priority?: boolean;
}

export function Logo({ href = "/", width = 160, priority = false }: LogoProps) {
  return (
    <Link href={href} aria-label="Go to homepage">
      <Image
        src="/logo/logo.svg"
        alt="ClashLens"
        width={width}
        height={40}
        priority={priority}
        className="h-auto"
      />
    </Link>
  );
}
