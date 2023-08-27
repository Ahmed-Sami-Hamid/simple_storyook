// ui-components
import Spacer from "../../../../Components/UI-Kit/Spacer/Spacer";

// libraries
import PropTypes from "prop-types";

// images
import bgDefault from "../../../../Assets/backgrounds/bg_overlay1.png";

// styling
import Style from "./OverlayOne.module.css";

const OverlayOne = ({
  bgUrl = bgDefault,
  tag = "Consectetur",
  title = "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla ultricies massa.",
  date = "January 26, 2022",
}) => {
  return (
    <div
      className={Style.overlay}
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      <Spacer xl />
      <span className={Style.tag}>{tag}</span>
      <Spacer xs />
      <h3 className={Style.title}>{title}</h3>
      <Spacer sm />
      <div className={Style.content}>
        <p>{content}</p>
      </div>
      <Spacer md />
      <span className={Style.date}>{date}</span>
    </div>
  );
};

// prop-types checking
const { string } = PropTypes;

OverlayOne.propTypes = {
  bgUrl: string.isRequired,
  tag: string.isRequired,
  title: string.isRequired,
  content: string.isRequired,
  date: string.isRequired,
};

export default OverlayOne;
