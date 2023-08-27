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
import { columnGap, linearGradient } from "./Data/data";

// icons & images
import { BiChevronRight } from "react-icons/bi";
import bgDefault from "../../../Assets/backgrounds/bg_hero1_b1.png";

// styling
import Style from "./HeroOne.module.css";

const HeroOne = ({
  bgUrl = bgDefault,
  heading = "Lorem Ipsum",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat mauris in dolor accumsan, sed iaculis lorem volutpat. Proin quis velit pretium, venenatis dui in, pharetra magna. Vivamus bibendum mauris a quam auctor pellentesque.",
  main = "Home",
  current = "Service",
}) => {
  return (
    <ThemeWrapper>
      <div
        className={Style.hero}
        style={{
          backgroundImage: `${linearGradient}, url(${bgUrl})`,
        }}
      >
        <Spacer h={70} />
        <Row columnGap={columnGap}>
          <Col lg={8}>
            <h3 className={Style.heading}>{heading}</h3>
            <Spacer sm />
            <p className={Style.content}>{content}</p>
          </Col>
          <Col className={Style.navCol} lg={4}>
            <div className={Style.nav}>
              {/* remember to uncomment to use in your project */}
              {/* <Link to="/" className={Style.navlink}>
            {main}
          </Link> */}
              {/* remember to remove in your project */}
              <a href="/" className={Style.navlink}>
                {main}
              </a>
              <BiChevronRight />
              {/* remember to uncomment to use in your project */}
              {/* <Link href="/" className={Style.navlink}>
            {current}
          </Link> */}
              {/* remember to remove in your project */}
              <a href="/" className={Style.navlink}>
                {current}
              </a>
            </div>
          </Col>
        </Row>
        <Spacer h={80} />
      </div>
    </ThemeWrapper>
  );
};

// prop-types checking
const { string } = PropTypes;

HeroOne.propTypes = {
  bgUrl: string.isRequired,
  heading: string.isRequired,
  content: string.isRequired,
  main: string.isRequired,
  current: string.isRequired,
};

export default HeroOne;
