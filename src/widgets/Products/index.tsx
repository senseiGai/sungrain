import React from "react";
import ProductCard from "@entities/ProductCard/index";
import styles from "../Products/styles.module.scss";

import Russian from "@assets/Products/22.webp";
import Golden50 from "@assets/Products/golden50.webp";
import GoldenCake from "@assets/Products/goldencake.webp";
import Golden2 from "@assets/Products/Монтажная область 1.webp";
import Golden25 from "@assets/Products/Монтажная область 2.webp";
import Pizza from "@assets/Products/Монтажная область 3.webp";
import King from "@assets/Products/каша.webp";
import { indicatorsContent } from "@shared/lib/content/indicatorsContent";

function Products() {
  const productImages = [
    Russian,
    Golden50,
    GoldenCake,
    Golden2,
    Golden25,
    Pizza,
    King,
  ];
  const imgTypes = ["default"];
  const prices = [11500, 14500, 2900, 700, 10000, 4000, 8000];
  const text = [
    "тг / 50кг",
    "тг / 50кг",
    "тг / 10кг",
    "тг / 2кг",
    "тг / 25кг",
    "тг / 10кг",
    "тг / 25кг",
  ];

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const minFillPercentage = 35;
  const maxFillPercentage = 100;

  const fillWidthPercentages = prices.map((price) => {
    if (maxPrice - minPrice === 0) return minFillPercentage;
    const normalizedPrice = (price - minPrice) / (maxPrice - minPrice);
    return (
      minFillPercentage +
      normalizedPrice * (maxFillPercentage - minFillPercentage)
    );
  });

  return (
    <section className={styles.products} id="products">
      <div className={styles.products__content}>
        <div className={styles.products__flour}>
          {indicatorsContent.map((product, index) => (
            <ProductCard
              key={index}
              margin={index > 0 ? "mt-52" : "mt-0"}
              indicatorsData={product.indicatorsData}
              src={productImages[index % productImages.length]}
              imgType={imgTypes[index % imgTypes.length]}
              end={prices[index % prices.length]}
              fillWidthPercentage={fillWidthPercentages[index % prices.length]}
              text={text[index % text.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
