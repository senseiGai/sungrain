import React from "react";
// import { Parallax } from "react-scroll-parallax";
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef } from "react";
import Plx from "react-plx";

// import Header from "@features/Header";

import styles from "../Main/styles.module.scss";

import Logo from "@assets/Logo/logo.svg";

function MainScreen() {
  // const main = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: main,
  //   offset: ["start start", "end end"],
  // });

  // const scale4 = useTransform(scrollYProgress, [0, 1], [2, 5]);

  // ref = { main };

  return (
    <section className={styles.main}>
      {/* <div className={styles.main__sticky}> */}
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
          <div
            // style={{ scale: scale4 }}
            className={styles.main__content_logo}
          >
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
      {/* </div> */}
    </section>
  );
}

export default MainScreen;
