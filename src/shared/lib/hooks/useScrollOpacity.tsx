import { useEffect, useState } from "react";

const useScrollOpacity = () => {
  const [scrollOpacity, setScrollOpacity] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll: number =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage: number = window.scrollY / maxScroll;
      const coefficient: number = 13;
      setScrollOpacity(percentage * coefficient);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollOpacity;
};

export default useScrollOpacity;
