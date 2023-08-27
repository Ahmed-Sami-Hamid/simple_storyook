// components
import ThemeWrapper from "../../../ThemeWrapper/ThemeWrapper";
import Spacer from "../../../UI-Kit/Spacer/Spacer";
// ui-kit
import { Row, Col } from "@hybris-software/ui-kit";
// libraries
import PropTypes from "prop-types";

// data
import data from "./Data/data";

// styling
import Style from "./PartnersTwo.module.css";

const PartnersTwo = ({ heading = "Lorem Ipsum" }) => {
  return (
    <ThemeWrapper>
      <div className={Style.partners}>
        <Spacer lg />
        <h3 className={Style.heading}>{heading}</h3>
        <Spacer lg />
        <Row>
          {data.map(({ src }, index) => (
            <Col key={index} md={3} sm={6} xs={12}>
              <div
                className={Style.partner}
                style={{ backgroundImage: `url(${src})` }}
              />
            </Col>
          ))}
        </Row>
        <Spacer lg />
      </div>
    </ThemeWrapper>
  );
};

// prop-types checking
const { string } = PropTypes;

PartnersTwo.propTypes = {
  heading: string.isRequired,
};

export default PartnersTwo;
