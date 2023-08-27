// components
import Spacer from "../../UI-Kit/Spacer/Spacer";

// Libraries
import PropTypes from "prop-types";

// images
import bgDefault from "../../../Assets/backgrounds/bg_list1.png";

// styling
import Style from "./ListOne.module.css";

const ListOne = ({
  bgUrl = bgDefault,
  icon,
  body = {
    heading: "Heading1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboremaxime et ea minima quos architecto fuga ullam",
  },
  children,
}) => {
  return (
    <div className={Style.list}>
      <div
        className={Style.image}
        style={{ backgroundImage: !icon ? `url(${bgUrl})` : "unset" }}
      >
        {icon}
      </div>
      <div>
        {children || (
          <>
            <h3 className={Style.heading}>{body.heading}</h3>
            <Spacer sm />
            <p className={Style.content}>{body.content}</p>
          </>
        )}
      </div>
    </div>
  );
};

const { string, node } = PropTypes;

ListOne.propTypes = {
  bgUrl: string,
  icon: node,
  body: {
    heading: string,
    content: string,
  },
};

export default ListOne;
