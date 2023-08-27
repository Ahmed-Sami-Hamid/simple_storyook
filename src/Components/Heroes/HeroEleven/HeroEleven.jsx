// ui-components
import ThemeWrapper from "../../../Components/ThemeWrapper/ThemeWrapper";
import Spacer from "../../../Components/UI-Kit/Spacer/Spacer";
// ui-kit
import { Row, Col } from "@hybris-software/ui-kit";

// remember to uncomment to use in your project
// // router
// import { Link } from "react-router-dom";

// libraries
import PropTypes from "prop-types";

// data
import columnGap from "./Data/data";

// imgs & icons
import bgDefault from "../../../Assets/backgrounds/bg_hero_b11.png";
import { FiArrowDownRight } from "react-icons/fi";

// styling
import Style from "./HeroEleven.module.css";

const HeroEleven = ({
  bgUrl = bgDefault,
  tag = "LOREM",
  heading = "Lorem ipsum dolor sit amet",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at tristique ex, ac blandit metus. Morbi efficitur turpis vitae ultricies hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In id gravida lectus. Nullam dignissim arcu non convallis vestibulum. Duis id nulla mauris. Phasellus a hendrerit eros, et facilisis felis. Fusce quis posuere mi. Sed sit amet ex iaculis, pulvinar nibh vel, pulvinar ipsum. Nam ut mauris fermentum, varius erat non, porta sem.",
  cta = "Lorem ipsum",
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
            <Spacer lg />
            <div className={Style.ctaRow}>
              {/* remember to uncomment to use in your project */}
              {/* <Link to="/" className={Style.cta}>
            {cta}
          </Link> */}
              {/* remember to remove in your project */}
              <a href="/" className={Style.cta}>
                <FiArrowDownRight />
                {cta}
              </a>
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

HeroEleven.propTypes = {
  bgUrl: string.isRequired,
  tag: string.isRequired,
  heading: string.isRequired,
  content: string.isRequired,
  cta: string.isRequired,
};

export default HeroEleven;
