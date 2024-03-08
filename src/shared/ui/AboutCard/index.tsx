import React from "react";
import { Paragraph } from "../Paragraph";
import { Separator } from "../Separator";

import styles from "../../../widgets/About/styles.module.scss";

interface BreadCardProps {
  img: string;
  name: string;
  cardType: string;
  textFirst: string;
  textSecond?: string;
}

export const AboutCard: React.FC<BreadCardProps> = ({
  img,
  name,
  cardType,
  textFirst,
  textSecond,
}) => {
  return (
    <div className={styles.about__flower_card} id="bread">
      <img src={img} alt={name} className={styles.about__flower_picture} />
      <section className={styles.about__card_text_section}>
        <p className={styles.about__card_text}>{name}</p>
        <p className={styles.about__card_text}>{cardType}</p>
        <Separator separatorType="orange" margin="mt-4" />
        <div className={styles.about__card_text}>
          <Paragraph paragraphType="card" text={textFirst} margin="mt-8" />
          <Paragraph paragraphType="card" text={textSecond} margin="mt-4" />
        </div>
      </section>
    </div>
  );
};
