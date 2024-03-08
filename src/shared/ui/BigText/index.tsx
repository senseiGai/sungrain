import styles from "./styles.module.scss";

interface BigTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  margin?: string;
  bigTextType: "secondary" | "secondary--small";
}

export const BigText: React.FC<BigTextProps> = ({
  text,
  bigTextType,
  margin,
}) => {
  const BigTextClass = `${styles.bigtext} ${
    styles[`bigtext--${bigTextType}`]
  } ${margin ? margin : ""}`;
  return <span className={BigTextClass}>{text}</span>;
};
