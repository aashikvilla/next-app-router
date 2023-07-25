import React from "react";
import PageNavigationItem from "@/app/components/table/PageNavigationItem";
import { updateURLParameters } from "@/app/utils/HelperFunctions";

type Props = {
  url: string;
  pageNumber: number;
  pageSize: number;
  totalCount: number;
};

function Pagination({ url, pageNumber, pageSize, totalCount }: Props) {
  const firstRecordIndex = (pageNumber - 1) * pageSize + 1;
  const lastRecordIndex = Math.min(pageNumber * pageSize, totalCount);

  return (
    <div className="mt-2 flex justify-between">
      <p className="text-xs mx-2 mt-1 text-blue-500">
        {`${firstRecordIndex} - ${lastRecordIndex} of ${totalCount}`}
      </p>

      <div className="flex">
        <PageNavigationItem
          url={updateURLParameters(url, "pageNumber", pageNumber - 1)}
          disabled={pageNumber === 1}
          label="&laquo;"
        />

        <p className="text-lg mx-2 mt-1 text-blue-500">{pageNumber}</p>

        <PageNavigationItem
          url={updateURLParameters(url, "pageNumber", pageNumber + 1)}
          disabled={pageNumber * pageSize >= totalCount}
          label="&raquo;"
        />
      </div>
    </div>
  );
}

export default Pagination;
