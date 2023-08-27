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

// images
import bgDefault from "../../../Assets/backgrounds/bg_hero_b3.png";

// data
import { data, columnGap } from "./Data/data";

// styling
import Style from "./HeroThree.module.css";

const HeroThree = ({
  bgUrl = bgDefault,
  tag = "Lorem Ipsum",
  heading = "Lorem ipsum dolor sit amet, consectetur adipiscing",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat mauris in dolor accumsan, sed iaculis lorem volutpat. Proin quis velit pretium, venenatis dui in, pharetra magna. Vivamus bibendum mauris a quam auctor pellentesque.",
  cta = "Lorem ipsum",
}) => {
  return (
    <ThemeWrapper>
      <div className={Style.hero}>
        <Spacer lg />
        <Row columnGap={columnGap}>
          <Col className={Style.col} xl={5} lg={6} md={12}>
            <div
              className={Style.image}
              style={{ backgroundImage: `url(${bgUrl})` }}
            />
          </Col>
          <Col className={Style.col} xl={7} lg={6} md={12}>
            <span className={Style.tag}>{tag}</span>
            <Spacer sm />
            <h3 className={Style.heading}>{heading}</h3>
            <Spacer md />
            <p className={Style.content}>{content}</p>
            <Spacer lg />
            <ol>
              {data.map(({ num, content }, index) => (
                <li className={Style.listItem} key={index}>
                  <span className={Style.num}>{num}</span>
                  <span>{content}</span>
                </li>
              ))}
            </ol>
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

HeroThree.propTypes = {
  bgUrl: string.isRequired,
  tag: string.isRequired,
  heading: string.isRequired,
  content: string.isRequired,
  cta: string.isRequired,
};

export default HeroThree;
