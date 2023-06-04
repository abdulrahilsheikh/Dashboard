import { Modal, Tab, Tabs, TextField } from "@mui/material";
import { useRef, useState } from "react";
import BOM from "./BOM";
import GeneralForm from "./GeneralForm";
import Manufacturing from "./Manufacturing";
import Operations from "./Operations";
import Pictures from "./Pictures";
import Specifications from "./Specifications";
type Props = {
  open: boolean;
  onClose: () => void;
  tabList: Option[];
  styleId: string;
  parentActiveTab: string;
  editRowData: any;
  refetchData: any;
};

export interface Option {
  label: string;
  value: string;
}

const Form = ({ activeTab, ...props }: any) => {
  switch (activeTab) {
    case "specification":
      return <Specifications {...props} />;

    case "picture":
      return <Pictures {...props} />;

    case "operations":
      return <Operations {...props} />;

    case "manufacturing":
      return <Manufacturing {...props} />;

    case "bom":
      return <BOM {...props} />;

    case "general":
      return <GeneralForm {...props} />;

    default:
      return <GeneralForm {...props} />;
  }
};
const StyleFormModal = ({
  open,
  onClose,
  tabList,
  styleId,
  parentActiveTab,
  editRowData,
  refetchData,
}: Props) => {
  const [activeTab, setActiveTab] = useState(parentActiveTab || "general");
  const mainRef = useRef(editRowData);
  const [styleIdForRef, setStyleIdForRef] = useState(styleId ? styleId : "");
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onBackdropClick={onClose}
      className="flex justify-center overflow-auto py-8"
    >
      <div className="z-10 w-[80%] outline-none border-none rounded-lg text-black  bg-white h-min p-8">
        <div className="flex items-center gap-4">
          Style Id :
          <TextField
            value={styleIdForRef}
            onChange={(e) => {
              if (!styleId) {
                setStyleIdForRef(e.target.value);
              }
            }}
            required={true}
            variant="outlined"
            sx={{ label: { textTransform: "capitalize" } }}
            label="Style ID"
          />
        </div>
        <Tabs
          value={activeTab}
          onChange={(_, value) => setActiveTab(value)}
          aria-label="basic tabs"
        >
          {tabList
            .filter((tb) => tb.value == activeTab)
            .map((tb) => (
              <Tab
                value={tb.value}
                label={tb.label}
                id={`simple-tab-${tb.value}`}
                // ariaControls={`simple-tabpanel-${tb.value}`}
              />
            ))}
        </Tabs>
        <Form
          activeTab={activeTab}
          styleId={styleIdForRef}
          mainRef={mainRef}
          onClose={onClose}
          refetchData={refetchData}
        />
      </div>
    </Modal>
  );
};

export default StyleFormModal;
