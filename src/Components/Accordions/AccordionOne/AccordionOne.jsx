// components
import Spacer from "../../../Components/UI-Kit/Spacer/Spacer";

// libraries
import { useState } from "react";
import PropTypes from "prop-types";

// icons
import { BiChevronDown } from "react-icons/bi";

// styling
import Style from "./AccordionOne.module.css";

const AccordionOne = ({
  indicator = {
    icon: <BiChevronDown />,
    activeClassName: Style.activeIcon,
  },
  heading = "Heading Lorem ipsum dolor sit amet, consectetur adipiscing elit heading",
  content = "Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nisi tempora consectetur autem minima exercitationem quibusdam, similique esse deleniti maiores!",
  children,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={Style.accordion}>
      <div
        className={Style.head}
        onClick={() => setIsActive(!isActive)}
        data-testid="accordion-head"
      >
        <h3 className={Style.heading}>{heading}</h3>
        <div
          className={!isActive ? Style.icon : indicator.activeClassName}
          data-testid="accordion-icon"
        >
          {indicator.icon}
        </div>
      </div>
      <Spacer sm />
      <div
        className={!isActive ? Style.body : Style.activeBody}
        data-testid="accordion-body"
      >
        {children || <p className={Style.content}>{content}</p>}
      </div>
    </div>
  );
};

// prop-types checking
const { string, object } = PropTypes;

AccordionOne.propTypes = {
  indicator: object,
  heading: string.isRequired,
};

export default AccordionOne;
