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
        <div className={styles.about__text}>
          <Fade delay={300} triggerOnce>
            <Heading text="О компании" headingType="primary" />
          </Fade>
          <Fade delay={400} triggerOnce>
            <Separator separatorType="red" margin="mt-3" />
          </Fade>
          <Fade delay={500} triggerOnce>
            <Heading
              text="ТОО “Sun grain”"
              headingType="secondary--small"
              margin="mt-12"
            />
          </Fade>
          <Fade delay={600} triggerOnce>
            <section className={styles.about__text_paragraph}>
              <Paragraph
                paragraphType="default"
                text="Ваш источник превосходного зерна по выгодным ценам. Мы гарантируем, что каждая партия нашего продукта соответствует самым высоким стандартам качества."
              />
              <Paragraph
                paragraphType="default"
                text="Наши специалисты постоянно отслеживают все этапы производства, чтобы обеспечить вам лучший выбор."
              />
            </section>
          </Fade>
        </div>
      </div>
      <div className={styles.about__flower_cards}>
        <Fade direction="up" triggerOnce className={styles.fade}>
          <div className={styles.about__flower_card} id="hands">
            <img
              src={Hands}
              alt="picture"
              className={styles.about__flower_picture}
            />
            <section className={styles.about__card_text_section}>
              <p className={styles.about__card_text}>МУКА</p>
              <p className={styles.about__card_text}>для лепки</p>
              <Separator separatorType="dark-red" margin="mt-4" />
              <div className={styles.about__card_text_hidden}>
                <Paragraph
                  id="reveal"
                  paragraphType="card"
                  text="Откройте для себя секрет идеального вкуса и текстуры..."
                  margin="mt-8"
                />
              </div>
            </section>
          </div>
        </Fade>
        <Fade direction="up" delay={300} triggerOnce className="fade">
          <div className={styles.about__flower_card} id="fire">
            <img
              src={Fire}
              alt="picture"
              className={styles.about__flower_picture}
            />
            <section className={styles.about__card_text_section}>
              <p className={styles.about__card_text}>МУКА</p>
              <p className={styles.about__card_text}>для пиццы</p>
              <Separator separatorType="yellow" margin="mt-4" />
              <div className={styles.about__card_text_hidden}>
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
              </div>
            </section>
          </div>
        </Fade>
        <Fade direction="up" delay={600} triggerOnce>
          <div className={styles.about__flower_card} id="bread">
            <img
              src={Bread}
              alt="picture"
              className={styles.about__flower_picture}
            />
            <section className={styles.about__card_text_section}>
              <p className={styles.about__card_text}>МУКА</p>
              <p className={styles.about__card_text}>для выпечки</p>
              <Separator separatorType="orange" margin="mt-4" />
              <div className={styles.about__card_text_hidden}>
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
              </div>
            </section>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default AboutScreen;
