import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" aria-label="Go to homepage">
      <Image
        src="/logo/logo.svg"
        alt="ClashLens"
        width={180}
        height={150}
        priority
      />
    </Link>
  );
}