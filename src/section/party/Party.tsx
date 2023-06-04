import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import DeletePopUp from "../../components/delete-pop-up/DeletePopUp";
import PartFormModal from "../../components/party-form-modal/PartFormModal";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { useDebounce } from "../../hooks/useDebounce";
import { generateColumns } from "../../utils/helper";
import {
  getItemsData,
  getPartyData,
  sendToParty,
  search,
} from "../../utils/httpRequests";
import { columns, formField } from "./table.const";

const colNames: any = columns.map((item) => item.field);

const Party = () => {
  const [openDeletePopUp, setOpenDeletePopUp] = useState(false);
  const [openAddNew, setOpenAddNew] = useState(false);
  const [rows, setRows] = useState([
    {
      id: 10,
      company_name: "ababsa",
      contact_person: "hjhjds",
      address: "dsds",
      city: "sdsd",
      state: "sds",
      pin: "sds",
      role: "sds",
      email: "sds",
      landline: "sds",
      mobile: "sds",
      gst: "sds",
      pan: "sds",
      bank: "sds",
      account: "sds",
    },
  ]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [pageInfo, setPageInfo] = useState({ page: 0, pageSize: 25 });
  const [editRowData, setEditRowData] = useState({});
  const searchParm = useDebounce(search, 150);

  const getdataFromServer = async () => {
    const data = await getPartyData({
      page: +pageInfo.page,
      size: +pageInfo.pageSize,
      search: searchParm,
    });
    setRows(data);
  };

  useEffect(() => {
    getdataFromServer();
  }, [searchParm, pageInfo]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data: any = {};
    const formData = new FormData(e.target);
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    await sendToParty(data);
    console.log(data);
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
      {
        <PartFormModal
          hadleSubmit={handleSubmit}
          open={openAddNew}
          onClose={() => setOpenAddNew(false)}
          list={formField}
          values={editRowData}
          // isNew={!rows.length }
          isNew={!!search}
          newItemData={{ company_name: search }}
        />
      }
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
              isVisible={true}
              heading={"Party"}
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

export default Party;
