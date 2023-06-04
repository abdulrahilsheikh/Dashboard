import { Box, Tab, Tabs } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { SearchBar } from "../../components/search-bar/SearchBar";
import StyleFormModal from "../../components/style-form-modal/StyleFormModal";
import { useDebounce } from "../../hooks/useDebounce";
import { getData, getItemsData, urlConst } from "../../utils/httpRequests";
import { columns, formField, tabList } from "./table.const";
const getters: any = {
  general: (d: any) => getData(urlConst.sty_gen_out, d),
  bom: (d: any) => getData(urlConst.sty_bom_out, d),
  manufacturing: (d: any) => getData(urlConst.sty_prod_out, d),
  operations: (d: any) => getData(urlConst.sty_op_out, d),
  picture: (d: any) => getData(urlConst.sty_pic_out, d),
  specification: (d: any) => getData(urlConst.sty_spec_out, d),
};
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
    try {
      const data = await getters[activeTab]({
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
      //   temp["item_names"] = [
      //     "Material 1",
      //     "Fabric 5",
      //     "Metal 3",
      //     "Plastic 2",
      //     "Wood 7",
      //     "Leather 4",
      //     "Glass 9",
      //     "Ceramic 6",
      //     "Composite 10",
      //     "Paper 8",
      //   ];
      //   temp["operations"] = [
      //     {
      //       op_name: "122",
      //       op_shname: "cutting",
      //       machine: "bt-40",
      //       time: "10min",
      //       rate: 20,
      //     },
      //   ];
      //   temp["process"] = ["sm", "xl", "2xl", "3xl", "lg"];
      //   temp["specifications"] = [{ header: "Abc", size_value: "20mm" }];
      //   return temp;
      // });
      // setTotal(data.recordsTotal);
      console.log(data, activeTab);
      if (data) {
        setRows(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const colNames: any = columns[activeTab].map((item: any) => item.field);
  useEffect(() => {
    getdataFromServer();
  }, [searchParm, pageInfo, activeTab]);

  return (
    <div className="flex h-full flex-col">
      {openAddNew && (
        <StyleFormModal
          refetchData={getdataFromServer}
          open={openAddNew}
          onClose={() => {
            setEditRowData({});
            setOpenAddNew(false);
          }}
          tabList={tabList}
          styleId={editRowData.styleId}
          parentActiveTab={activeTab}
          editRowData={editRowData}
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
              setOpenAddNew={() => {
                setOpenAddNew(true);
              }}
              isVisible={true}
            />,
            document.getElementById("dashboardOutletUtiltiyContainer")!
          )}
        </>
      )}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeTab}
          onChange={(_, value) => {
            setRows([]);
            setActiveTab(value);
          }}
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
            setEditRowData({ ...item.row });
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
