// components
import Spacer from "../../../UI-Kit/Spacer/Spacer";

// libraries
import PropTypes from "prop-types";

// styling
import Style from "./QuoteOne.module.css";

const QuoteOne = ({
  heading = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat mauris in dolor accumsan ",
  author = "John Doe",
}) => {
  return (
    <div className={Style.quote}>
      <Spacer lg />
      <h3 className={Style.heading}>{heading}</h3>
      <Spacer sm />
      <span className={Style.author}>{author}</span>
      <Spacer lg />
    </div>
  );
};

// prop-types checking
const { string } = PropTypes;

QuoteOne.propTypes = {
  heading: string.isRequired,
  author: string.isRequired,
};

export default QuoteOne;
