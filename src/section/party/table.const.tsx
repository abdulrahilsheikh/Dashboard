import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "companyName",
    headerName: (<div className="font-bold">{"Company Name"}</div>) as any,
    minWidth: 150,
  },
  {
    field: "contactPerson",
    headerName: (<div className="font-bold">{"Contact Person"}</div>) as any,
    width: 150,
  },
  {
    field: "address",
    headerName: (<div className="font-bold">{"Address"}</div>) as any,
    width: 150,
  },
  {
    field: "city",
    headerName: (<div className="font-bold">{"City"}</div>) as any,
    width: 150,
  },
  {
    field: "state",
    headerName: (<div className="font-bold">{"State"}</div>) as any,
    width: 150,
  },
  {
    field: "pin",
    headerName: (<div className="font-bold">{"pin"}</div>) as any,
    width: 150,
  },
  {
    field: "role",
    headerName: (<div className="font-bold">{"Role"}</div>) as any,
    width: 150,
  },
  {
    field: "email",
    headerName: (<div className="font-bold">{"Email"}</div>) as any,
    width: 150,
  },
  {
    field: "landline",
    headerName: (<div className="font-bold">{"Land Line"}</div>) as any,
    width: 150,
  },
  {
    field: "mobile",
    headerName: (<div className="font-bold">{"Mobile"}</div>) as any,
    width: 150,
  },
  {
    field: "gst",
    headerName: (<div className="font-bold">{"GST"}</div>) as any,
    width: 150,
  },
  {
    field: "pan",
    headerName: (<div className="font-bold">{"PAN"}</div>) as any,
    width: 150,
  },
  {
    field: "bank",
    headerName: (<div className="font-bold">{"Bank"}</div>) as any,
    width: 150,
  },
  {
    field: "account",
    headerName: (<div className="font-bold">{"Account"}</div>) as any,
    width: 150,
  },
  {
    field: "ifsc",
    headerName: (<div className="font-bold">{"IFSC"}</div>) as any,
    width: 150,
  },
  {
    field: "openingBalance",
    headerName: (<div className="font-bold">{"Opening Balance"}</div>) as any,
    width: 150,
  },
];

export const formField = [
  {
    name: "companyName",
    placeholder: "Company Name",
    type: "text",
  },
  {
    name: "contactPerson",
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
    name: "openingBalance",
    placeholder: "Opening Balance",
    type: "text",
  },
];
