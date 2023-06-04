import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import DeletePopUp from "../../components/delete-pop-up/DeletePopUp";
import GroupFormModal from "../../components/groups-form-modal/GroupFormModal";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { useDebounce } from "../../hooks/useDebounce";
import { generateColumns } from "../../utils/helper";
import {
  getData,
  getItemsData,
  sendData,
  urlConst,
} from "../../utils/httpRequests";
import { columns, formField } from "./table.const";

const colNames: any = columns.map((item) => item.field);
const tempo = [
  {
    item: ["Metal 3", "Plastic 2", "Wood 7", "Leather 4", "Glass 9"],
    type: "Item",
  },
  {
    item: ["Design 4", "Fashion 9", "Trend 6", "Style 10", "Design 8"],
    type: "Style",
  },
  {
    item: [
      "Cutting",
      "Molding",
      "Assembly",
      "Finishing",
      "Packaging",
      "Quality Control",
    ],
    type: "Activity",
  },
  {
    item: [
      "Assembly 2",
      "Processing 4",
      "Manufacturing 8",
      "Fabrication 7",
      "Production 6",
    ],
    type: "Process",
  },
];
const Group = () => {
  const [openDeletePopUp, setOpenDeletePopUp] = useState(false);
  const [openAddNew, setOpenAddNew] = useState(false);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [pageInfo, setPageInfo] = useState({ page: 0, pageSize: 25 });
  const [editRowData, setEditRowData] = useState<any>({});
  const searchParm = useDebounce(search, 150);
  const getdataFromServer = async () => {
    const data = await getData(urlConst.groupOut, {
      page: +pageInfo.page,
      size: +pageInfo.pageSize,
      search: searchParm,
    });

    setTotal(10000);
    setRows(data);
  };

  useEffect(() => {
    getdataFromServer();
  }, [searchParm, pageInfo]);

  const handleSubmit = async (e: any) => {
    console.log(e);
    await sendData(urlConst.groupIn, e);
    getdataFromServer();
    setOpenAddNew(false);
    toast.success("Successfully Added");
  };

  const editfn = (item: any) => {
    setEditRowData(item.row);
    setOpenAddNew(true);
  };
  const deletfn = (item: any) => {
    setEditRowData(item.row);
    setOpenDeletePopUp(true);
  };

  const handleDelet = async () => {
    console.log(editRowData);
    setEditRowData({});
  };
  return (
    <div className="flex h-full">
      {openAddNew && (
        <GroupFormModal
          onSubmit={handleSubmit}
          open={openAddNew}
          onClose={() => {
            setEditRowData({});
            setOpenAddNew(false);
          }}
          list={formField}
          values={editRowData}
          isNew={!editRowData.group_name}
          newItemData={{ group_name: search }}
        />
      )}
      {openDeletePopUp && (
        <DeletePopUp
          open={openDeletePopUp}
          onClose={() => {
            setEditRowData({});
            setOpenDeletePopUp(false);
          }}
          onConfirm={handleDelet}
        />
      )}
      {!!document.getElementById("dashboardOutletUtiltiyContainer") && (
        <>
          {createPortal(
            <SearchBar
              heading={"Group"}
              rows={rows}
              setSearch={setSearch}
              search={search}
              setOpenAddNew={() => setOpenAddNew(true)}
              isVisible={true}
            />,
            document.getElementById("dashboardOutletUtiltiyContainer")!
          )}
        </>
      )}
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          sx={{
            header: { fontStyle: "bold" },
            "& .super-app-theme--header": { fontWeight: "bold" },
          }}
          rows={rows}
          rowCount={total}
          columns={generateColumns(editfn, deletfn, columns)}
          paginationMode={"server"}
          paginationModel={pageInfo}
          onPaginationModelChange={(e) => setPageInfo({ ...e })}
        />
      </div>
    </div>
  );
};

export default Group;
