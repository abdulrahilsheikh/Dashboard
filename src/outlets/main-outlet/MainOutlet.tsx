import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationModal from "../../components/navigation-modal/NavigationModal";
import SideBar from "../../components/sidebar/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MiniDrawer from "../../components/sidebar/SideBarNonCollapsable";
type Props = {};

const MainOutlet = ({}: Props) => {
  const [sideBarOpen, setIsSidebarOpen] = useState(false);
  const [navigationPaneOpen, setNavigationPaneOpen] = useState(false);
  const closeAll = () => {
    setIsSidebarOpen(false);
    setNavigationPaneOpen(false);
  };
  return (
    <div
      className={`relative min-h-screen bg-white w-full overflow-x-hidden static`}
    >
      <ToastContainer />
      <header className="z-100 shadow-md ">
        <nav
          className={`flex gap-4 h-12 p-2 border-box border-b-[1px] items-center`}
        >
          <i
            onClick={() => setIsSidebarOpen(true)}
            className="cursor-pointer fa-solid fa-bars text-blue-600 text-xl"
          ></i>
        </nav>
      </header>
      <div className="pl-16 h-[calc(100vh_-_3rem)] overflow-auto">
        <Outlet />
      </div>

      <NavigationModal
        open={navigationPaneOpen}
        onClose={() => setNavigationPaneOpen(false)}
        closeAll={closeAll}
      />
      <MiniDrawer
        openNavigationPane={() => setNavigationPaneOpen(true)}
        open={sideBarOpen}
        close={() => setIsSidebarOpen(false)}
        openBar={() => setIsSidebarOpen(true)}
      />
    </div>
  );
};

export default MainOutlet;
