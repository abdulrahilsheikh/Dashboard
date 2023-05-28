import { MenuItem, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { bomColumns } from "../../section/style/table.const";

type Props = { mainRef: any };
const item = [
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
];
const BOM = ({ mainRef }: Props) => {
  const { control, getValues, watch } = useForm({
    defaultValues: mainRef.current.bom || { itemNames: [" "] },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "itemNames",
  });
  const addToFields = () => {
    append(" ");
  };
  const removeFromList = (idx: number) => {
    remove(idx);
  };
  useEffect(() => {
    mainRef.current.bom = watch();
  }, [watch()]);
  return (
    <div className="mt-4">
      <div className="flex gap-4 items-center">
        <div onClick={addToFields}>
          <div className="transition-all bg-blue-200 flex items-center justify-center h-10 w-10 cursor-pointer rounded-full hover:bg-blue-500">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div>BOM Section</div>
        <button
          type="button"
          className="inline-block rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          Save
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {fields.map((_, index) => (
          <div className="flex items-center gap-4">
            <div onClick={() => removeFromList(index)}>
              <div className="transition-all bg-red-200 flex items-center justify-center h-10 w-10 cursor-pointer rounded-full hover:bg-red-500">
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
            <Controller
              control={control}
              name={`itemNames.${index}`}
              render={({ field }) => (
                <TextField
                  className={"flex-1"}
                  {...field}
                  required={true}
                  label={`${index + 1} Item Name`}
                  variant="outlined"
                  sx={{ label: { textTransform: "capitalize" } }}
                  value={getValues(`itemNames.${index}`).trim()}
                  select
                >
                  {item?.map((field) => (
                    <MenuItem value={field.value}>{field.label}</MenuItem>
                  ))}
                </TextField>
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BOM;
