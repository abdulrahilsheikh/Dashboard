import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import ActivityFormModal from "../../components/activity-form-modal/ActivityFormModal";
import DeletePopUp from "../../components/delete-pop-up/DeletePopUp";
import PartFormModal from "../../components/party-form-modal/PartFormModal";
import { SearchBar } from "../../components/search-bar/SearchBar";
import UnitFormModal from "../../components/unit-form-modal/UnitFormModal";
import { useDebounce } from "../../hooks/useDebounce";
import { generateColumns } from "../../utils/helper";
import {
  getData,
  getItemsData,
  sendData,
  urlConst,
} from "../../utils/httpRequests";
import { columns, formField } from "./table.const";

const Activity = () => {
  const [openAddNew, setOpenAddNew] = useState(false);
  const [openDeletePopUp, setOpenDeletePopUp] = useState(false);
  const [rows, setRows] = useState([
    { id: 10, activity_name: "Avc", description: "something" },
  ]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [pageInfo, setPageInfo] = useState({ page: 0, pageSize: 25 });
  const [editRowData, setEditRowData] = useState<any>({});
  const searchParm = useDebounce(search, 150);

  const getdataFromServer = async () => {
    const data = await getData(urlConst.activtyOut, {
      page: +pageInfo.page,
      size: +pageInfo.pageSize,
      search: searchParm,
    });
    console.log(data);

    setTotal(1000);
    setRows(data);
  };

  useEffect(() => {
    getdataFromServer();
  }, [searchParm, pageInfo]);

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
  const handleSubmit = async (e: any) => {
    await e.fields.map(async (i: any) => {
      console.log(i);
      await sendData(urlConst.activtyIn, i);
    });
    setOpenAddNew(false);
    getdataFromServer();
    toast.success("Successfully Added");
  };

  console.log(editRowData);

  return (
    <div className="flex h-full">
      {openAddNew && (
        <ActivityFormModal
          onSubmit={handleSubmit}
          open={openAddNew}
          onClose={() => {
            setEditRowData({});
            setOpenAddNew(false);
          }}
          list={formField}
          values={editRowData}
          isNew={!editRowData.activity_name}
          newItemData={{ activity_name: search }}
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
              heading={"Activity"}
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

export default Activity;
