// components
import Spacer from "../../../../Components/UI-Kit/Spacer/Spacer";
// libraries
import PropTypes from "prop-types";

// images
import bgDefault from "../../../../Assets/avatars/avatar_b6.png";

// styling
import Style from "./BasicSix.module.css";

const BasicSix = ({
  bgUrl = bgDefault,
  name = "Jane Doe",
  position = "Chief Technical Officer",
}) => {
  return (
    <div className={Style.basic}>
      <div
        className={Style.cover}
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      />
      <div className={Style.details}>
        <Spacer sm />
        <h3 className={Style.name}>{name}</h3>
        <Spacer xs />
        <span className={Style.position}>{position}</span>
        <Spacer md />
      </div>
    </div>
  );
};

// prop-types checking
const { string } = PropTypes;

BasicSix.propTypes = {
  bgUrl: string.isRequired,
  name: string.isRequired,
  position: string.isRequired,
};

export default BasicSix;
