import {
  DataGrid,
  GridCellEditStopParams,
  GridCellEditStopReasons,
  GridColDef,
} from "@mui/x-data-grid";
import { useState } from "react";
import { SelectFieldModified } from "../../generic-component/select-field-modified/SelectFieldModified";

const data = [
  {
    id: 1,
  },
];
const itemData: any = {
  "Item 1": {
    purchaseUnit: "44",
    orderQtty: 10,
    rate: 15.99,
    cgst: 2.5,
    sgst: 2.5,
    igst: 0,
    subTotal: 159.9,
    taxAmount: 7.9975,
    netAmount: 167.8975,
  },
  "Item 2": {
    purchaseUnit: "10",
    orderQtty: 5,
    rate: 9.99,
    cgst: 1.5,
    sgst: 1.5,
    igst: 0,
    subTotal: 49.95,
    taxAmount: 3.7475,
    netAmount: 53.6975,
  },
  "Item 3": {
    purchaseUnit: "22",
    orderQtty: 8,
    rate: 12.5,
    cgst: 2,
    sgst: 2,
    igst: 0,
    subTotal: 100,
    taxAmount: 8,
    netAmount: 108,
  },
  "Item 4": {
    purchaseUnit: "7",
    orderQtty: 2,
    rate: 19.99,
    cgst: 1.5,
    sgst: 1.5,
    igst: 0,
    subTotal: 39.98,
    taxAmount: 4.797,
    netAmount: 44.777,
  },
};
const options = [
  { value: "", label: "Select Item" },
  { value: "Item 1", label: "Item 1" },
  { value: "Item 2", label: "Item 2" },
  { value: "Item 3", label: "Item 3" },
  { value: "Item 4", label: "Item 4" },
];
const cols = (dataUpdate: any): GridColDef[] => [
  {
    field: "itemName",
    headerName: "Item Name",
    renderHeader: (param) => (
      <div className="font-bold">{param.colDef.headerName}</div>
    ),
    renderCell: (param) => (
      <SelectFieldModified
        onChange={(e) => {
          dataUpdate(e, param);
        }}
        label=""
        defaultValue={""}
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
  const updateRows = (event: any, params: any) => {
    const temp: any[] = [...rows];

    const idx = temp.findIndex((item: any) => {
      return item.id === params.id;
    });

    event.target.value;
    temp[idx] = { ...temp[idx], ...itemData[event.target.value] };
    setRows(temp);
  };

  const addNewItem = () => {
    setRows([...rows, { id: rows.length + 1 }]);
  };
  return (
    <div className="text-gray-700 h-40 relative">
      <div className="absolute right-0 -top-2 -translate-y-full ">
        <button
          onClick={addNewItem}
          className="inline-block rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          Add New Item
        </button>
      </div>
      <DataGrid
        onCellEditStop={onCellEditSubmit}
        rows={rows}
        columns={cols(updateRows)}
        columnHeaderHeight={24}
        rowHeight={24}
        hideFooter
        editMode="cell"
      />
    </div>
  );
};

export default PurchaseOrderItemsSection;
