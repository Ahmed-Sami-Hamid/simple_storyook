// ui-components
import Spacer from "../../../UI-Kit/Spacer/Spacer";

// libraries
import PropTypes from "prop-types";

// icons
import { GrSoundcloud } from "react-icons/gr";

// styling
import Style from "./OverlayFive.module.css";

const OverlayFive = ({
  icon = <GrSoundcloud />,
  heading = "Lorem",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum mattis leo, at tincidunt nisi auctor vel. Sed tortor massa, laoreet mollis suscipit sed, tempor quis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}) => {
  return (
    <div className={Style.overlay}>
      <div className={Style.icon}>{icon}</div>
      <Spacer sm />
      <h3 className={Style.heading}>{heading}</h3>
      <Spacer md />
      <p className={Style.content}>{content}</p>
    </div>
  );
};

// prop-types checking
const { string, node } = PropTypes;

OverlayFive.propTypes = {
  icon: node.isRequired,
  heading: string.isRequired,
  content: string.isRequired,
};

export default OverlayFive;
