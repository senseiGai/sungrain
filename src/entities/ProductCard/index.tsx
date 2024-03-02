import React from "react";
import { Heading } from "@shared/ui/Heading";
import { Indicator } from "@shared/ui/Indicator";

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

const ProductCard: React.FC<{ indicatorsData: ProductData[] }> = ({
  indicatorsData,
}) => {
  return (
    <section>
      <Heading
        headingType="secondary"
        text={indicatorsData[0].title}
        margin="mt-52"
      />
      {indicatorsData.map((indicator, index) => (
        <Indicator key={index} {...indicator} />
      ))}
    </section>
  );
};

export default ProductCard;
