// components
import Spacer from "../../../UI-Kit/Spacer/Spacer";

// libraries
import PropTypes from "prop-types";

// images
import avatarDefault from "../../../../Assets/avatars/avatar_b8.png";

// styling
import Style from "./BasicEight.module.css";

const BasicEight = ({
  avatarUrl = avatarDefault,
  heading = "Lorem ipsum",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id iaculis odio. Maecenas eu enim id lacus aliquet consectetur. Nullam interdum eleifend mauris et consectetur. Curabitur ut faucibus ligula, rutrum imperdiet enim. Curabitur consequat suscipit ligula.",
}) => {
  return (
    <>
      {/* preserve avatar overflow */}
      <Spacer h={40} />
      <div className={Style.basic}>
        <div
          className={Style.avatar}
          style={{ backgroundImage: `url(${avatarUrl})` }}
        />
        <Spacer h={200} />
        <h3 className={Style.heading}>{heading}</h3>
        <Spacer sm />
        <p className={Style.content}>{content}</p>
      </div>
    </>
  );
};

// prop-types checking
const { string } = PropTypes;

BasicEight.propTypes = {
  avatarUrl: string.isRequired,
  heading: string.isRequired,
  content: string.isRequired,
};

export default BasicEight;
