import { getNotesForUser } from "@/app/apiService/ApiCalls";
import TableContainer from "@/app/components/table/TableContainer";
import { Column } from "@/app/types/Table";

const columns: Column[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Description",
    accessor: "description",
  },
  {
    Header: "Priority",
    accessor: "priority",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

async function Notes({ searchParams }: Props) {
  console.log("searchparams", searchParams);
  const pageNumber =
    typeof searchParams.pageNumber === "string"
      ? Number(searchParams.pageNumber)
      : 1;
  const pageSize =
    typeof searchParams.pageSize === "string"
      ? Number(searchParams.pageSize)
      : 5;

  const searchTerm =
    typeof searchParams.pageSize === "string"
      ? String(searchParams.searchTerm)
      : "";

  var { data, count } = await getNotesForUser(pageNumber, pageSize, searchTerm);

  const url = `notes?pageSize=${pageSize}&pageNumber=${pageNumber}&searchTerm=${searchTerm}`;

  return (
    <div>
      <h2 className="mb-4 text-blue-500 font-semibold text">Notes</h2>

      <div>
        <TableContainer
          columns={columns}
          data={data}
          searchTerm={searchTerm}
          pageNumber={pageNumber}
          pageSize={pageSize}
          url={url}
          count={count}
        />
      </div>
    </div>
  );
}

export default Notes;
