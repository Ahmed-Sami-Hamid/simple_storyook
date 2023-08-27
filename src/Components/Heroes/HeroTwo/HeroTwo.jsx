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

// images
import bgDefault from "../../../Assets/backgrounds/bg_hero_b2.png";
import logoDefault from "../../../Assets/logos/hero_l2.svg";

// styling
import Style from "./HeroTwo.module.css";

const HeroTwo = ({
  bgUrl = bgDefault,
  logoUrl = logoDefault,
  heading = "Lorem Ipsum",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat mauris in dolor accumsan, sed iaculis lorem volutpat. Proin quis velit pretium, venenatis dui in, pharetra magna. Vivamus bibendum mauris a quam auctor pellentesque.",
  cta = "Lorem ipsum",
}) => {
  return (
    <ThemeWrapper>
      <div className={Style.hero}>
        <Spacer lg />
        <Row columnGap={columnGap}>
          <Col className={Style.col} xl={5} lg={6} md={6}>
            <div
              className={Style.image}
              style={{ backgroundImage: `url(${bgUrl})` }}
            />
          </Col>
          <Col className={Style.col} xl={7} lg={6} md={6}>
            <div
              className={Style.tag}
              style={{ backgroundImage: `url(${logoUrl})` }}
            />
            <Spacer md />
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

HeroTwo.propTypes = {
  bgUrl: string.isRequired,
  logoUrl: string.isRequired,
  heading: string.isRequired,
  content: string.isRequired,
  cta: string.isRequired,
};

export default HeroTwo;
