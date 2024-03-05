import React from "react";

import styles from "./styles.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  margin?: string;
  buttonType: "filled" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  text,
  buttonType,
  margin,
  ...rest
}) => {
  const buttonClass = `${styles.button}  ${styles[`${buttonType}`]} ${
    margin ? margin : ""
  }`;

  return (
    <button className={buttonClass} {...rest}>
      {text}
    </button>
  );
};
