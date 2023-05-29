import {
  DataGrid,
  GridCellEditStopParams,
  GridCellEditStopReasons,
  GridCellParams,
  GridColDef,
  MuiEvent,
} from "@mui/x-data-grid";
import React, { useRef, useState } from "react";
import { SelectFieldModified } from "../../generic-component/select-field-modified/SelectFieldModified";

const data = [
  {
    id: 12,
    itemName: "abc",
    purchaseUnit: "dfdefd",
    orderQtty: "sdsds",
    rate: "sdsds",
    cgst: "sdsds",
    sgst: "sdsds",
    igst: "sdsds",
    subTotal: "sdsds",
    taxAmount: "sdsds",
    netAmount: "sdsds",
  },
  {
    id: 2,
    itemName: "abc",
    purchaseUnit: "dfdefd",
    orderQtty: "sdsds",
    rate: "sdsds",
    cgst: "sdsds",
    sgst: "sdsds",
    igst: "sdsds",
    subTotal: "sdsds",
    taxAmount: "sdsds",
    netAmount: "sdsds",
  },
  {
    id: 3,
    itemName: "abc",
    purchaseUnit: "dfdefd",
    orderQtty: "sdsds",
    rate: "sdsds",
    cgst: "sdsds",
    sgst: "sdsds",
    igst: "sdsds",
    subTotal: "sdsds",
    taxAmount: "sdsds",
    netAmount: "sdsds",
  },
  {
    id: 4,
    itemName: "abc",
    purchaseUnit: "dfdefd",
    orderQtty: "sdsds",
    rate: "sdsds",
    cgst: "sdsds",
    sgst: "sdsds",
    igst: "sdsds",
    subTotal: "sdsds",
    taxAmount: "sdsds",
    netAmount: "sdsds",
  },
  {
    id: 5,
    itemName: "abc",
    purchaseUnit: "dfdefd",
    orderQtty: "sdsds",
    rate: "sdsds",
    cgst: "sdsds",
    sgst: "sdsds",
    igst: "sdsds",
    subTotal: "sdsds",
    taxAmount: "sdsds",
    netAmount: "sdsds",
  },
  {
    id: 6,
    itemName: "abc",
    purchaseUnit: "dfdefd",
    orderQtty: "sdsds",
    rate: "sdsds",
    cgst: "sdsds",
    sgst: "sdsds",
    igst: "sdsds",
    subTotal: "sdsds",
    taxAmount: "sdsds",
    netAmount: "sdsds",
  },
];

const options = [
  { value: "Party 1", label: "Party 1" },
  { value: "Party 2", label: "Party 2" },
  { value: "Party 3", label: "Party 3" },
];
const cols: GridColDef[] = [
  {
    field: "itemName",
    headerName: "Item Name",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    renderCell: (param) => (
      <SelectFieldModified
        onChange={(e) => {
          console.log();
        }}
        label=""
        options={options}
      />
    ),
    minWidth: 180,
  },
  {
    field: "purchaseUnit",
    headerName: "Purchase Unit",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    renderCell: (param) => <div className="">{param.value}</div>,
    minWidth: 150,
    editable: true,
  },
  {
    field: "orderQtty",
    headerName: "Order Qtty",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    renderCell: (param) => <div className="">{param.value}</div>,
    minWidth: 150,
    editable: true,
  },
  {
    field: "rate",
    headerName: "Rate",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    renderCell: (param) => <div className="">{param.value}</div>,
    minWidth: 150,
    editable: true,
  },
  {
    field: "cgst",
    headerName: "CGST",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    renderCell: (param) => <div className="">{param.value}</div>,
    minWidth: 150,
    editable: true,
  },
  {
    field: "sgst",
    headerName: "SGST",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    renderCell: (param) => <div className="">{param.value}</div>,
    minWidth: 150,
    editable: true,
  },
  {
    field: "igst",
    headerName: "IGST",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    renderCell: (param) => <div className="">{param.value}</div>,
    minWidth: 150,
    editable: true,
  },
  {
    field: "subTotal",
    headerName: "Sub Total",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    renderCell: (param) => <div className="">{param.value}</div>,
    minWidth: 150,
  },
  {
    field: "taxAmount",
    headerName: "Tax Amount",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    renderCell: (param) => <div className="">{param.value}</div>,
    minWidth: 150,
  },
  {
    field: "netAmount",
    headerName: "Net Amount",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    renderCell: (param) => <div className="">{param.value}</div>,
    minWidth: 150,
  },
];

const PurchaseOrderItemsSection = () => {
  const [rows, setRows] = useState(data);

  const onCellEditSubmit = (params: GridCellEditStopParams, event: any) => {
    if (params.reason === GridCellEditStopReasons.cellFocusOut) {
      event.defaultMuiPrevented = true;
    } else {
      const temp: any = [...rows];
      temp.find((item: any) => item.id === params.id)[params.field] =
        event.target.value;
      setRows(temp);
    }
  };
  console.log(rows);

  return (
    <div className="text-gray-700 h-40">
      <DataGrid
        onCellEditStop={onCellEditSubmit}
        rows={rows}
        columns={cols}
        columnHeaderHeight={24}
        rowHeight={24}
        hideFooter
        editMode="cell"
      />
    </div>
  );
};

export default PurchaseOrderItemsSection;
