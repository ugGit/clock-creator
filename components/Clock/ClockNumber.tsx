import PropTypes from "prop-types";

interface Props {
  /** A number between 1 and 12 */
  number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  /** Format the number as using roman notations (e.g. 9 = IX = 1-10, or 8 = VIII = 5111) */
  romanNumbers?: boolean;
  className?: string;
  style?: string;
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
  className = "",
  style = "",
}): Props => {
  return (
    <div className={className} style={style}>
      {romanNumbers ? romanNumeralMap[number] : number}
    </div>
  );
};

ClockNumber.propTypes = {
  number: PropTypes.number.isRequired,
  romanNumbers: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.string,
};

export default ClockNumber;
