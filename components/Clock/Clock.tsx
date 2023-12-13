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

  const range = (end: number) => {
    /**
     * Return an array of numbers from 1 to end.
     */
    return [...Array(end + 1).keys()].slice(1);
  };

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
      {range(12).map((number) => {
        const rotation = { "--rotation": `${number * 30}deg` };
        return (
          <ClockNumber
            number={number}
            romanNumbers={romanNumerals}
            className={`${styles.number}`}
            style={rotation}
          />
        );
      })}
    </div>
  );
};

Clock.propTypes = {
  font: PropTypes.oneOf(["sans-serif", "serif", "arial", "monospace"]),
  romanNumerals: PropTypes.bool,
};

export default Clock;
