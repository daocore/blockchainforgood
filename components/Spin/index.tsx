import styles from "./style.module.css";

export function Spin() {
  return (
    <div className={styles["typing-indicator"]}>
      <div className={styles["typing-circle"]}></div>
      <div className={styles["typing-circle"]}></div>
      <div className={styles["typing-circle"]}></div>
      <div className={styles["typing-shadow"]}></div>
      <div className={styles["typing-shadow"]}></div>
      <div className={styles["typing-shadow"]}></div>
    </div>
  );
}
