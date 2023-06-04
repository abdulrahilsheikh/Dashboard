import { GridColDef } from "@mui/x-data-grid";

export const processColumns: GridColDef[] = [
  {
    field: "processGroup",
    headerName: "Process Group",
    minWidth: 150,
    renderHeader: (params) => (
      <div className="font-bold">{params.colDef.headerName}</div>
    ),
  },
  {
    field: "process",
    headerName: "Process Name",
    minWidth: 250,
    renderHeader: (params) => (
      <div className="font-bold">{params.colDef.headerName}</div>
    ),
  },
  {
    field: "activity",
    headerName: "Activity",
    minWidth: 150,
    renderHeader: (params) => (
      <div className="font-bold">{params.colDef.headerName}</div>
    ),
  },
  {
    field: "startDate",
    headerName: "Start Date",
    minWidth: 250,
    renderHeader: (params) => (
      <div className="font-bold">{params.colDef.headerName}</div>
    ),
    renderCell: (param) => {
      console.log(param);

      return <input type={"datetime-local"} />;
    },
    editable: true,
  },
  {
    field: "endDate",
    headerName: "End Date",
    minWidth: 250,
    renderHeader: (params) => (
      <div className="font-bold">{params.colDef.headerName}</div>
    ),
    renderCell: (param) => <input type={"datetime-local"} />,
    editable: true,
  },
];
export const categoryOptions = [
  { lable: "Purchase", value: "Purchase" },
  { lable: "Process", value: "process" },
  { lable: "Process Group", value: "processGroup" },
  { lable: "Activity", value: "activity" },
  { lable: "Production", value: "production" },
];
const activityList = [
  "Order Confirmation",
  "Payment Processing",
  "Shipping",
  "Order Tracking",
  "Customer Support",
  "Returns and Refunds",
  "Inventory Management",
  "Invoice Generation",
  "Order Fulfillment",
  "Post-Sales Feedback",
];
const processList = [
  "Order Processing",
  "Inventory Management",
  "Customer Onboarding",
  "Product Development",
  "Quality Assurance",
  "Marketing Campaign",
  "Supply Chain Management",
  "Employee Recruitment",
  "Financial Reporting",
  "Project Planning",
];
export function generateObjects(
  processGroup: any,
  process: any,
  activityList: any
) {
  const objects = [];

  for (let i = 0; i < activityList.length; i++) {
    const obj = {
      id: processGroup + process + i,
      processGroup: processGroup,
      process: process,
      activity: activityList[i],
      startDate: "",
      endDate: "",
    };

    objects.push(obj);
  }

  return objects;
}
export const getProcessList = (name: any) => {
  return generateObjects("-", name, activityList);
};
export const getActivty = () => {
  return generateObjects("-", "-", [
    activityList[Math.floor(activityList.length * Math.random())],
  ]);
};
export const getProcessGroup = (name: any) => {
  const temp = [];
  for (
    let i = 0;
    i < Math.floor(processList.length * (Math.random() * 5));
    i++
  ) {
    const p = generateObjects(name, processList[i], activityList);
    temp.push(...p);
  }
  return temp;
};

export const optionsMap: any = {
  process: [
    { value: "Main Process", label: "Main Process" },
    { value: "Sub Process 1", label: "Sub Process 1" },
    { value: "Sub Process 2", label: "Sub Process 2" },
    { value: "Sub Process 3", label: "Sub Process 3" },
  ],
  processGroup: [
    { value: "Main Process", label: "Main Process" },
    { value: "Process A", label: "Process A" },
    { value: "Process B", label: "Process B" },
    { value: "Process C", label: "Process C" },
  ],
  activity: [
    { value: "Main Process", label: "Main Process" },
    { value: "Step 1", label: "Step 1" },
    { value: "Step 2", label: "Step 2" },
    { value: "Step 3", label: "Step 3" },
  ],
  production: [
    { value: "Main Process", label: "Main Process" },
    { value: "Step 1", label: "Step 1" },
    { value: "Step 2", label: "Step 2" },
  ],
};
