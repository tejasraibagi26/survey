import { IDropdown } from "../../Interfaces";

const Dropdown = ({
  label,
  type,
  placeholder,
  className,
  onChange,
  error,
  options,
  name,
  defaultValue,
}: IDropdown) => {
  return (
    <label className={error ? "error" : ""}>
      <div className="label">{label}</div>
      <select
        name={name}
        className={className}
        onChange={onChange}
        value={defaultValue}
      >
        {options.map((option: string, index: number) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Dropdown;
