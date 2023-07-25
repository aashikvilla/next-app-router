import { updateURLParameters } from "@/app/utils/HelperFunctions";
import Link from "next/link";
import React from "react";

type Props = {
  url: string;
  pageNumber: number;
  disabled: boolean;
  label: string;
};

function PageNavigationItem({ url, pageNumber, disabled, label }: Props) {
  return (
    <Link
      className={`py-1 px-3 text-small font-medium rounded-lg shadow-md text-white ${
        disabled
          ? "bg-blue-300 cursor-not-allowed pointer-events-none"
          : "bg-blue-500 hover:bg-blue-700"
      }`}
      aria-disabled={disabled}
      href={url}
    >
      {label}
    </Link>
  );
}

export default PageNavigationItem;
