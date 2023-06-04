import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { generateProductionColums } from "./production.table.const";

const ProductionCreateOrder = ({ rows }: any) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        // onCellEditStop={onCellEditSubmit}
        rows={rows}
        rowHeight={60}
        columns={generateProductionColums(rows)}
      />
    </div>
  );
};

export default ProductionCreateOrder;
