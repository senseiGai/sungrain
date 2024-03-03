import React, { useState, forwardRef, useRef } from "react";
import styles from "./styles.module.scss";
import { useCustomLabel } from "../../../shared/lib/hooks/useCustomLabel";

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
    const labelRef = useRef<HTMLLabelElement>(null);

    const { onLabelFocus, onLabelBlur } = useCustomLabel(labelRef);

    const handleFocus = () => {
      setFocused(true);
      onLabelFocus();
    };

    const handleBlur = () => {
      setFocused(false);
      if (!value) {
        onLabelBlur();
      }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      if (rest.onChange) {
        rest.onChange(event);
      }
    };

    const inputClass = `${styles.input} ${styles[`input--${inputType}`]} ${
      margin || ""
    }`;

    return (
      <div className={styles.wrapper}>
        <label
          ref={labelRef}
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
    );
  }
);

export default InputProp;
