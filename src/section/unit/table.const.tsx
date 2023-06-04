import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "unit_name",
    headerName: (<div className="font-bold">{"Unit Name"}</div>) as any,
    minWidth: 150,
  },
  {
    field: "short_name",
    headerName: (<div className="font-bold">{"Short Name"}</div>) as any,
    width: 150,
  },
];

export const formField = [
  {
    name: "unit_name",
    placeholder: "Unit Name",
    type: "text",
  },
  {
    name: "short_name",
    placeholder: "Short Name",
    type: "text",
  },
];
