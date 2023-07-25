"use client";
import { updateURLParameters } from "@/app/utils/HelperFunctions";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  url: string;
  defaultSearchTerm: string;
};

function Search({ url, defaultSearchTerm }: Props) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(defaultSearchTerm);
  const handleSearch = () => {
    router.push(updateURLParameters(url, "searchTerm", searchValue));
  };
  return (
    <div className="flex justify-center my-5">
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="shadow appearance-none border rounded w-64 py-2 px-3 text-blue-500 leading-tight focus:outline-none focus:shadow-outline mr-2"
      />
      <button
        onClick={() => handleSearch()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        &#128269;
      </button>
    </div>
  );
}

export default Search;
