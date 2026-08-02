"use client";

import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ErrorStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function ErrorState({ title, description, actionLabel, onAction }: ErrorStateProps) {
  return (
    <Card className="mx-auto flex max-w-lg flex-col items-center gap-6 p-10 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
        <AlertTriangle className="h-7 w-7 text-destructive" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">{title}</h2>

        <p className="text-muted-foreground">{description}</p>
      </div>

      {actionLabel && onAction && <Button onClick={onAction}>{actionLabel}</Button>}
    </Card>
  );
}
