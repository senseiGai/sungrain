import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import styles from "../Indicator/styles.module.scss";
import { Counter } from "../Counter/index";

interface IndicatorPriceProps {
  margin?: string;
  indicatorType: "dark-green";
  indicatorLight: "light-green";
  fillWidthPercentage: number;
  end: number;
  text: string;
}

export const IndicatorPrice: React.FC<IndicatorPriceProps> = ({
  margin,
  end,
  indicatorType,
  indicatorLight,
  fillWidthPercentage,
  text,
  ...rest
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isAnimated, setIsAnimated] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
      setTimeout(() => {
        setIsTextVisible(true);
      }, 500);
    }
  }, [inView]);

  const indicatorClass = `${styles.indicator} ${
    styles[`indicator--${indicatorType}`]
  } ${margin ? margin : ""}`;

  const indicatorLightClass = `${styles.indicator} ${
    styles[`indicator--${indicatorLight}`]
  }`;

  const fillStyle = isAnimated
    ? { width: `${fillWidthPercentage}%`, transition: "width 0.5s ease-in-out" }
    : { width: "0%" };

  const textStyle = isTextVisible
    ? {
        opacity: 1,
        transition: "opacity 0.3s ease-in-out",
      }
    : { opacity: 0 };

  return (
    <div ref={ref} className={indicatorClass} {...rest}>
      <div className={indicatorLightClass} style={fillStyle}>
        <span className={styles.price_text} style={textStyle}>
          <Counter duration={1.4} end={end} text={text} />
        </span>
      </div>
    </div>
  );
};
