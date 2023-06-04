import { GridColDef } from "@mui/x-data-grid";

export const formFields = [
  { name: "name", placeholder: "Item Name", type: "text" },
  {
    name: "item_select",
    placeholder: "Item Select",
    type: "select",

    options: [
      { label: "BOM", value: "BOM" },
      { label: "WIP", value: "WIP" },
      // { label: "Three", value: "3" },
    ],
  },
  { name: "item_type", placeholder: "Item Type", type: "text" },
  { name: "item_color", placeholder: "Item Color", type: "text" },
  { name: "specification", placeholder: "Specification", type: "text" },
  { name: "moq", placeholder: "MOQ", type: "text" },
  { name: "buffer_unit", placeholder: "Buffer Unit", type: "text" },
  { name: "purchase_unit", placeholder: "Purchase Unit", type: "text" },
  { name: "issue_unit", placeholder: "Issue Unit", type: "text" },
  {
    name: "purchase_issue_atio",
    placeholder: "1 Purchase Unit=? Issue Unit",
    type: "text",
  },
  {
    name: "rate",
    placeholder: "Rate",
    type: "text",
  },
  { name: "gst", placeholder: "GST", type: "text" },
  { name: "hsn_code", placeholder: "HSN Code", type: "text" },
  { name: "opening_stock", placeholder: "Opening Stock", type: "text" },
  { name: "msc1", placeholder: "Msc1", type: "text" },
  { name: "msc2", placeholder: "Msc2", type: "text" },
];
export const columns: GridColDef[] = [
  {
    field: "name",
    headerName: (<div className="font-bold">Item Name</div>) as any,
    width: 150,
  },
  {
    field: "item_select",
    headerName: (<div className="font-bold">Item Select</div>) as any,
    width: 150,
  },
  {
    field: "item_type",
    headerName: (<div className="font-bold">Item Type</div>) as any,
    width: 150,
  },
  {
    field: "item_color",
    headerName: (<div className="font-bold">Item Color</div>) as any,
    width: 150,
  },
  {
    field: "specification",
    headerName: (<div className="font-bold">Specification</div>) as any,
    width: 150,
  },
  {
    field: "moq",
    headerName: (<div className="font-bold">MOQ</div>) as any,
    width: 150,
  },
  {
    field: "buffer_unit",
    headerName: (<div className="font-bold">Buffer Unit</div>) as any,
    width: 150,
  },
  {
    field: "purchase_unit",
    headerName: (<div className="font-bold">Purchase Unit</div>) as any,
    width: 150,
  },
  {
    field: "issue_unit",
    headerName: (<div className="font-bold">Issue Unit</div>) as any,
    width: 150,
  },
  {
    field: "purchase_issue_atio",
    headerName: (
      <div className="font-bold">1 Purchase Unit=? Issue Unit</div>
    ) as any,
    width: 150,
  },
  {
    field: "rate",
    headerName: (<div className="font-bold">Rate</div>) as any,
    width: 150,
  },
  {
    field: "gst",
    headerName: (<div className="font-bold">GST</div>) as any,
    width: 150,
  },
  {
    field: "hsn_code",
    headerName: (<div className="font-bold">HSN Code</div>) as any,
    width: 150,
  },
  {
    field: "opening_stock",
    headerName: (<div className="font-bold">Opening Stock</div>) as any,
    width: 150,
  },
  {
    field: "msc1",
    headerName: (<div className="font-bold">Msc1</div>) as any,
    width: 150,
  },
  {
    field: "msc2",
    headerName: (<div className="font-bold">Msc2</div>) as any,
    width: 150,
  },
];
