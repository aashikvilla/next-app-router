export function updateURLParameters(
  path: string,
  paramToUpdate: string,
  newValue: any
) {
  const urlParts = path.split("?");
  const params = new URLSearchParams(urlParts[1] || "");
  params.set(paramToUpdate, newValue);
  return `${urlParts[0]}?${params.toString()}`;
}

export function getQueryParameters(searchParams: {
  [key: string]: string | string[] | undefined;
}): DataQueryParameters {
  const parameters: DataQueryParameters = {
    PageSize: 5,
    PageNumber: 1,
    SearchTerm: "",
    SortBy: "",
    SortOrder: "",
    FilterColumns: [],
    FilterQueries: [],
  };

  for (const key in searchParams) {
    if (key === "PageSize" && typeof searchParams[key] === "string") {
      parameters.PageSize = Number(searchParams[key]);
    } else if (key === "PageNumber" && typeof searchParams[key] === "string") {
      parameters.PageNumber = Number(searchParams[key]);
    } else if (key === "SearchTerm" && typeof searchParams[key] === "string") {
      parameters.SearchTerm = String(searchParams[key]);
    } else if (key === "SortBy" && typeof searchParams[key] === "string") {
      parameters.SortBy = String(searchParams[key]);
    } else if (key === "SortOrder" && typeof searchParams[key] === "string") {
      parameters.SortOrder = String(searchParams[key]);
    } else if (key === "FilterColumns") {
      if (Array.isArray(searchParams[key])) {
        parameters.FilterColumns = searchParams[key] as string[];
      } else if (typeof searchParams[key] === "string") {
        parameters.FilterColumns.push(String(searchParams[key]));
      }
    } else if (key === "FilterQueries") {
      if (Array.isArray(searchParams[key])) {
        parameters.FilterQueries = searchParams[key] as string[];
      } else if (typeof searchParams[key] === "string") {
        parameters.FilterQueries.push(String(searchParams[key]));
      }
    }
  }

  return parameters;
}

export function generateSearchURL(params: DataQueryParameters) {
  const searchParams = new URLSearchParams();

  for (const key in params) {
    const value = params[key as keyof DataQueryParameters];
    if (Array.isArray(value)) {
      value.forEach((val) => searchParams.append(key, val));
    } else if (value !== undefined && value !== null && value != "") {
      searchParams.append(key, value.toString());
    }
  }

  return searchParams.toString();
}
