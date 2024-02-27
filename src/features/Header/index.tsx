import React from "react";
import { LinkText } from "@shared/ui/LinkText";

import styles from "../Header/styles.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <nav className={styles.header__content_links}>
          <ul>
            <LinkText to="about" text="О компании" />
          </ul>
          <ul>
            <LinkText to="products" text="Наша продукция" />
          </ul>
          <ul>
            <LinkText to="contacts" text="Связаться с нами" />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
