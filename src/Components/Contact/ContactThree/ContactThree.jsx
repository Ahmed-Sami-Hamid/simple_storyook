// components
import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import Spacer from "../../UI-Kit/Spacer/Spacer";
// ui-kit
import { Row, Col } from "@hybris-software/ui-kit";
// libraries
import PropTypes from "prop-types";

// data
import { data, columnGap } from "./Data/data";

// styling
import Style from "./ContactThree.module.css";

const ContactThree = ({
  tag = "Lorem ipsum",
  heading = "Lorem ipsum dolor sit amet!",
}) => {
  return (
    <ThemeWrapper>
      <div className={Style.contact}>
        <span className={Style.tag}>{tag}</span>
        <Spacer xs />
        <h3 className={Style.heading}>{heading}</h3>
        <Spacer h={40} />
        <Row className={Style.socialRow} columnGap={columnGap}>
          {data.map(({ src, href }, index) => (
            <Col className={Style.socialCol} key={index} sm={3} xs={6}>
              <a
                className={Style.social}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={Style.socialIcon}
                  style={{
                    backgroundImage: `url(${src})`,
                  }}
                />
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </ThemeWrapper>
  );
};

// prop-types checking
const { string } = PropTypes;

ContactThree.propTypes = {
  tag: string.isRequired,
  heading: string.isRequired,
};

export default ContactThree;
