interface SelectProps {
  label: string;
  options: { value: string; label: string }[];
}

export const SelectFieldModified = ({
  className,
  label,
  options,
  ...params
}: React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  SelectProps) => (
  <label className="text-gray-700">
    <div className={className}>
      <div className="text-sm">{label}</div>
      <select
        {...params}
        className="text-sm min-w-[10rem_!important] bg-white border-[1px] focus:border-[1px] focus:outline-none px-2"
      >
        {options?.map((field: any) => (
          <option value={field.value}>{field.label}</option>
        ))}
      </select>
    </div>
  </label>
);
