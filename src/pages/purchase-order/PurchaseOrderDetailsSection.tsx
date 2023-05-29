import { MenuItem, TextField, TextFieldProps } from "@mui/material";
import { InputLabel } from "@mui/material";
import { SelectFieldModified } from "../../generic-component/select-field-modified/SelectFieldModified";
import { TextFieldModified } from "../../generic-component/text-field-modified/TextFieldModified";
type Props = {};

const PurchaseOrderDetailsSection = (props: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <TextFieldModified
          label="PO No :"
          className="flex flex-1 gap-2 items-center"
        />
        <TextFieldModified
          label="Work Order No : "
          className="flex flex-1 gap-2 items-center"
        />

        <SelectFieldModified
          label="Party Name : "
          className="flex gap-2 flex-1 items-center"
          placeholder="Select a party name"
          options={[
            { value: "Party 1", label: "Party 1" },
            { value: "Party 2", label: "Party 2" },
            { value: "Party 3", label: "Party 3" },
          ]}
        />
        <TextFieldModified
          type="date"
          label="Work Order No : "
          className="flex flex-1 gap-2 items-center"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <InputLabel>
          <div className="flex gap-2 items-start">
            <div className="text-sm ">Shipp Address :</div>
            <textarea
              className="text-sm min-w-[10rem_!important] bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 resize-none"
              rows={5}
            />
          </div>
        </InputLabel>
        <SelectFieldModified
          label="Mode Of Dispatch : "
          className="flex gap-2 items-center"
          placeholder="Select a party name"
          options={[
            { value: "Party 1", label: "Party 1" },
            { value: "Party 2", label: "Party 2" },
            { value: "Party 3", label: "Party 3" },
          ]}
        />
        <TextFieldModified
          label="Vehical No : "
          className="flex flex-1 gap-2 items-center"
        />
        <TextFieldModified
          label="Transport : "
          className="flex flex-1 gap-2 items-center"
        />
      </div>
    </div>
  );
};

export default PurchaseOrderDetailsSection;
