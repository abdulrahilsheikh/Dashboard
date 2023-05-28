import { Breadcrumbs } from "@mui/material";
import Link from "@mui/material/Link";
import { createContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
type Props = {};
const routes = [
  { label: "Party", to: "party" },
  { label: "Style", to: "style" },
  { label: "Process", to: "process" },
  { label: "Item", to: "items" },
  { label: "Group", to: "group" },
  { label: "Location", to: "location" },
  { label: "Activity", to: "activity" },
  { label: "Size", to: "size" },
  { label: "Unit", to: "unit" },
];
export const DashboardOutletContext = createContext({} as any);

const DashBoardOutlet = (props: Props) => {
  const [utils, setUtils] = useState(null);
  const [active, setActive] = useState("party");
  const navigate = useNavigate();
  const url = useLocation();
  const list = url.pathname.split("/").slice(1);
  useEffect(() => {
    setActive(list[2]);
  }, [url.pathname]);
  return (
    <DashboardOutletContext.Provider value={{ setUtils }}>
      <div>
        {/* breadcrum */}
        <div className="p-3">
          <Breadcrumbs aria-label="breadcrumb">
            {list.map((item, idx) => (
              <Link
                underline="hover"
                color="inherit"
                href={url.pathname
                  .split("/")
                  .slice(0, idx + 2)
                  .join("/")}
                className={"capitalize"}
              >
                {item.split("-").join(" ")}
              </Link>
            ))}
          </Breadcrumbs>
        </div>
        {/* sub nav */}
        <div className="bg-slate-100/40 flex  gap-4  text-black">
          <div className="flex p-3">
            <div className="font-semibold mr-4">Master</div>
            <div className="flex gap-2">
              {routes.map((item) => (
                <div
                  className={`px-2 text-center cursor-pointer ${
                    active == item.to && "underline underline-offset-8"
                  }`}
                  onClick={() => navigate(item.to)}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          <div className="ml-auto" id="dashboardOutletUtiltiyContainer"></div>
        </div>
        <div className={`h-[calc(100vh_-_9rem)]`}>
          <Outlet />
        </div>
      </div>
    </DashboardOutletContext.Provider>
  );
};

export default DashBoardOutlet;
