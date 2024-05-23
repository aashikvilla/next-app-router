import { Column } from "@/app/types/Table";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {
  column: Column;
  searchParameters: DataQueryParameters;
  showFilter: boolean;
  url: string;
};

function TableHeaderCell({
  column,
  searchParameters,
  showFilter,

  url,
}: Props) {
  let filterIndex = searchParameters.FilterColumns.indexOf(column.Header);
  const defaultFilterValue = () => {
    if (
      filterIndex >= 0 &&
      searchParameters.FilterQueries.length > filterIndex
    ) {
      return searchParameters.FilterQueries[filterIndex];
    }
    return "";
  };

  const [filterValue, setFilterValue] = useState<string>(defaultFilterValue());
  const router = useRouter();
  const onFilter = () => {
    const urlParts = url.split("?");
    const params = new URLSearchParams(urlParts[1] || "");

    let filterColumns = params.getAll("FilterColumns");
    let filterQueries = params.getAll("FilterQueries");

    let columnIndex = filterColumns.indexOf(column.Header);

    if (filterValue === "") {
      // if filter value is empty, remove the filter
      if (columnIndex !== -1) {
        filterColumns.splice(columnIndex, 1);
        filterQueries.splice(columnIndex, 1);
      }
    } else {
      if (columnIndex !== -1) {
        // if filter exists for the column, update it
        filterQueries[columnIndex] = filterValue;
      } else {
        // if filter doesn't exist for the column, add it
        filterColumns.push(column.Header);
        filterQueries.push(filterValue);
      }
    }

    // remove old filters
    params.delete("FilterColumns");
    params.delete("FilterQueries");

    // add updated filters
    filterColumns.forEach((column, index) => {
      params.append("FilterColumns", column);
      params.append("FilterQueries", filterQueries[index]);
    });

    const updatedURL = `${urlParts[0]}?${params.toString()}`;

    router.push(updatedURL);
  };

  const sortOrder =
    searchParameters.SortBy == column.Header ? searchParameters.SortOrder : "";
  let sortSymbol = "";
  let nextSort = "asc";
  if (sortOrder === "asc") {
    sortSymbol = "↑";
    nextSort = "desc";
  } else if (sortOrder === "desc") {
    sortSymbol = "↓";
    nextSort = "";
  }

  const onSort = () => {
    const urlParts = url.split("?");
    const params = new URLSearchParams(urlParts[1] || "");

    if (nextSort === "") {
      params.delete("SortBy");
      params.delete("SortOrder");
    } else {
      params.set("SortBy", column.Header);
      params.set("SortOrder", nextSort);
    }
    const updatedURL = `${urlParts[0]}?${params.toString()}`;

    router.push(updatedURL);
  };

  return (
    <th
      key={column.accessor}
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
    >
      <div className="flex flex-col">
        <div className="cursor-pointer" onClick={() => onSort()}>
          {column.Header} {sortSymbol}
        </div>
        {showFilter && (
          <div className="flex mt-2">
            <input
              value={filterValue}
              onChange={(e) => {
                setFilterValue(e.target.value);
              }}
              placeholder={`Filter ${column.Header}`}
              className="w-full p-1 text-blue-600 shadow appearance-none border rounded focus:outline-none focus:shadow-outline"
            />
            <button onClick={onFilter}>🔍</button>
          </div>
        )}
      </div>
    </th>
  );
}

export default TableHeaderCell;
