import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "size_name",
    headerName: (<div className="font-bold">{"Size Name"}</div>) as any,
    minWidth: 150,
  },
  {
    flex: 1,
    field: "sizes",
    headerName: (<div className="font-bold">{"Sizes"}</div>) as any,
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
    name: "size_name",
    placeholder: "Size Name",
    type: "text",
  },
  {
    name: "sizes",
    placeholder: "Sizes",
    type: "text",
  },
];
