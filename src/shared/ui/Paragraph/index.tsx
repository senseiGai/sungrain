import styles from "../Paragraph/styles.module.scss";

interface ParagraphProps {
  id?: string;
  text: string | undefined;
  margin?: string;
  width?: string;
  paragraphType: "default" | "card";
}

export const Paragraph: React.FC<ParagraphProps> = ({
  id,
  text,
  margin,
  paragraphType,
  width,
}) => {
  const paragraphClass = `${styles.paragraph} ${
    styles[`paragraph--${paragraphType}`]
  } ${margin ? margin : ""} ${width}`;
  return (
    <p className={paragraphClass} id={id}>
      {text}
    </p>
  );
};
