import React from "react";
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
}

export const Indicator: React.FC<IndicatorProps> = ({
  mainText,
  secondText,
  margin,
  indicatorType,
  indicatorLight,
}) => {
  const indicatorClass = `${styles.indicator} ${
    styles[`indicator--${indicatorType}`]
  } ${margin ? margin : ""}`;

  const indicatorLightClass = `${styles.indicator} ${
    styles[`indicator--${indicatorLight}`]
  }`;

  return (
    <div className={indicatorClass}>
      <div className={indicatorLightClass}>
        <span className={styles.main_text}>{mainText}</span>
      </div>
      <span className={styles.second_text}>{secondText}</span>
    </div>
  );
};
