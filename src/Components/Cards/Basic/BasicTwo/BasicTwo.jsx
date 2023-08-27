// ui-components
import Spacer from "../../../../Components/UI-Kit/Spacer/Spacer";

// libraries
import PropTypes from "prop-types";

// router => to be used inside the project
// import { Link } from "react-router-dom";

// images
import bgDefault from "../../../../Assets/backgrounds/bg_basic2.png";

// styling
import Style from "./BasicTwo.module.css";

const BasicTwo = ({
  bgUrl = bgDefault,
  title = "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
  link = "Read More",
  to = "/",
}) => {
  return (
    <div className={Style.basic}>
      <div
        className={Style.cover}
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      />
      <Spacer md />
      <h3 className={Style.title}>{title}</h3>
      <Spacer md />
      {/* remember to uncomment to use in your project */}
      {/* <Link className={Style.cta} to={to}>{link}</Link> */}
      {/* remember to remove in your project */}
      <a className={Style.cta} href={to}>
        {link}
      </a>
    </div>
  );
};

// prop-types checking
const { string } = PropTypes;

BasicTwo.propTypes = {
  bgUrl: string.isRequired,
  title: string.isRequired,
  link: string.isRequired,
  to: string.isRequired,
};

export default BasicTwo;
