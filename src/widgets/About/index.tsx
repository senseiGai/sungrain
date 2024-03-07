import React from "react";
import { Fade } from "react-awesome-reveal";

import { Heading } from "@shared/ui/Heading";
import { Separator } from "@shared/ui/Separator";
import { Paragraph } from "@shared/ui/Paragraph";

import Hands from "@assets/Cards/photo_02.webp";
import Fire from "@assets/Cards/photo_03.webp";
import Bread from "@assets/Cards/photo_01.webp";

import styles from "../About/styles.module.scss";
import { AboutCard } from "@shared/ui/AboutCard";

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
                text='Добро пожаловать в мир качественных продуктов перемола от ТОО "SUN GRAIN"!'
              />
              <Paragraph
                paragraphType="default"
                text="Мы являемся поставщиками высококлассной муки и гречневой крупы ядрицы, предоставляя нашим клиентам непревзойденное качество и натуральность в каждом продукте."
              />
            </section>
          </Fade>
        </div>
      </div>
      <div className={`${styles.about__flower_cards} flex gap-16`}>
        <Fade direction="up" triggerOnce className={styles.fade}>
          <AboutCard
            img={Hands}
            name="Мука"
            cardType="Для лепки"
            textFirst="Откройте для себя секрет идеального вкуса и текстуры..."
          />
        </Fade>
        <Fade direction="up" delay={200} triggerOnce className="fade">
          <AboutCard
            img={Fire}
            name="МУКА"
            cardType="Для пиццы"
            textFirst="Для настоящих ценителей пиццы!"
            textSecond="Наша специальная мука создана для идеального теста, которос не только легко раскатывается, но и придает вашей пицце неповторимый вкус и хрустящий край."
          />
        </Fade>
        <Fade direction="up" delay={400} triggerOnce>
          <AboutCard
            img={Bread}
            name="МУКА"
            cardType="Для выпечки"
            textFirst="Отличный хлеб начинается с отличной муки!"
            textSecond="Наша мука для выпечки обеспечит ваши рецепты нежным вкусом и идеальной текстурой."
          />
        </Fade>
      </div>
    </section>
  );
}

export default AboutScreen;
