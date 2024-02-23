import React from "react";

import { Heading } from "@shared/ui/Heading";
import { Separator } from "@shared/ui/Separator";
import { Paragraph } from "@shared/ui/Paragraph";

import styles from "../About/styles.module.scss";

function AboutScreen() {
  return (
    <section className={styles.about}>
      <div className={styles.about__content}>
        <div className={styles.about__text_section}>
          <Heading text="О компании" headingType="primary" />
          {/* <Separator separatorType="red-sep" /> */}
          <Heading
            text="ТОО “Sun grain”"
            headingType="secondary--small"
            margin="mt-12"
          />
          <Paragraph
            paragraphType="default"
            text="Ваш источник превосходного зерна по выгодным ценам. Мы гарантируем, что каждая партия нашего продукта соответствует самым высоким стандартам качества.
Наши специалисты постоянно отслеживают все этапы производства, чтобы обеспечить вам лучший выбор.
"
            margin="mt-4"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutScreen;
