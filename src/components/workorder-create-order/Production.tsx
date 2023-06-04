import { Tab, Tabs } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { generateProductionColums } from "./production.table.const";
import ProductionBOMChart from "./ProductionBOMChart";
import ProductionCreateOrder from "./ProductionCreateOrder";
import ProductionProcessChart from "./ProductionProcessChart";

type Props = {};

const tabList = [
  { label: "Create Order", value: "createOrder" },
  { label: "BOM Chart", value: "bomChart" },
  { label: "Process Chart", value: "processChart" },
];

const Content = ({ activeTab, ...props }: any) => {
  switch (activeTab) {
    case "createOrder":
      return <ProductionCreateOrder {...props} />;

    case "bomChart":
      return <ProductionBOMChart {...props} />;
    case "processChart":
      return <ProductionProcessChart {...props} />;

    default:
      return <ProductionCreateOrder {...props} />;
  }
};
const Production = ({ rows }: any) => {
  const [activeTab, setActiveTab] = useState("createOrder");
  return (
    <div className="h-[85%]">
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
            // ariaControls={`simple-tabpanel-${tb.value}`}
          />
        ))}
      </Tabs>

      <Content activeTab={activeTab} rows={rows} />
    </div>
  );
};
export default Production;
