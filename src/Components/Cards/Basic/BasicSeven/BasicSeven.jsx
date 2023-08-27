// components
import Spacer from "../../../../Components/UI-Kit/Spacer/Spacer";

// libraries
import PropTypes from "prop-types";

// remember to uncomment when using in your project
// import { Link } from "react-router-dom";

// icons
import { BsArrowRight } from "react-icons/bs";

// styling
import Style from "./BasicSeven.module.css";

const BasicSeven = ({
  number = 1,
  heading = "Lorem ipsum dolor sit amet",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum mattis leo, at tincidunt nisi auctor vel. ",
  link = "Consectetur",
}) => {
  const num = number.toString().padStart(2, "0") + ".";

  return (
    <div className={Style.basic}>
      <span className={Style.number}>{num}</span>
      <Spacer md />
      <h3 className={Style.heading}>{heading}</h3>
      <Spacer md />
      <p className={Style.content}>{content}</p>
      <Spacer md />
      {/* remember to uncomment to use in your project */}
      {/* <Link className={Style.cta}>
          {link}
          &nbsp;
          <BsArrowRight />
        </Link> */}
      {/* remember to remove in your project */}
      <a className={Style.cta} href="/">
        {link}
        &nbsp;
        <BsArrowRight />
      </a>
    </div>
  );
};

// prop-types checking
const { string, number } = PropTypes;

BasicSeven.propTypes = {
  number: number.isRequired,
  heading: string.isRequired,
  content: string.isRequired,
  link: string.isRequired,
};

export default BasicSeven;
