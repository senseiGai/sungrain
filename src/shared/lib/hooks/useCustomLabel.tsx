import { RefObject } from "react";
import gsap from "gsap";

interface LabelStyles {
  bottom: string;
  fontSize: string;
  color: string;
}

export const useCustomLabel = (
  labelRef: RefObject<HTMLElement>,
  focusStyles: LabelStyles,
  blurStyles: LabelStyles
) => {
  const onLabelFocus: React.FocusEventHandler<HTMLInputElement> = () => {
    if (labelRef.current) {
      gsap.to(labelRef.current, {
        ...focusStyles,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  const onLabelBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (labelRef.current && e.target.value === "") {
      gsap.to(labelRef.current, {
        ...blurStyles,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  return { onLabelFocus, onLabelBlur };
};
