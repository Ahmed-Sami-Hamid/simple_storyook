// components
import ThemeWrapper from "../../../Components/ThemeWrapper/ThemeWrapper";
import Spacer from "../../../Components/UI-Kit/Spacer/Spacer";
import NavLink from "./Components/NavLink/NavLink";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
// ui-kit
import { Row, Col } from "@hybris-software/ui-kit";

// libraries
import { useState } from "react";
import PropTypes from "prop-types";

// data
import { data, columnGap } from "./Data/data";

// images
import logoDefault from "../../../Assets/logos/header1.svg";

// styling
import Style from "./HeaderOne.module.css";

const HeaderOne = ({ logoUrl = logoDefault }) => {
  // navbar drawer state
  const [isActive, setIsActive] = useState(false);

  return (
    <ThemeWrapper>
      {/* Spacer preserving the space of the fixed header 
          so you don't have to 
          remember to calculate the height in your project */}
      <Spacer h={90} />
      <div className={!isActive ? Style.nav : Style.activeNav}>
        <Row className={Style.header} columnGap={columnGap}>
          <Col className={!isActive ? Style.col : Style.activeCol} xs={6}>
            <div
              className={Style.logo}
              style={{ backgroundImage: `url(${logoUrl})` }}
            />
          </Col>
          <Col className={Style.col} xs={6}>
            <div
              className={Style.burger}
              onClick={() => setIsActive(!isActive)}
            >
              <BurgerMenu isActive={isActive} />
            </div>
            <Row
              className={!isActive ? Style.navlist : Style.navlistActive}
              columnGap={columnGap}
            >
              {data.map(({ link, to }, index) => (
                <Col key={index} lg={2.4}>
                  <NavLink link={link} to={to} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </ThemeWrapper>
  );
};

// prop-types checking
const { string } = PropTypes;

HeaderOne.propTypes = {
  logoUrl: string.isRequired,
};

export default HeaderOne;
