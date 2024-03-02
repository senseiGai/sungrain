import React from "react";
import ProductCard from "@entities/ProductCard/index";

// import { Heading } from "@shared/ui/Heading";
// import { Indicator } from "@shared/ui/Indicator";

import styles from "../Products/styles.module.scss";

function products() {
  return (
    <section className={styles.products}>
      <div className={styles.products__content} id="contacts">
        <section className={styles.products__flower}>
          <div className={styles.products__flower_text}>
            <ProductCard
              indicatorsData={[
                {
                  mainText: "Сорт",
                  secondText: "высший",
                  indicatorType: "yellow",
                  indicatorLight: "light-yellow",
                  fillWidthPercentage: 25,
                  margin: "mt-16",
                },
                {
                  mainText: "Число падения",
                  secondText: "240",
                  indicatorType: "orange",
                  indicatorLight: "light-orange",
                  fillWidthPercentage: 65,
                  margin: "mt-14",
                },
              ]}
            />
          </div>
        </section>
      </div>
    </section>
  );
}

export default products;
