import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import styles from "./styles.module.scss";

interface ContactLinkProps {
  icon: IconDefinition;
  text: string;
  href: string;
}

export const ContactLink: React.FC<ContactLinkProps> = ({
  icon,
  text,
  href,
}) => {
  return (
    <a className={styles.contact_link} href={href}>
      <FontAwesomeIcon icon={icon} className={styles.contact_link__icon} />
      {text}
    </a>
  );
};
