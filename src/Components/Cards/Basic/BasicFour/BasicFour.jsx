// ui-components
import Spacer from "../../../UI-Kit/Spacer/Spacer";

// libraries
import PropTypes from "prop-types";

// icons
import { MdVerifiedUser } from "react-icons/md";

// styling
import Style from "./BasicFour.module.css";

const BasicFour = ({
  icon = <MdVerifiedUser />,
  heading = "Lorem ipusum",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {
  return (
    <div className={Style.basic}>
      <div className={Style.icon}>{icon}</div>
      <Spacer sm />
      <h3 className={Style.heading}>{heading}</h3>
      <Spacer sm />
      <p className={Style.content}>{content}</p>
    </div>
  );
};

// prop-types checking
const { string, node } = PropTypes;

BasicFour.propTypes = {
  icon: node.isRequired,
  heading: string.isRequired,
  content: string.isRequired,
};

export default BasicFour;
