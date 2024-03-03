import React, { useState, forwardRef } from "react";
import styles from "./styles.module.scss";

interface DefaultInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  margin?: string;
  inputType: "pc" | "mob" | "tablet";
  labelText: string;
}

const InputProp = forwardRef<HTMLInputElement, DefaultInputProps>(
  ({ margin, inputType, labelText, ...rest }, ref) => {
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
      if (rest.onChange) {
        rest.onChange(event);
      }
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
            ref={ref}
            {...rest}
            required
          />
        </div>
      </>
    );
  }
);

export default InputProp;
