// components
import Spacer from "../../../../UI-Kit/Spacer/Spacer";

// libraries
import PropTypes from "prop-types";

// styling
import Style from "./Feature.module.css";

const Feature = ({ icon, heading, content, current }) => {
  return (
    <div className={current ? Style.current : null}>
      <div className={Style.head}>
        <div className={Style.icon}>{icon}</div>
        <h3 className={Style.heading}>{heading}</h3>
      </div>
      <Spacer sm />
      <p className={Style.content}>{content}</p>
    </div>
  );
};

// prop-types checking
const { string, number, node } = PropTypes;

Feature.propTypes = {
  icon: node.isRequired,
  heading: string.isRequired,
  content: string.isRequired,
  current: number.isRequired,
};

export default Feature;
