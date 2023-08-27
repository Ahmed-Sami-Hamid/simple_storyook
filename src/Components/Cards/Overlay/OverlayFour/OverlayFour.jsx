// ui-components
import Spacer from "../../../UI-Kit/Spacer/Spacer";

// libraries
import PropTypes from "prop-types";

// images
import bgDefault from "../../../../Assets/backgrounds/bg_overlay4.png";

// styling
import Style from "./OverlayFour.module.css";

const OverlayFour = ({
  bgUrl = bgDefault,
  interval = "2021 - Presente",
  position = "Co-Founder & CEO",
  company = "@KAAR",
}) => {
  return (
    <div
      className={Style.overlay}
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      <div className={Style.details}>
        <h3 className={Style.interval}>{interval}</h3>
        <Spacer sm />
        <p className={Style.position}>{position}</p>
        <span className={Style.company}>{company}</span>
      </div>
    </div>
  );
};

// prop-types checking
const { string } = PropTypes;

OverlayFour.propTypes = {
  bgUrl: string.isRequired,
  interval: string.isRequired,
  position: string.isRequired,
  company: string.isRequired,
};

export default OverlayFour;
