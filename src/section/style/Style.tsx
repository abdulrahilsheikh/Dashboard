import { Box, Tab, Tabs } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { SearchBar } from "../../components/search-bar/SearchBar";
import StyleFormModal from "../../components/style-form-modal/StyleFormModal";
import { useDebounce } from "../../hooks/useDebounce";
import { getItemsData } from "../../utils/httpRequests";
import { columns, formField, tabList } from "./table.const";

const Style = () => {
  const [openAddNew, setOpenAddNew] = useState(false);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [pageInfo, setPageInfo] = useState({ page: 0, pageSize: 25 });
  const [editRowData, setEditRowData] = useState<any>({});
  const searchParm = useDebounce(search, 150);
  const [activeTab, setActiveTab] = useState("general");
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
      temp["itemNames"] = ["sm", "xl", "2xl", "3xl", "lg"];
      temp["operationShortName"] = ["sm", "xl", "2xl", "3xl", "lg"];
      temp["process"] = ["sm", "xl", "2xl", "3xl", "lg"];
      temp["supplierSpec"] = [{ header: "Abc", sizeValue: "20mm" }];
      return temp;
    });
    setTotal(data.recordsTotal);
    setRows(items);
  };
  const colNames: any = columns[activeTab].map((item: any) => item.field);
  useEffect(() => {
    getdataFromServer();
  }, [searchParm, pageInfo]);
  const handleSubmit = (e: any) => {
    console.log(e);
  };
  return (
    <div className="flex h-full flex-col">
      {openAddNew && (
        <StyleFormModal
          open={openAddNew}
          onClose={() => setOpenAddNew(false)}
          tabList={tabList}
          styleId={editRowData.styleId}
          parentActiveTab={activeTab}
        />
      )}
      {!!document.getElementById("dashboardOutletUtiltiyContainer") && (
        <>
          {createPortal(
            <SearchBar
              heading={"Style"}
              rows={rows}
              setSearch={setSearch}
              search={search}
              setOpenAddNew={() => setOpenAddNew(true)}
            />,
            document.getElementById("dashboardOutletUtiltiyContainer")!
          )}
        </>
      )}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeTab}
          onChange={(_, value) => setActiveTab(value)}
          aria-label="basic tabs"
        >
          {tabList.map((tb) => (
            <Tab
              value={tb.value}
              label={tb.label}
              id={`simple-tab-${tb.value}`}
            />
          ))}
        </Tabs>
      </Box>
      <div style={{ minHeight: "80%", width: "100%", flex: 1 }}>
        <DataGrid
          sx={{
            header: { fontStyle: "bold" },
            "& .super-app-theme--header": { fontWeight: "bold" },
          }}
          rows={rows}
          rowCount={total}
          columns={columns[activeTab]}
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

export default Style;
