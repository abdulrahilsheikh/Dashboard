import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { DashboardOutletContext } from "../../outlets/dashboard-outlet/DashBoardOutlet";
import { getItemsData } from "../../utils/httpRequests";
import { useDebounce } from "../../hooks/useDebounce";
import AddNewItemModal from "../../components/adde-new-item-modal/AddNewItemModal";
import { SearchBar } from "../../components/search-bar/SearchBar";
type Props = {};
const formFields = [
  { name: "name", placeholder: "Item Name", type: "text" },
  {
    name: "itemSelect",
    placeholder: "Item Select",
    type: "select",

    options: [
      { label: "One", value: "1" },
      { label: "Two", value: "2" },
      { label: "Three", value: "3" },
    ],
  },
  { name: "itemType", placeholder: "Item Type", type: "text" },
  { name: "itemColor", placeholder: "Item Color", type: "text" },
  { name: "specification", placeholder: "Specification", type: "text" },
  { name: "moq", placeholder: "MOQ", type: "text" },
  { name: "bufferUnit", placeholder: "Buffer Unit", type: "text" },
  { name: "purchaseUnit", placeholder: "Purchase Unit", type: "text" },
  { name: "issueUnit", placeholder: "Issue Unit", type: "text" },
  {
    name: "purchaseIssueRatio",
    placeholder: "1 Purchase Unit=? Issue Unit",
    type: "text",
  },
  {
    name: "rate",
    placeholder: "Rate",
    type: "text",
  },
  { name: "gst", placeholder: "GST", type: "text" },
  { name: "hsnCode", placeholder: "HSN Code", type: "text" },
  { name: "openingStock", placeholder: "Opening Stock", type: "text" },
  { name: "msc1", placeholder: "Msc1", type: "text" },
  { name: "msc2", placeholder: "Msc2", type: "text" },
];
const columns: GridColDef[] = [
  {
    field: "name",
    headerName: (<div className="font-bold">Item Name</div>) as any,
    width: 150,
  },
  {
    field: "itemSelect",
    headerName: (<div className="font-bold">Item Select</div>) as any,
    width: 150,
  },
  {
    field: "itemType",
    headerName: (<div className="font-bold">Item Type</div>) as any,
    width: 150,
  },
  {
    field: "itemColor",
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
    field: "bufferUnit",
    headerName: (<div className="font-bold">Buffer Unit</div>) as any,
    width: 150,
  },
  {
    field: "purchaseUnit",
    headerName: (<div className="font-bold">Purchase Unit</div>) as any,
    width: 150,
  },
  {
    field: "issueUnit",
    headerName: (<div className="font-bold">Issue Unit</div>) as any,
    width: 150,
  },
  {
    field: "purchaseIssueRatio",
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
    field: "hsnCode",
    headerName: (<div className="font-bold">HSN Code</div>) as any,
    width: 150,
  },
  {
    field: "openingStock",
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

const colNames: any = columns.map((item) => item.field);

const Items = (props: Props) => {
  const [openAddNew, setOpenAddNew] = useState(false);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [pageInfo, setPageInfo] = useState({ page: 0, pageSize: 25 });
  const [editRowData, setEditRowData] = useState({});
  const searchParm = useDebounce(search, 150);
  console.log(
    formFields.map((i) => ({
      field: i.name,
      headerName: `(<div className="font-bold">${i.placeholder}</div>) as any`,
      width: 150,
    }))
  );

  const getdataFromServer = async () => {
    const data = await getItemsData({
      page: +pageInfo.page,
      size: +pageInfo.pageSize,
      search: searchParm,
    });
    const items = data.data.map((item: any, idx: number) => {
      const temp: any = {};

      item.forEach((obj: any, idx: number) => {
        temp[colNames[idx]] = obj;
      });
      temp["id"] = idx;
      return temp;
    });
    setTotal(data.recordsTotal);
    setRows(items);
  };

  useEffect(() => {}, []);
  useEffect(() => {
    getdataFromServer();
  }, [searchParm, pageInfo]);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data: any = {};

    const formData = new FormData(e.target);
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    console.log(data);
  };
  return (
    <div className="flex h-full">
      {
        <AddNewItemModal
          hadleSubmit={handleSubmit}
          open={openAddNew}
          onClose={() => setOpenAddNew(false)}
          list={formFields}
          values={editRowData}
          isNew={!rows.length}
          newItemData={{ name: search }}
        />
      }
      {!!document.getElementById("dashboardOutletUtiltiyContainer") && (
        <>
          {createPortal(
            <SearchBar
              rows={rows}
              setSearch={setSearch}
              search={search}
              setOpenAddNew={() => setOpenAddNew(true)}
            />,
            document.getElementById("dashboardOutletUtiltiyContainer")!
          )}
        </>
      )}
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={rows}
          rowCount={total}
          columns={columns}
          onRowClick={(item) => {
            setEditRowData(item.row);
            setOpenAddNew(true);
          }}
          paginationMode={"server"}
          paginationModel={pageInfo}
          onPaginationModelChange={(e) => setPageInfo({ ...e })}
        />
      </div>
    </div>
  );
};

export default Items;
