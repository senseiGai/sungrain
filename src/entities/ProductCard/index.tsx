import React from "react";

import { Heading } from "@shared/ui/Heading";
import { Indicator } from "@shared/ui/Indicator";
import { Counter } from "@shared/ui/Counter";

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
  end: number;
}

interface ProductCardProps {
  indicatorsData: ProductData[];
  src: string;
  end: number;
  imgType: "default" | "special" | "king";
}

const ProductCard: React.FC<ProductCardProps> = ({
  indicatorsData,
  src,
  imgType,
  end,
}) => {
  const imgClass = `${styles.img} ${styles[imgType]}`;

  return (
    <>
      <section className={styles.card}>
        <Heading headingType="secondary" text={indicatorsData[0].title} />
        {indicatorsData.map((indicator, index) => (
          <Indicator key={index} {...indicator} />
        ))}
        <img className={imgClass} src={src} alt="flour picture" />
        <Counter duration={1.4} end={end} text="тг" />
      </section>
    </>
  );
};

export default ProductCard;
