import React from "react";
import { LinkText } from "@shared/ui/LinkText";
import useScrollOpacity from "@shared/lib/hooks/useScrollOpacity";

import styles from "../Header/styles.module.scss";

interface HeaderProps {
  textColor: string;
}

function Header({ textColor }: HeaderProps) {
  const scrollOpacity = useScrollOpacity();

  const headerTextColor = scrollOpacity >= 0.8 ? "white" : textColor;

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <nav className={styles.header__content_links}>
          <ul>
            <LinkText to="about" text="О компании" color={headerTextColor} />
          </ul>
          <ul>
            <LinkText
              to="products"
              text="Наша продукция"
              color={headerTextColor}
            />
          </ul>
          <ul>
            <LinkText
              to="contacts"
              text="Связаться с нами"
              color={headerTextColor}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
