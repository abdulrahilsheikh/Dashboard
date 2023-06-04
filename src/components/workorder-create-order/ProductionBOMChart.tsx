import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { generateBomChart, getBomChart } from "./production.table.const";

type Props = {};

const ProductionBOMChart = ({}: any) => {
  const rows = getBomChart();
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid rows={rows} rowHeight={60} columns={generateBomChart(rows)} />
    </div>
  );
};

export default ProductionBOMChart;
