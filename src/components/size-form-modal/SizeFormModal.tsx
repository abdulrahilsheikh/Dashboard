import { MenuItem, Modal, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

type Props = {
  open: boolean;
  onClose: () => void;
  list: AddNewItemModalOptions[];
  values: { size_name: string; sizes: string[] };
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
const SizeFormModal = ({
  open,
  onClose,
  list,
  values,
  isNew,
  newItemData,
  onSubmit,
}: Props) => {
  const inital = isNew
    ? { size_name: newItemData.size_name, sizes: [" "] }
    : { size_name: values.size_name, sizes: [...values.sizes] };
  const { control, getValues, handleSubmit, setValue } = useForm({
    defaultValues: inital,
  });
  const [count, setCount] = useState(inital.sizes.length);
  const { fields, append } = useFieldArray<any, any, any>({
    control,
    name: "sizes",
  });
  const ref = useRef<any>(null);

  useEffect(() => {
    if (count < getValues("sizes").length) {
      const temp = getValues("sizes").slice(0, count);
      setValue("sizes", temp);
    } else {
      const diff = count - getValues("sizes").length;
      for (let i = 0; i < diff; i++) {
        append(" ");
      }
    }
  }, [count]);
  const countSetter = (e: React.BaseSyntheticEvent) => {
    const val = +e.target.value;
    if (val > 0) {
      setCount(val);
    }
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
            <div className="font-semibold text-lg">Size Name</div>
            <Controller
              control={control}
              name={`size_name`}
              render={({ field }) => (
                <TextField
                  className={"cap"}
                  {...field}
                  label={list[0].placeholder}
                  variant="outlined"
                  sx={{ label: { textTransform: "capitalize" } }}
                  value={getValues(`size_name`)}
                  required={true}
                />
              )}
            />
          </div>
          <div className="flex gap-4 items-center">
            <div className="font-semibold text-lg">Size Count</div>

            <TextField
              onChange={countSetter}
              type="number"
              className={"cap"}
              label={"Size Count"}
              variant="outlined"
              sx={{ label: { textTransform: "capitalize" } }}
              value={count}
              required={true}
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-semibold text-lg">Sizes</div>
            <div className="grid grid-cols-5 gap-4 flex-wrap w-full">
              {fields.map((_, index) => (
                <Controller
                  control={control}
                  name={`sizes.${index}`}
                  render={({ field }) => (
                    <TextField
                      className={"flex-1 min-w-[10rem]"}
                      {...field}
                      label={list[1].placeholder}
                      variant="outlined"
                      sx={{ label: { textTransform: "capitalize" } }}
                      value={getValues(`sizes.${index}`).trim()}
                      required={true}
                    />
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default SizeFormModal;
