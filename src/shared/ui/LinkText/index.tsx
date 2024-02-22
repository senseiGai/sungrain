import * as React from "react";
import { Link } from "react-scroll";
import styles from "../LinkText/styles.module.scss";

interface LinkTextProps {
  text: string;
  to: string;
}

export const LinkText: React.FC<LinkTextProps> = ({ text, to, ...rest }) => {
  return (
    <Link to={to} className={styles.linktext} {...rest} smooth>
      {text}
    </Link>
  );
};
