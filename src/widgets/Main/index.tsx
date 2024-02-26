import React from "react";

import Plx from "react-plx";

import styles from "../Main/styles.module.scss";

import Logo from "@assets/Logo/logo.svg";

function MainScreen() {
  return (
    <section className={styles.main}>
      <Plx
        parallaxData={[
          {
            start: "self",
            end: 500,
            easing: "easeIn",
            properties: [
              {
                startValue: 1,
                endValue: 1.3,
                property: "scale",
              },
            ],
          },
        ]}
      >
        <main className={styles.main__content}>
          <div className={styles.main__content_logo}>
            <Plx
              parallaxData={[
                {
                  start: "self",
                  end: 500,
                  easing: "easeIn",
                  properties: [
                    {
                      startValue: 1,
                      endValue: 0,
                      property: "opacity",
                    },
                  ],
                },
              ]}
            >
              <img src={Logo} alt="logo" />
            </Plx>
          </div>
        </main>
      </Plx>
    </section>
  );
}

export default MainScreen;
