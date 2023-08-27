// components
import ThemeWrapper from "../../../ThemeWrapper/ThemeWrapper";
import Spacer from "../../../UI-Kit/Spacer/Spacer";
// ui-kit
import { Row, Col } from "@hybris-software/ui-kit";

// data
import data from "./Data/data";

// styling
import Style from "./PartnersOne.module.css";

const PartnersOne = () => {
  return (
    <ThemeWrapper>
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
    </ThemeWrapper>
  );
};

export default PartnersOne;
