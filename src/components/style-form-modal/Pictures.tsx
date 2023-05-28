import { TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { generalColumns } from "../../section/style/table.const";

type Props = { mainRef: any };

const formFieldsList = [
  { name: "mainPic", label: "Main Pic" },
  { name: "supplierPic", label: "Supplier Pic" },
  { name: "technicalPic", label: "Technical Pic" },
  { name: "sketch", label: "Sketch" },
];
const Pictures = ({ mainRef }: Props) => {
  const { watch, setValue } = useForm({
    defaultValues: mainRef.current.pictures,
  });
  useEffect(() => {
    mainRef.current.pictures = watch();
  }, [watch()]);
  const imageToBase64 = (event: React.BaseSyntheticEvent, name: string) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event: any) {
      const base64Image = event.target.result;
      setValue(name, base64Image);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <div className="flex gap-4 items-center mt-4">
        <div>Pictures Section</div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {formFieldsList.map((item, idx) => (
          <div className="grid grid-cols-[2rem_0.5fr_0.5fr_0.5fr_2fr] gap-4 items-center">
            <div>{idx + 1}.</div>
            <div>{item.label}</div>
            <div className="w-48">
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                onChange={(e) => {
                  imageToBase64(e, item.name);
                }}
              />
            </div>
            <button
              type="button"
              className="inline-block rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              Upload
            </button>
            <img className="w-12 h-12 object-cover" src={watch(item.name)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pictures;
