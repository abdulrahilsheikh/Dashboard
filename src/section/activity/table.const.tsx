import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "activityName",
    headerName: (<div className="font-bold">{"Activity Name"}</div>) as any,
    minWidth: 150,
  },
  {
    field: "description",
    headerName: (<div className="font-bold">{"Description"}</div>) as any,
    width: 150,
  },
];

export const formField = [
  {
    name: "activityName",
    placeholder: "Activity Name",
    type: "text",
  },
  {
    name: "description",
    placeholder: "Description",
    type: "text",
  },
];
