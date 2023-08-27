// ui-components
import ThemeWrapper from "../../../Components/ThemeWrapper/ThemeWrapper";
import Spacer from "../../../Components/UI-Kit/Spacer/Spacer";
import Feature from "./Components/Feature/Feature";
// ui-kit
import { Row, Col } from "@hybris-software/ui-kit";

// remember to uncomment to use in your project
// // router
// import { Link } from "react-router-dom";

// libraries
import PropTypes from "prop-types";

// data
import { data, columnGap } from "./Data/data";

// imgs
import bgDefault from "../../../Assets/backgrounds/bg_hero_b6.png";

// styling
import Style from "./HeroSix.module.css";

const HeroSix = ({
  bgUrl = bgDefault,
  heading = "LOREM IPSUM SIT AMET?",
  cta = "Lorem ipsum sit",
}) => {
  return (
    <ThemeWrapper>
      <div className={Style.hero}>
        <Spacer lg />
        <h3 className={Style.heading}>{heading}</h3>
        <Spacer lg />
        <Row columnGap={columnGap}>
          <Col className={Style.imageCol} xl={6} lg={7}>
            <div
              className={Style.image}
              style={{ backgroundImage: `url(${bgUrl})` }}
            />
          </Col>
          <Col className={Style.col} xl={6} lg={5}>
            {data.map(({ icon, heading, content }, index) => (
              <Feature
                key={index}
                icon={icon}
                heading={heading}
                content={content}
              />
            ))}
            <Spacer md />
            {/* remember to uncomment to use in your project */}
            {/* <Link to="/" className={Style.cta}>
              {cta}
            </Link> */}
            {/* remember to remove in your project */}
            <a href="/" className={Style.cta}>
              {cta}
            </a>
          </Col>
        </Row>
        <Spacer lg />
      </div>
    </ThemeWrapper>
  );
};

// prop-types checking
const { string } = PropTypes;

HeroSix.propTypes = {
  bgUrl: string.isRequired,
  heading: string.isRequired,
  cta: string.isRequired,
};

export default HeroSix;
