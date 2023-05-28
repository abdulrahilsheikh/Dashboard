import { MenuItem, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { bomColumns } from "../../section/style/table.const";

type Props = { mainRef: any };

const Operations = ({ mainRef }: Props) => {
  const { control, getValues, watch } = useForm({
    defaultValues: mainRef.current.operations || {
      operations: [
        {
          operationName: "",
          operationStartName: "",
          machine: "",
          time: "",
          rate: 0,
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "operations",
  });
  const addToFields = () => {
    append({
      operationName: "",
      operationStartName: "",
      machine: "",
      time: "",
      rate: 0,
    });
  };
  const removeFromList = (idx: number) => {
    remove(idx);
  };
  useEffect(() => {
    mainRef.current.operations = watch();
  }, [watch()]);
  return (
    <div className="mt-4">
      <div className="flex gap-4 items-center">
        <div onClick={addToFields}>
          <div className="transition-all bg-blue-200 flex items-center justify-center h-10 w-10 cursor-pointer rounded-full hover:bg-blue-500">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div>Operations Section</div>
        <button
          type="button"
          className="inline-block rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          Save
        </button>
      </div>
      <div className="grid grid-cols-[3rem_1fr_1fr_0.5fr_0.5fr_0.5fr] gap-4 mt-4">
        {fields.map((_, index) => (
          <>
            <div onClick={() => removeFromList(index)}>
              <div className="transition-all bg-red-200 flex items-center justify-center h-10 w-10 cursor-pointer rounded-full hover:bg-red-500">
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
            <Controller
              control={control}
              name={`operations.${index}.operationName`}
              render={({ field }) => (
                <TextField
                  className={"flex-1"}
                  {...field}
                  required={true}
                  label={"Operation Name"}
                  variant="outlined"
                  sx={{ label: { textTransform: "capitalize" } }}
                  value={getValues(`operations.${index}.operationName`)}
                />
              )}
            />
            <Controller
              control={control}
              name={`operations.${index}.operationStartName`}
              render={({ field }) => (
                <TextField
                  className={"flex-1"}
                  {...field}
                  required={true}
                  label={"Operation Start Name"}
                  variant="outlined"
                  sx={{ label: { textTransform: "capitalize" } }}
                  value={getValues(
                    `operations.${index}.operationStartName`
                  ).trim()}
                />
              )}
            />
            <Controller
              control={control}
              name={`operations.${index}.machine`}
              render={({ field }) => (
                <TextField
                  className={"flex-1"}
                  {...field}
                  required={true}
                  label={"M/C"}
                  variant="outlined"
                  sx={{ label: { textTransform: "capitalize" } }}
                  value={getValues(`operations.${index}.machine`).trim()}
                />
              )}
            />
            <Controller
              control={control}
              name={`operations.${index}.time`}
              render={({ field }) => (
                <TextField
                  className={"flex-1"}
                  {...field}
                  required={true}
                  label={"Time"}
                  variant="outlined"
                  sx={{ label: { textTransform: "capitalize" } }}
                  value={getValues(`operations.${index}.time`).trim()}
                />
              )}
            />
            <Controller
              control={control}
              name={`operations.${index}.rate`}
              render={({ field }) => (
                <TextField
                  className={"flex-1"}
                  {...field}
                  required={true}
                  label={"Rate"}
                  variant="outlined"
                  sx={{ label: { textTransform: "capitalize" } }}
                  value={getValues(`operations.${index}.rate`)}
                />
              )}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Operations;
