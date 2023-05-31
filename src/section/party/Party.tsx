import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PartFormModal from "../../components/party-form-modal/PartFormModal";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { useDebounce } from "../../hooks/useDebounce";
import {
  getItemsData,
  getPartyData,
  sendToParty,
} from "../../utils/httpRequests";
import { columns, formField } from "./table.const";

const colNames: any = columns.map((item) => item.field);

const Party = () => {
  const [openAddNew, setOpenAddNew] = useState(false);
  const [rows, setRows] = useState([]);
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data: any = {};
    const formData = new FormData(e.target);
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    sendToParty(data);
    console.log(data);
    getdataFromServer();
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

export default Party;
