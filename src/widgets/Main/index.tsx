import React from "react";
// import { Parallax } from "react-scroll-parallax";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

import Header from "@features/Header";

import styles from "../Main/styles.module.scss";

import Logo from "@assets/Logo/logo.svg";

function MainScreen() {
  const main = useRef(null);

  const { scrollYProgress } = useScroll({
    target: main,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [2, 5]);

  return (
    <section ref={main} className={styles.main}>
      <Header />
      <div className={styles.main__sticky}>
        <main className={styles.main__content}>
          <motion.div
            style={{ scale: scale4 }}
            className={styles.main__content_logo}
          >
            <img src={Logo} alt="logo" />
          </motion.div>
        </main>
      </div>
    </section>
  );
}

export default MainScreen;
