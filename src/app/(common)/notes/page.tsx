import { getNotesForUser } from "@/app/apiService/ApiCalls";
import TableContainer from "@/app/components/table/TableContainer";
import { Column } from "@/app/types/Table";
import {
  generateSearchURL,
  getQueryParameters,
} from "@/app/utils/HelperFunctions";

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
  const searchParameters = getQueryParameters(searchParams);
  const url = generateSearchURL(searchParameters);

  var { data, count } = await getNotesForUser(url);

  return (
    <div>
      <h2 className="mb-4 text-blue-500 font-semibold text">Notes</h2>

      <div>
        <TableContainer
          columns={columns}
          data={data}
          url={"notes?" + url}
          count={count}
          searchParameters={searchParameters}
        />
      </div>
    </div>
  );
}

export default Notes;
