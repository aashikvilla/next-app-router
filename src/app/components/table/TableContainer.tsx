import Search from "@/app/components/table/Search";
import Table from "@/app/components/table/Table";
import Pagination from "@/app/components/table/Pagination";
import { updateURLParameters } from "@/app/utils/HelperFunctions";
import { Column, Data } from "@/app/types/Table";

type Props = {
  url: string;
  pageNumber: number;
  pageSize: number;
  searchTerm: string;
  columns: Column[];
  data: Data[];
  count: number;
};

function TableContainer({
  url,
  pageNumber,
  pageSize,
  searchTerm,
  columns,
  data,
  count,
}: Props) {
  return (
    <>
      <Search
        url={updateURLParameters(url, "pageNumber", 1)}
        defaultSearchTerm={searchTerm}
      />

      <Table columns={columns} data={data} />

      <Pagination
        pageNumber={pageNumber}
        pageSize={pageSize}
        url={url}
        totalCount={count}
      />
    </>
  );
}

export default TableContainer;
