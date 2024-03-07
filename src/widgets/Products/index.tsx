import React from "react";

import ProductCard from "@entities/ProductCard/index";
import { Counter } from "@shared/ui/Counter";

import styles from "../Products/styles.module.scss";

import Russian from "../../assets/Products/russian.webp";
import Golden50 from "../../assets/Products/golden50.webp";
import GoldenCake from "../../assets/Products/goldencake.webp";
import Golden2 from "../../assets/Products/golden2.webp";
import Golden25 from "../../assets/Products/golden25.webp";
import Pizza from "../../assets/Products/pizza.webp";
import King from "@assets/Products/IMG_0029_1_2.webp";

function products() {
  return (
    <section className={styles.products}>
      <div className={styles.products__content}>
        <div className={styles.products__flour}>
          <div className={styles.products__flour_card} id="products">
            <ProductCard
              imgType="special"
              src={Russian}
              indicatorsData={[
                {
                  title: "Русское поле",
                  mainText: "Сорт",
                  secondText: "высший",
                  indicatorType: "yellow",
                  indicatorLight: "light-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-12",
                },
                {
                  title: " ",
                  mainText: "Цвет",
                  secondText: "белый с кремовым оттенком",
                  indicatorType: "darken-yellow",
                  indicatorLight: "light-darken-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Число падения",
                  secondText: "240",
                  indicatorType: "orange",
                  indicatorLight: "light-orange",
                  fillWidthPercentage: 65,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Белизна",
                  secondText: "56 усл.ед",
                  indicatorType: "darken-orange",
                  indicatorLight: "light-darken-orange",
                  fillWidthPercentage: 40,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Массовая доля влаги",
                  secondText: "14.6%",
                  indicatorType: "light-red",
                  indicatorLight: "light-light-red",
                  fillWidthPercentage: 80,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Клейковина (сырая)",
                  secondText: "28%",
                  indicatorType: "red",
                  indicatorLight: "light-red",
                  fillWidthPercentage: 70,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "ИДК",
                  secondText: "75 ЕД",
                  indicatorType: "darken-red",
                  indicatorLight: "light-darken-red",
                  fillWidthPercentage: 30,
                  margin: "mt-10",
                },
              ]}
            />
            <Counter duration={1.4} end={11500} text="тг" marginTop="mt-5" />
          </div>
          <div className={styles.products__flour_card}>
            <ProductCard
              imgType="special"
              src={Golden50}
              indicatorsData={[
                {
                  title: "Крупчатка золотая",
                  mainText: "Сорт",
                  secondText: "высший",
                  indicatorType: "yellow",
                  indicatorLight: "light-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-12",
                },
                {
                  title: " ",
                  mainText: "Цвет",
                  secondText: "белый с кремовым оттенком",
                  indicatorType: "darken-yellow",
                  indicatorLight: "light-darken-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Число падения",
                  secondText: "240",
                  indicatorType: "orange",
                  indicatorLight: "light-orange",
                  fillWidthPercentage: 65,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Белизна",
                  secondText: "60 усл.ед",
                  indicatorType: "darken-orange",
                  indicatorLight: "light-darken-orange",
                  fillWidthPercentage: 40,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Массовая доля влаги",
                  secondText: "14.8%",
                  indicatorType: "light-red",
                  indicatorLight: "light-light-red",
                  fillWidthPercentage: 82,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Клейковина (сырая)",
                  secondText: "28-30%",
                  indicatorType: "red",
                  indicatorLight: "light-red",
                  fillWidthPercentage: 77,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "ИДК",
                  secondText: "60 ЕД",
                  indicatorType: "darken-red",
                  indicatorLight: "light-darken-red",
                  fillWidthPercentage: 27,
                  margin: "mt-10",
                },
              ]}
            />
            <Counter duration={1.4} end={14500} text="тг" marginTop="mt-5" />
          </div>
          <div className={styles.products__flour_card}>
            <ProductCard
              imgType="default"
              src={GoldenCake}
              indicatorsData={[
                {
                  title: "Крупчатка золотая",
                  mainText: "Сорт",
                  secondText: "высший",
                  indicatorType: "yellow",
                  indicatorLight: "light-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-12",
                },
                {
                  title: " ",
                  mainText: "Цвет",
                  secondText: "белый с кремовым оттенком",
                  indicatorType: "darken-yellow",
                  indicatorLight: "light-darken-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Число падения",
                  secondText: "240",
                  indicatorType: "orange",
                  indicatorLight: "light-orange",
                  fillWidthPercentage: 65,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Белизна",
                  secondText: "60 усл.ед",
                  indicatorType: "darken-orange",
                  indicatorLight: "light-darken-orange",
                  fillWidthPercentage: 40,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Массовая доля влаги",
                  secondText: "14.8%",
                  indicatorType: "light-red",
                  indicatorLight: "light-light-red",
                  fillWidthPercentage: 82,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Клейковина (сырая)",
                  secondText: "28-30%",
                  indicatorType: "red",
                  indicatorLight: "light-red",
                  fillWidthPercentage: 77,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "ИДК",
                  secondText: "60 ЕД",
                  indicatorType: "darken-red",
                  indicatorLight: "light-darken-red",
                  fillWidthPercentage: 27,
                  margin: "mt-10",
                },
              ]}
            />
            <Counter duration={1.4} end={2900} text="тг" marginTop="mt-5" />
          </div>
          <div className={styles.products__flour_card}>
            <ProductCard
              imgType="special"
              src={Golden2}
              indicatorsData={[
                {
                  title: "Крупчатка золотая",
                  mainText: "Сорт",
                  secondText: "высший",
                  indicatorType: "yellow",
                  indicatorLight: "light-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-12",
                },
                {
                  title: " ",
                  mainText: "Цвет",
                  secondText: "белый с кремовым оттенком",
                  indicatorType: "darken-yellow",
                  indicatorLight: "light-darken-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Число падения",
                  secondText: "240",
                  indicatorType: "orange",
                  indicatorLight: "light-orange",
                  fillWidthPercentage: 65,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Белизна",
                  secondText: "60 усл.ед",
                  indicatorType: "darken-orange",
                  indicatorLight: "light-darken-orange",
                  fillWidthPercentage: 40,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Массовая доля влаги",
                  secondText: "14.8%",
                  indicatorType: "light-red",
                  indicatorLight: "light-light-red",
                  fillWidthPercentage: 82,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Клейковина (сырая)",
                  secondText: "28-30%",
                  indicatorType: "red",
                  indicatorLight: "light-red",
                  fillWidthPercentage: 77,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "ИДК",
                  secondText: "60 ЕД",
                  indicatorType: "darken-red",
                  indicatorLight: "light-darken-red",
                  fillWidthPercentage: 27,
                  margin: "mt-10",
                },
              ]}
            />
            <Counter duration={1.4} end={700} text="тг" marginTop="mt-5" />
          </div>
          <div className={styles.products__flour_card}>
            <ProductCard
              imgType="special"
              src={Golden25}
              indicatorsData={[
                {
                  title: "Крупчатка золотая",
                  mainText: "Сорт",
                  secondText: "мука для пиццы",
                  indicatorType: "yellow",
                  indicatorLight: "light-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-12",
                },
                {
                  title: " ",
                  mainText: "Цвет",
                  secondText: "белый с кремовым оттенком",
                  indicatorType: "darken-yellow",
                  indicatorLight: "light-darken-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Число падения",
                  secondText: "270",
                  indicatorType: "orange",
                  indicatorLight: "light-orange",
                  fillWidthPercentage: 65,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Белизна",
                  secondText: "65 усл.ед",
                  indicatorType: "darken-orange",
                  indicatorLight: "light-darken-orange",
                  fillWidthPercentage: 40,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Массовая доля влаги",
                  secondText: "14.8%",
                  indicatorType: "light-red",
                  indicatorLight: "light-light-red",
                  fillWidthPercentage: 82,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Клейковина (сырая)",
                  secondText: "28%",
                  indicatorType: "red",
                  indicatorLight: "light-red",
                  fillWidthPercentage: 77,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "ИДК",
                  secondText: "55 ЕД",
                  indicatorType: "darken-red",
                  indicatorLight: "light-darken-red",
                  fillWidthPercentage: 25,
                  margin: "mt-10",
                },
              ]}
            />
            <Counter duration={1.4} end={10000} text="тг" marginTop="mt-5" />
          </div>
          <div className={styles.products__flour_card}>
            <ProductCard
              imgType="special"
              src={Pizza}
              indicatorsData={[
                {
                  title: "Крупчатка золотая",
                  mainText: "Сорт",
                  secondText: "мука для пиццы",
                  indicatorType: "yellow",
                  indicatorLight: "light-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-12",
                },
                {
                  title: " ",
                  mainText: "Цвет",
                  secondText: "белый с кремовым оттенком",
                  indicatorType: "darken-yellow",
                  indicatorLight: "light-darken-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Число падения",
                  secondText: "270",
                  indicatorType: "orange",
                  indicatorLight: "light-orange",
                  fillWidthPercentage: 65,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Белизна",
                  secondText: "65 усл.ед",
                  indicatorType: "darken-orange",
                  indicatorLight: "light-darken-orange",
                  fillWidthPercentage: 40,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Массовая доля влаги",
                  secondText: "14.8%",
                  indicatorType: "light-red",
                  indicatorLight: "light-light-red",
                  fillWidthPercentage: 82,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Клейковина (сырая)",
                  secondText: "28%",
                  indicatorType: "red",
                  indicatorLight: "light-red",
                  fillWidthPercentage: 77,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "ИДК",
                  secondText: "55 ЕД",
                  indicatorType: "darken-red",
                  indicatorLight: "light-darken-red",
                  fillWidthPercentage: 25,
                  margin: "mt-10",
                },
              ]}
            />
            <Counter duration={1.4} end={4000} text="тг" marginTop="mt-5" />
          </div>
          <div className={styles.products__flour_card}>
            <ProductCard
              imgType="king"
              src={King}
              indicatorsData={[
                {
                  title: "Царская каша крупа гречневая",
                  mainText: "Сорт",
                  secondText: "первый",
                  indicatorType: "yellow",
                  indicatorLight: "light-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-12",
                },
                {
                  title: " ",
                  mainText: "Эн.ценность (ккал)",
                  secondText: "335",
                  indicatorType: "darken-yellow",
                  indicatorLight: "light-darken-yellow",
                  fillWidthPercentage: 70,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Белки",
                  secondText: "12.6г",
                  indicatorType: "orange",
                  indicatorLight: "light-orange",
                  fillWidthPercentage: 35,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Жиры",
                  secondText: " 3.3г",
                  indicatorType: "darken-orange",
                  indicatorLight: "light-darken-orange",
                  fillWidthPercentage: 34,
                  margin: "mt-10",
                },
                {
                  title: " ",
                  mainText: "Углеводы",
                  secondText: "62.1г",
                  indicatorType: "light-red",
                  indicatorLight: "light-light-red",
                  fillWidthPercentage: 42,
                  margin: "mt-10",
                },
              ]}
            />
            <Counter duration={1.4} end={8000} text="тг" marginTop="mt-5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default products;
