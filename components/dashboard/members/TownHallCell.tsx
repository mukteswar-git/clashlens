interface TownHallCellProps {
  level: number;
}

export function TownHallCell({ level }: TownHallCellProps) {
  return <span>TH{level}</span>;
}
