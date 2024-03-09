import React from "react";

import { BigText } from "@shared/ui/BigText";
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
  subtitle?: string;
}

interface ProductCardProps {
  indicatorsData: any;
  end: number;
  src: string;
  imgType: string | "default" | "king";
  margin?: string;
  fillWidthPercentage: number;
  text: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  indicatorsData,
  src,
  imgType,
  end,
  margin,
  fillWidthPercentage,
  text,
}) => {
  const imgClass = `${styles.img} ${styles[imgType]}`;

  return (
    <>
      <section className={`${styles.card} ${margin}`}>
        <BigText
          bigTextType="secondary"
          text={indicatorsData[0].title}
          subtext={indicatorsData[0].subtitle}
        />
        {indicatorsData.map((indicator: any, index: number) => (
          <Indicator key={index} {...indicator} />
        ))}
        <IndicatorPrice
          end={end}
          indicatorLight="light-green"
          indicatorType="dark-green"
          fillWidthPercentage={fillWidthPercentage}
          margin="mt-10"
          text={text}
        />
        <img className={imgClass} src={src} alt="flour picture" />
      </section>
    </>
  );
};

export default ProductCard;
