import React from "react";

import { Heading } from "@shared/ui/Heading";
import { Indicator } from "@shared/ui/Indicator";
import { IndicatorPrice } from "@shared/ui/IndicatorPrice";

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
}

interface ProductCardProps {
  indicatorsData: any;
  end: number;
  src: string;
  imgType: string | "default";
  margin?: string;
  fillWidthPercentage: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  indicatorsData,
  src,
  imgType,
  end,
  margin,
  fillWidthPercentage,
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
        <IndicatorPrice
          end={end}
          indicatorLight="light-green"
          indicatorType="dark-green"
          fillWidthPercentage={fillWidthPercentage}
          margin="mt-10"
        />
      </section>
    </>
  );
};

export default ProductCard;
