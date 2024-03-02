import React from "react";

import { Heading } from "@shared/ui/Heading";
import { Indicator } from "@shared/ui/Indicator";

import styles from "../Products/styles.module.scss";

function products() {
  return (
    <section className={styles.products}>
      <div className={styles.products__content} id="contacts">
        <section className={styles.products__flower}>
          <div className={styles.products__flower_text}>
            <Heading
              headingType="secondary"
              text="Русское поле"
              margin="mt-52"
            />
            <Indicator
              indicatorType="yellow"
              mainText="Сорт"
              secondText="высший"
              indicatorLight="light-yellow"
              margin="mt-16"
              fillWidthPercentage={25}
            />
            <Indicator
              indicatorType="darken-yellow"
              mainText="Цвет"
              secondText="белый с кремовым оттенком"
              indicatorLight="light-darken-yellow"
              margin="mt-14"
              fillWidthPercentage={25}
            />
            <Indicator
              indicatorType="orange"
              mainText="Число падения"
              secondText="240"
              indicatorLight="light-orange"
              margin="mt-14"
              fillWidthPercentage={65}
            />
            <Indicator
              indicatorType="orange"
              mainText="Белизна"
              secondText="56 усл.ед"
              indicatorLight="light-orange"
              margin="mt-14"
              fillWidthPercentage={40}
            />
          </div>
        </section>
      </div>
    </section>
  );
}

export default products;
