// ui-components
import ThemeWrapper from "../../../Components/ThemeWrapper/ThemeWrapper";
import Spacer from "../../../Components/UI-Kit/Spacer/Spacer";
import Achievement from "./Components/Achievement/Achievement";
// ui-kit
import { Row, Col } from "@hybris-software/ui-kit";

// libraries
import PropTypes from "prop-types";

// data
import { data, columnGap } from "./Data/data";

// imgs
import bgDefault from "../../../Assets/backgrounds/bg_hero_b10.png";

// styling
import Style from "./HeroTen.module.css";

const HeroTen = ({
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
          <Col className={Style.col} xl={6} lg={12}>
            <div
              className={Style.image}
              style={{
                backgroundImage: `url(${bgUrl})`,
              }}
            />
          </Col>
          <Col className={Style.col} xl={6} lg={12}>
            <span className={Style.tag}>{tag}</span>
            <Spacer xs />
            <h3 className={Style.heading}>{heading}</h3>
            <Spacer md />
            <p className={Style.content}>{content}</p>
            <Spacer lg />
            <div className={Style.achievements}>
              {data.map(({ imageUrl, heading, content }, index) => (
                <Achievement
                  key={index}
                  imageUrl={imageUrl}
                  heading={heading}
                  content={content}
                />
              ))}
            </div>
          </Col>
        </Row>
        <Spacer lg />
      </div>
    </ThemeWrapper>
  );
};

// prop-types checking
const { string } = PropTypes;

HeroTen.propTypes = {
  bgUrl: string.isRequired,
  tag: string.isRequired,
  heading: string.isRequired,
  content: string.isRequired,
};

export default HeroTen;
