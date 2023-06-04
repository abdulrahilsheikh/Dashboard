import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "location_name",
    headerName: (<div className="font-bold">{"Location Name"}</div>) as any,
    minWidth: 150,
  },
  {
    field: "description",
    flex: 1,
    headerName: (<div className="font-bold">{"Description"}</div>) as any,
    width: 150,
  },
];

export const formField = [
  {
    name: "location_name",
    placeholder: "Location Name",
    type: "text",
  },
  {
    name: "description",
    placeholder: "Description",
    type: "text",
  },
];
