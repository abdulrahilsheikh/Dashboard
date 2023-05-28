import { MenuItem, Modal, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

type Props = {
  open: boolean;
  onClose: () => void;
  list: AddNewItemModalOptions[];
  values: { processName: string; activities: string[] };
  isNew: boolean;
  newItemData: { [key: string]: string };
  onSubmit: (data: any) => void;
  options: Option[];
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
const ProcessFormModal = ({
  open,
  onClose,
  list,
  values,
  isNew,
  newItemData,
  onSubmit,
  options,
}: Props) => {
  const inital = isNew
    ? { processName: newItemData.processName, activities: [" "] }
    : { processName: values.processName, activities: [...values.activities] };
  const { control, getValues, handleSubmit, setValue } = useForm({
    defaultValues: inital,
  });
  const [count, setCount] = useState(inital.activities.length);
  const { fields, append, remove } = useFieldArray<any, any, any>({
    control,
    name: "activities",
  });
  const ref = useRef<any>(null);
  const addToFields = () => {
    append(" ");
  };
  const removeFromList = (idx: number) => {
    remove(idx);
  };
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
        onSubmit={handleSubmit(onSubmit)}
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
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div className="font-semibold text-lg">Process Name</div>
            <Controller
              control={control}
              name={`processName`}
              render={({ field }) => (
                <TextField
                  className={"cap"}
                  {...field}
                  label={list[0].placeholder}
                  variant="outlined"
                  sx={{ label: { textTransform: "capitalize" } }}
                  value={getValues(`processName`)}
                  required={true}
                />
              )}
            />
            <div onClick={addToFields}>
              <div className="transition-all bg-blue-200 flex items-center justify-center h-10 w-10 cursor-pointer rounded-full hover:bg-blue-500">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-semibold text-lg">Activities</div>
            <div className="grid grid-cols-5 gap-4 flex-wrap w-full">
              {fields.map((_, index) => (
                <div className="flex items-center gap-2">
                  <div onClick={() => removeFromList(index)}>
                    <div className="transition-all bg-red-200 flex items-center justify-center h-10 w-10 cursor-pointer rounded-full hover:bg-red-500">
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  <Controller
                    control={control}
                    name={`activities.${index}`}
                    render={({ field }) => (
                      <TextField
                        className={"flex-1 min-w-[10rem]"}
                        {...field}
                        label={`${index + 1} ${list[1].placeholder}`}
                        variant="outlined"
                        sx={{ label: { textTransform: "capitalize" } }}
                        value={getValues(`activities.${index}`).trim()}
                        required={true}
                        select
                      >
                        {options?.map((field) => (
                          <MenuItem value={field.value}>{field.label}</MenuItem>
                        ))}
                      </TextField>
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ProcessFormModal;
