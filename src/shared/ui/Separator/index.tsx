import styles from "../Separator/styles.module.scss";

interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  margin?: string;
  separatorType: "red-sep" | "dark-red" | "yellow" | "orange";
}

export const Separator: React.FC<SeparatorProps> = ({
  margin,
  separatorType,
}) => {
  const separatorClass = `${styles.separator} ${
    styles[`separator--${separatorType}`]
  } ${margin ? margin : ""}`;

  return <hr className={separatorClass} />;
};
