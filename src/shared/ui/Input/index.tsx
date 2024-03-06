import React, { useRef } from "react";
import { useCustomLabel } from "@shared/lib/hooks/useCustomLabel";

import styles from "./styles.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  margin?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ labelText, margin, ...props }, ref) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const { onLabelFocus, onLabelBlur } = useCustomLabel(labelRef);

    return (
      <div className={`${styles.input_container} ${margin || ""}`}>
        <label className={styles.input_container__label} ref={labelRef}>
          {labelText}
        </label>
        <input
          ref={ref}
          {...props}
          onFocus={onLabelFocus}
          onBlur={onLabelBlur}
          className={styles.input_container__input}
        />
      </div>
    );
  }
);
