import { useRef } from "react";
import { useCustomCursor } from "@shared/lib/hooks/useCustomCursor";
import sun from "@assets/Cursor/Untitled-2.svg";

import styles from "./styles.module.scss";

export const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  useCustomCursor(cursorRef);

  console.log(cursorRef);

  return (
    <div
      className={styles.cursor}
      ref={cursorRef}
      style={{ position: "fixed", pointerEvents: "none", zIndex: 9999 }}
    >
      <img src={sun} alt="pistol" style={{ width: "82px", height: "82px" }} />
    </div>
  );
};
