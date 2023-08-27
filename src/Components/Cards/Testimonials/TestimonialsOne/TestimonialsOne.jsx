// ui-components
import ThemeWrapper from "../../../ThemeWrapper/ThemeWrapper";
import Spacer from "../../../../Components/UI-Kit/Spacer/Spacer";
// ui-kit
import { Button } from "@hybris-software/ui-kit";
// libraries
import PropTypes from "prop-types";

// icons
import { BsArrowRight } from "react-icons/bs";

// styling
import Style from "./TestimonialsOne.module.css";

const TestimonialsOne = ({
  icon = <BsArrowRight />,
  heading = "Lorem ipusum",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  button = "Consectetur",
}) => {
  return (
    <ThemeWrapper>
      <div className={Style.testimonial}>
        <div className={Style.icon}>{icon}</div>
        <Spacer sm />
        <h3 className={Style.heading}>{heading}</h3>
        <Spacer sm />
        <p className={Style.content}>{content}</p>
        <Spacer sm />
        <Button className={Style.cta}>
          {button}
          &nbsp;
          <BsArrowRight />
        </Button>
      </div>
    </ThemeWrapper>
  );
};

// prop-types checking
const { string, node } = PropTypes;

TestimonialsOne.propTypes = {
  icon: node.isRequired,
  heading: string.isRequired,
  content: string.isRequired,
  button: string.isRequired,
};

export default TestimonialsOne;
