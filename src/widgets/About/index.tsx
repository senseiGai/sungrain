import React from "react";

import { Heading } from "@shared/ui/Heading";
import { Separator } from "@shared/ui/Separator";
import { Paragraph } from "@shared/ui/Paragraph";

import styles from "../About/styles.module.scss";

function AboutScreen() {
  return (
    <section className={styles.about}>
      <div className={styles.about__content}>
        <section className={styles.about__text}>
          <Heading text="О компании" headingType="primary" />
          <Separator separatorType="red" />
          <Heading
            text="ТОО “Sun grain”"
            headingType="secondary--small"
            margin="mt-12"
          />
          <section className={styles.about__text_paragraph}>
            <Paragraph
              paragraphType="default"
              text="Ваш источник превосходного зерна по выгодным ценам. Мы гарантируем, что каждая партия нашего продукта соответствует самым высоким стандартам качества."
            />
            <Paragraph
              paragraphType="default"
              text="Наши специалисты постоянно отслеживают все этапы производства, чтобы обеспечить вам лучший выбор.
"
            />
          </section>
        </section>
      </div>
      <section className={styles.about__flower_cards}>
        <div className={styles.about__flower_card}>
          <section className={styles.about__card_text_section}>
            <p className={styles.about__card_text}>МУКА</p>
            <p className={styles.about__card_text}>для лепки</p>
            <Separator separatorType="dark-red" margin="mt-4" />
          </section>
        </div>
        <div className={styles.about__flower_card}>
          <section className={styles.about__card_text_section}>
            <p className={styles.about__card_text}>МУКА</p>
            <p className={styles.about__card_text}>для пиццы</p>
            <Separator separatorType="yellow" margin="mt-4" />
          </section>
        </div>
        <div className={styles.about__flower_card}>
          <section className={styles.about__card_text_section}>
            <p className={styles.about__card_text}>МУКА</p>
            <p className={styles.about__card_text}>для выпечки</p>
            <Separator separatorType="orange" margin="mt-4" />
          </section>
        </div>
      </section>
    </section>
  );
}

export default AboutScreen;
