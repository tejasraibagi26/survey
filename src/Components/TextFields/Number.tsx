import { TextField } from "../../Interfaces";

const Number = ({
  label,
  type,
  placeholder,
  className,
  labelClassName,
  onChange,
  error,
}: TextField) => {
  return (
    <label
      className={`${labelClassName ? labelClassName : ""} ${
        error ? "error" : ""
      }`}
    >
      <div className="label">{label}</div>
      <input
        name={label.toLowerCase()}
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    </label>
  );
};

export default Number;
