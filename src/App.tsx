import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DashBoardOutlet from "./outlets/dashboard-outlet/DashBoardOutlet";
import MainOutlet from "./outlets/main-outlet/MainOutlet";

import Dashboard from "./pages/dashboard/Dashboard";
import PurchaseOrder from "./pages/purchase-order/PurchaseOrder";
import NewWorkOrderMainPage from "./pages/work-order/WorkOrderMainPage";
import Activity from "./section/activity/Activity";
import Group from "./section/group/Group";
import Items from "./section/items/Items";
import Location from "./section/location/Location";
import LoginPage from "./section/login-page/LoginPage";
import Party from "./section/party/Party";
import Process from "./section/process/Process";
import Size from "./section/sizes/Size";
import Style from "./section/style/Style";
import Unit from "./section/unit/Unit";

const masterChildren = [
  {
    path: "",
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
];
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
      children: [{ path: "", element: <Dashboard /> }, masterChildren[0]],
    },

    {
      path: "/material-managment",
      element: <MainOutlet />,
      children: [{ path: "", element: <PurchaseOrder /> }],
    },

    {
      path: "/new-work-order",
      element: <MainOutlet />,
      children: [{ path: "", element: <NewWorkOrderMainPage /> }],
    },
    {
      path: "/master",
      element: <MainOutlet />,
      children: masterChildren,
    },
    {
      path: "*",
      element: <MainOutlet />,
      children: [{ path: "", element: <Dashboard /> }],
    },
    { path: "login", element: <LoginPage /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
