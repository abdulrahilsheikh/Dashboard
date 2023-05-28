import { GridColDef } from "@mui/x-data-grid";
const styleId: GridColDef = {
  field: "styleId",
  headerName: "Style Id",
  renderHeader: (param) => (
    <div className="font-bold">{param.colDef.headerName}</div>
  ),
  minWidth: 150,
};
export const generalColumns: GridColDef[] = [
  styleId,
  {
    field: "shiftName",
    headerName: "Shift Name",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    minWidth: 150,
  },
  {
    field: "refName",
    headerName: "Ref Name",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    minWidth: 150,
  },
  {
    field: "season",
    headerName: "Season",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    minWidth: 150,
  },
  {
    field: "category",
    headerName: "Category",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    minWidth: 150,
  },
  {
    field: "designer",
    headerName: "Designer",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    minWidth: 150,
  },
  {
    field: "misc1",
    headerName: "MISC 1",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    minWidth: 150,
  },
  {
    field: "misc2",
    headerName: "MISC 2",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    minWidth: 150,
  },
  {
    field: "misc3",
    headerName: "MISC 3",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    minWidth: 150,
  },
  {
    field: "misc4",
    headerName: "MISC 4",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    minWidth: 150,
  },
];
export const bomColumns: GridColDef[] = [
  styleId,
  {
    field: "itemNames",
    headerName: "Item Names",
    flex: 1,
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    minWidth: 150,
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
export const manufacturingColumns: GridColDef[] = [
  styleId,
  {
    flex: 1,
    field: "process",
    headerName: (<div className="font-bold">{"Process"}</div>) as any,
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
export const operationsColumns: GridColDef[] = [
  styleId,
  {
    flex: 1,
    field: "operationShortName",
    headerName: (
      <div className="font-bold">{"Operation Short Name"}</div>
    ) as any,
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
export const pictureColumns: GridColDef[] = [
  styleId,
  {
    field: "mainPic",
    headerName: (<div className="font-bold">{"Main Pic"}</div>) as any,
    minWidth: 150,
    renderCell: (param) => (
      <div className="flex gap-4 overflow-auto no-scrollbar">
        <img src={param.value} />
      </div>
    ),
  },
  {
    field: "supplierPic",
    headerName: (<div className="font-bold">{"Supplier Pic"}</div>) as any,
    minWidth: 150,
    renderCell: (param) => (
      <div className="flex gap-4 overflow-auto no-scrollbar">
        <img src={param.value} />
      </div>
    ),
  },
  {
    field: "technicalPic",
    headerName: (<div className="font-bold">{"Technical Pic"}</div>) as any,
    minWidth: 150,
    renderCell: (param) => (
      <div className="flex gap-4 overflow-auto no-scrollbar">
        <img src={param.value} />
      </div>
    ),
  },
  {
    field: "sketch",
    headerName: (<div className="font-bold">{"Sketch"}</div>) as any,
    minWidth: 150,
    renderCell: (param) => (
      <div className="flex gap-4 overflow-auto no-scrollbar">
        <img src={param.value} />
      </div>
    ),
  },
];
export const specificationColumns: GridColDef[] = [
  styleId,
  {
    field: "sketch",
    headerName: (<div className="font-bold">{"Sketch"}</div>) as any,
    minWidth: 150,
    renderCell: (param) => (
      <div className="flex gap-4 overflow-auto no-scrollbar">
        <img src={param.value} alt="img" />
      </div>
    ),
  },
  {
    field: "supplierSpec",
    headerName: (<div className="font-bold">{"Specifications"}</div>) as any,
    minWidth: 150,
    flex: 1,
    renderCell: (param) => (
      <div className="flex gap-4 overflow-auto no-scrollbar">
        {param.value.map((item: any) => (
          <div className="bg-blue-100 p-2 text-center min-w-[2.5rem] rounded">
            {item.header} : {item.sizeValue}
          </div>
        ))}
      </div>
    ),
  },
];

export const formField = {
  general: generalColumns,
  bom: bomColumns,
  manufacturing: manufacturingColumns,
  operations: operationsColumns,
  specification: specificationColumns,
};

export const tabList = [
  { label: "General", value: "general" },
  { label: "BOM", value: "bom" },
  { label: "Manufacturing", value: "manufacturing" },
  { label: "Operations", value: "operations" },
  { label: "Pictures", value: "picture" },
  { label: "Specification", value: "specification" },
];

export const columns: any = {
  general: generalColumns,
  bom: bomColumns,
  manufacturing: manufacturingColumns,
  operations: operationsColumns,
  picture: pictureColumns,
  specification: specificationColumns,
};
