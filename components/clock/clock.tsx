/**
 * The basic display of the clock and animation of the hands is coming from
 * https://github.com/WebDevSimplified/JavaScript-Clock/tree/master.
 *
 */
import { useEffect } from "react";
import styles from "./clock.module.css";

export default function Clock() {
  const hourHand: Element = document.querySelector("[data-hour-hand]");
  const minuteHand: Element = document.querySelector("[data-minute-hand]");
  const secondHand: Element = document.querySelector("[data-second-hand]");

  function setClock(): void {
    const currentDate: Date = new Date();
    const secondsRatio: number = currentDate.getSeconds() / 60;
    const minutesRatio: number = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio: number = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
  }

  function setRotation(element: Element, rotationRatio: number): void {
    element.style.setProperty("--rotation", `${rotationRatio * 360}`);
  }

  useEffect(() => {
    setClock();
    const interval = setInterval(setClock, 1000);

    // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    return () => clearInterval(interval);
  }, []);

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
