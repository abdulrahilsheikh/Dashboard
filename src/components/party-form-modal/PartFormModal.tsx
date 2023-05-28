import { MenuItem, Modal, TextField } from "@mui/material";
import { useRef } from "react";

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
const PartFormModal = ({
  open,
  onClose,
  list,
  values,
  isNew,
  newItemData,
  hadleSubmit,
}: Props) => {
  const ref = useRef<any>(null);

  const localList = [list.slice(0, 7), list.slice(7, 7 + 5), list.slice(7 + 5)];
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
        <div className="grid grid-cols-3 gap-4">
          {localList.map((list) => (
            <div className="flex flex-col gap-2">
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
                    required={true}
                  />
                ) : (
                  <TextField
                    select
                    sx={{ label: { d: "capitalize", color: "black" } }}
                    name={item.name}
                    defaultValue={values[item.name]}
                    label={item.placeholder}
                    placeholder={item.placeholder}
                    required={true}
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

export default PartFormModal;
