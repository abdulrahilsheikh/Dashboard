import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import DeletePopUp from "../../components/delete-pop-up/DeletePopUp";
import ProcessFormModal from "../../components/process-form-modal/ProcessFormModal";
import { SearchBar } from "../../components/search-bar/SearchBar";
import SizeFormModal from "../../components/size-form-modal/SizeFormModal";
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

const colNames: any = columns.map((item) => item.field);

const Process = () => {
  const [openDeletePopUp, setOpenDeletePopUp] = useState(false);
  const [openAddNew, setOpenAddNew] = useState(false);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [pageInfo, setPageInfo] = useState({ page: 0, pageSize: 25 });
  const [editRowData, setEditRowData] = useState<any>({});
  const searchParm = useDebounce(search, 150);
  const getdataFromServer = async () => {
    const data = await getData(urlConst.processout, {
      page: +pageInfo.page,
      size: +pageInfo.pageSize,
      search: searchParm,
    });
    // const items = data.data.map((item: any, idx: number) => {
    //   const temp: any = {};
    //   item.forEach((obj: any, idx: number) => {
    //     temp[colNames[idx]] = obj;
    //   });
    //   temp["id"] = idx;
    //   temp["activities"] = [
    //     "Cutting",
    //     "Drillind",
    //     "Cutting",
    //     "Welding",
    //     "Embosing",
    //   ];
    //   return temp;
    // });
    setTotal(1000);
    setRows(data);
  };

  useEffect(() => {}, []);
  useEffect(() => {
    getdataFromServer();
  }, [searchParm, pageInfo]);
  const handleSubmit = async (e: any) => {
    console.log(e);
    await sendData(urlConst.processin, e);
    toast.success("Sucessfully added");
    setOpenAddNew(false);
    getdataFromServer();
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
        <ProcessFormModal
          onSubmit={handleSubmit}
          open={openAddNew}
          onClose={() => {
            setEditRowData({});
            setOpenAddNew(false);
          }}
          list={formField}
          values={editRowData}
          isNew={!editRowData.process_name}
          newItemData={{ process_name: search }}
          options={[
            { label: "Cutting", value: "Cutting" },
            { label: "Welding", value: "Welding" },
            { label: "Drillind", value: "Drillind" },
            { label: "Embosing", value: "Embosing" },
          ]}
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
              heading={"Process"}
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

export default Process;
