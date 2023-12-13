/**
 * The basic display of the clock and animation of the hands is coming from
 * https://github.com/WebDevSimplified/JavaScript-Clock/tree/master.
 *
 */
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./Clock.module.css";
import ClockNumber from "./ClockNumber";

interface Props {
  /** Font used to display the numbers. */
  font?: "sans-serif" | "serif" | "arial" | "monospace";
  /** Ignore font setting and use Roman Numerals instead. */
  romanNumerals?: boolean;
}

/**
 * A customaizable analog clock component.
 */
const Clock = ({ romanNumerals = false, font = "sans-serif" }: Props) => {
  const hourHand = useRef(null);
  const minuteHand = useRef(null);
  const secondHand = useRef(null);

  function setCurrentTimeOnClock(): void {
    const currentDate: Date = new Date();
    const secondsRatio: number = currentDate.getSeconds() / 60;
    const minutesRatio: number = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio: number = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
  }

  function setRotation(elementRef, rotationRatio: number): void {
    elementRef.current.style.setProperty(
      "--rotation",
      `${rotationRatio * 360}`
    );
  }

  useEffect(() => {
    setCurrentTimeOnClock();
    const interval = setInterval(setCurrentTimeOnClock, 1000);

    // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={`${styles.clock}`}>
      <div
        className={`${styles.hand} ${styles.hour}`}
        ref={hourHand}
        data-testid='hour-hand'
      ></div>
      <div
        className={`${styles.hand} ${styles.minute}`}
        ref={minuteHand}
        data-testid='minute-hand'
      ></div>
      <div
        className={`${styles.hand} ${styles.second}`}
        ref={secondHand}
        data-testid='second-hand'
      ></div>
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


Clock.propTypes = {
  font: PropTypes.oneOf(["sans-serif", "serif", "arial", "monospace"]),
  romanNumerals: PropTypes.bool,
};

export default Clock;
