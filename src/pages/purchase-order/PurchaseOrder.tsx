import PurchaseOrderDetailsSection from "./PurchaseOrderDetailsSection";
import PurchaseOrderItemsSection from "./PurchaseOrderItemsSection";

type Props = {};

const PurchaseOrder = (props: Props) => {
  return (
    <div className="p-4 py-2 flex flex-col gap-2 h-full">
      <div className="text-gray-700 text-lg">Purchase Order</div>
      <PurchaseOrderDetailsSection />
      <PurchaseOrderItemsSection />
      <div className="bg-red-200 flex-1">dsdsd</div>
    </div>
  );
};

export default PurchaseOrder;
