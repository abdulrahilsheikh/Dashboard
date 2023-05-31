import { PurchaseOrderBottomSection } from "./PurchaseOrderBottomSection";
import PurchaseOrderDetailsSection from "./PurchaseOrderDetailsSection";
import PurchaseOrderItemsSection from "./PurchaseOrderItemsSection";

const PurchaseOrder = () => {
  return (
    <div className="p-4 py-2 flex flex-col gap-2 h-full">
      <div className="text-gray-700 text-lg flex justify-between">
        <div>Purchase Order</div>
        <div className="cursor-pointer inline-block rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
          Save
        </div>
      </div>
      <PurchaseOrderDetailsSection />
      <PurchaseOrderItemsSection />
      <PurchaseOrderBottomSection />
    </div>
  );
};

export default PurchaseOrder;
