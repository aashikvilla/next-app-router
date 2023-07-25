import { Column, Data } from "@/app/types/Table";

type Props = {
  columns: Column[];
  data: Data[];
};

const Table = ({ columns, data }: Props) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-blue-500 sm:rounded-lg">
              <table className="min-w-full divide-y divide-blue-200">
                <thead className="bg-blue-500">
                  <tr>
                    {columns.map((column, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        {column.Header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-blue-300">
                  {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {columns.map((column, columnIndex) => (
                        <td
                          className="px-6 py-4 whitespace-nowrap text-sm text-blue-500"
                          key={columnIndex}
                        >
                          {column.Custom
                            ? column.Custom(row)
                            : row[column.accessor]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
