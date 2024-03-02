import React from "react";
import { Heading } from "@shared/ui/Heading";
import { Indicator } from "@shared/ui/Indicator";

interface ProductData {
  mainText: string;
  secondText: string;
  indicatorType: string;
  indicatorLight: string;
  fillWidthPercentage: number;
  margin: string;
}

const ProductCard: React.FC<{ indicatorsData: ProductData[] }> = ({
  indicatorsData,
}) => {
  return (
    <section>
      <Heading headingType="secondary" text="Русское поле" margin="mt-52" />
      {indicatorsData.map((indicator, index) => (
        <Indicator key={index} {...indicator} />
      ))}
    </section>
  );
};

export default ProductCard;
