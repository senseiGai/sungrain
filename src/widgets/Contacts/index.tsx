import React from "react";

import { Heading } from "@shared/ui/Heading";
import { Separator } from "@shared/ui/Separator";
import { Paragraph } from "@shared/ui/Paragraph";
import Form from "@widgets/Form";

import styles from "../Contacts/styles.module.scss";
import { Fade } from "react-awesome-reveal";

function Contacts() {
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__content} id="contacts">
        <section className={styles.contacts__text}>
          <Fade>
            <Heading text="Контакты" headingType="primary" margin="mb-3" />
          </Fade>
          <Fade delay={200}>
            <Separator separatorType="red" />
          </Fade>
          <Fade delay={300}>
            <div className={styles.contacts__text_paragraph}>
              <Paragraph
                paragraphType="default"
                text='Мы готовы стать Вашим надежным партнером в кулинарных приключениях. Закажите продукты перемола от ТОО "SUN GRAIN" прямо сейчас и откройте для себя непревзойденное качество и вкус в каждом приготовленном блюде. Выбирайте SUN GRAIN – выбирайте качество и натуральность в каждой упаковке!'
              />
            </div>
          </Fade>
        </section>
        <Fade delay={400}>
          <Form />
        </Fade>
      </div>
    </section>
  );
}

export default Contacts;
