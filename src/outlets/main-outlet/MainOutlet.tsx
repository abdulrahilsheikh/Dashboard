import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationModal from "../../components/navigation-modal/NavigationModal";
import SideBar from "../../components/sidebar/SideBar";

type Props = {};

const MainOutlet = ({}: Props) => {
  const [sideBarOpen, setIsSidebarOpen] = useState(false);
  const [navigationPaneOpen, setNavigationPaneOpen] = useState(false);
  const closeAll = () => {
    setIsSidebarOpen(false);
    setNavigationPaneOpen(false);
  };
  return (
    <div className={`min-h-screen bg-white w-full overflow-x-hidden static`}>
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
      <div className="h-[calc(100vh_-_3rem)] overflow-auto">
        <Outlet />
      </div>
      <SideBar
        openNavigationPane={() => setNavigationPaneOpen(true)}
        open={sideBarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <NavigationModal
        open={navigationPaneOpen}
        onClose={() => setNavigationPaneOpen(false)}
        closeAll={closeAll}
      />
    </div>
  );
};

export default MainOutlet;
