type DataQueryParameters = {
  PageSize: number;
  PageNumber: number;
  SearchTerm: string | null;
  SortBy: string | null;
  SortOrder: string | null;
  FilterColumns: string[];
  FilterQueries: string[];
};
