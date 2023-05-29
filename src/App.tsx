import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DashBoardOutlet from "./outlets/dashboard-outlet/DashBoardOutlet";
import MainOutlet from "./outlets/main-outlet/MainOutlet";
import Dashboard from "./pages/dashboard/Dashboard";
import Activity from "./section/activity/Activity";
import Items from "./section/items/Items";
import Party from "./section/party/Party";
import Size from "./section/sizes/Size";
import Unit from "./section/unit/Unit";
import Location from "./section/location/Location";
import Process from "./section/process/Process";
import Group from "./section/group/Group";
import Style from "./section/style/Style";
import PurchaseOrder from "./pages/purchase-order/PurchaseOrder";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <MainOutlet />,
      children: [{ path: "", element: <Dashboard /> }],
    },
    {
      path: "/dashboard",
      element: <MainOutlet />,
      children: [
        { path: "", element: <Dashboard /> },
        {
          path: "master",
          element: <DashBoardOutlet />,
          children: [
            {
              path: "",
              element: <Party />,
            },
            {
              path: "party",
              element: <Party />,
            },
            {
              path: "style",
              element: <Style />,
            },
            {
              path: "process",
              element: <Process />,
            },
            {
              path: "items",
              element: <Items />,
            },
            {
              path: "group",
              element: <Group />,
            },
            {
              path: "location",
              element: <Location />,
            },
            {
              path: "activity",
              element: <Activity />,
            },
            {
              path: "size",
              element: <Size />,
            },
            {
              path: "unit",
              element: <Unit />,
            },
          ],
        },
      ],
    },

    {
      path: "/material-managment",
      element: <MainOutlet />,
      children: [{ path: "", element: <PurchaseOrder /> }],
    },
    {
      path: "*",
      element: <MainOutlet />,
      children: [{ path: "", element: <Dashboard /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
