"use client";
import ErrorPage from "@/app/components/ErrorPage";
import { ErrorProps } from "@/app/types/Error";

export default function Error({ error, reset }: ErrorProps) {
  return (
    <ErrorPage
      error={error}
      reset={reset}
      message="Error While loading Users"
    />
  );
}
