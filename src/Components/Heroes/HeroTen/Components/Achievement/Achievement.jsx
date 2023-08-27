// ui-components
import ThemeWrapper from "../../../../../Components/ThemeWrapper/ThemeWrapper";
import Spacer from "../../../../../Components/UI-Kit/Spacer/Spacer";
// ui-kit
import { Row, Col } from "@hybris-software/ui-kit";

// libraries
import PropTypes from "prop-types";

// data
import columnGap from "./Data/data";

// styling
import Style from "./Achievement.module.css";

const Achievement = ({ imageUrl, heading, content }) => {
  return (
    <ThemeWrapper>
      <>
        <Row columnGap={columnGap}>
          <Col className={Style.col} xl={2}>
            <div
              className={Style.image}
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          </Col>
          <Col className={Style.col} xl={10}>
            <h3 className={Style.heading}>{heading}</h3>
            <Spacer sm />
            <p className={Style.content}>{content}</p>
          </Col>
        </Row>
      </>
    </ThemeWrapper>
  );
};

// prop-types checking
const { string } = PropTypes;

Achievement.propTypes = {
  imageUrl: string.isRequired,
  heading: string.isRequired,
  content: string.isRequired,
};

export default Achievement;
