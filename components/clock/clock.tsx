import styles from "./clock.module.css";

export default function Clock() {
  return (
    <div className={`${styles.clock}`}>
      <div className={`${styles.hand} ${styles.hour}`} data-hour-hand></div>
      <div className={`${styles.hand} ${styles.minute}`} data-minute-hand></div>
      <div className={`${styles.hand} ${styles.second}`} data-second-hand></div>
      <div className={`${styles.number} ${styles.number1}`}>1</div>
      <div className={`${styles.number} ${styles.number2}`}>2</div>
      <div className={`${styles.number} ${styles.number3}`}>3</div>
      <div className={`${styles.number} ${styles.number4}`}>4</div>
      <div className={`${styles.number} ${styles.number5}`}>5</div>
      <div className={`${styles.number} ${styles.number6}`}>6</div>
      <div className={`${styles.number} ${styles.number7}`}>7</div>
      <div className={`${styles.number} ${styles.number8}`}>8</div>
      <div className={`${styles.number} ${styles.number9}`}>9</div>
      <div className={`${styles.number} ${styles.number10}`}>10</div>
      <div className={`${styles.number} ${styles.number11}`}>11</div>
      <div className={`${styles.number} ${styles.number12}`}>12</div>
    </div>
  );
}
