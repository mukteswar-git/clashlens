import { Logo } from "../../../../components/common/Logo";

export function FooterBrand() {
  return (
    <div className="max-w-md">
      <Logo />

      <p className="mt-6 text-lg leading-9 text-muted-foreground">
        Data-driven analytics platform for Clash of Clans clan leaders.
      </p>
    </div>
  );
}
