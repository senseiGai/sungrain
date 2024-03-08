import styles from "./styles.module.scss";

interface BigTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  margin?: string;
  subtext?: string;
  bigTextType: "secondary" | "secondary--small";
}

export const BigText: React.FC<BigTextProps> = ({
  text,
  subtext,
  bigTextType,
  margin,
}) => {
  const BigTextClass = `${styles.bigtext} ${
    styles[`bigtext--${bigTextType}`]
  } ${margin ? margin : ""}`;

  return (
    <>
      <span className={BigTextClass}>{text}</span>
      <p className={BigTextClass}>{subtext}</p>
    </>
  );
};
