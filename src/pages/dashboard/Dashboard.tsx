import BarGraph from "../../components/bar-graph/BarGraph";
import DoughNut from "../../components/dougnut/Doughnut";
import LineGraph from "../../components/line-graph/LineGraph";
import StackedBarGraph from "../../components/stacked-bar-graph/StackedBarGraph";
import DashBoardTopSection from "./DashBoardTopSection";

type Props = {};

const Dashboard = ({}: Props) => {
  return (
    <div className={`bg-white w-full p-8 py-4 pb-12`}>
      {/* top section  */}
      <DashBoardTopSection />
      {/* bottom section  */}
      <div className="mt-4 flex justify-between gap-8">
        {/* main chart */}
        <div className="w-[70%] ">
          <div className="flex justify-between text-black">
            <div>Revenue Update</div>
            <div className="flex gap-2">
              <div className="flex items-center justify-center gap-2">
                <span className=" p-1 rounded-full bg-black"></span>
                <div>Expense</div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className=" p-1 rounded-full bg-green-500"></span>
                <div>Budget</div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <div className="w-1/2 text-black ">
              <div>
                <div className="text-lg font-bold">$93,664</div>
                <div className="text-sm text-gray-500">Budget</div>
                <div className="text-lg font-bold">$45,664</div>
                <div className="text-sm text-gray-500"> Expense</div>
              </div>
              <div className="">
                <LineGraph />
              </div>
              <button className="inline-block rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                Download Report
              </button>
            </div>
            <div className="border-r-[1px]"></div>
            <div className="flex-1 flex items-end">
              <div className="flex-1">
                <StackedBarGraph />
              </div>
            </div>
          </div>
        </div>
        {/* side chart */}
        <div className="w-[30%] flex flex-col h-full">
          <div className="h-1/2 w-full p-2 bg-blue-500 rounded-2xl">
            <div className="text-xl flex justify-between px-4 pt-2">
              <div>Earnings</div>
              <div>$65,888</div>
            </div>
            <div className="text-end text-sm px-4">Monthly Revenue</div>
            <div className="">
              <BarGraph />
            </div>
          </div>
          <div className="h-1/2 flex items-center p-4 justify-between">
            <div className="text-black flex-1">
              <div className="text-xl font-semibold">$6,54,544</div>
              <div className="text-sm text-gray-500 font-semibold">Yearly</div>
            </div>
            <div className="w-4/5">
              <DoughNut />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
