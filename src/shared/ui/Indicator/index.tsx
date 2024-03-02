import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../Indicator/styles.module.scss";

interface IndicatorProps {
  mainText: string;
  secondText: string;
  margin?: string;
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
}

export const Indicator: React.FC<IndicatorProps> = ({
  mainText,
  secondText,
  margin,
  indicatorType,
  indicatorLight,
  fillWidthPercentage,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    }
  }, [inView]);

  const indicatorClass = `${styles.indicator} ${
    styles[`indicator--${indicatorType}`]
  } ${margin ? margin : ""}`;

  const indicatorLightClass = `${styles.indicator} ${
    styles[`indicator--${indicatorLight}`]
  }`;

  const fillStyle = isAnimated
    ? { width: `${fillWidthPercentage}%` }
    : { width: "0%" };

  return (
    <div ref={ref} className={indicatorClass}>
      <div className={indicatorLightClass} style={fillStyle}>
        <span className={styles.main_text}>{mainText}</span>
      </div>
      <span className={styles.second_text}>{secondText}</span>
    </div>
  );
};
