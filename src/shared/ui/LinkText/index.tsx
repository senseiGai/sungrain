import React from "react";
import { Link } from "react-scroll";
import styles from "../LinkText/styles.module.scss";

interface LinkTextProps {
  text: string;
  to: string;
  color: string;
}

export const LinkText: React.FC<LinkTextProps> = ({ text, to, color }) => {
  return (
    <Link to={to} className={styles.linktext} style={{ color }} smooth>
      {text}
    </Link>
  );
};
