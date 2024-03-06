import { RefObject } from "react";
import gsap from "gsap";

export const useCustomLabel = (labelRef: RefObject<HTMLElement>) => {
  const onLabelFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (labelRef.current) {
      gsap.to(labelRef.current, {
        bottom: "2rem",
        fontSize: "1rem",
        color: "#d25127",
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  const onLabelBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (labelRef.current && e.target.value === "") {
      gsap.to(labelRef.current, {
        bottom: "4px",
        fontSize: "1rem",
        color: "#d25127",
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  return { onLabelFocus, onLabelBlur };
};
