import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "unitName",
    headerName: (<div className="font-bold">{"Unit Name"}</div>) as any,
    minWidth: 150,
  },
  {
    field: "shortName",
    headerName: (<div className="font-bold">{"Short Person"}</div>) as any,
    width: 150,
  },
];

export const formField = [
  {
    name: "unitName",
    placeholder: "Unit Name",
    type: "text",
  },
  {
    name: "shortName",
    placeholder: "Short Person",
    type: "text",
  },
];
