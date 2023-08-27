// ui-components
import Spacer from "../../../UI-Kit/Spacer/Spacer";

// libraries
import PropTypes from "prop-types";

// images
import bgDefault from "../../../../Assets/avatars/avatar_b3.png";

// styling
import Style from "./BasicThree.module.css";

const BasicThree = ({
  bgUrl = bgDefault,
  name = "John Doe",
  position = "CEO",
}) => {
  return (
    <div className={Style.basic}>
      <div className={Style.coverBg} />
      <div
        className={Style.cover}
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      />
      <div className={Style.details}>
        <Spacer md />
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

BasicThree.propTypes = {
  bgUrl: string.isRequired,
  name: string.isRequired,
  position: string.isRequired,
};

export default BasicThree;
