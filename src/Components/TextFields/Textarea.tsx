import { useState } from "react";
import { TextField } from "../../Interfaces";
import "./text.css";

const TextArea = ({
  label,
  type,
  placeholder,
  className,
  onChange,
  error,
}: TextField) => {
  const [isObscured, setIsObscured] = useState<Boolean>(false);

  return (
    <label className={`${error ? "error" : ""} tx-height`}>
      <div className="label">{label}</div>
      <textarea
        name={label.toLowerCase()}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    </label>
  );
};

export default TextArea;
