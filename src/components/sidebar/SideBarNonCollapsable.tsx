import DashboardIcon from "@mui/icons-material/Dashboard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, styled, Theme } from "@mui/material/styles";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AdminPanelSettings,
  Category,
  Download,
  FileUpload,
  Handyman,
  ManageAccounts,
  MoreHoriz,
  MoveDown,
  PlayForWork,
  PlaylistAdd,
  PrecisionManufacturing,
  ShoppingBasket,
  Timeline,
  Update,
  Directions,
  Addchart,
  DataSaverOn,
} from "@mui/icons-material";
import Engineering from "@mui/icons-material/Engineering";
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const menuItems: any = {
  dashboard: {
    title: "Dashboard",
    icon: <DashboardIcon />,
    to: "/dashboard",
  },

  admin: {
    title: "Admin",
    icon: <AdminPanelSettings />,
    children: [{ label: "User Managment", to: "#", icon: <ManageAccounts /> }],
  },

  "work-order": {
    title: "Work Order",
    icon: <Engineering />,
    children: [
      { label: "New Work Order", to: "/new-work-order", icon: <PlaylistAdd /> },
      { label: "Purchase Order", to: "#", icon: <ShoppingBasket /> },
    ],
  },

  "material-managment": {
    title: "Material Management",
    icon: <Handyman />,
    children: [
      {
        label: "Purchase Order",
        to: "/material-managment",
        icon: <Category />,
      },
      { label: "Goods Recieve Note", to: "#", icon: <Download /> },
      { label: "Goods Sending Note", to: "#", icon: <FileUpload /> },
      { label: "Material Transfer", to: "#", icon: <MoveDown /> },
    ],
  },

  manufacturing: {
    title: "Production",
    icon: <PrecisionManufacturing />,
    children: [
      { label: "Update Process", to: "#", icon: <Update /> },
      { label: "Process Status", to: "#", icon: <MoreHoriz /> },
    ],
  },
  sales: {
    title: "Sales",
    icon: <Timeline />,
    children: [
      { label: "New Sales Order", to: "#", icon: <Addchart /> },

      { label: "Sales Order Status", to: "#", icon: <DataSaverOn /> },
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

export default function MiniDrawer({
  openNavigationPane,
  open,
  close,
  openBar,
}: any) {
  const navigate = useNavigate();
  // const [open, setOpen] = useState(false);
  const [isOpenTab, setIsOpenTab] = useState("");
  const pathname = useLocation();
  const toggleDrawerOpen = () => {
    open ? close() : openBar();
  };

  return (
    <Box sx={{ display: "flex" }} className="z-50">
      <Drawer
        variant="permanent"
        sx={{ backgroundColor: "transparent" }}
        open={open}
      >
        <div className="p-2 h-full ">
          <div className="rounded-lg  h-full flex flex-col overflow-hidden">
            <div className="bg-gray-900 h-12 min-h-[3rem] flex items-center justify-end pr-3">
              <IconButton sx={{ color: "#fff" }} onClick={toggleDrawerOpen}>
                {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <Box className="micro-scrollbar overflow-y-auto overflow-x-hidden">
              <List className="p-[0_!important] bg-gray-900">
                <ListItem
                  key={"navigation-btn"}
                  disablePadding
                  sx={{ display: "block" }}
                  className="bg-gray-900 text-white"
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    onClick={openNavigationPane}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: "#fff",
                      }}
                    >
                      <Directions />
                    </ListItemIcon>
                    <ListItemText
                      primary={"Navigation"}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
                {Object.entries(menuItems).map(([key, val]: any, index) => (
                  <ListItem
                    key={val.title}
                    disablePadding
                    sx={{ display: "block" }}
                    className={`${
                      pathname.pathname == val.to
                        ? "bg-blue-700"
                        : "bg-gray-900"
                    } text-white rounded-lg overflow-hidden`}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                      onClick={
                        val.children
                          ? () => {
                              val.title == isOpenTab
                                ? setIsOpenTab("")
                                : setIsOpenTab(val.title);
                              openBar();
                            }
                          : () => {
                              close();
                              navigate(val.to);
                            }
                      }
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          color: "#ffff",
                        }}
                      >
                        {val.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={val.title}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>

                    <div className="pl-2">
                      {val.children &&
                        val.children.map((item: any, idx: any) => (
                          <ListItem
                            key={item.label}
                            disablePadding
                            className={`${
                              pathname.pathname == item.to
                                ? "bg-blue-700"
                                : "bg-gray-900"
                            } text-white text-sm  rounded-lg overflow-hidden`}
                            sx={{
                              display: "block",
                              overflow: "hidden",
                              height: isOpenTab == val.title ? "auto" : 0,
                            }}
                            onClick={() => {
                              close();
                              navigate(item.to);
                            }}
                          >
                            <ListItemButton
                              sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                              }}
                            >
                              <ListItemIcon
                                sx={{
                                  minWidth: 0,
                                  mr: open ? 3 : "auto",
                                  justifyContent: "center",
                                  color: "#ffff",
                                }}
                              >
                                {item.icon}
                              </ListItemIcon>
                              <ListItemText
                                primary={item.label}
                                sx={{ opacity: open ? 1 : 0 }}
                              />
                            </ListItemButton>
                          </ListItem>
                        ))}
                    </div>
                  </ListItem>
                ))}
              </List>
            </Box>
          </div>
        </div>
      </Drawer>
      {open && (
        <div
          onClick={close}
          className="absolute top-0 left-0 right-0 h-screen bg-black/60"
        ></div>
      )}
    </Box>
  );
}

// <Box sx={{ display: "flex" }} className="z-50">
//       <Drawer variant="permanent" open={open}>
//         <div className="bg-gray-900 h-12 min-h-[3rem] flex items-center justify-end pr-3">
//           <IconButton sx={{ color: "#fff" }} onClick={toggleDrawerOpen}>
//             {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </div>
//         <Divider />
//         <Box className="micro-scrollbar overflow-y-auto overflow-x-hidden">
//           <List className="p-[0_!important]">
//             <ListItem
//               key={"navigation-btn"}
//               disablePadding
//               sx={{ display: "block" }}
//               className="bg-gray-900 text-white"
//             >
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px: 2.5,
//                 }}
//                 onClick={openNavigationPane}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : "auto",
//                     justifyContent: "center",
//                     color: "#fff",
//                   }}
//                 >
//                   <Directions />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={"Navigation"}
//                   sx={{ opacity: open ? 1 : 0 }}
//                 />
//               </ListItemButton>
//             </ListItem>
//             {Object.entries(menuItems).map(([key, val]: any, index) => (
//               <ListItem
//                 key={val.title}
//                 disablePadding
//                 sx={{ display: "block" }}
//                 className={`${
//                   pathname.pathname == val.to ? "bg-gray-700" : "bg-gray-900"
//                 } text-white`}
//               >
//                 <ListItemButton
//                   sx={{
//                     minHeight: 48,
//                     justifyContent: open ? "initial" : "center",
//                     px: 2.5,
//                   }}
//                   onClick={
//                     val.children
//                       ? () => {
//                           val.title == isOpenTab
//                             ? setIsOpenTab("")
//                             : setIsOpenTab(val.title);
//                           openBar();
//                         }
//                       : () => {
//                           close();
//                           navigate(val.to);
//                         }
//                   }
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       mr: open ? 3 : "auto",
//                       justifyContent: "center",
//                       color: "#ffff",
//                     }}
//                   >
//                     {val.icon}
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={val.title}
//                     sx={{ opacity: open ? 1 : 0 }}
//                   />
//                 </ListItemButton>

//                 <div className="pl-2">
//                   {val.children &&
//                     val.children.map((item: any, idx: any) => (
//                       <ListItem
//                         key={item.label}
//                         disablePadding
//                         className={`${
//                           pathname.pathname == item.to
//                             ? "bg-gray-700"
//                             : "bg-gray-900"
//                         } text-white text-sm`}
//                         sx={{
//                           display: "block",
//                           overflow: "hidden",
//                           height: isOpenTab == val.title ? "auto" : 0,
//                         }}
//                         onClick={() => {
//                           close();
//                           navigate(item.to);
//                         }}
//                       >
//                         <ListItemButton
//                           sx={{
//                             minHeight: 48,
//                             justifyContent: open ? "initial" : "center",
//                             px: 2.5,
//                           }}
//                         >
//                           <ListItemIcon
//                             sx={{
//                               minWidth: 0,
//                               mr: open ? 3 : "auto",
//                               justifyContent: "center",
//                               color: "#ffff",
//                             }}
//                           >
//                             {item.icon}
//                           </ListItemIcon>
//                           <ListItemText
//                             primary={item.label}
//                             sx={{ opacity: open ? 1 : 0 }}
//                           />
//                         </ListItemButton>
//                       </ListItem>
//                     ))}
//                 </div>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//       {open && (
//         <div
//           onClick={close}
//           className="absolute top-0 left-0 right-0 h-screen bg-black/60"
//         ></div>
//       )}
//     </Box>
