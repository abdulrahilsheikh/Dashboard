import { MenuItem, Modal, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { getData, urlConst } from "../../utils/httpRequests";

type Props = {
  open: boolean;
  onClose: () => void;
  list: AddNewItemModalOptions[];
  values: { group_name: string; group_tems: string[]; group_type: string };
  isNew: boolean;
  newItemData: { [key: string]: string };
  onSubmit: (data: any) => void;
};
export interface AddNewItemModalOptions {
  name: string;
  placeholder: string;
  options?: Option[];
}

export interface Option {
  label: string;
  value: string;
}
const dummyOptions: any = {
  Style: () => getData(urlConst.sty_gen_out, {}),
  Process: async () => {
    const data = await getData(urlConst.processout, {});
    return data.map((i: any) => ({
      label: i.process_name,
      value: i.process_name,
    }));
  },
  Activity: () => getData(urlConst.activtyOut, {}),
  Item: () => getData(urlConst.itemout, {}),
};
const GroupFormModal = ({
  open,
  onClose,
  list,
  values,
  isNew,
  newItemData,
  onSubmit,
}: Props) => {
  const inital = isNew
    ? { group_name: newItemData.group_name, group_tems: [" "], group_type: "" }
    : {
        group_name: values.group_name,
        group_tems: [...values.group_tems],
        group_type: values.group_type,
      };
  console.log(inital);

  const { control, getValues, handleSubmit, setValue, watch } = useForm({
    defaultValues: inital,
  });
  const [options, setOptions] = useState<Option[]>([]);
  const { fields, append, remove } = useFieldArray<any, any, any>({
    control,
    name: "group_tems",
  });
  const ref = useRef<any>(null);
  const addToFields = () => {
    append(" ");
  };
  const removeFromList = (idx: number) => {
    remove(idx);
  };
  console.log(options);

  const getOptions = async (fieldType: any) => {
    const data = await dummyOptions[fieldType]();
    console.log(data);

    setOptions(data);
  };
  useEffect(() => {
    const temp = getValues("group_type");
    console.log(temp);
    if (temp) {
      getOptions(temp);
    }
  }, [watch("group_type")]);
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
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-lg">Group Name</div>
              <Controller
                control={control}
                name={`group_name`}
                render={({ field }) => (
                  <TextField
                    className={"cap"}
                    {...field}
                    label={list[0].placeholder}
                    variant="outlined"
                    sx={{ label: { textTransform: "capitalize" } }}
                    value={getValues(`group_name`)}
                    required={true}
                  />
                )}
              />
            </div>
            <div className="flex flex-col gap-4 min-w-[10rem]">
              <div className="font-semibold text-lg">Group Type</div>
              <Controller
                control={control}
                name={`group_type`}
                render={({ field }) => (
                  <TextField
                    className={"flex-1 min-w-[10rem]"}
                    {...field}
                    label={list[1].placeholder}
                    variant="outlined"
                    sx={{ label: { textTransform: "capitalize" } }}
                    value={getValues(`group_type`).trim()}
                    required={true}
                    select
                  >
                    {list[1].options?.map((field) => (
                      <MenuItem value={field.value}>{field.label}</MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </div>
            <div className="flex flex-col gap-4 items-center justify-between">
              <div className="font-semibold text-lg">Add</div>
              <div className=" mb-2" onClick={addToFields}>
                <div className="transition-all bg-blue-200 flex items-center justify-center h-10 w-10 cursor-pointer rounded-full hover:bg-blue-500">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-semibold text-lg">Group Items</div>
            <div className="grid grid-cols-3 gap-4 flex-wrap w-full">
              {fields.map((_, index) => (
                <div className="flex items-center gap-2">
                  <div onClick={() => removeFromList(index)}>
                    <div className="transition-all bg-red-200 flex items-center justify-center h-10 w-10 cursor-pointer rounded-full hover:bg-red-500">
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  <Controller
                    control={control}
                    name={`group_tems.${index}`}
                    render={({ field }) => (
                      <TextField
                        className={"flex-1 min-w-[15rem]"}
                        {...field}
                        label={`${index + 1} ${list[2].placeholder}`}
                        variant="outlined"
                        sx={{ label: { textTransform: "capitalize" } }}
                        value={getValues(`group_tems.${index}`).trim()}
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

export default GroupFormModal;
