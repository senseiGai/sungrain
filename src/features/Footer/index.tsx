import React from "react";

import sparkLogo from "@assets/spark_logo.svg";

import { ContactLink } from "@shared/ui/ContactLink";
import { faAt } from "@fortawesome/free-solid-svg-icons/faAt";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="flex items-center gap-8 max-[767px]:flex-col">
        <ContactLink
          text="info@sungrain.kz"
          icon={faAt}
          href="mailto:info@sungrain.kz"
        />
        <ContactLink
          text="+7 706 601 88-26"
          icon={faPhone}
          href="tel:+77066018826"
        />
      </div>
      <img
        src={sparkLogo}
        className="mt-8 mb-8"
        onClick={() => window.open("https://sparkstudio.kz/home")}
        alt="spark-studio"
      />
    </div>
  );
};
