import { useEffect, useRef } from "react";
import styles from "./ValueDisplay.module.css";

function ValueDisplay({ value }) {
  const prevValueRef = useRef("");



useEffect(() => {
  prevValueRef.current = value;
}, [value]);

return (
  <div className={styles.container}>
    <p className={styles.text}>Current Value: {value}</p>
    <p className={styles.text}>Previous Value: {prevValueRef.current}</p>
  </div>
);
}

export default ValueDisplay;
