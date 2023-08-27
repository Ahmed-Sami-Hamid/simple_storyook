// ui-components
import ThemeWrapper from "../../../Components/ThemeWrapper/ThemeWrapper";
import Spacer from "../../../Components/UI-Kit/Spacer/Spacer";
// ui-kit
import { Row, Col } from "@hybris-software/ui-kit";

// libraries
import PropTypes from "prop-types";

// data
import columnGap from "./Data/data";

// images
import bgDefault from "../../../Assets/backgrounds/bg_hero_b4.png";

// styling
import Style from "./HeroFour.module.css";

const HeroFour = ({
  bgUrl = bgDefault,
  tag = "LOREM IPSUM",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget elit ut quam tempor commodo vel vel leo. Sed a ultrices elit. Cras lacinia facilisis volutpat. Duis tempus ut turpis dapibus auctor. Nullam quis consequat arcu. Nam vel blandit ipsum. Praesent vitae ex ornare, lacinia orci sit amet, maximus elit. Sed pretium ante justo, eu ultricies orci pulvinar id. Integer et molestie tortor. Proin eu condimentum ipsum, eget semper ante. Nulla volutpat, orci at accumsan ornare, tellus arcu interdum nisl, nec tincidunt lacus nibh nec mi.",
}) => {
  return (
    <ThemeWrapper>
      <div className={Style.hero}>
        <Spacer lg />
        <Row columnGap={columnGap}>
          <Col className={Style.col} lg={6}>
            <span className={Style.tag}>{tag}</span>
            <Spacer md />
            <p className={Style.content}>{content}</p>
          </Col>
          <Col className={Style.col} lg={6}>
            <div
              className={Style.image}
              style={{ backgroundImage: `url(${bgUrl})` }}
            />
          </Col>
        </Row>
        <Spacer lg />
      </div>
    </ThemeWrapper>
  );
};

// prop-types checking
const { string } = PropTypes;

HeroFour.propTypes = {
  bgUrl: string.isRequired,
  tag: string.isRequired,
  content: string.isRequired,
};

export default HeroFour;
