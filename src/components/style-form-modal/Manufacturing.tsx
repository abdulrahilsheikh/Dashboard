import { MenuItem, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { bomColumns } from "../../section/style/table.const";
import { sendData, urlConst } from "../../utils/httpRequests";

type Props = {
  mainRef: any;
  styleId: string;
  onClose: () => void;
  refetchData: any;
};
const item = [
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
];
const operations: any = {
  "Manufacturing 1": ["Cutting", "Drilling", "Welding"],
  "Fabrication 3": ["Drilling", "Cutting", "Welding"],
};
const Manufacturing = ({ mainRef, styleId, onClose, refetchData }: Props) => {
  const { control, getValues, watch, handleSubmit } = useForm({
    defaultValues: mainRef.current.manufacturing
      ? mainRef.current.manufacturing
      : { process: [" "] },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "process",
  });
  const addToFields = () => {
    append(" ");
  };
  const removeFromList = (idx: number) => {
    remove(idx);
  };
  useEffect(() => {
    mainRef.current.manufacturing = watch();
  }, [watch()]);
  const submit = async (e: any) => {
    e.styleId = styleId;
    console.log(e);
    await sendData(urlConst.sty_prod_in, e);
    toast.success("Successfully Added");
    refetchData();
    onClose();
  };
  return (
    <form onSubmit={handleSubmit(submit)} className="mt-4">
      <div className="flex gap-4 items-center">
        <div onClick={addToFields}>
          <div className="transition-all bg-blue-200 flex items-center justify-center h-10 w-10 cursor-pointer rounded-full hover:bg-blue-500">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div>Manufacturing Section</div>
        <button className="inline-block rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
          Save
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {fields.map((_, index) => (
          <div className="flex  gap-4 items-start">
            <div className="flex flex-1 max-w-[20rem] items-center gap-4">
              <div onClick={() => removeFromList(index)}>
                <div className="transition-all bg-red-200 flex items-center justify-center h-10 w-10 cursor-pointer rounded-full hover:bg-red-500">
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
              <Controller
                control={control}
                name={`process.${index}`}
                render={({ field }) => (
                  <TextField
                    className={"flex-1 max-w-[20rem]"}
                    {...field}
                    required={true}
                    label={`${index + 1} Item Name`}
                    variant="outlined"
                    sx={{ label: { textTransform: "capitalize" } }}
                    value={getValues(`process.${index}`).trim()}
                    select
                  >
                    {item?.map((field) => (
                      <MenuItem value={field.value}>{field.label}</MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </div>
            <div className="self-start grid grid-cols-4 gap-4 ">
              {operations[getValues(`process.${index}`).trim()]?.map(
                (item: any, idx: number) => (
                  <div className="">
                    {idx + 1} : {item}
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

export default Manufacturing;
