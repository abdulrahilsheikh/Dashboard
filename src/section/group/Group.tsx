import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import GroupFormModal from "../../components/groups-form-modal/GroupFormModal";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { useDebounce } from "../../hooks/useDebounce";
import { getItemsData } from "../../utils/httpRequests";
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
  const [openAddNew, setOpenAddNew] = useState(false);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [pageInfo, setPageInfo] = useState({ page: 0, pageSize: 25 });
  const [editRowData, setEditRowData] = useState<any>({});
  const searchParm = useDebounce(search, 150);
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
      const t = tempo[Math.floor(Math.random() * tempo.length)];
      temp["groupItems"] = t.item;
      temp["groupType"] = t.type;
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
    console.log(e);
  };
  return (
    <div className="flex h-full">
      {openAddNew && (
        <GroupFormModal
          onSubmit={handleSubmit}
          open={openAddNew}
          onClose={() => setOpenAddNew(false)}
          list={formField}
          values={editRowData}
          isNew={!rows.length}
          newItemData={{ groupName: search }}
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

export default Group;
