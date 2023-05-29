import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "company_name",
    headerName: "Company Name",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    minWidth: 150,
  },
  {
    field: "contact_person",
    headerName: "Contact Person",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    width: 150,
  },
  {
    field: "address",
    headerName: "Address",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    width: 150,
  },
  {
    field: "city",
    headerName: "City",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    width: 150,
  },
  {
    field: "state",
    headerName: "State",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    width: 150,
  },
  {
    field: "pin",
    headerName: "pin",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    width: 150,
  },
  {
    field: "role",
    headerName: "Role",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    width: 150,
  },
  {
    field: "landline",
    headerName: "Land Line",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    width: 150,
  },
  {
    field: "mobile",
    headerName: "Mobile",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    width: 150,
  },
  {
    field: "gst",
    headerName: "GST",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    width: 150,
  },
  {
    field: "pan",
    headerName: "PAN",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    width: 150,
  },
  {
    field: "bank",
    headerName: "Bank",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    width: 150,
  },
  {
    field: "account",
    headerName: "Account",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    width: 150,
  },
  {
    field: "ifsc",
    headerName: "IFSC",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    width: 150,
  },
  {
    field: "open_bal",
    headerName: "Opening Balance",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    width: 150,
  },
];

export const formField = [
  {
    name: "company_name",
    placeholder: "Company Name",
    type: "text",
  },
  {
    name: "contact_person",
    placeholder: "Contact Person",
    type: "text",
  },
  {
    name: "address",
    placeholder: "Address",
    type: "text",
  },
  {
    name: "city",
    placeholder: "City",
    type: "text",
  },
  {
    name: "state",
    placeholder: "State",
    type: "text",
  },
  {
    name: "pin",
    placeholder: "Pin",
    type: "text",
  },
  {
    name: "role",
    placeholder: "Role",
    type: "select",
    options: [
      { label: "Supplier", value: "supplier" },
      { label: "Vendor", value: "vendor" },
      { label: "Buyer", value: "buyer" },
    ],
  },
  {
    name: "email",
    placeholder: "Email",
    type: "text",
  },
  {
    name: "landline",
    placeholder: "Land Line",
    type: "text",
  },
  {
    name: "mobile",
    placeholder: "Mobile",
    type: "text",
  },
  {
    name: "gst",
    placeholder: "GST",
    type: "text",
  },
  {
    name: "pan",
    placeholder: "PAN",
    type: "text",
  },
  {
    name: "bank",
    placeholder: "Bank",
    type: "text",
  },
  {
    name: "account",
    placeholder: "Account",
    type: "text",
  },
  {
    name: "ifsc",
    placeholder: "IFSC",
    type: "text",
  },
  {
    name: "open_bal",
    placeholder: "Opening Balance",
    type: "text",
  },
];
