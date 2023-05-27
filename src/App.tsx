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
              element: <div>Style</div>,
            },
            {
              path: "process",
              element: <div>Process</div>,
            },
            {
              path: "items",
              element: <Items />,
            },
            {
              path: "group",
              element: <div>Group</div>,
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
      path: "*",
      element: <MainOutlet />,
      children: [{ path: "", element: <Dashboard /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
