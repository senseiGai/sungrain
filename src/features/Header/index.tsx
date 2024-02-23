import React from "react";
import { LinkText } from "@shared/ui/LinkText";

import styles from "../Header/styles.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <nav className={styles.header__content_links}>
          <LinkText to="#" text="О компании" />
          <LinkText to="#" text="Наша продукция" />
          <LinkText to="#" text="Связаться с нами" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
