// libraries
import PropTypes from "prop-types";

// images
import bgDefault from "../../../../Assets/backgrounds/bg_overlay3.png";

// styling
import Style from "./OverlayThree.module.css";

const OverlayThree = ({ bgUrl = bgDefault, heading = "Lorem ipsum" }) => {
  return (
    <div
      className={Style.overlay}
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      <div className={Style.details}>
        <h3 className={Style.heading}>{heading}</h3>
      </div>
    </div>
  );
};

// prop-types checking
const { string } = PropTypes;

OverlayThree.propTypes = {
  bgUrl: string.isRequired,
  heading: string.isRequired,
};

export default OverlayThree;
