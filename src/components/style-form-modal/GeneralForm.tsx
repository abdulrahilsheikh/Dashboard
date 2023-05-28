import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { generalColumns } from "../../section/style/table.const";

type Props = { mainRef: any };

const GeneralForm = ({ mainRef }: Props) => {
  const { control, getValues, watch } = useForm({
    defaultValues: mainRef.current.general,
  });
  useEffect(() => {
    mainRef.current.general = watch();
  }, [watch()]);
  return (
    <div>
      <div className="flex gap-4 items-center mt-4">
        <div>General Section</div>
        <button
          type="button"
          className="inline-block rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          Save
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {generalColumns.slice(1).map((item) => (
          <Controller
            control={control}
            name={item.field}
            render={({ field }) => (
              <TextField
                className={"cap"}
                {...field}
                required={true}
                label={item.headerName}
                variant="outlined"
                sx={{ label: { textTransform: "capitalize" } }}
                value={getValues(item.field)}
              />
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default GeneralForm;
