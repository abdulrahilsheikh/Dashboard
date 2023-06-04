import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
type Props = {
  open: boolean;
  onClose: () => void;
  openNavigationPane: () => void;
};
export const menuItems: any = {
  dashboard: {
    title: "Dashboard",
    //children: [{ label: "Master", to: "/dashboard/master" }],
  },

  admin: { title: "Admin", children: [{ label: "User Managment", to: "#" }] },

  "work-order": {
    title: "Work Order",
    children: [
      { label: "New Work Order", to: "/new-work-order" },
      { label: "Purchase Order", to: "#" },
    ],
  },

  "material-managment": {
    title: "Material Management",
    children: [
      { label: "Purchase Order", to: "/material-managment" },
      { label: "Goods Recieve Note", to: "#" },
      { label: "Goods Sending Note", to: "#" },
      { label: "Material Transfer", to: "#" },
    ],
  },

  manufacturing: {
    title: "Production",
    children: [
      { label: "Update Process", to: "#" },
      { label: "Process Status", to: "#" },
    ],
  },
  sales: {
    title: "Sales",
    children: [
      { label: "New Sales Order", to: "#" },

      { label: "Sales Order Status", to: "#" },
    ],
  },
  inventory: {
    title: "Inventory",
    children: [
      { label: "Raw Material", to: "#" },
      { label: "Finished Stock", to: "#" },
      { label: "Item Ledger", to: "#" },
    ],
  },
  money: {
    title: "Money",
    children: [
      { label: "Sales Voucher", to: "#" },
      { label: "Purchase Voucher", to: "#" },
      { label: "Expense Voucher", to: "#" },
      { label: "Payment Journal", to: "#" },
      { label: "Item Valuation", to: "#" },
      { label: "Finished Stock Valuation", to: "#" },
      { label: "Debtors Outstanding", to: "#" },
      { label: "Creditors Outstanding", to: "#" },
    ],
  },
  inspection: {
    title: "Approvals",
    children: [
      { label: "Raw Material", to: "#" },
      { label: "Process", to: "#" },

      { label: "Work Order", to: "#" },
      { label: "Ready Goods", to: "#" },
    ],
  },
  master: {
    title: "Master",
    children: [
      { label: "Style", to: "/master/style" },
      { label: "Process", to: "/master/process" },
      { label: "Party", to: "/master/party" },
      { label: "Item", to: "/master/items" },
      { label: "Group", to: "/master/group" },
      { label: "Location", to: "/master/location" },
      { label: "Activity", to: "/master/activity" },
      { label: "Size", to: "/master/size" },
      { label: "Unit", to: "/master/unit" },
    ],
  },
  "product-gallery": {
    title: "Product Gallery",
    children: [{ label: "Portfolio", to: "#" }],
  },
  reports: {
    title: "Reports",
    children: [{ label: "Custom Reports", to: "#" }],
  },
};
const SideBar = ({ open, onClose, openNavigationPane }: Props) => {
  const navigate = useNavigate();
  const pathname = useLocation();

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
            {Object.entries(menuItems).map(([_, activeWindow]: any) =>
              activeWindow.children ? (
                <Accordion
                  sx={{
                    boxShadow: "none",
                    padding: "0px",
                    margin: 0,
                    border: "none",
                  }}
                  elevation={0}
                  square
                  disableGutters
                >
                  <AccordionSummary
                    sx={{
                      padding: 0,

                      border: "none",
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
                        onClick={() => {
                          onClose();
                          navigate(item.to);
                        }}
                        className={`cursor-pointer py-2 px-2 ${
                          pathname.pathname
                            .split("#")
                            .join("")
                            .includes(item.to)
                            ? "bg-blue-100/50 text-blue-500"
                            : ""
                        }`}
                      >
                        {item.label}
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ) : (
                <div className="cursor-pointer py-2">{activeWindow.title}</div>
              )
            )}
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default SideBar;
