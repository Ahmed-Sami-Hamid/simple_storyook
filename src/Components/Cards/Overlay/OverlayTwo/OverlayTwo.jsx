// libraries
import PropTypes from "prop-types";

// images
import bgDefault from "../../../../Assets/backgrounds/bg_overlay2.png";

// styling
import Style from "./OverlayTwo.module.css";

const OverlayTwo = ({
  bgUrl = bgDefault,
  name = "John Doe",
  position = "Project Manager",
}) => {
  return (
    <div
      className={Style.overlay}
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      <div className={Style.details}>
        <h3 className={Style.name}>{name}</h3>
        <p className={Style.position}>{position}</p>
      </div>
    </div>
  );
};

// prop-types checking
const { string } = PropTypes;

OverlayTwo.propTypes = {
  bgUrl: string.isRequired,
  name: string.isRequired,
  position: string.isRequired,
};

export default OverlayTwo;
