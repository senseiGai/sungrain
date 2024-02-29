import React from "react";
import { Fade } from "react-awesome-reveal";

import { Heading } from "@shared/ui/Heading";
import { Separator } from "@shared/ui/Separator";
import { Paragraph } from "@shared/ui/Paragraph";

import Hands from "@assets/Cards/photo_02.webp";
import Fire from "@assets/Cards/photo_03.webp";
import Bread from "@assets/Cards/photo_01.webp";

import styles from "../About/styles.module.scss";

function AboutScreen() {
  return (
    <section className={styles.about}>
      <div className={styles.about__content} id="about">
        <section className={styles.about__text}>
          <Fade direction="up" delay={700} triggerOnce>
            <Heading text="О компании" headingType="primary" />
          </Fade>
          <Fade direction="left" triggerOnce>
            <Separator separatorType="red" margin="mt-3" />
          </Fade>
          <Fade direction="up" delay={800} triggerOnce>
            <Heading
              text="ТОО “Sun grain”"
              headingType="secondary--small"
              margin="mt-12"
            />
            <section className={styles.about__text_paragraph}>
              <Paragraph
                id={styles.reveal}
                paragraphType="default"
                text="Ваш источник превосходного зерна по выгодным ценам. Мы гарантируем, что каждая партия нашего продукта соответствует самым высоким стандартам качества."
              />
              <Paragraph
                id={styles.reveal}
                paragraphType="default"
                text="Наши специалисты постоянно отслеживают все этапы производства, чтобы обеспечить вам лучший выбор."
              />
            </section>
          </Fade>
        </section>
      </div>
      <section className={styles.about__flower_cards}>
        <Fade direction="up" triggerOnce className={styles.fade}>
          <div className={styles.about__flower_card}>
            <img
              src={Hands}
              alt="picture"
              className={styles.about__flower_picture}
            />
            <section className={styles.about__card_text_section}>
              <p className={styles.about__card_text}>МУКА</p>
              <p className={styles.about__card_text}>для лепки</p>
              <Separator separatorType="dark-red" margin="mt-4" />
              <Paragraph
                id="reveal"
                paragraphType="card"
                text="Откройте для себя секрет идеального вкуса и текстуры ваших любимых блюд. Наши уникальные ингредиенты обеспечивают идеальное сочетание эластичности и мягкости, делая каждое блюдо по-настоящему неповторимым. Позвольте вашему кулинарному творчеству расцвести во всей красе с нашей мукой высшего качества."
                margin="mt-8"
              />
            </section>
          </div>
        </Fade>
        <Fade direction="up" delay={300} triggerOnce className="fade">
          <div className={styles.about__flower_card}>
            <img
              src={Fire}
              alt="picture"
              className={styles.about__flower_picture}
            />
            <section className={styles.about__card_text_section}>
              <p className={styles.about__card_text}>МУКА</p>
              <p className={styles.about__card_text}>для пиццы</p>
              <Separator separatorType="yellow" margin="mt-4" />
              <Paragraph
                id="reveal"
                paragraphType="card"
                text="Для настоящих ценителей пиццы!"
                margin="mt-8"
              />
              <Paragraph
                id="reveal"
                paragraphType="card"
                text="Наша специальная мука создана для идеального теста, которос не только легко раскатывается, но и придает вашей пицце неповторимый вкус и хрустящий край."
                margin="mt-4"
              />
            </section>
          </div>
        </Fade>
        <Fade direction="up" delay={600} triggerOnce>
          <div className={styles.about__flower_card}>
            <img
              src={Bread}
              alt="picture"
              className={styles.about__flower_picture}
            />
            <section className={styles.about__card_text_section}>
              <p className={styles.about__card_text}>МУКА</p>
              <p className={styles.about__card_text}>для выпечки</p>
              <Separator separatorType="orange" margin="mt-4" />
              <Paragraph
                id="reveal"
                paragraphType="card"
                text="Отличный хлеб начинается с отличной муки!"
                margin="mt-8"
              />
              <Paragraph
                id="reveal"
                paragraphType="card"
                text="Наша мука для выпечки обеспечит ваши рецепты нежным вкусом и идеальной текстурой."
                margin="mt-4"
              />
            </section>
          </div>
        </Fade>
      </section>
    </section>
  );
}

export default AboutScreen;
