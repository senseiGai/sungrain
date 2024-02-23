import styles from "../Heading/styles.module.scss";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  margin?: string;
  headingType: "primary" | "secondary" | "secondary--small";
}

export const Heading: React.FC<HeadingProps> = ({
  text,
  headingType,
  margin,
}) => {
  const headingClass = `${styles.heading} ${
    styles[`heading--${headingType}`]
  } ${margin ? margin : ""}`;
  return <h1 className={headingClass}>{text}</h1>;
};
