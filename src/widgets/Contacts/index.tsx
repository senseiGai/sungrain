import React from "react";

import { Heading } from "@shared/ui/Heading";
import { Separator } from "@shared/ui/Separator";
import { Paragraph } from "@shared/ui/Paragraph";
import Form from "@widgets/Form";

import styles from "../Contacts/styles.module.scss";

function Contacts() {
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__content} id="contacts">
        <section className={styles.contacts__text}>
          <Heading text="Контакты" headingType="primary" margin="mb-3" />
          <Separator separatorType="red" margin="ml-6" />
          <div className={styles.contacts__text_paragraph}>
            <Paragraph
              paragraphType="default"
              text="С собственным производством и отлаженной логистикой, мы способны оперативно удовлетворять запросы наших клиентов."
            />
          </div>
          <Form />
        </section>
      </div>
    </section>
  );
}

export default Contacts;
