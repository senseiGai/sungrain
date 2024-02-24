import React from "react";

import { Heading } from "@shared/ui/Heading";
import { Separator } from "@shared/ui/Separator";
import { Paragraph } from "@shared/ui/Paragraph";

import styles from "../Contacts/styles.module.scss";

function Contacts() {
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__content} id="contact">
        <section className={styles.about__text}>
          <Heading text="Контакты" headingType="primary" />
          <Separator separatorType="red" />
          {/* <section className={styles.about__text_paragraph}> */}
          <Paragraph
            paragraphType="default"
            text="С собственным производством и отлаженной логистикой, мы способны оперативно удовлетворять запросы наших клиентов."
          />
          {/* </section> */}
        </section>
      </div>
    </section>
  );
}

export default Contacts;
