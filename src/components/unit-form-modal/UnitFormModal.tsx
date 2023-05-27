import { MenuItem, Modal, TextField } from "@mui/material";
import { useRef, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  list: AddNewItemModalOptions[];
  values: { [key: string]: string };
  isNew: boolean;
  newItemData: { [key: string]: string };
  hadleSubmit: (data: any) => void;
};
export interface AddNewItemModalOptions {
  name: string;
  placeholder: string;
  type: string;
  options?: Option[];
}

export interface Option {
  label: string;
  value: string;
}
const UnitFormModal = ({
  open,
  onClose,
  list,
  values,
  isNew,
  newItemData,
  hadleSubmit,
}: Props) => {
  const ref = useRef<any>(null);
  const [localList, setLocalList] = useState([list]);
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onBackdropClick={onClose}
      className="flex justify-center overflow-auto py-8"
    >
      <form
        ref={ref}
        onSubmit={(e) => hadleSubmit(e)}
        className="z-10 w-[80%] outline-none border-none rounded-lg text-black  bg-white h-min p-8"
      >
        <div className="flex justify-between mb-4">
          <div className=" text-lg">{isNew ? "Add New Item" : "Edit Item"}</div>
          <button
            type="submit"
            className="inline-block rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Save
          </button>
        </div>
        <div className="">
          <div>
            <div></div>
          </div>
          {localList.map((list) => (
            <div className="grid grid-cols-[3rem_1fr_1fr] gap-4 justify-center content-center items-center">
              <div>
                <div className="bg-blue-200 h-6 w-6"></div>
              </div>
              {list.map((item) =>
                item.type == "text" ? (
                  <TextField
                    className={"cap"}
                    name={item.name}
                    defaultValue={
                      isNew ? newItemData[item.name] : values[item.name]
                    }
                    label={item.placeholder}
                    variant="outlined"
                    sx={{ label: { textTransform: "capitalize" } }}
                  />
                ) : (
                  <TextField
                    select
                    sx={{ label: { d: "capitalize", color: "black" } }}
                    name={item.name}
                    defaultValue={values[item.name]}
                    label={item.placeholder}
                    placeholder={item.placeholder}
                  >
                    {item!.options?.map((field) => (
                      <MenuItem value={field.value}>{field.label}</MenuItem>
                    ))}
                  </TextField>
                )
              )}
            </div>
          ))}
        </div>
      </form>
    </Modal>
  );
};

export default UnitFormModal;
