import React, { useState } from "react";
import styles from "./styles.module.scss";

interface DefaultInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  margin?: string;
  inputType: "pc" | "mob" | "tablet";
  labelText: string;
}

const InputProp: React.FC<DefaultInputProps> = ({
  margin,
  inputType,
  labelText,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const inputClass = `${styles.input} ${styles[`input--${inputType}`]} ${
    margin ? margin : ""
  }`;

  return (
    <>
      <div className="wrapper">
        <label
          className={`${styles.label} ${
            focused || value ? styles.labelFocused : ""
          }`}
        >
          {labelText}
        </label>
        <input
          className={inputClass}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...rest}
          type="text"
          required
        />
      </div>
    </>
  );
};

export default InputProp;
