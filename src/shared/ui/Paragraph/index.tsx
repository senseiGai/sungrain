import styles from "../Paragraph/styles.module.scss";

interface ParagraphProps {
  id?: string;
  text: string | undefined;
  margin?: string;
  paragraphType: "default" | "card";
}

export const Paragraph: React.FC<ParagraphProps> = ({
  id,
  text,
  margin,
  paragraphType,
}) => {
  const paragraphClass = `${styles.paragraph} ${
    styles[`paragraph--${paragraphType}`]
  } ${margin ? margin : ""}`;
  return (
    <p className={paragraphClass} id={id}>
      {text}
    </p>
  );
};
