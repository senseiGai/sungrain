import React from "react";

import ProductCard from "@entities/ProductCard/index";

import styles from "../Products/styles.module.scss";

import Russian from "../../assets/Products/IMG_0008_2 (2).webp";
import Golden50 from "../../assets/Products/IMG_0003_3-min.webp";

function products() {
  return (
    <section className={styles.products}>
      <div className={styles.products__content} id="contacts">
        <section className={styles.products__flower}>
          <div className={styles.products__flower_text}>
            <ProductCard
              src={Russian}
              indicatorsData={[
                {
                  title: "Русское поле",
                  mainText: "Сорт",
                  secondText: "высший",
                  indicatorType: "yellow",
                  indicatorLight: "light-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-16",
                },
                {
                  title: " ",
                  mainText: "Цвет",
                  secondText: "белый с кремовым оттенком",
                  indicatorType: "darken-yellow",
                  indicatorLight: "light-darken-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Число падения",
                  secondText: "240",
                  indicatorType: "orange",
                  indicatorLight: "light-orange",
                  fillWidthPercentage: 65,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Белизна",
                  secondText: "56 усл.ед",
                  indicatorType: "darken-orange",
                  indicatorLight: "light-darken-orange",
                  fillWidthPercentage: 40,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Массовая доля влаги",
                  secondText: "14.6%",
                  indicatorType: "light-red",
                  indicatorLight: "light-light-red",
                  fillWidthPercentage: 80,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Клейковина (сырая)",
                  secondText: "28%",
                  indicatorType: "red",
                  indicatorLight: "light-red",
                  fillWidthPercentage: 70,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "ИДК",
                  secondText: "75 ЕД",
                  indicatorType: "darken-red",
                  indicatorLight: "light-darken-red",
                  fillWidthPercentage: 30,
                  margin: "mt-14",
                },
              ]}
            />
            <ProductCard
              src={Golden50}
              indicatorsData={[
                {
                  title: "Крупчатка золотая",
                  mainText: "Сорт",
                  secondText: "высший",
                  indicatorType: "yellow",
                  indicatorLight: "light-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-16",
                },
                {
                  title: " ",
                  mainText: "Цвет",
                  secondText: "белый с кремовым оттенком",
                  indicatorType: "darken-yellow",
                  indicatorLight: "light-darken-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Число падения",
                  secondText: "240",
                  indicatorType: "orange",
                  indicatorLight: "light-orange",
                  fillWidthPercentage: 65,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Белизна",
                  secondText: "60 усл.ед",
                  indicatorType: "darken-orange",
                  indicatorLight: "light-darken-orange",
                  fillWidthPercentage: 40,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Массовая доля влаги",
                  secondText: "14.8%",
                  indicatorType: "light-red",
                  indicatorLight: "light-light-red",
                  fillWidthPercentage: 82,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Клейковина (сырая)",
                  secondText: "28-30%",
                  indicatorType: "red",
                  indicatorLight: "light-red",
                  fillWidthPercentage: 77,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "ИДК",
                  secondText: "60 ЕД",
                  indicatorType: "darken-red",
                  indicatorLight: "light-darken-red",
                  fillWidthPercentage: 27,
                  margin: "mt-14",
                },
              ]}
            />
            <ProductCard
              indicatorsData={[
                {
                  title: "Крупчатка золотая",
                  mainText: "Сорт",
                  secondText: "высший",
                  indicatorType: "yellow",
                  indicatorLight: "light-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-16",
                },
                {
                  title: " ",
                  mainText: "Цвет",
                  secondText: "белый с кремовым оттенком",
                  indicatorType: "darken-yellow",
                  indicatorLight: "light-darken-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Число падения",
                  secondText: "240",
                  indicatorType: "orange",
                  indicatorLight: "light-orange",
                  fillWidthPercentage: 65,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Белизна",
                  secondText: "60 усл.ед",
                  indicatorType: "darken-orange",
                  indicatorLight: "light-darken-orange",
                  fillWidthPercentage: 40,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Массовая доля влаги",
                  secondText: "14.8%",
                  indicatorType: "light-red",
                  indicatorLight: "light-light-red",
                  fillWidthPercentage: 82,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Клейковина (сырая)",
                  secondText: "28-30%",
                  indicatorType: "red",
                  indicatorLight: "light-red",
                  fillWidthPercentage: 77,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "ИДК",
                  secondText: "60 ЕД",
                  indicatorType: "darken-red",
                  indicatorLight: "light-darken-red",
                  fillWidthPercentage: 27,
                  margin: "mt-14",
                },
              ]}
            />
            <ProductCard
              indicatorsData={[
                {
                  title: "Крупчатка золотая",
                  mainText: "Сорт",
                  secondText: "высший",
                  indicatorType: "yellow",
                  indicatorLight: "light-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-16",
                },
                {
                  title: " ",
                  mainText: "Цвет",
                  secondText: "белый с кремовым оттенком",
                  indicatorType: "darken-yellow",
                  indicatorLight: "light-darken-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Число падения",
                  secondText: "240",
                  indicatorType: "orange",
                  indicatorLight: "light-orange",
                  fillWidthPercentage: 65,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Белизна",
                  secondText: "60 усл.ед",
                  indicatorType: "darken-orange",
                  indicatorLight: "light-darken-orange",
                  fillWidthPercentage: 40,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Массовая доля влаги",
                  secondText: "14.8%",
                  indicatorType: "light-red",
                  indicatorLight: "light-light-red",
                  fillWidthPercentage: 82,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Клейковина (сырая)",
                  secondText: "28-30%",
                  indicatorType: "red",
                  indicatorLight: "light-red",
                  fillWidthPercentage: 77,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "ИДК",
                  secondText: "60 ЕД",
                  indicatorType: "darken-red",
                  indicatorLight: "light-darken-red",
                  fillWidthPercentage: 27,
                  margin: "mt-14",
                },
              ]}
            />
            <ProductCard
              indicatorsData={[
                {
                  title: "Крупчатка золотая",
                  mainText: "Сорт",
                  secondText: "мука для пиццы",
                  indicatorType: "yellow",
                  indicatorLight: "light-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-16",
                },
                {
                  title: " ",
                  mainText: "Цвет",
                  secondText: "белый с кремовым оттенком",
                  indicatorType: "darken-yellow",
                  indicatorLight: "light-darken-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Число падения",
                  secondText: "270",
                  indicatorType: "orange",
                  indicatorLight: "light-orange",
                  fillWidthPercentage: 65,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Белизна",
                  secondText: "65 усл.ед",
                  indicatorType: "darken-orange",
                  indicatorLight: "light-darken-orange",
                  fillWidthPercentage: 40,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Массовая доля влаги",
                  secondText: "14.8%",
                  indicatorType: "light-red",
                  indicatorLight: "light-light-red",
                  fillWidthPercentage: 82,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Клейковина (сырая)",
                  secondText: "28%",
                  indicatorType: "red",
                  indicatorLight: "light-red",
                  fillWidthPercentage: 77,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "ИДК",
                  secondText: "55 ЕД",
                  indicatorType: "darken-red",
                  indicatorLight: "light-darken-red",
                  fillWidthPercentage: 25,
                  margin: "mt-14",
                },
              ]}
            />
            <ProductCard
              indicatorsData={[
                {
                  title: "Крупчатка золотая",
                  mainText: "Сорт",
                  secondText: "мука для пиццы",
                  indicatorType: "yellow",
                  indicatorLight: "light-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-16",
                },
                {
                  title: " ",
                  mainText: "Цвет",
                  secondText: "белый с кремовым оттенком",
                  indicatorType: "darken-yellow",
                  indicatorLight: "light-darken-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Число падения",
                  secondText: "270",
                  indicatorType: "orange",
                  indicatorLight: "light-orange",
                  fillWidthPercentage: 65,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Белизна",
                  secondText: "65 усл.ед",
                  indicatorType: "darken-orange",
                  indicatorLight: "light-darken-orange",
                  fillWidthPercentage: 40,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Массовая доля влаги",
                  secondText: "14.8%",
                  indicatorType: "light-red",
                  indicatorLight: "light-light-red",
                  fillWidthPercentage: 82,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Клейковина (сырая)",
                  secondText: "28%",
                  indicatorType: "red",
                  indicatorLight: "light-red",
                  fillWidthPercentage: 77,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "ИДК",
                  secondText: "55 ЕД",
                  indicatorType: "darken-red",
                  indicatorLight: "light-darken-red",
                  fillWidthPercentage: 25,
                  margin: "mt-14",
                },
              ]}
            />
            <ProductCard
              indicatorsData={[
                {
                  title: "Царская каша крупа гречневая",
                  mainText: "Сорт",
                  secondText: "первый",
                  indicatorType: "yellow",
                  indicatorLight: "light-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-16",
                },
                {
                  title: " ",
                  mainText: "Эн.ценность (ккал)",
                  secondText: "335",
                  indicatorType: "darken-yellow",
                  indicatorLight: "light-darken-yellow",
                  fillWidthPercentage: 70,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Белки",
                  secondText: "12.6г",
                  indicatorType: "orange",
                  indicatorLight: "light-orange",
                  fillWidthPercentage: 35,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Жиры",
                  secondText: " 3.3г",
                  indicatorType: "darken-orange",
                  indicatorLight: "light-darken-orange",
                  fillWidthPercentage: 34,
                  margin: "mt-14",
                },
                {
                  title: " ",
                  mainText: "Углеводы",
                  secondText: "62.1г",
                  indicatorType: "light-red",
                  indicatorLight: "light-light-red",
                  fillWidthPercentage: 42,
                  margin: "mt-14",
                },
              ]}
            />
          </div>
        </section>
        .
      </div>
    </section>
  );
}

export default products;
