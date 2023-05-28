import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "groupName",
    headerName: (<div className="font-bold">{"Group Name"}</div>) as any,
    minWidth: 150,
  },
  {
    field: "groupType",
    headerName: (<div className="font-bold">{"Group Type"}</div>) as any,
    minWidth: 150,
  },
  {
    flex: 1,
    field: "groupItems",
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
    name: "groupName",
    placeholder: "Group Name",
  },
  {
    name: "groupType",
    placeholder: "Group Type",
    options: [
      { label: "Style", value: "Style" },
      { label: "Process", value: "Process" },
      { label: "Activity", value: "Activity" },
      { label: "Item", value: "Item" },
    ],
  },
  {
    name: "groupItems",
    placeholder: "Group Items",
  },
];
