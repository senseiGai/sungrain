import styles from "../Paragraph/styles.module.scss";

interface ParagraphProps {
  text: string;
  margin?: string;
  paragraphType: "default" | "card";
}

export const Paragraph: React.FC<ParagraphProps> = ({
  text,
  margin,
  paragraphType,
}) => {
  const paragraphClass = `${styles.paragraph} ${
    styles[`paragraph--${paragraphType}`]
  } ${margin ? margin : ""}`;
  return <p className={paragraphClass}>{text}</p>;
};
