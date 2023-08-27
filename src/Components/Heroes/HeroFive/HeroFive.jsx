// ui-components
import ThemeWrapper from "../../../Components/ThemeWrapper/ThemeWrapper";
import Spacer from "../../../Components/UI-Kit/Spacer/Spacer";
import Feature from "./Components/Feature/Feature";
// ui-kit
import { Row, Col } from "@hybris-software/ui-kit";

// libraries
import { useEffect, useState } from "react";

// data
import { data, columnGap } from "./Data/data";

// styling
import Style from "./HeroFive.module.css";

const HeroFive = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // automatic slider
  useEffect(() => {
    const autoSlide = setInterval(
      () => setCurrentSlide((currentSlide) => (!currentSlide ? 1 : 0)),
      5000
    );
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <ThemeWrapper>
      <div className={Style.hero}>
        <Spacer lg />
        <Row columnGap={columnGap}>
          <Col className={Style.contentCol} lg={6}>
            {data.map(({ icon, heading, content }, index) => (
              <div key={index} onClick={() => setCurrentSlide(index)}>
                <Feature
                  icon={icon}
                  heading={heading}
                  content={content}
                  current={currentSlide === index}
                />
              </div>
            ))}
          </Col>
          <Col className={Style.imageCol} lg={6}>
            <div
              className={currentSlide ? Style.currentSlide : Style.nextSlide}
            >
              {data.map(({ image }, index) => (
                <div
                  key={index}
                  className={Style.image}
                  style={{ backgroundImage: `url(${image})` }}
                />
              ))}
            </div>
          </Col>
        </Row>
        <Spacer lg />
      </div>
    </ThemeWrapper>
  );
};

export default HeroFive;
