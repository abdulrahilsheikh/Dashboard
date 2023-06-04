import { DriveFileRenameOutline, Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "group_name",
    headerName: (<div className="font-bold">{"Group Name"}</div>) as any,
    minWidth: 150,
  },
  {
    field: "group_type",
    headerName: (<div className="font-bold">{"Group Type"}</div>) as any,
    minWidth: 150,
  },
  {
    flex: 1,
    field: "group_tems",
    headerName: (<div className="font-bold">{"Group Items"}</div>) as any,
    minWidth: 150,
    resizable: true,
    renderCell: (param) => (
      <div className="flex gap-4 overflow-auto no-scrollbar">
        {param.value.map((item: any) => (
          <div className="bg-green-100 p-2 text-center min-w-[2.5rem] rounded">
            {item}
          </div>
        ))}
      </div>
    ),
  },
];

export const formField = [
  {
    name: "group_name",
    placeholder: "Group Name",
  },
  {
    name: "group_type",
    placeholder: "Group Type",
    options: [
      { label: "Style", value: "Style" },
      { label: "Process", value: "Process" },
      { label: "Activity", value: "Activity" },
      { label: "Item", value: "Item" },
    ],
  },
  {
    name: "group_tems",
    placeholder: "Group Items",
  },
];
