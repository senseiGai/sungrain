import React from "react";

import Header from "@features/Header";

import styles from "../Main/styles.module.scss";

import Logo from "@assets/Logo/logo.svg";

function MainScreen() {
  return (
    <section className={styles.main}>
      <main className={styles.main__content}>
        <Header />
        <div className={styles.main__content_logo}>
          <img src={Logo} alt="logo" />
        </div>
      </main>
    </section>
  );
}

export default MainScreen;
