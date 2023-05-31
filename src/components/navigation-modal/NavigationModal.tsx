import { Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import adminIcon from "../../assets/svgs/Admin.svg";
import dashboardIcon from "../../assets/svgs/Dashboard.svg";
import inspectionIcon from "../../assets/svgs/Inspections.svg";
import Inventory from "../../assets/svgs/Inventory.svg";
import Manufacturing from "../../assets/svgs/Manufacturing.svg";
import Master from "../../assets/svgs/Master.svg";
import MaterialManagement from "../../assets/svgs/Material Management.svg";
import Money from "../../assets/svgs/Money.svg";
import ProductGallery from "../../assets/svgs/Product Gallery.svg";
import Reports from "../../assets/svgs/Reports.svg";
import Sales from "../../assets/svgs/Sales.svg";
import WorkOrder from "../../assets/svgs/Work Order.svg";
type Props = { open: boolean; onClose: () => void; closeAll: () => void };

const options = [
  { icon: dashboardIcon, title: "Dashboard", to: "/dashboard" },
  { icon: adminIcon, title: "Admin", to: "/admin" },
  { icon: WorkOrder, title: "Work Order", to: "/work-order" },
  {
    icon: MaterialManagement,
    title: "Material Management",
    to: "/material-managment",
  },
  { icon: Manufacturing, title: "Manufacturing", to: "/manufacturing" },
  { icon: Sales, title: "Sales", to: "/sales" },
  { icon: Inventory, title: "Inventory", to: "/inventory" },
  { icon: Money, title: "Money", to: "/money" },
  { icon: inspectionIcon, title: "Inspection", to: "/inspection" },
  { icon: Master, title: "Master", to: "/master" },
  { icon: ProductGallery, title: "Product Gallery", to: "/product-gallery" },
  { icon: Reports, title: "Reports", to: "/reports" },
];
const NavigationModal = ({ open, onClose, closeAll }: Props) => {
  const navigate = useNavigate();
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onBackdropClick={onClose}
      className="flex justify-center overflow-auto py-8"
    >
      <div className="z-10 w-[80%] outline-none border-none rounded-lg text-black  bg-white h-min ">
        <div className="p-2 px-4 flex justify-between items-center shadow">
          <div className="text-lg">Navigation Pane</div>
          <div>
            <i
              onClick={onClose}
              className="cursor-pointer fa-solid fa-xmark text-black hover:text-gray-500 text-2xl "
            ></i>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-slate-100 p-6">
            <div className={`text-4xl mb-4`}>Arya ERP Solutions</div>
            <div className="inline-block bg-blue-100 text-blue-500 rounded px-2 font-semibold">
              MODULES
            </div>
            <div className={`mt-5 grid grid-cols-4 gap-6 w-full`}>
              {options.map((item) => (
                <div
                  onClick={() => {
                    closeAll();
                    navigate(item.to);
                  }}
                  className="cursor-pointer flex  flex-col items-center bg-white p-6 rounded gap-4"
                >
                  <div className=" bg-blue-100 rounded-full p-2">
                    <img className="w-8 h-full" src={item.icon} />
                  </div>
                  <div>{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NavigationModal;
