import React, { useRef } from "react";
import { useCustomCursor } from "@shared/lib/hooks/useCustomCursor";

import styles from "../Cursor/styles.module.scss";

export const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useCustomCursor(cursorRef);

  return <div className={styles.cursor} ref={cursorRef} />;
};
