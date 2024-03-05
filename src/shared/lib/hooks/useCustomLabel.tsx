export const useCustomLabel = (
  labelRef: RefObject<HTMLLabelElement>,
  focusStyles: Record<string, string>,
  blurStyles: Record<string, string>
) => {
  const onLabelFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
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
