import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import styles from "../Indicator/styles.module.scss";

interface IndicatorProps {
  mainText: string;
  secondText: string;
  margin?: string;
  marginRight?: string;
  indicatorType:
    | "yellow"
    | "darken-yellow"
    | "orange"
    | "darken-orange"
    | "light-red"
    | "red"
    | "darken-red"
    | "dark-green";
  indicatorLight:
    | "light-yellow"
    | "light-darken-yellow"
    | "light-orange"
    | "light-darken-orange"
    | "light-light-red"
    | "light-red"
    | "light-darken-red"
    | "light-green";
  fillWidthPercentage: number;
}

export const Indicator: React.FC<IndicatorProps> = ({
  mainText,
  secondText,
  margin,
  indicatorType,
  indicatorLight,
  fillWidthPercentage,
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
        <span className={styles.main_text} style={textStyle}>
          {mainText}
        </span>
      </div>
      <span className={styles.second_text}>{secondText}</span>
    </div>
  );
};
