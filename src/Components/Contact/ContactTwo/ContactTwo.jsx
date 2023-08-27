// components
import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import Spacer from "../../UI-Kit/Spacer/Spacer";
// ui-kit
import { Row, Col, InputField } from "@hybris-software/ui-kit";
// libraries
import PropTypes from "prop-types";

// remember to uncomment to use in your project
// import { Link } from "react-router-dom";

// data
import columnGap from "./Data/data";

// styling
import Style from "./ContactTwo.module.css";

const ContactTwo = ({
  heading = "Lorem ipsum dolor!",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus magna et ex dignissim posuere.",
  placeholder = "Lorem ipsum sit amet",
  submit = "Lorem",
}) => {
  return (
    <ThemeWrapper>
      <Row className={Style.contact} columnGap={columnGap}>
        <Col className={Style.col} lg={6}>
          <h3 className={Style.heading}>{heading}</h3>
          <Spacer sm />
          <p className={Style.content}>{content}</p>
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
              {submit}
            </a>
          </div>
        </Col>
      </Row>
    </ThemeWrapper>
  );
};

// prop-types checking
const { string } = PropTypes;

ContactTwo.propTypes = {
  heading: string.isRequired,
  content: string.isRequired,
  placeholder: string.isRequired,
  submit: string.isRequired,
};

export default ContactTwo;
