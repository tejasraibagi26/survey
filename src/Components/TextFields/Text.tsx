import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { TextField } from "../../Interfaces";
import "./text.css";

const Text = ({
  label,
  type,
  name,
  placeholder,
  className,
  labelClassName,
  onChange,
  error,
}: TextField) => {
  const [isObscured, setIsObscured] = useState<Boolean>(false);
  const [inputType, setInputType] = useState<any>(type ? type : "text");

  const showPassword = () => {
    setIsObscured(!isObscured);
    if (isObscured) setInputType("password");
    else setInputType("text");
  };

  return (
    <label
      className={`${labelClassName ? labelClassName : ""} ${
        error ? "error" : ""
      }`}
    >
      <div className="label">{label}</div>
      <input
        name={name}
        type={inputType}
        max={inputType === "number" ? 10 : undefined}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
      {type === "password" && (
        <span className="eye" onClick={showPassword}>
          {isObscured ? <AiFillEyeInvisible /> : <AiFillEye />}
        </span>
      )}
    </label>
  );
};

export default Text;
