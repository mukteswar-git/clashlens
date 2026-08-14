import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  width?: number;
  priority?: boolean;
}

const LOGO_WIDTH = 195;
const LOGO_HEIGHT = 63;

export function Logo({ href = "/", width = 160, priority = false }: LogoProps) {
  const height = Math.round((width * LOGO_HEIGHT) / LOGO_WIDTH);

  return (
    <Link href={href} aria-label="Go to homepage">
      <Image
        src="/logo/logo.svg"
        alt="ClashLens"
        width={width}
        height={height}
        priority={priority}
        className="dark:hidden"
      />

      <Image
        src="/logo/dark-logo.svg"
        alt="ClashLens"
        width={width}
        height={height}
        priority={priority}
        className="hidden dark:block"
      />
    </Link>
  );
}
