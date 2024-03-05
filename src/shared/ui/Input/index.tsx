import React, { useRef } from "react";
import { useCustomLabel } from "@shared/lib/hooks/useCustomLabel";

import styles from "./styles.module.scss";

interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  margin?: string;
  focusStyles: string;
  blurStyles: string;
}

export const Input: React.FC<Input> = ({
  labelText,
  margin,
  focusStyles,
  blurStyles,
  ...rest
}) => {
  const labelRef = useRef<HTMLLabelElement>(null);

  const { onLabelFocus, onLabelBlur } = useCustomLabel(
    labelRef,
    focusStyles,
    blurStyles
  );

  return (
    <div className={`${styles.input_container} ${margin}`} {...rest}>
      <label className={`${styles.input_container__label}`} ref={labelRef}>
        {labelText}
      </label>
      <input
        onFocus={onLabelFocus}
        onBlur={onLabelBlur}
        className={`${styles.input_container__input}`}
      />
    </div>
  );
};
