// Input.tsx

import React, { useRef } from "react";
import { useCustomLabel } from "@shared/lib/hooks/useCustomLabel";

import styles from "./styles.module.scss"; // Импорт модуля стилей

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  margin?: string;
  type: string;
}

export const Input: React.FC<InputProps> = ({
  labelText,
  margin,
  type,
  ...rest
}) => {
  const labelRef = useRef<HTMLLabelElement>(null);

  const focusStyles = {
    color: `var(--input-focus-color)`,
    fontSize: `var(--input-focus-font-size)`,
  };

  const blurStyles = {
    color: `var(--input-blur-color)`,
    fontSize: `var(--input-blur-font-size)`,
  };

  const { onLabelFocus, onLabelBlur } = useCustomLabel(
    labelRef,
    focusStyles,
    blurStyles
  );

  return (
    <div className={`${styles.input_container} ${margin} `} {...rest}>
      <label className={`${styles.input_container__label} `} ref={labelRef}>
        {labelText}
      </label>
      <input
        type={type}
        onFocus={onLabelFocus}
        onBlur={onLabelBlur}
        className={`${styles.input_container__input} `}
      />
    </div>
  );
};
