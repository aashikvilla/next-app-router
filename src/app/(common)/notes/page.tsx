import { getNotesForUser } from "@/app/apiService/ApiCalls";
import PageNavigationItem from "@/app/components/table/PageNavigationItem";
import Search from "@/app/components/table/Search";
import { updateURLParameters } from "@/app/utils/HelperFunctions";
import Link from "next/link";

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

      <Search url={url} defaultSearchTerm={searchTerm} />

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-blue-500 sm:rounded-lg">
              <table className="min-w-full divide-y divide-blue-200">
                <thead className="bg-blue-500">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Priority
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-blue-300">
                  {data.map((row) => (
                    <tr key={row.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                        {row.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                        {row.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                        {row.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                        {row.priority}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <PageNavigationItem
          url={updateURLParameters(url, "pageNumber", pageNumber - 1)}
          pageNumber={pageNumber}
          disabled={pageNumber === 1}
          label="&laquo;"
        />

        <p className="text-lg mx-2 mt-1 text-blue-500 ">{pageNumber}</p>
        <PageNavigationItem
          url={updateURLParameters(url, "pageNumber", pageNumber + 1)}
          pageNumber={pageNumber}
          disabled={pageNumber * pageSize >= count}
          label="&raquo;"
        />
      </div>
    </div>
  );
}

export default Notes;
