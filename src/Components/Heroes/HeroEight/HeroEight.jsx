// ui-components
import ThemeWrapper from "../../../Components/ThemeWrapper/ThemeWrapper";
import Spacer from "../../../Components/UI-Kit/Spacer/Spacer";
// ui-kit
import { Row, Col } from "@hybris-software/ui-kit";

// libraries
import PropTypes from "prop-types";

// data
import columnGap from "./Data/data";

// imgs
import bgDefault from "../../../Assets/backgrounds/bg_hero_b8.png";

// styling
import Style from "./HeroEight.module.css";

const HeroEight = ({
  bgUrl = bgDefault,
  tag = "LOREM",
  heading = "Lorem ipsum dolor sit amet",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at tristique ex, ac blandit metus. Morbi efficitur turpis vitae ultricies hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In id gravida lectus. Nullam dignissim arcu non convallis vestibulum. Duis id nulla mauris. Phasellus a hendrerit eros, et facilisis felis.",
}) => {
  return (
    <ThemeWrapper>
      <div className={Style.hero}>
        <Spacer lg />
        <Row columnGap={columnGap}>
          <Col className={Style.col} lg={6}>
            <div
              className={Style.image}
              style={{
                backgroundImage: `url(${bgUrl})`,
              }}
            />
          </Col>
          <Col className={Style.col} lg={6}>
            <span className={Style.tag}>{tag}</span>
            <Spacer xs />
            <h3 className={Style.heading}>{heading}</h3>
            <Spacer md />
            <p className={Style.content}>{content}</p>
          </Col>
        </Row>
        <Spacer lg />
      </div>
    </ThemeWrapper>
  );
};

// prop-types checking
const { string } = PropTypes;

HeroEight.propTypes = {
  bgUrl: string.isRequired,
  tag: string.isRequired,
  heading: string.isRequired,
  content: string.isRequired,
};

export default HeroEight;
