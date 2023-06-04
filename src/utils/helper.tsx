import { DriveFileRenameOutline, Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

export const generateColumns = (
  editFn: (data: any) => void,
  deletFn: (data: any) => void,
  colums: GridColDef[]
): GridColDef[] => [
  {
    field: "actions",
    headerName: "Actions",
    renderHeader: (p) => <div className="font-bold">{p.colDef.headerName}</div>,
    minWidth: 150,
    renderCell: (param) => (
      <div className="flex">
        <IconButton onClick={() => editFn(param)}>
          <DriveFileRenameOutline className="rounded-full bg-slate-950 scale-150 p-1 text-white" />
        </IconButton>
        <IconButton onClick={() => deletFn(param)}>
          <Delete className="rounded-full bg-slate-950 scale-150 p-1 text-white" />
        </IconButton>
      </div>
    ),
  },
  ...colums,
];
