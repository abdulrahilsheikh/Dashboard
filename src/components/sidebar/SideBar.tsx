import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
type Props = {
  open: boolean;
  onClose: () => void;
  openNavigationPane: () => void;
};
const menuItems: any = {
  dashboard: {
    title: "Dashboard",
    children: [{ label: "Purchase Order", to: "master" }],
  },
  admin: { title: "Admin", children: [{ label: "User Managment", to: "" }] },
  "work-order": {
    title: "Work Order",
    children: [
      { label: "New Work Order", to: "" },
      { label: "Purchase Order", to: "" },
    ],
  },
  "material-managment": {
    title: "Material Management",
    children: [
      { label: "Purchase Order" },
      { label: "Goods Recieve Note", to: "" },
      { label: "Goods Sending Note", to: "" },
      { label: "Material Transfer", to: "" },
    ],
  },
  manufacturing: { title: "Manufacturing" },
  sales: { title: "Sales", children: [{ label: "Purchase Order 2", to: "" }] },
  inventory: {
    title: "Inventory",
    children: [{ label: "Purchase Order 2", to: "" }],
  },
  money: { title: "Money", children: [{ label: "Purchase Order 2", to: "" }] },
  inspection: {
    title: "Inspection",
    children: [{ label: "Purchase Order 2", to: "" }],
  },
  master: {
    title: "Master",
    children: [{ label: "Purchase Order 2", to: "" }],
  },
  "product-gallery": {
    title: "Product Gallery",
    children: [{ label: "Purchase Order 2", to: "" }],
  },
  reports: {
    title: "Reports",
    children: [{ label: "Purchase Order 2", to: "" }],
  },
};
const SideBar = ({ open, onClose, openNavigationPane }: Props) => {
  const [activeWindow, setActiveWindow] = useState(menuItems.dashboard);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(pathname);
    const temp: any = pathname.split("/")[1];
    setActiveWindow(menuItems[temp]);
  }, [pathname]);
  return (
    <Drawer open={open} onClose={onClose}>
      <div className="w-72 bg-white h-full p-4">
        <div className="w-full flex justify-between text-gray-500 items-center ">
          <div className="text-lg text-black">आर्या</div>
          <div onClick={onClose}>
            <i className="cursor-pointer fa-solid fa-xmark text-black hover:text-gray-500 text-2xl "></i>
          </div>
        </div>
        <div className="py-4">
          <div className="py-4 cursor-pointer" onClick={openNavigationPane}>
            Navigation Pane
          </div>
          <div>
            {activeWindow.children ? (
              <Accordion
                sx={{ boxShadow: "none", padding: "0px", margin: 0 }}
                elevation={0}
                square
                disableGutters
              >
                <AccordionSummary
                  sx={{
                    padding: 0,
                    borderBottom: "thin solid #ccc",
                    margin: 0,
                  }}
                  expandIcon={<i className="fa-solid fa-chevron-down"></i>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{activeWindow.title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: "4px 0px" }}>
                  {activeWindow.children.map((item: any) => (
                    <div
                      onClick={() => navigate(item.to)}
                      className="cursor-pointer py-2"
                    >
                      {item.label}
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
            ) : (
              <div className="cursor-pointer py-2">{activeWindow.title}</div>
            )}
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default SideBar;
