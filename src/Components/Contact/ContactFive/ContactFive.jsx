// components
import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
// ui-kit
import { Row, Col, InputField } from "@hybris-software/ui-kit";
// libraries
import PropTypes from "prop-types";

// remember to uncomment to use in your project
// import { Link } from "react-router-dom";

// data
import columnGap from "./Data/data";

// styling
import Style from "./ContactFive.module.css";

const ContactFive = ({
  heading = "Lorem ipsum sit",
  highlight = "Amet",
  placeholder = "Lorem ipsum sit amet",
  cta = "Lorem",
}) => {
  return (
    <ThemeWrapper>
      <Row className={Style.contact} columnGap={columnGap}>
        <Col className={Style.col} lg={6}>
          <h3 className={Style.heading}>
            {heading}
            &nbsp;
            <span className={Style.highlight}>{highlight}</span>
          </h3>
        </Col>
        <Col className={Style.col} lg={6}>
          <div className={Style.input}>
            <InputField placeholder={placeholder} baseClassName={Style.cta} />
            {/* remember to uncomment to use in your project */}
            {/* <Link className={Style.submit} to="/">
              {submit}
            </Link> */}
            {/* remember to remove in your project */}
            <a className={Style.submit} href="/">
              {cta}
            </a>
          </div>
        </Col>
      </Row>
    </ThemeWrapper>
  );
};

// prop-types checking
const { string } = PropTypes;

ContactFive.propTypes = {
  heading: string.isRequired,
  highlight: string.isRequired,
  placeholder: string.isRequired,
  cta: string.isRequired,
};

export default ContactFive;
