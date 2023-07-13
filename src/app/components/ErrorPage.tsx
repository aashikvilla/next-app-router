"use client";
import { useEffect } from "react";

type Props = {
  message?: string;
  error: Error;
  reset: () => void;
};

function ErrorPage({ error, message, reset }: Props) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className="text-red-500 text-md">
        {message ? message : "Something went wrong !"}
      </h2>
      <button
        className="bg-white border-red-500 hover:bg-red-700 hover:text-white text-red-500 py-2 px-4 rounded"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorPage;
