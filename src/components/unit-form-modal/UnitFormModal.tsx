import { MenuItem, Modal, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

type Props = {
  open: boolean;
  onClose: () => void;
  list: AddNewItemModalOptions[];
  values: { [key: string]: string };
  isNew: boolean;
  newItemData: { [key: string]: string };
  onSubmit: (data: any) => void;
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
  onSubmit,
}: Props) => {
  const inital = isNew
    ? { unitName: newItemData.unitName, shortName: "" }
    : { unitName: values.unitName, shortName: values.shortName };
  const { control, register, getValues, handleSubmit } = useForm({
    defaultValues: { fields: [inital] },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });
  const ref = useRef<any>(null);
  const addToFields = () => {
    append({ unitName: "", shortName: "" });
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
        <div className="">
          <div className="mb-4 grid grid-cols-[3rem_1fr_1fr] gap-4 justify-center content-center items-center">
            <div onClick={addToFields}>
              <div className="transition-all bg-blue-200 flex items-center justify-center h-10 w-10 cursor-pointer rounded-full hover:bg-blue-500">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="font-semibold text-lg">Unit Name</div>
            <div className="font-semibold text-lg">Short Name</div>
          </div>
          <div className="flex flex-col gap-4">
            {fields.map((item, index) => (
              <div className="grid grid-cols-[3rem_1fr_1fr] gap-4 justify-center content-center items-center">
                <div onClick={() => removeFromList(index)}>
                  <div className="transition-all bg-red-200 flex items-center justify-center h-10 w-10 cursor-pointer rounded-full hover:bg-red-500">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </div>

                {/* <TextField
                  className={"cap"}
                  {...register(`fields.${index}.unitName`)}
                  label={list[0].placeholder}
                  variant="outlined"
                  sx={{ label: { textTransform: "capitalize" } }}
                  value={getValues(`fields.${index}.unitName`)}
                /> */}
                <Controller
                  control={control}
                  name={`fields.${index}.unitName`}
                  render={({ field }) => (
                    <TextField
                      className={"cap"}
                      {...field}
                      label={list[0].placeholder}
                      variant="outlined"
                      sx={{ label: { textTransform: "capitalize" } }}
                      value={getValues(`fields.${index}.unitName`)}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name={`fields.${index}.shortName`}
                  render={({ field }) => (
                    <TextField
                      className={"cap"}
                      {...field}
                      label={list[1].placeholder}
                      variant="outlined"
                      sx={{ label: { textTransform: "capitalize" } }}
                      value={getValues(`fields.${index}.shortName`)}
                    />
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default UnitFormModal;
