import React, { useState } from "react";
import Charges from "../../components/purchase-order-bottom-section/Charges";
import { TextFieldModified } from "../../generic-component/text-field-modified/TextFieldModified";

const tabs = [
  { title: "Charges", comp: <Charges /> },
  { title: "Terms & Conditions", comp: <div>Terms & Conditions</div> },
  { title: "Order Schedulling", comp: <div>Order Schedulling</div> },
  { title: "PO Extra Details", comp: <div>Order Schedulling</div> },
  { title: "User Defined Details", comp: <div>User Defined Details</div> },
];
export const PurchaseOrderBottomSection = () => {
  const [activeTab, setActiveTab] = useState({
    title: "Charges",
    comp: <Charges />,
  });

  return (
    <div className="text-black flex-1 flex flex-col">
      <div className="flex items-center h-12">
        {tabs.map((item) => (
          <div
            onClick={() => setActiveTab(item)}
            className={`cursor-pointer rounded-t-md text-sm px-2 py-2  w-40 bg-slate-100/40 text-center ${
              activeTab.title == item.title
                ? "text-blue-500 border-blue-500 border-b-[1px]"
                : " "
            }`}
          >
            {item.title}
          </div>
        ))}
      </div>
      {activeTab.comp}
    </div>
  );
};
