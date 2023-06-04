import { TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { sendData, urlConst } from "../../utils/httpRequests";

type Props = {
  mainRef: any;
  styleId: string;
  onClose: () => void;
  refetchData: any;
};

const Specifications = ({ mainRef, styleId, onClose, refetchData }: Props) => {
  const { control, handleSubmit, getValues, watch } = useForm({
    defaultValues: mainRef.current.specifications
      ? {
          styleId: styleId,
          specifications: mainRef.current.specifications,
        }
      : {
          styleId: styleId,
          specifications: [
            {
              header: "",
              size_value: "",
            },
          ],
        },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "specifications",
  });
  const addToFields = () => {
    append({
      header: "",
      size_value: "",
    });
  };
  const removeFromList = (idx: number) => {
    remove(idx);
  };
  useEffect(() => {
    mainRef.current.specifications = watch();
  }, [watch()]);

  const submitData = async (e: any) => {
    console.log(e);
    await sendData(urlConst.sty_spec_in, e);
    toast.success("Successfully Added");
    refetchData();
    onClose();
  };
  return (
    <form onSubmit={handleSubmit(submitData)} className="mt-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex-1 h-80">
          <img className="w-full h-full aspect-square " src={""} />
        </div>

        <div>
          <div className="flex gap-4 items-center">
            <div onClick={addToFields}>
              <div className="transition-all bg-blue-200 flex items-center justify-center h-10 w-10 cursor-pointer rounded-full hover:bg-blue-500">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <div>Specification Section</div>
            <button className="inline-block rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
              Save
            </button>
          </div>
          <div className="grid grid-cols-[3rem_1fr_1fr] gap-4 mt-4">
            {fields.map((_, index) => (
              <>
                <div onClick={() => removeFromList(index)}>
                  <div className="transition-all bg-red-200 flex items-center justify-center h-10 w-10 cursor-pointer rounded-full hover:bg-red-500">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </div>
                <Controller
                  control={control}
                  name={`specifications.${index}.header`}
                  render={({ field }) => (
                    <TextField
                      className={"flex-1"}
                      {...field}
                      required={true}
                      label={"Header"}
                      variant="outlined"
                      sx={{ label: { textTransform: "capitalize" } }}
                      value={getValues(`specifications.${index}.header`)}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name={`specifications.${index}.size_value`}
                  render={({ field }) => (
                    <TextField
                      className={"flex-1"}
                      {...field}
                      required={true}
                      label={"Size Value"}
                      variant="outlined"
                      sx={{ label: { textTransform: "capitalize" } }}
                      value={getValues(
                        `specifications.${index}.size_value`
                      ).trim()}
                    />
                  )}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Specifications;
