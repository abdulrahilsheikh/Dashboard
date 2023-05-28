import { MenuItem, Modal, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

type Props = {
  open: boolean;
  onClose: () => void;
  list: AddNewItemModalOptions[];
  values: { groupName: string; groupItems: string[]; groupType: string };
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
  Style: [
    { label: "Style 1", value: "Style 1" },
    { label: "Design 5", value: "Design 5" },
    { label: "Fashion 3", value: "Fashion 3" },
    { label: "Trend 2", value: "Trend 2" },
    { label: "Style 7", value: "Style 7" },
    { label: "Design 4", value: "Design 4" },
    { label: "Fashion 9", value: "Fashion 9" },
    { label: "Trend 6", value: "Trend 6" },
    { label: "Style 10", value: "Style 10" },
    { label: "Design 8", value: "Design 8" },
  ],
  Process: [
    { label: "Manufacturing 1", value: "Manufacturing 1" },
    { label: "Fabrication 3", value: "Fabrication 3" },
    { label: "Production 5", value: "Production 5" },
    { label: "Assembly 2", value: "Assembly 2" },
    { label: "Processing 4", value: "Processing 4" },
    { label: "Manufacturing 8", value: "Manufacturing 8" },
    { label: "Fabrication 7", value: "Fabrication 7" },
    { label: "Production 6", value: "Production 6" },
    { label: "Assembly 9", value: "Assembly 9" },
    { label: "Processing 10", value: "Processing 10" },
  ],
  Activity: [
    { label: "Cutting", value: "Cutting" },
    { label: "Molding", value: "Molding" },
    { label: "Assembly", value: "Assembly" },
    { label: "Finishing", value: "Finishing" },
    { label: "Packaging", value: "Packaging" },
    { label: "Quality Control", value: "Quality Control" },
    { label: "Stamping", value: "Stamping" },
    { label: "Welding", value: "Welding" },
    { label: "Painting", value: "Painting" },
    { label: "Testing", value: "Testing" },
  ],
  Item: [
    { label: "Material 1", value: "Material 1" },
    { label: "Fabric 5", value: "Fabric 5" },
    { label: "Metal 3", value: "Metal 3" },
    { label: "Plastic 2", value: "Plastic 2" },
    { label: "Wood 7", value: "Wood 7" },
    { label: "Leather 4", value: "Leather 4" },
    { label: "Glass 9", value: "Glass 9" },
    { label: "Ceramic 6", value: "Ceramic 6" },
    { label: "Composite 10", value: "Composite 10" },
    { label: "Paper 8", value: "Paper 8" },
  ],
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
    ? { groupName: newItemData.groupName, groupItems: [" "], groupType: "" }
    : {
        groupName: values.groupName,
        groupItems: [...values.groupItems],
        groupType: values.groupType,
      };
  const { control, getValues, handleSubmit, setValue, watch } = useForm({
    defaultValues: inital,
  });
  const [options, setOptions] = useState<Option[]>([]);
  const { fields, append, remove } = useFieldArray<any, any, any>({
    control,
    name: "groupItems",
  });
  const ref = useRef<any>(null);
  const addToFields = () => {
    append(" ");
  };
  const removeFromList = (idx: number) => {
    remove(idx);
  };
  useEffect(() => {
    const temp = getValues("groupType");
    console.log(temp);

    if (temp) {
      setOptions(dummyOptions[temp]);
    }
  }, [watch("groupType")]);
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
                name={`groupName`}
                render={({ field }) => (
                  <TextField
                    className={"cap"}
                    {...field}
                    label={list[0].placeholder}
                    variant="outlined"
                    sx={{ label: { textTransform: "capitalize" } }}
                    value={getValues(`groupName`)}
                    required={true}
                  />
                )}
              />
            </div>
            <div className="flex flex-col gap-4 min-w-[10rem]">
              <div className="font-semibold text-lg">Group Type</div>
              <Controller
                control={control}
                name={`groupType`}
                render={({ field }) => (
                  <TextField
                    className={"flex-1 min-w-[10rem]"}
                    {...field}
                    label={list[1].placeholder}
                    variant="outlined"
                    sx={{ label: { textTransform: "capitalize" } }}
                    value={getValues(`groupType`).trim()}
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
                    name={`groupItems.${index}`}
                    render={({ field }) => (
                      <TextField
                        className={"flex-1 min-w-[10rem]"}
                        {...field}
                        label={list[2].placeholder}
                        variant="outlined"
                        sx={{ label: { textTransform: "capitalize" } }}
                        value={getValues(`groupItems.${index}`).trim()}
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
