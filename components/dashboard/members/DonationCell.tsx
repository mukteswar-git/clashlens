interface DonationCellProps {
  donated: number;
  received: number;
}

export function DonationCell({ donated, received }: DonationCellProps) {
  return (
    <p className="whitespace-nowrap">
      <span className="font-medium">{donated.toLocaleString()}</span>
      <span className="text-muted-foreground"> / </span>
      <span className="text-muted-foreground">{received.toLocaleString()}</span>
    </p>
  );
}
