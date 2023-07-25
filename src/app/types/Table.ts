export type Column = {
  Header: string;
  accessor: string;
  Custom?: (row: any) => JSX.Element;
};

export type Data = {
  [key: string]: any;
};
