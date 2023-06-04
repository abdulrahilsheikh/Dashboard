import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "process_name",
    headerName: (<div className="font-bold">{"Process Name"}</div>) as any,
    minWidth: 150,
  },
  {
    flex: 1,
    field: "activities",
    headerName: (<div className="font-bold">{"Activities"}</div>) as any,
    minWidth: 150,
    resizable: true,
    renderCell: (param) => (
      <div className="flex gap-4 overflow-auto no-scrollbar">
        {param.value.map((item: any) => (
          <div className="bg-blue-100 p-2 text-center min-w-[2.5rem] rounded">
            {item}
          </div>
        ))}
      </div>
    ),
  },
];

export const formField = [
  {
    name: "process_name",
    placeholder: "Process Name",
    type: "text",
  },
  {
    name: "activities",
    placeholder: "Activities",
    type: "text",
  },
];
