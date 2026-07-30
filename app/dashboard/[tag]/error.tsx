"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/common/error-state";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorState
      title="Something went wrong"
      description="An unexpected error occurred. Please try again."
      actionLabel="Try again"
      onAction={reset}
    />
  );
}
