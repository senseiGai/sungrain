import React from "react";

import { Heading } from "@shared/ui/Heading";
import { Indicator } from "@shared/ui/Indicator";

import styles from "./styles.module.scss";

interface ProductData {
  mainText: string;
  secondText: string;
  indicatorType:
    | "yellow"
    | "darken-yellow"
    | "orange"
    | "darken-orange"
    | "light-red"
    | "red"
    | "darken-red";
  indicatorLight:
    | "light-yellow"
    | "light-darken-yellow"
    | "light-orange"
    | "light-darken-orange"
    | "light-light-red"
    | "light-red"
    | "light-darken-red";
  fillWidthPercentage: number;
  margin: string;
  title: string;
}

interface ProductCardProps {
  indicatorsData: ProductData[];
  src: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ indicatorsData, src }) => {
  return (
    <section className={styles.card}>
      <Heading
        headingType="secondary"
        text={indicatorsData[0].title}
        margin="mt-52"
      />
      {indicatorsData.map((indicator, index) => (
        <Indicator key={index} {...indicator} />
      ))}
      <img
        className={styles.card__flour_picture}
        src={src}
        alt="flour picture"
      />
    </section>
  );
};

export default ProductCard;
