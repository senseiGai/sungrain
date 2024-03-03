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
            <Separator separatorType="red" margin="ml-6" />
          </Fade>
          <Fade delay={300}>
            <div className={styles.contacts__text_paragraph}>
              <Paragraph
                paragraphType="default"
                text="С собственным производством и отлаженной логистикой, мы способны оперативно удовлетворять запросы наших клиентов."
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
