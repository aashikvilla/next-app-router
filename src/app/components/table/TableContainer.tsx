import Search from "@/app/components/table/Search";
import Table from "@/app/components/table/Table";
import Pagination from "@/app/components/table/Pagination";
import { updateURLParameters } from "@/app/utils/HelperFunctions";
import { Column, Data } from "@/app/types/Table";

type Props = {
  url: string;
  columns: Column[];
  data: Data[];
  count: number;
  searchParameters: DataQueryParameters;
};

function TableContainer({
  url,
  columns,
  data,
  count,
  searchParameters,
}: Props) {
  return (
    <>
      <Search
        url={updateURLParameters(url, "PageNumber", 1)}
        defaultSearchTerm={searchParameters.SearchTerm ?? ""}
      />

      <Table
        columns={columns}
        data={data}
        url={url}
        searchParameters={searchParameters}
      />

      <Pagination
        pageNumber={searchParameters.PageNumber}
        pageSize={searchParameters.PageSize}
        url={url}
        totalCount={count}
      />
    </>
  );
}

export default TableContainer;
