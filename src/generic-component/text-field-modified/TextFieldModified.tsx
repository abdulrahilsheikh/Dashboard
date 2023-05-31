export const TextFieldModified = ({
  className,
  label,
  ...params
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string }) => (
  <label className="text-gray-700 w-full">
    <div className={className}>
      <div className="text-sm ">{label}</div>
      <input
        className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2"
        {...params}
      />
    </div>
  </label>
);
