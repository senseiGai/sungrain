import React from "react";

import { Heading } from "@shared/ui/Heading";
import { Indicator } from "@shared/ui/Indicator";
import { Counter } from "@shared/ui/Counter";

import styles from "./styles.module.scss";

export interface ProductData {
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
  indicatorsData: any;
  src: string;
  end: number;
  imgType: string | "default";
  margin?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  indicatorsData,
  src,
  imgType,
  end,
  margin,
}) => {
  const imgClass = `${styles.img} ${styles[imgType]}`;

  return (
    <>
      <section className={`${styles.card} ${margin}`}>
        <Heading headingType="secondary" text={indicatorsData[0].title} />
        {indicatorsData.map((indicator: any, index: number) => (
          <Indicator key={index} {...indicator} />
        ))}
        <img className={imgClass} src={src} alt="flour picture" />
        <Indicator
          indicatorType="dark-green"
          indicatorLight="light-green"
          mainText=""
          secondText=""
          fillWidthPercentage={40}
          margin="mt-12"
        />
      </section>
    </>
  );
};

export default ProductCard;
