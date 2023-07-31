"use client";
import { Column } from "@/app/types/Table";
import React, { useState } from "react";
import TableHeaderCell from "./TableHeaderCell";
import { updateURLParameters } from "@/app/utils/HelperFunctions";

type Props = {
  columns: Column[];
  searchParameters: DataQueryParameters;
  url: string;
};

const TableHeader: React.FC<Props> = ({ columns, searchParameters, url }) => {
  const [showFilter, setShowFilter] = useState<boolean>(true);

  return (
    <>
      <thead className="bg-blue-500">
        <tr>
          {columns.map((column) => (
            <TableHeaderCell
              column={column}
              searchParameters={searchParameters}
              showFilter={showFilter}
              url={updateURLParameters(url, "PageNumber", 1)}
            />
          ))}
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
