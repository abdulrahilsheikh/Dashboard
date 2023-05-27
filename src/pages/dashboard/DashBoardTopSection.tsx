import React from "react";
import { DashboardStatsCard } from "./DashboardStatsCard";

type Props = {};

const DashBoardTopSection = (props: Props) => {
  return (
    <div className="flex h-94 gap-4 ">
      {/* Earnings Card */}
      <div className="h-full rounded shadow-md px-8 py-4 flex flex-col  justify-between w-72 gap-8">
        <div className={`flex items-center justify-between`}>
          <div>
            <p className="text-sm text-gray-500">Earnings</p>

            <p className="text-2xl font-medium text-gray-900">$240.94</p>
          </div>

          <span className="rounded-full aspect-square w-12 flex items-center justify-center bg-blue-100  text-blue-600">
            <i className="fa-solid fa-dollar-sign text-xl"></i>
          </span>
        </div>
        <div>
          <button className="inline-block rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
            Download
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 flex-1 gap-4">
        <DashboardStatsCard
          count={2568.5}
          label={"customer"}
          type={"increase"}
          percent={25}
          icon={"fa-solid fa-user-group"}
        />
        <DashboardStatsCard
          count={2568.5}
          label={"Product"}
          type={"decrease"}
          percent={25}
          icon={"fa-solid fa-sitemap"}
        />
        <DashboardStatsCard
          count={2568.5}
          label={"Sales"}
          type={"increase"}
          percent={25}
          icon={"fa-solid fa-arrow-up-right-dots"}
        />
        <DashboardStatsCard
          count={2568.5}
          label={"customer"}
          type={"increase"}
          percent={25}
          icon={"fa-solid fa-arrows-rotate"}
        />
      </div>
    </div>
  );
};

export default DashBoardTopSection;
