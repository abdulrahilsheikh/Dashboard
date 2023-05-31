import { MenuItem, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import {
  categoryOptions,
  getActivty,
  getProcessGroup,
  getProcessList,
  optionsMap,
  processColumns,
} from "./table.const";

const NewWorkOrderMainPage = () => {
  const [rows, setRows] = useState<any>([]);
  const [options, setOptions] = useState([
    { value: "Main Process", label: "Main Process" },
  ]);
  const [optionsType, setOptionType] = useState<any>("processGroup");
  const onOptionChoose = (e: any) => {
    console.log(optionsType);
    if (e.target.value) {
      if (optionsType == "processGroup") {
        setRows(getProcessGroup(e.target.value));
      }
      if (optionsType == "process") {
        setRows(getProcessList(e.target.value));
      }
      if (optionsType == "activity") {
        setRows(getActivty());
      }
    }
  };

  const onCellEditSubmit = () => {};
  return (
    <div className="text-black p-4 flex flex-col h-full">
      <div className="text-black text-lg"> Work Order</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div>Work Order No:</div>
          <TextField size="small" value={`JB-abcd-007`} />
        </div>
        <div className="flex items-center gap-2">
          <div>Work Order Category:</div>
          <TextField
            size="small"
            className={"w-[15rem]"}
            placeholder={"Select an Option"}
            select
            onChange={(e) => {
              setOptionType(e.target.value);
              if (optionsMap[e.target.value]) {
                setOptions(optionsMap[e.target.value]);
              }
            }}
          >
            {categoryOptions.map((i) => (
              <MenuItem value={i.value}>{i.lable}</MenuItem>
            ))}
          </TextField>
        </div>
        <div className="flex items-center gap-2">
          <div>Elements :</div>
          <TextField
            size="small"
            className={"w-[15rem]"}
            placeholder={"Select an Option"}
            select
            onChange={onOptionChoose}
          >
            <MenuItem value={""}>Please Select</MenuItem>
            {options.map((p) => (
              <MenuItem value={p.value}>{p.label}</MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      <div className="h-[85%] mt-4">
        <div style={{ height: "100%", width: "100%" }}>
          <DataGrid
            onCellEditStop={onCellEditSubmit}
            rows={rows}
            rowHeight={60}
            columns={processColumns}

            // editMode="cell"
            // getRowHeight={() => "auto"}
            // getEstimatedRowHeight={() => 200}
          />
        </div>
      </div>
    </div>
  );
};

export default NewWorkOrderMainPage;
