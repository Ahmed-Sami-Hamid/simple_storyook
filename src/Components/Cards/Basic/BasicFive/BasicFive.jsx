// components
import Spacer from "../../../../Components/UI-Kit/Spacer/Spacer";
import Social from "./Components/Social/Social";
// ui-kit
import { Row, Col } from "@hybris-software/ui-kit";
// libraries
import PropTypes from "prop-types";

// theme
import ThemeWrapper from "../../../ThemeWrapper/ThemeWrapper";

// data
import { data, columnGap } from "./Data/data";

// images
import bgDefault from "../../../../Assets/avatars/avatar_b5.png";

// styling
import Style from "./BasicFive.module.css";

const BasicFive = ({
  bgUrl = bgDefault,
  name = "John Doe",
  position = "Finance Analyst",
}) => {
  return (
    <ThemeWrapper>
      <div className={Style.basic}>
        <div
          className={Style.cover}
          style={{
            backgroundImage: `url(${bgUrl})`,
          }}
        />
        <Spacer md />
        <h3 className={Style.name}>{name}</h3>
        <Spacer xs />
        <span className={Style.position}>{position}</span>
        <Spacer md />
        <Row className={Style.socialRow} columnGap={columnGap}>
          {data.map(({ socialIcon, socialLink }, index) => (
            <Col className={Style.socialCol} key={index} xs={4}>
              <Social socialIcon={socialIcon} socialLink={socialLink} />
            </Col>
          ))}
        </Row>
        <Spacer md />
      </div>
    </ThemeWrapper>
  );
};

// prop-types checking
const { string } = PropTypes;

BasicFive.propTypes = {
  bgUrl: string.isRequired,
  name: string.isRequired,
  position: string.isRequired,
};

export default BasicFive;
