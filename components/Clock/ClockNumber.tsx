import PropTypes from "prop-types";

interface Props {
  /** A number between 1 and 12 */
  number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  /** Format the number as using roman notations (e.g. 9 = IX = 1-10, or 8 = VIII = 5111) */
  romanNumbers?: boolean;
  /** Rotate the numbers according to their position */
  rotateNumbers?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// a mapping from number to roman numeral
const romanNumeralMap: { [key: number]: string } = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  11: "XI",
  12: "XII",
};

const ClockNumber = ({
  number,
  romanNumbers = false,
  rotateNumbers = true,
  className = "",
  style = {} as React.CSSProperties,
}): Props => {
  const counterRotation = rotateNumbers ? -1 : 0;
  return (
    <div className={className} style={style}>
      <div
        style={{
          transform: `rotate(calc(var(--rotation) * ${counterRotation})`,
        }}
      >
        {romanNumbers ? romanNumeralMap[number] : number}
      </div>
    </div>
  );
};

ClockNumber.propTypes = {
  number: PropTypes.number.isRequired,
  romanNumbers: PropTypes.bool,
  rotateNumbers: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default ClockNumber;
