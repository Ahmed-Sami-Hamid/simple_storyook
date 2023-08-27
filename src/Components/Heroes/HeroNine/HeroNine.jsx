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
import bgDefault from "../../../Assets/backgrounds/bg_hero_b9.png";

// styling
import Style from "./HeroNine.module.css";

const HeroNine = ({
  bgUrl = bgDefault,
  heading = "Consectetur & Adipiscing elit",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at tristique ex, ac blandit metus. Morbi efficitur turpis vitae ultricies hendrerit.",
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
              style={{ backgroundImage: `url(${bgUrl})` }}
            />
          </Col>
          <Col className={Style.col} lg={6}>
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

HeroNine.propTypes = {
  bgUrl: string.isRequired,
  heading: string.isRequired,
  content: string.isRequired,
  cta: string.isRequired,
};

export default HeroNine;
